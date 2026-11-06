import React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Job } from "../data/jobs";
import { buildJobDetailModel } from "../lib/jobDetail";

export default function JobDetailPage({ job, onBack }: { job: Job; onBack: () => void }) {
  const model = buildJobDetailModel(job);
  const hasBody = Boolean(model.summary || model.responsibilities.length || model.requirements.length || model.applicationInstructions);

  return (
    <main className="job-detail-page">
      <div className="container job-detail-container">
        <button type="button" className="job-detail-back" onClick={onBack}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to all opportunities
        </button>

        <article className="job-detail-article" aria-labelledby="job-title">
          <header className="job-detail-header">
            <h1 id="job-title">{job.title}</h1>
            {model.description && <p className="job-detail-description">{model.description}</p>}
          </header>

          {model.facts.length > 0 && (
            <dl className="job-detail-facts" aria-label="Key facts">
              {model.facts.map(fact => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {hasBody && (
            <section className="job-detail-body" aria-labelledby="listing-details-heading">
              <h2 id="listing-details-heading">Listing details</h2>
              {model.summary && <p className="job-detail-summary">{model.summary}</p>}
              {model.responsibilities.length > 0 && (
                <section className="job-detail-subsection">
                  <h3>Responsibilities</h3>
                  <ul>{model.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
              )}
              {model.requirements.length > 0 && (
                <section className="job-detail-subsection">
                  <h3>Requirements</h3>
                  <ul>{model.requirements.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
              )}
              {model.applicationInstructions && (
                <section className="job-detail-subsection">
                  <h3>How to apply</h3>
                  <p>{model.applicationInstructions}</p>
                </section>
              )}
            </section>
          )}

          {model.action && (
            <div className="job-detail-action">
              <a className="job-detail-primary" href={model.action.href} target="_blank" rel="noopener noreferrer">
                {model.action.label} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
