// Run with: node scripts/validate-release.mjs
// Zero dependencies. Checks the published source files before a release.
import fs from 'node:fs';
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const errors = [], warnings = [];
const fail = s => errors.push(s);
const warn = s => warnings.push(s);
const html = read('index.html'), insights = read('insights.html'), script = read('job-context.js');
const extract = name => {
  const marker = 'const ' + name + '=';
  const at = html.indexOf(marker);
  if (at < 0) throw Error('Missing '+marker);
  const from = at + marker.length;
  const end = html.indexOf(';', from);
  return JSON.parse(html.slice(from, end));
};
const active = extract('jobs'), archived = extract('archiveJobs'), jobs = [...active, ...archived];
const context = json('job-context-data.json'), visa = json('sponsorship-data.json');
const salary = json('salary-data.json'), materials = json('collection-materials-data.json');
const summary = json('materials-data.json');
const url = j => j[7];
const allUrls = jobs.map(url);
const unique = a => new Set(a).size === a.length;
if (!unique(allUrls)) fail('Duplicate URLs in board');
if (!unique(context.entries.map(e=>e.id))) fail('Duplicate context IDs');
if (!unique(visa.entries.map(e=>e.id))) fail('Duplicate visa IDs');
if (!unique(materials.entries.map(e=>e.id))) fail('Duplicate material IDs');
if (jobs.length !== context.entries.length) fail('Context count differs from board');
if (jobs.length !== visa.entries.length) fail('Visa count differs from board');
if (jobs.length !== materials.entries.length) fail('Materials count differs from board');
const ctx = new Map(context.entries.map(e=>[e.url,e]));
const sponsorship = new Map(visa.entries.map(e=>[e.url,e]));
const mats = new Map(materials.entries.map(e=>[e.url,e]));
const pay = new Map(salary.entries.map(e=>[e.url,e]));
const badgeStart = script.indexOf('function badge(job)');
const badgeEnd = script.indexOf('function appendBadge', badgeStart);
const badgeCode = script.slice(badgeStart,badgeEnd);
for (const job of jobs) {
  const u = url(job), title = job[0];
  if (!u || !/^https?:\/\//.test(u)) fail('Invalid URL: '+title);
  const c = ctx.get(u), v = sponsorship.get(u), m = mats.get(u);
  if (!c) fail('Missing context: '+title);
  if (!v) fail('Missing visa: '+title);
  if (!m) fail('Missing materials coverage: '+title);
  if (c && !c.appointment?.type) fail('Missing appointment type: '+title);
  if (c && !badgeCode.includes("'"+c.appointment.type+"':")) fail('Badge mapping missing for '+c.appointment.type+': '+title);
  if (v && !v.status) fail('Missing visa status: '+title);
}
for (const [label,entries] of [['context',context.entries],['visa',visa.entries],['materials',materials.entries],['salary',salary.entries]]) {
  for (const e of entries) if (!allUrls.includes(e.url)) fail('Orphan '+label+' record: '+e.url);
}
if (!unique(salary.entries.map(e=>e.url))) fail('Duplicate salary URLs');
if (!summary.views || !summary.categories) fail('Materials summary malformed');
if (!insights.includes('Board updated October 16, 2026')) warn('Insights date differs from Oct 16 release');
if (!html.includes('Board updated October 16, 2026')) warn('Homepage date differs from Oct 16 release');
if (!pay.has('https://careers.insidehighered.com/job/3560305/assessment-and-program-evaluation-analyst/')) fail('Stanford salary missing');
if (pay.get('https://careers.insidehighered.com/job/3560305/assessment-and-program-evaluation-analyst/')?.amount !== '$140,000–$145,000') fail('Stanford salary mismatch');
console.log(JSON.stringify({active:active.length,archived:archived.length,context:context.entries.length,visa:visa.entries.length,materials:materials.entries.length,salary:salary.entries.length,warnings,errors},null,2));
if (errors.length) process.exitCode = 1;
