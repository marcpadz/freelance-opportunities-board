import { cleanText, extractApplication } from '../shared/application.mjs';

const RULES = [
  ['finance', /\b(bookkeep\w*|account(?:s payable|s receivable|ing)|payroll|financial administrat\w*)\b/i],
  ['support', /\b(customer support|customer service|help desk|service desk|support representative|support agent)\b/i],
  ['sales', /\b(sales|lead generation|outbound call\w*|appointment sett\w*|business development|outreach (?:specialist|virtual assistant))\b/i],
  ['audio', /\b(podcast|audio|sound edit\w*|radio produc\w*)\b/i],
  ['video', /\b(video|motion (?:design|graphic)|animat\w*|capcut|videograph\w*)\b/i],
  ['automation', /\b(automation|automations|automate|zapier|make\.com|n8n|gohighlevel|workflow specialist)\b/i],
  ['development', /\b(software|engineer|developer|programmer|coding|full.stack|back.end|front.end|game (?:& app )?develop\w*)\b/i],
  ['web-design', /\b(web (?:design|designer)|website (?:design|designer)|ux|ui|figma|webflow|showit)\b/i],
  ['visual-design', /\b(graphic|visual design|brand design|illustrat\w*|art director|photoshop|designer)\b/i],
  ['social-media', /\b(social media|community manager|community content|instagram|tiktok|facebook ads)\b/i],
  ['journalism', /\b(journalis\w*|reporter|reporting|reported features|investigati\w*|news editor|stringer)\b/i],
  ['content-writing', /\b(copywrit\w*|copy edit\w*|content writ\w*|writer|writing|editor|blog|press release|articles|essays|pitch\w*)\b/i],
  ['brand-marketing', /\b(brand(?:ing)? manager|brand strateg\w*|marketing|communications manager|public relations|pr manager|seo|ppc)\b/i],
  ['ai', /\b(ai|artificial intelligence|data annotat\w*|data evaluat\w*|llm|prompt engineer\w*)\b/i],
  ['grants', /\b(grant|fellowship|research fellow)\b/i],
  ['operations', /\b(executive assistant|administrative|operations|office manager|project manager|transaction coordinator|virtual assistant|\bva\b)\b/i],
];
const CATEGORY = {Journalists:'journalism',Writers:'content-writing',Content:'content-writing',Designers:'visual-design',Video:'video',Audio:'audio',Developers:'development',Grants:'grants',Marketing:'brand-marketing',Automation:'automation',AI:'ai','Social Media':'social-media','Web Design':'web-design',Sales:'sales'};
export function chooseProfile(job, catalog) {
  const title = cleanText(job.title);
  const titleRule = RULES.find(([,pattern]) => pattern.test(title));
  if (titleRule) return {profile:catalog.find(x=>x.id===titleRule[0]),basis:`General ${titleRule[0]} guidance selected from the role words in this listing's title; compare actual duties, level and requirements.`};
  const categoryId = CATEGORY[job.category];
  if (categoryId) return {profile:catalog.find(x=>x.id===categoryId),basis:`General ${job.category} role-family guidance selected from the listing category; it is not a candidate assessment or an employer requirement.`};
  const descriptionRule = RULES.find(([,pattern]) => pattern.test(cleanText(job.description)));
  if (descriptionRule) return {profile:catalog.find(x=>x.id===descriptionRule[0]),basis:'General role-family guidance selected from duty words in the stored listing description. Verify relevance against the full post.'};
  return {profile:null,basis:'The listing has too little role-specific information to suggest equivalent titles confidently. Compare the actual tasks, outputs and requirements.'};
}
const serialize = (items, key, reason) => items.map(x => `${x[key]} | ${x[reason]}`).join('\n');
export function buildBlankEnrichment(job, catalog) {
  if (job.careerGuidance?.mode === 'Custom') return {};
  const patch = {};
  const app = extractApplication({legacy:job.legacyApplication,description:job.description,summary:job.summary,source:job.source,explicit:job.applicationDetails});
  for (const [key,name] of Object.entries({instructions:'Application Instructions',email:'Application Email',recipient:'Application Recipient',url:'Application URL',evidence:'Application Evidence',source:'Application Source'})) {
    if (!cleanText(job.applicationDetails?.[key]) && app[key]) patch[name] = app[key];
  }
  const existing = job.careerGuidance || {};
  if (existing.mode === 'Custom' || existing.mode === 'Hidden') return patch;
  const {profile,basis} = chooseProfile(job,catalog);
  const similar = profile ? serialize(profile.related,'title','reason') : 'Related roles not yet identified | Compare the actual tasks and requirements before judging overlap from a job title.';
  const transferable = profile ? serialize(profile.transferable,'experience','skill') : 'Evidence of relevant work | Match examples of your work to the tasks, tools, outputs and subject knowledge explicitly requested in the original post.';
  if (!cleanText(existing.similarRoles)) patch['Similar Roles'] = similar;
  if (!cleanText(existing.transferableSkills)) patch['Transferable Skills'] = transferable;
  if (!cleanText(existing.basis)) patch['Guidance Basis'] = `${basis}${profile ? ' '+profile.caution : ''}`;
  if (!existing.mode) patch['Guidance Mode'] = 'Auto';
  const isVa = /\b(?:virtual assistant|va)\b/i.test([job.title,job.description].join(' '));
  if (isVa && !cleanText(existing.vaGuidance)) {
    const specialty = profile ? profile.label.toLowerCase() : 'the specialist work actually described in the post';
    patch['VA Guidance'] = `“Virtual assistant” is a broad title, not a single profession. This listing appears to involve ${specialty}. Start with the actual duties, tools and outputs, not the remote-work label. Experience doing comparable work in an office, freelance project or another industry may be relevant. Show evidence of that expertise; check separately for the poster’s communication, availability and remote-work requirements.`;
  }
  return patch;
}
export function pageToEnrichmentInput(page) {
  const p=page.properties;
  const text=name=>(p[name]?.title??p[name]?.rich_text??[]).map(x=>x.plain_text??x.text?.content??'').join('').trim();
  const url=name=>p[name]?.url??'';
  return {title:text('Position'),description:text('Description'),summary:text('Source Details'),source:url('Source URL'),category:p.Category?.select?.name??'',legacyApplication:text('Application'),applicationDetails:{instructions:text('Application Instructions'),email:p['Application Email']?.email??'',recipient:text('Application Recipient'),url:url('Application URL'),evidence:text('Application Evidence'),source:url('Application Source')},careerGuidance:{similarRoles:text('Similar Roles'),transferableSkills:text('Transferable Skills'),vaGuidance:text('VA Guidance'),basis:text('Guidance Basis'),mode:p['Guidance Mode']?.select?.name??''}};
}
export function toNotionProperties(fields) {
  return Object.fromEntries(Object.entries(fields).map(([name,value]) => {
    if (name==='Application Email') return [name,{email:value}];
    if (name==='Application URL'||name==='Application Source') return [name,{url:value}];
    if (name==='Guidance Mode') return [name,{select:{name:value}}];
    const rich_text = [];
    for(let i=0;i<value.length;i+=1900) rich_text.push({type:'text',text:{content:value.slice(i,i+1900)}});
    return [name,{rich_text}];
  }));
}
