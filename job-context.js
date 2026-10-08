'use strict';
window.JobContext = (() => {
  let data = null, pending = null;
  const byUrl = new Map(), byIdentity = new Map();
  const identity = (title, institution) => (title + '|' + institution).toLowerCase().trim();
  const n = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
  function source(url, label) { const a = n('a', '', label); try { const u = new URL(url); if (u.protocol === 'https:' || u.protocol === 'http:') { a.href = u.href; a.target = '_blank'; a.rel = 'noopener noreferrer'; } } catch (_) {} return a; }
  async function load() {
    if (!pending) pending = fetch('job-context-data.json', {cache: 'no-store'}).then(r => { if (!r.ok) throw Error('Context data unavailable'); return r.json(); }).then(d => {
      if (d.version !== 1 || !Array.isArray(d.entries) || !d.reviewedOn) throw Error('Invalid context data');
      data = d;
      d.entries.forEach(e => { byUrl.set(e.url, e); byIdentity.set(identity(e.position, e.institution), e); });
      return d;
    }).catch(e => { pending = null; throw e; });
    return pending;
  }
  function entry(job) { return byUrl.get(job[7]) || byIdentity.get(identity(job[0], job[2])) || null; }
  function badge(job) {
    const type = entry(job)?.appointment.type;
    return ({'Tenure-track': 'Tenure-track', 'Tenure-track or tenured': 'Tenure-track / tenured', 'Non-tenure-track': 'Non-tenure-track', 'Security of employment track': 'Security of employment track', 'Research track (tenure not specified)': 'Research track · tenure unspecified', 'Tenure line (route not specified)': 'Tenure line', 'Not specified': 'Tenure status not stated', 'Not applicable (postdoctoral appointment)': 'Postdoctoral appointment'})[type] || '';
  }
  function appendBadge(root, job) { const label = badge(job); if (label) root.append(n('span', 'jc-appointment-tag', label)); }
  function appointment(e) {
    const type = e?.appointment.type;
    return ({'Tenure-track': 'Tenure-track', 'Tenure-track or tenured': 'Tenure-track / tenured', 'Non-tenure-track': 'Non-tenure-track', 'Security of employment track': 'Security of employment track', 'Research track (tenure not specified)': 'Research track · tenure unspecified', 'Tenure line (route not specified)': 'Tenure line · route unspecified', 'Not applicable (postdoctoral appointment)': 'Postdoctoral appointment'})[type] || 'Not specified / unavailable';
  }
  function research(e) { return ({'Research 1: Very High Spending and Doctorate Production':'R1', 'Research 2: High Spending and Doctorate Production':'R2', 'Research Colleges and Universities':'RCU', 'No research designation':'No research designation'})[e?.institutionContext.research] || e?.institutionContext.research || 'Unable to assess'; }
  function loadStatus(e) {
    const status = e?.teaching.reviewStatus;
    if (status === 'Numeric load stated') return 'Numeric load stated';
    if (status === 'Not stated in reviewed posting' || status === 'No formal teaching load stated (research/postdoc role)') return 'Not stated';
    if (status?.startsWith('Not applicable')) return 'Not applicable';
    return 'Unable to assess';
  }
  function detail(root, job, category) {
    const e = entry(job), box = n('div', 'jc-source-detail');
    root.querySelectorAll('.jc-appointment-tag').forEach(tag => tag.remove());
    if (!e) { box.append(n('p', '', 'Context data has not been reviewed for this posting.')); root.append(box); return; }
    let url, label;
    if (category === 'appointment') {
      box.append(n('p', '', 'Appointment: ' + appointment(e)));
      if (e.appointment.detail) box.append(n('p', '', e.appointment.detail));
      url = e.appointment.evidenceUrl; label = 'Appointment source ↗';
    } else if (category === 'control' || category === 'research') {
      box.append(n('p', '', category === 'control' ? 'Institution: ' + e.institutionContext.control : 'Research designation: ' + research(e) + ' (Carnegie 2025)'));
      url = e.institutionContext.evidenceUrl; label = 'Classification source ↗';
    } else if (category === 'teaching') {
      box.append(n('p', '', 'Teaching load: ' + e.teaching.asStated));
      if (loadStatus(e) === 'Numeric load stated') box.append(n('p', '', 'Unit: ' + e.teaching.unit + ' · Period: ' + e.teaching.period));
      if (e.teaching.notes) box.append(n('p', '', e.teaching.notes));
      url = e.teaching.evidenceUrl; label = 'Teaching-load source ↗';
    }
    if (url) { const sources = n('div', 'jc-sources'); sources.append(source(url, label)); box.append(sources); }
    root.append(box);
  }
  function grouped(rows, key) {
    const groups = new Map(); rows.forEach(x => { const label = key(entry(x.job)); if (!groups.has(label)) groups.set(label, []); groups.get(label).push(x); });
    return [...groups.entries()].sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  }
  function panel(root, title, note, rows, groups, open, palette, category) {
    const section = n('section', 'jc-panel'); section.append(n('h3', '', title), n('p', 'jc-note', note));
    const stack = n('div', 'jc-stack'); stack.setAttribute('aria-hidden', 'true');
    const list = n('div', 'jc-list');
    groups.forEach(([label, matched], i) => {
      const color = palette[i % palette.length], percent = rows.length ? matched.length / rows.length * 100 : 0;
      const part = n('span'); part.style.width = percent + '%'; part.style.background = color; stack.append(part);
      const b = n('button', 'jc-category'); b.type = 'button';
      const key = n('span', 'jc-key'); key.style.background = color;
      b.append(key, n('span', 'jc-label', label), n('strong', '', matched.length + ' · ' + percent.toFixed(1) + '%'));
      b.setAttribute('aria-label', label + ': ' + matched.length + ' of ' + rows.length + ' postings. View list.');
      b.addEventListener('click', () => open(title + ' · ' + label, matched, category)); list.append(b);
    });
    section.append(stack, list); root.append(section); return section;
  }
  function render(root, rows, scope, open, sections = ['appointment','control','research','teaching']) {
    root.replaceChildren();
    root.append(n('p', 'jc-scope', scope));
    if (!data) { root.append(n('p', 'jc-note', 'Context data is temporarily unavailable. Browse the postings for employer details.')); return; }
    if (!rows.length) { root.append(n('p', 'jc-note', 'No postings match this selection.')); return; }
    const grid = n('div', 'jc-grid');
    if (sections.includes('appointment')) panel(grid, 'Appointment Tracks', 'Tracks follow explicit announcements or applicable appointment policies. Rank alone does not establish tenure.', rows, grouped(rows, appointment), open, ['#ba8500','#376c72','#845e85','#766a53','#507d57','#9c5353','#697483','#ababab'], 'appointment');
    if (sections.includes('control')) panel(grid, 'Institution Types', 'Institutional control is linked to the verified employer and campus.', rows, grouped(rows, e => e?.institutionContext.control || 'Unable to assess'), open, ['#376c72','#c89521','#8a8a8a'], 'control');
    if (sections.includes('research')) panel(grid, 'Research Designations', 'Carnegie 2025: R1, R2, RCU or no research designation. RCU means Research Colleges and Universities: institutions with at least $2.5 million in annual research spending that are not designated R1 or R2. These categories do not classify teaching orientation.', rows, grouped(rows, research), open, ['#376c72','#c89521','#845e85','#8a8a8a'], 'research');
    const teaching = sections.includes('teaching') ? panel(grid, 'Teaching Loads', 'Disclosure across all selected postings. Not stated is not zero teaching.', rows, grouped(rows, loadStatus), open, ['#376c72','#a9aaab','#c89521','#845e85'], 'teaching') : null;
    const numeric = rows.filter(x => loadStatus(entry(x.job)) === 'Numeric load stated');
    if (teaching && numeric.length) {
      const more = n('details', 'jc-load-more'); more.append(n('summary', '', 'Explore stated loads · ' + numeric.length + ' posting' + (numeric.length === 1 ? '' : 's')));
      const list = n('div', 'jc-load-list');
      grouped(numeric, e => e.teaching.standardized + ' · ' + e.teaching.unit + ' · ' + e.teaching.period).forEach(([label, matched]) => {
        const b = n('button', 'jc-load-button'); b.type = 'button'; b.append(n('span', '', label), n('strong', '', matched.length + ' posting' + (matched.length === 1 ? '' : 's'))); b.addEventListener('click', () => open('Teaching load · ' + label, matched, 'teaching')); list.append(b);
      });
      more.append(list, n('p', 'jc-small', 'Original units and time periods are retained. Initial reductions, regular loads and WTU figures are not treated as equivalent course counts.')); teaching.append(more);
    }
    root.append(grid, n('p', 'jc-small', 'Context reviewed ' + data.reviewedOn + ' · Click a category to inspect its postings and sources. Counts describe this collection; institution-level classifications may differ from a department’s expectations.'));
  }
  return {load, entry, badge, appendBadge, detail, render};
})();
