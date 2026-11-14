import type { Job } from "../data/jobs";
import { cleanText, extractApplication, safeUrl } from "../../../shared/application.mjs";

function provided(value?: string) {
  const text = cleanText(value);
  return /^(?:null|undefined|opportunity)\.?$/i.test(text) ? "" : text;
}
function content(value?: string) {
  return provided(value)
    .replace(/\bSynced from (?:the )?Notion (?:headless )?database(?: at build time)?\.?/gi, "")
    .replace(/Metadata and structured data extracted from the source page\.?/gi, "")
    .trim();
}
function comparable(value: string) { return value.replace(/\s+/g, " ").trim().toLowerCase(); }
function shortDescription(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= 220) return clean;
  const excerpt = clean.slice(0, 217);
  const lastSpace = excerpt.lastIndexOf(" ");
  return `${excerpt.slice(0, lastSpace > 160 ? lastSpace : excerpt.length).trimEnd()}…`;
}
function guidanceLines(text?: string) {
  return content(text).split(/\n+/).map(line => {
    const cleaned = line.trim().replace(/^[-•]\s*/, "");
    const split = cleaned.indexOf("|");
    return split < 0 ? { title: cleaned, reason: "" } : { title: cleaned.slice(0, split).trim(), reason: cleaned.slice(split + 1).trim() };
  }).filter(item => item.title);
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

  const source = safeUrl(job.source) || safeUrl(job.newsletter);
  const manualApplication = job.careerGuidance?.mode === "Custom";
  const applicationDetails = extractApplication({ legacy: manualApplication ? "" : details?.application, description: manualApplication ? "" : fullDescription, summary: manualApplication ? "" : sourceSummary, source, explicit: job.applicationDetails, preserveInstructions: manualApplication });
  const explicitApplicationUrl = Boolean(safeUrl(job.applicationDetails?.url));
  const distinctApplicationUrl = applicationDetails.url && (explicitApplicationUrl || applicationDetails.url.replace(/\/$/, "") !== source.replace(/\/$/, ""));
  const action = distinctApplicationUrl
    ? { label: "Apply", href: applicationDetails.url }
    : applicationDetails.email
      ? { label: "Apply", href: `mailto:${applicationDetails.email}` }
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
  const applicationInstructions = applicationDetails.instructions;
  // Do not print identical application-only source copy again in the listing body.
  if (summary && comparable(summary) === comparable(applicationInstructions)) summary = "";
  const guidance = job.careerGuidance;
  const career = {
    relatedRoles: guidanceLines(guidance?.similarRoles),
    transferableSkills: guidanceLines(guidance?.transferableSkills).map(item => ({ experience: item.title, skill: item.reason })),
    vaGuidance: content(guidance?.vaGuidance),
    basis: content(guidance?.basis),
    hidden: guidance?.mode === "Hidden",
  };
  return { description, summary, facts, responsibilities, requirements, applicationInstructions, applicationDetails, career, action };
}
