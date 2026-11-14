const EMPTY = /^(?:not (?:specified|provided|available)|unknown|unspecified|n\/?a|none|[-–—])\.?$/i;
export function cleanText(value) {
  const text = typeof value === 'string' ? value.trim() : '';
  return EMPTY.test(text) ? '' : text;
}
export function safeUrl(value) {
  const text = cleanText(value);
  if (!text || /[\r\n]/.test(text)) return '';
  try {
    const url = new URL(text);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? text : '';
  } catch { return ''; }
}
export function safeEmail(value) {
  const text = cleanText(value).replace(/^mailto:/i, '').split('?')[0];
  return /^[A-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(text) ? text : '';
}
const INTENT = /\b(?:apply|submit|send|email|request this project|register|registration|save a spot)\b|\bpitch (?:me|us|to|at)\b|\bapplication(?:s)? (?:form|via|to|at)\b/i;
const NOISE = /\b(?:unsubscribe|newsletter subscription|privacy policy|support team|technical support|cookie policy)\b/i;
function sentences(text) {
  return text.split(/\n+|(?<=[.!?])\s+(?=[A-Z])/).map(x => x.trim()).filter(Boolean);
}
function applicationUrl(url) {
  const valid = safeUrl(url);
  if (!valid) return '';
  const parsed = new URL(valid);
  if (/(?:^|\.)(?:x\.com|twitter\.com|bsky\.app|linkedin\.com|threads\.net|threads\.com|facebook\.com|instagram\.com)$/i.test(parsed.hostname)) return '';
  return valid;
}
function conciseInstructions(value) {
  const text = cleanText(value);
  const match = text.match(/\b(?:email|send|submit|apply|request this project|register|save a spot)\b|\bpitch (?:me|us|to|at)\b/i);
  if (!match || !match.index) return text;
  const prefix = text.slice(0, match.index);
  // Retain actual submission requirements that appear before the application verb.
  if (/\b(subject|resume|résumé|cv|cover letter|portfolio|clips|attachments?|samples)\b/i.test(prefix)) return text;
  return text.slice(match.index).trim();
}
/** Extract only application cues already present in a stored original-source copy. Never infer a destination. */
export function extractApplication({ legacy = '', description = '', summary = '', source = '', explicit = {}, preserveInstructions = false } = {}) {
  legacy = cleanText(legacy);
  const rawEmail = safeEmail(legacy);
  const rawUrl = safeUrl(legacy);
  const explicitInstructions = cleanText(explicit.instructions);
  const candidates = legacy && !rawUrl
    ? [legacy]
    : sentences([description, summary].filter(Boolean).join('\n')).filter(line => INTENT.test(line) && !NOISE.test(line));
  const evidenceLine = candidates.find(line => /@/.test(line)) || candidates.find(line => /https?:\/\//.test(line)) || candidates.find(line => INTENT.test(line)) || '';
  const fullInstructions = explicitInstructions || (rawEmail ? '' : evidenceLine);
  let instructions = preserveInstructions ? fullInstructions : conciseInstructions(fullInstructions);
  if (/^(?:javascript|data|vbscript):/i.test(instructions)) instructions = '';
  const emailContext = [explicitInstructions, ...candidates].join('\n');
  const foundEmails = Array.from(emailContext.matchAll(/[A-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)).map(match => safeEmail(match[0])).filter(Boolean);
  const email = safeEmail(explicit.email) || rawEmail || foundEmails[0] || '';
  const emails = [...new Set([email, ...foundEmails].filter(Boolean))];
  let url = safeUrl(explicit.url);
  if (!url && rawUrl && rawUrl.replace(/\/$/, '') !== safeUrl(source).replace(/\/$/, '')) url = applicationUrl(rawUrl);
  if (!url) {
    for (const candidate of candidates) {
      const match = candidate.match(/(?:apply|submit|request this project|project request|pitch form|registration|register|save a spot)[^\n]{0,180}?(https?:\/\/[^\s<>"']+)/i);
      if (match) {
        const possible = applicationUrl(match[1].replace(/[),.;!?]+$/, ''));
        if (possible) { url = possible; break; }
      }
    }
  }
  let recipient = cleanText(explicit.recipient);
  if (!recipient && instructions) {
    const match = instructions.match(/\b(?:send|submit|email)\b[^\n@]{0,80}?\bto\s+((?:the\s+)?(?:assigning editor|editorial team|hiring manager|recruiting team|recruiter|editor))\b/i);
    if (match) recipient = match[1];
  }
  const extracted = Boolean(!explicitInstructions && (evidenceLine || rawEmail || url));
  const evidence = cleanText(explicit.evidence) || (extracted ? (legacy || evidenceLine) : '');
  const evidenceSource = safeUrl(explicit.source) || (evidence ? safeUrl(source) : '');
  if (!preserveInstructions && email && new RegExp('^Email\\s+' + email.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + '[.!]?$', 'i').test(instructions)) instructions = '';
  return { instructions, email, emails, recipient, url, evidence, source: evidenceSource, hasDetails: Boolean(instructions || email || recipient || url) };
}
