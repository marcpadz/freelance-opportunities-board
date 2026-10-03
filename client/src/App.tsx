import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  Hash,
  LayoutGrid,
  List,
  Linkedin,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { jobs, coverageNotes, type Job } from "./data/jobs";
import { trpc } from "./lib/trpc";

const newsletterDates = Array.from(new Set(jobs.map((job) => job.date))).sort().reverse();
const categories = Array.from(new Set(jobs.map((job) => job.category))).sort();
const jobTypes = Array.from(new Set(jobs.map((job) => jobType(job)))).sort();
const payBands = [
  { value: "hourly-low", label: "Hourly · under $50" },
  { value: "hourly-mid", label: "Hourly · $50–$100" },
  { value: "hourly-high", label: "Hourly · $100+" },
  { value: "annual-low", label: "Annual · under $50k" },
  { value: "annual-mid", label: "Annual · $50k–$100k" },
  { value: "annual-high", label: "Annual · $100k+" },
  { value: "other", label: "Project / month / other" },
  { value: "unspecified", label: "Pay not specified" },
];
function formatDate(value: string) {
  return new Date(`${value}T12:00:00`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function isLinkedIn(source: string) {
  return source.toLowerCase().includes("linkedin.com");
}

function sourceLabel(job: Job) {
  if (isLinkedIn(job.source)) return "LinkedIn source";
  try {
    return new URL(job.source).hostname.replace(/^www\./, "");
  } catch {
    return "External source";
  }
}

function jobType(job: Job) {
  if (job.type) {
    if (/grant|fellowship/.test(job.type.toLowerCase())) return "Grant / fellowship";
    return job.type;
  }
  const text = `${job.title} ${job.description}`.toLowerCase();
  if (/grant|fellowship|award/.test(text)) return "Grant / fellowship";
  if (/part-time|part time/.test(text)) return "Part-time";
  if (/full-time|full time/.test(text)) return "Full-time";
  if (/freelance/.test(text)) return "Freelance";
  if (/contract/.test(text)) return "Contract";
  if (/hour|\/hour|per hour/.test(text)) return "Hourly";
  return "Opportunity";
}

function jobPay(job: Job) {
  if (job.pay) return job.pay;
  const text = `${job.title} ${job.description}`;
  const parentheticalMatches = Array.from(text.matchAll(/\(([^)]*(?:\$|£|€|CAD|USD|\/hour|\/year|\/month|\/project|\/episode|\/day|\/word)[^)]*)\)/gi));
  if (parentheticalMatches.length) return parentheticalMatches[parentheticalMatches.length - 1][1].trim();
  const directMatch = text.match(/(?:\$|£|€)[\d,.]+(?:k)?(?:\s*[-–]\s*(?:\$|£|€)?[\d,.]+k?)?(?:\s*\/\s*[\w-]+)?/i);
  return directMatch?.[0]?.trim() || "Not specified";
}

function payBand(job: Job) {
  const pay = jobPay(job).toLowerCase();
  if (pay === "not specified") return "unspecified";
  const amountMatch = pay.match(/(?:\$|£|€)\s*([\d,.]+)\s*(k)?/i);
  const amount = amountMatch ? Number(amountMatch[1].replace(/,/g, "")) * (amountMatch[2] ? 1000 : 1) : 0;
  if (/hour/.test(pay)) return amount < 50 ? "hourly-low" : amount < 100 ? "hourly-mid" : "hourly-high";
  if (/year|annual|salary/.test(pay)) return amount < 50000 ? "annual-low" : amount < 100000 ? "annual-mid" : "annual-high";
  return "other";
}

function getSelectedFromHash() {
  const match = window.location.hash.match(/^#job-(\d+)$/);
  return match ? Number(match[1]) : null;
}

function App() {
  const [selected, setSelected] = useState<number | null>(getSelectedFromHash());
  const staticOnly = import.meta.env.VITE_STATIC_ONLY === "true";
  const notionQuery = trpc.jobs.list.useQuery(undefined, { enabled: !staticOnly, staleTime: 60_000, refetchInterval: 300_000 });
  const displayedJobs = staticOnly ? jobs : (notionQuery.data?.connected ? notionQuery.data.jobs : jobs);

  useEffect(() => {
    const onHashChange = () => setSelected(getSelectedFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const openJob = (index: number) => {
    window.location.hash = `job-${index}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToBoard = () => {
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // make sure to consider if you need authentication for certain routes
  return (
    <div className="site-shell">
      <SiteHeader onBoardClick={backToBoard} detail={selected !== null} />
      {selected !== null && displayedJobs[selected] ? (
        <DetailPage job={displayedJobs[selected]} onBack={backToBoard} />
      ) : (
        <BoardPage jobs={displayedJobs} onOpenJob={openJob} />
      )}
      <SiteFooter />
    </div>
  );
}

function SiteHeader({ onBoardClick, detail }: { onBoardClick: () => void; detail: boolean }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={onBoardClick} aria-label="Back to the job board">
          <span className="brand-mark"><Sparkles size={15} strokeWidth={2.4} /></span>
          <span>field notes<span className="brand-dot">.</span></span>
        </button>
        <div className="header-context">
          <span className="header-rule" />
          <span>{detail ? "opportunity detail" : "freelance opportunities"}</span>
        </div>
        <button className="header-board-button" onClick={onBoardClick}>
          <BriefcaseBusiness size={15} />
          <span>All listings</span>
        </button>
      </div>
    </header>
  );
}

function BoardPage({ jobs: displayedJobs, onOpenJob }: { jobs: Job[]; onOpenJob: (index: number) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [payFilter, setPayFilter] = useState("");
  const [sort, setSort] = useState("newest");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const searchRef = useRef<HTMLInputElement>(null);
  const newsletterDates = Array.from(new Set(displayedJobs.map((job) => job.date))).sort().reverse();
  const categories = Array.from(new Set(displayedJobs.map((job) => job.category))).sort();
  const jobTypes = Array.from(new Set(displayedJobs.map((job) => jobType(job)))).sort();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = displayedJobs
      .map((job, index) => ({ job, index }))
      .filter(({ job }) => {
        const haystack = `${job.title} ${job.description} ${job.category} ${job.newsletterSubject}`.toLowerCase();
        return (
          (!normalizedQuery || haystack.includes(normalizedQuery)) &&
          (!category || job.category === category) &&
          (!date || job.date === date) &&
          (!typeFilter || jobType(job) === typeFilter) &&
          (!payFilter || payBand(job) === payFilter)
        );
      });

    return filtered.sort((a, b) => {
      if (sort === "title-az") return a.job.title.localeCompare(b.job.title);
      if (sort === "title-za") return b.job.title.localeCompare(a.job.title);
      if (sort === "category") return `${a.job.category}${a.job.title}`.localeCompare(`${b.job.category}${b.job.title}`);
      return b.job.date.localeCompare(a.job.date) || a.job.title.localeCompare(b.job.title);
    });
  }, [category, date, displayedJobs, payFilter, query, sort, typeFilter]);

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setDate("");
    setTypeFilter("");
    setPayFilter("");
    setSort("newest");
  };

  const hasFilters = Boolean(query || category || date || typeFilter || payFilter);

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />September 2026 archive</div>
            <h1>Find work that<br /><em>fits the way</em> you think.</h1>
            <p className="hero-lede">A hand-organized field guide to creative opportunities, fellowships, and freelance roles from the five latest newsletters.</p>
            <div className="hero-actions">
              <a href="#listings" className="primary-button">Browse the archive <ArrowUpRight size={16} /></a>
              <span className="hero-hint"><kbd>/</kbd> to search</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card art-card-back"><span>MAKE<br />ROOM</span></div>
            <div className="art-card art-card-front"><span className="art-card-kicker">FIELD NOTE 05</span><span className="art-card-title">Good work<br /><em>is out there.</em></span><span className="art-card-footer">FREELANCE / 2026</span></div>
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
          </div>
        </div>
        <div className="hero-ticker"><div className="container ticker-inner"><span>JOURNALISM</span><span>WRITING</span><span>DESIGN</span><span>VIDEO</span><span>AUDIO</span><span>DEVELOPMENT</span><span>GRANTS</span></div></div>
      </section>

      <section className="container board-section" id="listings">
        <div className="section-intro">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />The archive</div>
            <h2>Opportunities worth a closer look.</h2>
          </div>
          <p>Browse by discipline, newsletter date, or whatever phrase is on your mind. Each card opens a dedicated source view.</p>
        </div>

        <div className="coverage-note">
          <div className="note-icon"><BookOpen size={17} /></div>
          <div><strong>Two issues are member-only.</strong> The Sep 17 and Sep 10 newsletters exposed only their teasers in Gmail, so individual listings from those issues are not included here.</div>
          <div className="coverage-links">{coverageNotes.map((note) => <a key={note.date} href={note.source} target="_blank" rel="noreferrer">{formatDate(note.date)} issue <ArrowUpRight size={14} /></a>)}</div>
        </div>

        <div className="filter-bar" aria-label="Filter listings">
          <div className="search-field"><Search size={17} /><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roles, skills, places…" aria-label="Search roles, skills, places" /><kbd>/</kbd></div>
          <SelectControl label="Category" value={category} onChange={setCategory} options={categories} />
          <SelectControl label="Issue date" value={date} onChange={setDate} options={newsletterDates} dateOptions />
          <SelectControl label="Type" value={typeFilter} onChange={setTypeFilter} options={jobTypes} />
          <SelectControl label="Pay range" value={payFilter} onChange={setPayFilter} options={payBands} optionObjects />
          <SelectControl label="Sort" value={sort} onChange={setSort} options={["newest", "title-az", "title-za", "category"]} sortOptions />
          {hasFilters && <button className="clear-button" onClick={clearFilters}><X size={15} />Clear</button>}
        </div>

        <div className="results-meta"><span><strong>{visibleJobs.length}</strong> of {displayedJobs.length} opportunities</span><div className="results-actions"><span className="results-tip"><SlidersHorizontal size={14} /> Refine your search to make the list yours.</span><div className="view-toggle" aria-label="Choose listing view"><button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")} aria-label="Compact list view"><List size={15} /></button><button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")} aria-label="Card grid view"><LayoutGrid size={15} /></button></div></div></div>
        {visibleJobs.length > 0 ? (
          <>
            {viewMode === "list" && <div className="list-header"><span>Position</span><span>Source</span><span>Type</span><span>Pay</span><span>Issue</span></div>}
            <div className={`job-grid ${viewMode === "list" ? "list-view" : ""}`}>
            {visibleJobs.map(({ job, index }, cardIndex) => <JobCard key={`${job.title}-${index}`} job={job} index={index} onOpen={onOpenJob} cardIndex={cardIndex} viewMode={viewMode} />)}
            </div>
          </>
        ) : (
          <div className="empty-state"><div className="empty-icon"><Search size={23} /></div><h3>No matches in this patch.</h3><p>Try a wider search or clear one of the filters.</p><button className="secondary-button" onClick={clearFilters}>Reset filters</button></div>
        )}
      </section>
    </main>
  );
}

function SelectControl({ label, value, onChange, options, dateOptions, sortOptions, optionObjects }: { label: string; value: string; onChange: (value: string) => void; options: string[] | { value: string; label: string }[]; dateOptions?: boolean; sortOptions?: boolean; optionObjects?: boolean }) {
  const labelFor = (option: string) => {
    if (dateOptions) return formatDate(option);
    if (sortOptions) return ({ newest: "Newest issue", "title-az": "Title A–Z", "title-za": "Title Z–A", category: "Category" } as Record<string, string>)[option] || option;
    return option;
  };
  return <label className="select-field"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="">All {label.toLowerCase()}s</option>{options.map((option) => { const optionValue = typeof option === "string" ? option : option.value; const optionLabel = optionObjects && typeof option !== "string" ? option.label : labelFor(optionValue); return <option key={optionValue} value={optionValue}>{optionLabel}</option>; })}</select><ChevronDown size={15} /></label>;
}

function JobCard({ job, index, onOpen, cardIndex, viewMode }: { job: Job; index: number; onOpen: (index: number) => void; cardIndex: number; viewMode: "list" | "grid" }) {
  if (viewMode === "list") {
    return <div className="job-card list-row" role="button" tabIndex={0} onClick={() => onOpen(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onOpen(index); }} style={{ "--card-index": cardIndex } as CSSProperties}>
      <div className="job-list-position"><span className="category-pill">{job.category}</span><h3>{job.title}</h3><p>{job.description}</p></div>
      <a className="job-list-source" href={job.source || job.newsletter} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><span>{isLinkedIn(job.source) && <Linkedin size={13} />}{sourceLabel(job)}</span><ExternalLink size={13} /></a>
      <span className="job-list-type"><span className="table-label">Type</span>{jobType(job)}</span>
      <span className="job-list-pay"><span className="table-label">Pay</span>{jobPay(job)}</span>
      <span className="job-list-date"><span className="table-label">Issue</span>{formatDate(job.date)}</span>
      <span className="list-arrow"><ArrowUpRight size={17} /></span>
    </div>;
  }
  return <button className="job-card" onClick={() => onOpen(index)} style={{ "--card-index": cardIndex } as CSSProperties}>
    <div className="card-topline"><span className="category-pill">{job.category}</span><span className="card-arrow"><ArrowUpRight size={17} /></span></div>
    <h3>{job.title}</h3>
    <p>{job.description}</p>
    <div className="card-footer"><span><CalendarDays size={13} />{formatDate(job.date)}</span><span className="source-label">{isLinkedIn(job.source) && <Linkedin size={13} />}{sourceLabel(job)}</span></div>
  </button>;
}

function DetailPage({ job, onBack }: { job: Job; onBack: () => void }) {
  const details = job.sourceDetails;
  const hasSourceDetails = Boolean(job.verified && details && (details.summary || details.responsibilities?.length || details.requirements?.length || details.location || details.compensation || details.deadline || details.application));
  return <main className="detail-page"><div className="container detail-container"><button className="back-button" onClick={onBack}><ArrowLeft size={16} /> Back to all opportunities</button><div className="detail-layout"><article className="detail-main"><div className="eyebrow"><span className="eyebrow-line" />{job.category}</div><h1>{job.title}</h1><p className="detail-description">{job.description}</p><div className="detail-facts"><span><CalendarDays size={15} />From the {formatDate(job.date)} issue</span><span><Hash size={15} />{job.embed?.platform || sourceLabel(job)}</span></div>{hasSourceDetails && <SourceDetailsBlock details={details!} sourceTitle={job.sourceTitle} />}{job.media?.length ? <MediaGallery media={job.media} /> : null}<div className="detail-rule" /><div className="detail-source-block"><p className="small-label">Original source</p><a className="source-link" href={job.source || job.newsletter} target="_blank" rel="noreferrer">Open the source listing <ArrowUpRight size={16} /></a><p className="source-url">{job.source || job.newsletter}</p>{job.sourceNotes && <p className="source-note">{job.sourceNotes}</p>}</div>{job.embed?.platform && job.embed.platform !== "Web page" && <SocialEmbed embed={job.embed} title={job.title} />}</article><aside className="detail-aside"><div className="aside-label">FIELD NOTE</div><div className="aside-number">05<span>/26</span></div><p>{job.verified ? "Details below were extracted from the linked source page. Check the original source for the latest availability and instructions." : "Listings are reproduced from the newsletter text. The source could not be fully verified automatically, so check the original listing for availability and instructions."}</p>{job.newsletter && <a href={job.newsletter} target="_blank" rel="noreferrer" className="newsletter-link"><BookOpen size={16} />Read the full newsletter <ExternalLink size={14} /></a>}</aside></div></div></main>;
}
function SourceDetailsBlock({ details, sourceTitle }: { details: NonNullable<Job["sourceDetails"]>; sourceTitle?: string }) {
  return <section className="source-details"><div className="source-details-heading"><div><p className="small-label">Verified source details</p><h2>{sourceTitle || "What the source says"}</h2></div><span className="verified-chip">Source checked</span></div><p className="source-summary">{details.summary}</p><div className="source-fact-grid">{details.location && <div><span>Location</span><strong>{details.location}</strong></div>}{details.compensation && <div><span>Compensation</span><strong>{details.compensation}</strong></div>}{details.deadline && <div><span>Deadline</span><strong>{details.deadline}</strong></div>}{details.application && <div><span>How to apply</span><strong>{details.application.startsWith("http") ? <a href={details.application} target="_blank" rel="noreferrer">Application link <ExternalLink size={12} /></a> : details.application}</strong></div>}</div>{details.responsibilities?.length ? <div className="source-list"><h3>Responsibilities</h3><ul>{details.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}{details.requirements?.length ? <div className="source-list"><h3>Requirements / eligibility</h3><ul>{details.requirements.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}</section>;
}
function MediaGallery({ media }: { media: NonNullable<Job["media"]> }) {
  return <section className="media-gallery"><p className="small-label">Media from source</p><div className="media-grid">{media.map((item) => item.type === "video" ? <video key={item.url} src={item.url} controls preload="metadata" aria-label={item.alt} /> : <a key={item.url} href={item.url} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt} loading="lazy" /></a>)}</div></section>;
}
function SocialEmbed({ embed, title }: { embed: NonNullable<Job["embed"]>; title: string }) {
  const source = embed.url || "";
  const cleanSource = source.split("?")[0];
  const frameSource = embed.platform === "Threads" ? `${cleanSource}/embed` : embed.embedUrl || source;
  const isX = embed.platform === "X / Twitter";
  useEffect(() => {
    if (!isX) return;
    const scriptId = "twitter-widgets-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      const twitterWindow = window as typeof window & { twttr?: { widgets?: { load?: () => void } } };
      twitterWindow.twttr?.widgets?.load?.();
      return;
    }
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, [isX]);
  return <section className="linkedin-section social-section"><div className="embed-heading"><span><Hash size={17} /> {embed.platform || "Social"} source post</span>{source && <a href={source} target="_blank" rel="noreferrer">Open directly <ExternalLink size={14} /></a>}</div>{isX ? <div className="social-blockquote"><blockquote className="twitter-tweet"><a href={source}>View this post on X</a></blockquote><div className="embed-fallback">If X blocks the widget, <a href={source} target="_blank" rel="noreferrer">open the post directly</a>.</div></div> : frameSource ? <div className="linkedin-frame"><iframe src={frameSource} title={`${embed.platform || "Social"} post about ${title}`} loading="lazy" allow="fullscreen" /><div className="embed-fallback">If {embed.platform || "this platform"} blocks the embedded view, <a href={source} target="_blank" rel="noreferrer">open the post directly</a>.</div></div> : <p className="embed-fallback standalone">This platform does not expose a stable embed URL. <a href={source} target="_blank" rel="noreferrer">Open the source post directly</a>.</p>}</section>;
}

function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><div><div className="brand footer-brand"><span className="brand-mark"><Sparkles size={15} /></span><span>field notes<span className="brand-dot">.</span></span></div><p>Good work is out there. Keep looking.</p></div><div className="footer-meta"><span>Compiled from 5 newsletters</span><span>September 2026</span></div></div></footer>;
}

export default App;
