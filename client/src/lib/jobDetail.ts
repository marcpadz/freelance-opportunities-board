import type { Job } from "../data/jobs";

function provided(value?: string) {
  const text = value?.trim() ?? "";
  return /^(?:not (?:specified|provided|available)|unspecified|unknown|n\/?a|none|null|undefined|opportunity|[-–—])\.?$/i.test(text) ? "" : text;
}

function content(value?: string) {
  return provided(value)
    .replace(/\bSynced from (?:the )?Notion (?:headless )?database(?: at build time)?\.?/gi, "")
    .replace(/Metadata and structured data extracted from the source page\.?/gi, "")
    .trim();
}

function comparable(value: string) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function shortDescription(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= 220) return clean;
  const excerpt = clean.slice(0, 217);
  const lastSpace = excerpt.lastIndexOf(" ");
  return `${excerpt.slice(0, lastSpace > 160 ? lastSpace : excerpt.length).trimEnd()}…`;
}

function safeLink(value?: string) {
  const text = value?.trim() ?? "";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) return `mailto:${text}`;
  try {
    const url = new URL(text);
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? text : "";
  } catch {
    return "";
  }
}

export function buildJobDetailModel(job: Job) {
  const details = job.sourceDetails;
  const fullDescription = content(job.description);
  const description = shortDescription(fullDescription);
  const sourceSummary = content(details?.summary);
  let summary = sourceSummary || (fullDescription.length > 220 ? fullDescription : "");
  if (comparable(summary) === comparable(description)) summary = "";

  const facts = [
    { label: "Type", value: provided(job.type) },
    { label: "Pay", value: provided(job.pay) || provided(details?.compensation) },
    { label: "Location", value: provided(details?.location) },
    { label: "Deadline", value: provided(details?.deadline) },
  ].filter(fact => fact.value);

  const source = safeLink(job.source) || safeLink(job.newsletter);
  const application = provided(details?.application);
  const applicationLink = safeLink(application);
  const originalTarget = source.replace(/\/$/, "");
  const isApplication = Boolean(applicationLink && applicationLink.replace(/\/$/, "") !== originalTarget);
  const action = isApplication
    ? { label: "Apply", href: applicationLink }
    : source ? { label: "View original post", href: source } : null;

  const seen = new Set<string>();
  const uniqueItems = (items?: string[]) => (items ?? []).map(content).filter(item => {
    const key = comparable(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const responsibilities = uniqueItems(details?.responsibilities);
  const requirements = uniqueItems(details?.requirements);
  const applicationInstructions = !applicationLink && !/^\s*(?:javascript|data|vbscript):/i.test(application) && !comparable(summary).includes(comparable(application))
    ? content(application)
    : "";

  return { description, summary, facts, responsibilities, requirements, applicationInstructions, action };
}
