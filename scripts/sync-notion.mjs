import { readFile, writeFile } from "node:fs/promises";

const token = process.env.NOTION_API_TOKEN;
const databaseId = "3eaa198a-6ad6-8130-992f-dc88084d1f11";
const dataPath = new URL("../client/src/data/jobs.ts", import.meta.url);

if (!token) throw new Error("NOTION_API_TOKEN is required for the static snapshot build");

async function notionQuery(body) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Notion API ${response.status}: ${(await response.text()).slice(0, 300)}`);
  return response.json();
}

function text(property) {
  if (!property) return "";
  return (property.title ?? property.rich_text ?? []).map((item) => item.plain_text ?? item.text?.content ?? "").join("").trim();
}
function select(property) { return property?.select?.name ?? property?.status?.name ?? ""; }
function url(property) { return property?.url ?? ""; }
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
    media,
    embed: { supported: Boolean(embedUrl), platform, url: source, embedUrl },
    sourceNotes: "Synced from the Notion headless database at build time.",
    type: select(prop(p, "Type")),
    pay,
  };
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
const header = source.slice(0, source.indexOf("export const jobs: Job[] = ") + "export const jobs: Job[] = ".length);
const suffix = source.slice(markerIndex);
await writeFile(dataPath, `${header}\n${JSON.stringify(jobs, null, 2)};\n${suffix}`);
console.log(`Synced ${jobs.length} opportunities from Notion into ${dataPath.pathname}`);
