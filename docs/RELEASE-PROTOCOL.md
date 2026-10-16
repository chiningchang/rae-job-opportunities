# RAE Job Board release protocol

## Release gate (every Tuesday and Friday)

1. Review full-text posting against substantive Educational Research Methodology (ERM) criteria. Education-college affiliation is a discovery route, never sufficient by itself. Keep uncertain items in Quarantine.
2. Update the private Google Sheets master: Posting Records, RAE Job Opportunities, Posting History, Application Materials. Use stable Posting IDs and canonical URLs.
3. Save and verify source PDFs in the private RAE Job Posting PDFs folder. Keep quarantined PDFs in the separate Excluded / Pending ERM Review subfolder; never include them in analyses.
4. Rebuild **all** public data files together: index.html job arrays; job-context-data.json; salary-data.json (only when the posting actually states a pay figure/description); sponsorship-data.json (including Not stated); collection-materials-data.json; materials-data.json. Keep the label mapping in job-context.js aligned with appointment types.
5. Update the banner date on both index.html and insights.html, plus the bilingual Google Docs collection logs. Record additions, archival decisions, verification dates and sources.
6. Run `node scripts/validate-release.mjs` and resolve every error. GitHub Actions runs the same checks on pushes and pull requests. This validates the **repository data**, not the Google Drive folders or browser rendering.
7. Publish as one GitHub commit after validation; verify the deployed Pages site in desktop and mobile browsers: labels, salary, filter/search/sort, Insights charts, source links and dates. Do not mark the release fully verified until this passes.
8. Record a release status: `data-validated`, `published`, or `browser-verified`. Do not conflate these.

## Important limits

The current CI check does **not** have Google Drive credentials. It cannot automatically verify PDF bytes, folder permissions, private master-sheet rows, quarantine separation, or the bilingual logs. Those remain mandatory manual release-gate steps until a secure, read-only connector or approved export is implemented. Salary entries are intentionally sparse when the source has no pay information; the validator checks their URLs, duplicates and the Stanford regression case rather than requiring an invented salary for every job.

Never publish private PDF contents, private Google Drive identifiers, or credentials to this public repository.
