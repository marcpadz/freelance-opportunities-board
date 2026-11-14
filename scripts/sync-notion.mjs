import { readFile, writeFile } from "node:fs/promises";

const token = process.env.NOTION_API_TOKEN;
const databaseId = "3eaa198a-6ad6-8130-992f-dc88084d1f11";
const dataPath = new URL("../client/src/data/jobs.ts", import.meta.url);

if (!token) throw new Error("NOTION_API_TOKEN is required for the static snapshot build");

async function notionQuery(body) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(60_000),
    });
    if (response.ok) return response.json();
    if (response.status === 429 || response.status >= 500) {
      const delay = Math.max(Number(response.headers.get("retry-after") || 0) * 1000, (attempt + 1) * 1000);
      await new Promise(resolve => setTimeout(resolve, delay));
      continue;
    }
    throw new Error(`Notion API ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  throw new Error("Notion snapshot retries exhausted; the previous snapshot is left unchanged.");
}

function text(property) {
  if (!property) return "";
  return (property.title ?? property.rich_text ?? []).map((item) => item.plain_text ?? item.text?.content ?? "").join("").trim();
}
function select(property) { return property?.select?.name ?? property?.status?.name ?? ""; }
function url(property) { return property?.url ?? ""; }
function email(property) { return property?.email ?? ""; }
function date(property) { return property?.date?.start ?? ""; }
function prop(properties, name) { return properties[name]; }

function mapPage(page) {
  const p = page.properties;
  const source = url(prop(p, "Source URL")) || url(prop(p, "Newsletter URL"));
  const platform = select(prop(p, "Source Platform"));
  const embedUrl = url(prop(p, "Embed URL"));
  const pay = text(prop(p, "Pay"));
  const sourceDetails = text(prop(p, "Source Details"));
  const media = text(prop(p, "Media URLs")).split(/\n+/).map((value) => value.trim()).filter(Boolean).map((value) => ({ type: "image", url: value, alt: "Media from source" }));
  const applicationDetails = {
    instructions: text(prop(p, "Application Instructions")),
    email: email(prop(p, "Application Email")),
    recipient: text(prop(p, "Application Recipient")),
    url: url(prop(p, "Application URL")),
    evidence: text(prop(p, "Application Evidence")),
    source: url(prop(p, "Application Source")),
  };
  const careerGuidance = {
    similarRoles: text(prop(p, "Similar Roles")),
    transferableSkills: text(prop(p, "Transferable Skills")),
    vaGuidance: text(prop(p, "VA Guidance")),
    mode: select(prop(p, "Guidance Mode")),
    basis: text(prop(p, "Guidance Basis")),
  };
  return {
    title: text(prop(p, "Position")) || "Untitled opportunity",
    description: text(prop(p, "Description")),
    category: select(prop(p, "Category")) || "Other",
    date: date(prop(p, "Issue Date")),
    source,
    newsletter: url(prop(p, "Newsletter URL")),
    newsletterSubject: "",
    sourceTitle: "",
    sourceStatus: select(prop(p, "Status")) || "Active",
    verified: Boolean(prop(p, "Verified")?.checkbox),
    sourceDetails: { summary: sourceDetails, responsibilities: [], requirements: [], location: text(prop(p, "Location")), compensation: pay, deadline: text(prop(p, "Deadline")), application: text(prop(p, "Application")) },
    applicationDetails,
    careerGuidance,
    media,
    embed: { supported: Boolean(embedUrl), platform, url: source, embedUrl },
    sourceNotes: "Synced from the Notion headless database at build time.",
    type: select(prop(p, "Type")),
    pay,
  };
}

function priorSourceOrder(source) {
  const jobsStart = source.indexOf("export const jobs: Job[] = ");
  const coverageStart = source.indexOf("export const coverageNotes");
  if (jobsStart < 0 || coverageStart < 0 || coverageStart <= jobsStart) return new Map();

  const order = new Map();
  const jobsSource = source.slice(jobsStart, coverageStart);
  const sourcePattern = /^\s*"source"\s*:\s*("(?:\\.|[^"\\])*")/gm;
  let match;
  let index = 0;
  while ((match = sourcePattern.exec(jobsSource))) {
    try {
      order.set(JSON.parse(match[1]), index++);
    } catch {
      // Keep syncing even if a legacy snapshot contains an invalid source literal.
    }
  }
  return order;
}

const pages = [];
let cursor;
do {
  const body = { page_size: 100, ...(cursor ? { start_cursor: cursor } : {}), sorts: [{ property: "Issue Date", direction: "descending" }] };
  const response = await notionQuery(body);
  pages.push(...response.results);
  cursor = response.has_more ? response.next_cursor : undefined;
} while (cursor);

const jobs = pages.map(mapPage).filter((job) => job.title && job.source);
const source = await readFile(dataPath, "utf8");
const marker = "export const coverageNotes";
const markerIndex = source.indexOf(marker);
if (markerIndex < 0) throw new Error("Could not locate coverageNotes export in jobs.ts");
const jobsExport = "export const jobs: Job[] = ";
const jobsIndex = source.indexOf(jobsExport);
if (jobsIndex < 0 || jobsIndex >= markerIndex) throw new Error("Could not locate jobs export in jobs.ts");
const header = source.slice(0, jobsIndex + jobsExport.length);
const suffix = source.slice(markerIndex);
const previousOrder = priorSourceOrder(source);
jobs.sort((a, b) => {
  const aIndex = previousOrder.get(a.source) ?? Number.MAX_SAFE_INTEGER;
  const bIndex = previousOrder.get(b.source) ?? Number.MAX_SAFE_INTEGER;
  return aIndex - bIndex || b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
});
await writeFile(dataPath, `${header}${JSON.stringify(jobs, null, 2)};\n${suffix}`);
console.log(`Synced ${jobs.length} opportunities from Notion into ${dataPath.pathname}`);
