import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { extractApplication } from '../shared/application.mjs';
import { buildBlankEnrichment, chooseProfile, toNotionProperties } from './enrichment-core.mjs';
const catalog=JSON.parse(readFileSync(new URL('./role-guidance.json',import.meta.url),'utf8'));

test('does not guess email, employer form or recipient from unrelated content',()=>{
  const result=extractApplication({summary:'Within needs a freelance pitch deck designer. Read our newsletter.',source:'https://example.com/job'});
  assert.equal(result.hasDetails,false);
  assert.equal(extractApplication({legacy:'https://bsky.app/profile/person/post/123',source:'https://bsky.app/profile/person/post/123'}).url,'');
});
test('extracts only stated application destinations and retains multiple emails',()=>{
  const result=extractApplication({legacy:'Send pitches to pitches@example.com and editor@example.org with two clips.',source:'https://example.com/job'});
  assert.equal(result.email,'pitches@example.com');
  assert.deepEqual(result.emails,['pitches@example.com','editor@example.org']);
  assert.equal(result.source,'https://example.com/job');
  assert.equal(result.evidence,'Send pitches to pitches@example.com and editor@example.org with two clips.');
  const form=extractApplication({legacy:'Submit via pitch form: https://docs.google.com/forms/d/e/123/viewform.',source:'https://example.com/job'});
  assert.equal(form.url,'https://docs.google.com/forms/d/e/123/viewform');
});
test('rejects unsafe destinations, account credentials and header injection',()=>{
  for(const url of ['javascript:alert(1)','data:text/html,bad','https://user:secret@example.com','https://example.com\nInjected']) assert.equal(extractApplication({explicit:{url}}).url,'');
  assert.equal(extractApplication({explicit:{email:'editor@example.com\nBcc: bad@example.org'}}).email,'');
});
test('matches the actual specialization before broad virtual-assistant wording',()=>{
  for(const [title,id] of [['Bookkeeping VA','finance'],['Video editor and virtual assistant','video'],['GoHighLevel VA – Outbound Calling','sales'],['Branding Manager','brand-marketing'],['Social Media Virtual Assistant','social-media']]) assert.equal(chooseProfile({title},catalog).profile.id,id);
});
test('preserves nonempty editorial fields and Custom or Hidden modes',()=>{
  const job={title:'Branding Manager',applicationDetails:{instructions:'Use our new application route'},careerGuidance:{similarRoles:'Custom title | Custom explanation',transferableSkills:'My experience | My skill',basis:'Manually reviewed'}};
  const patch=buildBlankEnrichment(job,catalog);
  assert.equal(patch['Similar Roles'],undefined);assert.equal(patch['Transferable Skills'],undefined);assert.equal(patch['Guidance Basis'],undefined);assert.equal(patch['Application Instructions'],undefined);
  assert.deepEqual(buildBlankEnrichment({...job,careerGuidance:{mode:'Custom'}},catalog),{});
  const hidden=buildBlankEnrichment({...job,careerGuidance:{mode:'Hidden'}},catalog);
  assert.equal(hidden['Similar Roles'],undefined);
});
test('a second enrichment run is idempotent',()=>{
  const job={title:'Bookkeeping virtual assistant',legacyApplication:'Send CV to hiring@example.org',source:'https://example.org/job'};
  const first=buildBlankEnrichment(job,catalog);
  assert.ok(first['VA Guidance']);assert.ok(first['Similar Roles']);
  const next={...job,applicationDetails:{instructions:first['Application Instructions'],email:first['Application Email'],recipient:first['Application Recipient'],url:first['Application URL'],evidence:first['Application Evidence'],source:first['Application Source']},careerGuidance:{similarRoles:first['Similar Roles'],transferableSkills:first['Transferable Skills'],vaGuidance:first['VA Guidance'],basis:first['Guidance Basis'],mode:'Auto'}};
  assert.deepEqual(buildBlankEnrichment(next,catalog),{});
  assert.equal(toNotionProperties({'Application Email':'hiring@example.org'})['Application Email'].email,'hiring@example.org');
});
