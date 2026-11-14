import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { buildBlankEnrichment, pageToEnrichmentInput, toNotionProperties } from './enrichment-core.mjs';

const DATABASE_ID='3eaa198a-6ad6-8130-992f-dc88084d1f11';
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
let nextRequest=0;
async function rateLimit() {
  const slot=Math.max(Date.now(),nextRequest);
  nextRequest=slot+420;
  await sleep(Math.max(0,slot-Date.now()));
}
async function request(token,path,method='GET',body) {
  for(let attempt=0;attempt<6;attempt++) {
    await rateLimit();
    let response;
    try {
      response=await fetch(`https://api.notion.com/v1${path}`,{method,headers:{Authorization:`Bearer ${token}`,'Notion-Version':'2022-06-28','Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(60_000)});
    } catch(error) {
      if(attempt===5) throw new Error(`Notion connection failed for ${path}`);
      await sleep(1000*(attempt+1));continue;
    }
    if(response.ok) return response.json();
    if(response.status===429||response.status>=500) {
      await sleep(Math.max(Number(response.headers.get('retry-after')||0)*1000,1000*(attempt+1))); continue;
    }
    throw new Error(`Notion ${response.status} for ${path}: ${(await response.text()).slice(0,300)}`);
  }
  throw new Error(`Notion retries exhausted for ${path}`);
}
export async function enrichNotion({input,report,dryRun=false}={}) {
  const token=process.env.NOTION_API_TOKEN;
  if(!token&&!dryRun) throw new Error('NOTION_API_TOKEN is required server-side; never add it to client code.');
  const catalog=JSON.parse(await readFile(new URL('./role-guidance.json',import.meta.url),'utf8'));
  let pages=[];
  if(input) pages=JSON.parse(await readFile(input,'utf8'));
  else {
    let cursor;
    do {
      const data=await request(token,`/databases/${DATABASE_ID}/query`,'POST',{page_size:100,...(cursor?{start_cursor:cursor}:{})});
      pages.push(...data.results);
      cursor=data.has_more?data.next_cursor:undefined;
      console.log(`Read ${pages.length} persisted opportunities`);
    } while(cursor);
  }
  const planned=pages.map(page=>({id:page.id,fields:buildBlankEnrichment(pageToEnrichmentInput(page),catalog)})).filter(item=>Object.keys(item.fields).length);
  const stats={total:pages.length,planned:planned.length,updated:0,unchanged:pages.length-planned.length,applicationDetails:0,guidance:0,vaGuidance:0,failed:[],dryRun};
  console.log(`Enrichment plan: ${planned.length} updates; ${stats.unchanged} unchanged. Existing fields are preserved.`);
  let index=0;
  await Promise.all(Array.from({length:3},async()=>{
    while(index<planned.length) {
      const item=planned[index++];
      try {
        if(!dryRun) await request(token,`/pages/${item.id}`,'PATCH',{properties:toNotionProperties(item.fields)});
        stats.updated++;
        if(Object.keys(item.fields).some(name=>name.startsWith('Application '))) stats.applicationDetails++;
        if(item.fields['Similar Roles']||item.fields['Transferable Skills']) stats.guidance++;
        if(item.fields['VA Guidance']) stats.vaGuidance++;
      } catch(error) {stats.failed.push({id:item.id,error:error.message});}
      if((stats.updated+stats.failed.length)%50===0) console.log(`Processed ${stats.updated+stats.failed.length}/${planned.length}: ${stats.updated} saved, ${stats.failed.length} errors`);
    }
  }));
  if(report) await writeFile(report,JSON.stringify(stats,null,2)+'\n');
  console.log(JSON.stringify(stats));
  if(stats.failed.length) throw new Error(`Failed to enrich ${stats.failed.length} opportunities; successful updates are retained. Re-run to retry only blank fields.`);
  return stats;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href) {
  const args=process.argv.slice(2);
  const arg=name=>args.includes(name)?args[args.indexOf(name)+1]:undefined;
  await enrichNotion({input:arg('--input'),report:arg('--report'),dryRun:args.includes('--dry-run')});
}
