import React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Job } from "../data/jobs";
import { buildJobDetailModel } from "../lib/jobDetail";

type ApplicationDetails = {
  instructions: string;
  email: string;
  recipient: string;
  url: string;
  evidence: string;
  source: string;
  hasDetails: boolean;
};

type CareerGuidance = {
  relatedRoles: Array<{ title: string; reason: string }>;
  transferableSkills: Array<{ experience: string; skill: string }>;
  vaGuidance: string;
  basis: string;
  hidden: boolean;
};

type JobDetailModel = ReturnType<typeof buildJobDetailModel> & {
  applicationDetails?: Partial<ApplicationDetails>;
  career?: Partial<CareerGuidance>;
};

const EMPTY_APPLICATION_DETAILS: ApplicationDetails = {
  instructions: "",
  email: "",
  recipient: "",
  url: "",
  evidence: "",
  source: "",
  hasDetails: false,
};

const EMPTY_CAREER_GUIDANCE: CareerGuidance = {
  relatedRoles: [],
  transferableSkills: [],
  vaGuidance: "",
  basis: "",
  hidden: false,
};

function safeHref(value?: string) {
  const text = value?.trim() ?? "";
  if (!text || /[\r\n]/.test(text)) return "";

  try {
    const url = new URL(text);
    return ["https:", "http:", "mailto:"].includes(url.protocol) && !url.username && !url.password ? text : "";
  } catch {
    return "";
  }
}

function emailHref(value?: string) {
  const email = value?.trim() ?? "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${email}` : "";
}

function sameDestination(first: string, second: string) {
  return Boolean(first && second && first.replace(/\/+$/, "") === second.replace(/\/+$/, ""));
}

function isCopiedSource(evidence?: string, source?: string) {
  const evidenceText = evidence?.trim() ?? "";
  const sourceText = source?.trim() ?? "";
  return Boolean(evidenceText && sourceText) || /\bcop(?:ied|y)\b/i.test(sourceText);
}

export default function JobDetailPage({ job, onBack }: { job: Job; onBack: () => void }) {
  const model = buildJobDetailModel(job) as JobDetailModel;
  const applicationDetails = { ...EMPTY_APPLICATION_DETAILS, ...model.applicationDetails };
  const career = { ...EMPTY_CAREER_GUIDANCE, ...model.career };
  const hasBody = Boolean(model.summary || model.responsibilities.length || model.requirements.length);

  const applicationInstructions = applicationDetails.instructions.trim() || model.applicationInstructions;
  const applicationEmail = applicationDetails.email.trim();
  const applicationEmailHref = emailHref(applicationEmail);
  const applicationEmails = model.applicationDetails?.emails ?? (applicationEmailHref ? [applicationEmail] : []);
  const applicationUrl = safeHref(applicationDetails.url);
  const actionHref = safeHref(model.action?.href);
  const sourceHref = safeHref(applicationDetails.source);
  const evidenceSourceHref = sourceHref && !sameDestination(sourceHref, actionHref) ? sourceHref : "";
  const hasApplicationDetails = model.applicationDetails
    ? applicationDetails.hasDetails
    : Boolean(applicationInstructions || applicationEmailHref || applicationDetails.recipient.trim() || applicationUrl);
  const hasApplicationSource = Boolean(applicationDetails.evidence.trim() || evidenceSourceHref);
  const sourceWasCopied = isCopiedSource(applicationDetails.evidence, applicationDetails.source);
  const relatedRoles = career.relatedRoles ?? [];
  const transferableSkills = career.transferableSkills ?? [];

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
            </section>
          )}

          <section className="job-detail-body job-detail-application" aria-labelledby="how-to-apply-heading">
            <h2 id="how-to-apply-heading">How to apply</h2>
            {hasApplicationDetails ? (
              <div className="job-detail-application-content">
                {applicationInstructions && <p>{applicationInstructions}</p>}
                {applicationEmails.length > 0 && (
                  <p className="job-detail-contact-line">
                    <span className="job-detail-label">Email</span>{" "}
                    {applicationEmails.map((email, index) => <React.Fragment key={email}>{index > 0 && ", "}<a href={emailHref(email)}>{email}</a></React.Fragment>)}
                  </p>
                )}
                {applicationDetails.recipient.trim() && (
                  <p className="job-detail-contact-line">
                    <span className="job-detail-label">Recipient</span>{" "}
                    {applicationDetails.recipient.trim()}
                  </p>
                )}
                {applicationUrl && !sameDestination(applicationUrl, actionHref) && (
                  <p className="job-detail-contact-line">
                    <span className="job-detail-label">Employer form</span>{" "}
                    <a href={applicationUrl} target="_blank" rel="noopener noreferrer">{applicationDetails.url.trim()}</a>
                  </p>
                )}
              </div>
            ) : (
              <p>Application instructions aren’t available.</p>
            )}
            {sourceWasCopied && (
              <p className="job-detail-application-note">
                These details were copied from a source; check the original for the latest availability.
              </p>
            )}
            {hasApplicationSource && (
              <details className="job-detail-disclosure">
                <summary>Application source</summary>
                {applicationDetails.evidence.trim() && <p>{applicationDetails.evidence.trim()}</p>}
                {evidenceSourceHref && (
                  <a href={evidenceSourceHref} target="_blank" rel="noopener noreferrer">View evidence source</a>
                )}
              </details>
            )}

            {actionHref && model.action && (
              <div className="job-detail-action">
                <a className="job-detail-primary" href={actionHref} target="_blank" rel="noopener noreferrer">
                  {model.action.label} <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            )}
          </section>

          {!career.hidden && (
            <>
              <section className="job-detail-body job-detail-career" aria-labelledby="similar-roles-heading">
                <h2 id="similar-roles-heading">Similar roles</h2>
                <p className="job-detail-guidance-note">Career guidance, not employer requirements.</p>
                {relatedRoles.length > 0 ? (
                  <ul className="job-detail-guidance-list">
                    {relatedRoles.map((role, index) => (
                      <li key={`${role.title}-${index}`}>
                        <strong>{role.title}</strong>
                        <span>{role.reason}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Compare the actual tasks and requirements; this listing does not yet have specific related-role guidance.</p>
                )}
                {relatedRoles.length > 0 && (
                  <p className="job-detail-overlap-note">
                    Overlap can suggest a direction, but it is not proof that you meet this listing’s requirements.
                  </p>
                )}
              </section>

              <section className="job-detail-body job-detail-career" aria-labelledby="transferable-skills-heading">
                <h2 id="transferable-skills-heading">Transferable skills</h2>
                <p className="job-detail-guidance-note">Career guidance, not employer requirements.</p>
                {transferableSkills.length > 0 ? (
                  <ul className="job-detail-guidance-list">
                    {transferableSkills.map((skill, index) => (
                      <li key={`${skill.experience}-${index}`}>
                        <strong>{skill.experience}</strong>
                        <span>{skill.skill}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No transferable-skill guidance is available for this listing yet.</p>
                )}
                {career.vaGuidance.trim() && (
                  <div className="job-detail-va-guidance">
                    <h3>For virtual-assistant roles</h3>
                    <p>{career.vaGuidance.trim()}</p>
                  </div>
                )}
                {career.basis.trim() && (
                  <details className="job-detail-disclosure">
                    <summary>About this guidance</summary>
                    <p>{career.basis.trim()}</p>
                  </details>
                )}
              </section>
            </>
          )}
        </article>
      </div>
    </main>
  );
}
