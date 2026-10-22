# Educational Research Methodology Academic Jobs

A curated, regularly updated job board of U.S.-based academic, postdoctoral, and research opportunities across the broad spectrum of educational research methodology—including quantitative methods, measurement, evaluation, educational data science, and AI-supported research design.

The collection supports students, alumni, and colleagues exploring faculty, postdoctoral, research scientist, methodologist, and other research-focused positions, including opportunities relevant to Virginia Commonwealth University’s Research, Assessment, and Evaluation (RAE) program, Advanced Educational Statistics Certificate, and CENTROID Applied Machine Learning Lab.

**Live job board:** https://chiningchang.github.io/rae-job-opportunities/

**Job board last updated:** October 20, 2026

## About

A curated list of U.S. academic and research positions—spanning faculty, postdoc, and research scientist roles—aligned with the methodological focus of VCU’s RAE program, Advanced Educational Statistics Certificate, and Centroid Lab. Designed for students, alumni, and peers seeking methodology-driven careers across academia and research.

## Search Areas

Postings are organized into seven overlapping areas:

- Measurement, Psychometrics, and Assessment
- Statistical Theory and Quantitative Methodologies
- Qualitative Methodologies
- Multiple and Mixed Methodologies
- Evaluation
- Critical / Equity
- AI in Education

Selecting an area on the job board or Insights page reveals common subcategories based on the relevance terms recorded for postings. Examples include quantitative and qualitative research design, Bayesian methods, simulation, missing data, causal inference, SEM, multilevel / HLM, longitudinal methods, and learning analytics. A posting can be represented in more than one area. Network Analysis is a quantitative-methods subcategory covering explicit network, social network, and organizational network analysis. Generic networking or references to networks alone do not trigger this category. Specific source terminology and verification limitations are retained.

## Search and Update Process

A deep search is scheduled **every Tuesday and Friday at 2:00 AM Eastern Time**. Listings are reviewed for methodological fit, duplication, availability, and link accessibility. This curated search is broad but not exhaustive.

## Sources & Verification

Opportunities are identified from publicly available academic, professional, and employer career listings. When available, links point to the hiring institution’s original posting.

## Archive

Closed, expired, removed, or otherwise no-longer-verifiable opportunities are preserved in a separate **Archive** rather than permanently deleted. Archived records retain their original **First Shared** date and include **Last Verified** and **Status** information. Archived jobs do not count toward active opportunity totals or receive NEW indicators.

## Data Notes

**First Shared** records the date a position was first added to this job board, not necessarily the employer’s posting date. Deadlines are reported only when they can be verified. **Open until filled** is used only when the posting explicitly indicates that status.

## Job Market Insights

The [Job Market Insights dashboard](https://chiningchang.github.io/rae-job-opportunities/insights.html) helps readers explore locations, fields, roles, stated application materials, available pay, and posting-stated visa sponsorship information. Current interactive charts follow the selected active-posting filters; academic-year summaries include active and archived postings. Areas can overlap, map locations may be approximate, and pay, application-material, or visa-sponsorship information may be unavailable or unreported for some postings. No stated sponsorship policy does not establish that an employer will refuse sponsorship; a generic visa statement does not establish H-1B support. Applicants should confirm details with the hiring institution.

## Design Baseline and Automated Update Safeguards (October 8, 2026)

**Status:** The current published visual design is the approved baseline. Preserve it during all scheduled Tuesday/Friday job-posting updates. The Git history records the design changes; this section documents the operational rules.

### Approved navigation and reporting structure

- Primary navigation: compact **Browse Job Postings** and **Job Market Insights** text buttons. No oversized icon cards or subtitles in the site header. The active page has a restrained gold accent.
- Insights secondary navigation: two distinct selectable cards, **Current Market Snapshot** (active postings and responsive filters) and **Annual Market Report** (academic-year active + archived collection). Keep their mobile layouts and accessible tab behavior.
- Annual report: preserve its 10 chapters, navigation, academic-year selector, charts, verified statistics, descriptions, and drill-down interactions. Compensation, Visa Sponsorship, and Application Materials use noun-based chart headings.
- Preserve all reviewed methodology summaries, categories/subcategories, institutional-context panels, and source/verification caveats. Do not replace verified data with invented or placeholder values.

### Scheduled posting-update contract

1. **Data-only by default.** Refresh validated job records, statuses, first-shared/last-verified dates, and supporting verified data files only. Do not overwrite or regenerate `index.html`, `insights.html`, `job-context.js`, or `job-context.css` during routine posting updates.
2. **No structural changes without review.** Changes to HTML/CSS/JS, chart logic, labels, annual-report chapters, or navigation require a separate, explicitly reviewed design/code change, not an incidental job-update run.
3. **Preserve history.** Keep archived postings, stable identifiers, original First Shared dates, and accurate NEW flags. Do not count archived postings as active. Update the board's visible update date only after a successful, verified refresh.
4. **Verification first.** Check original employer URLs and evidence before changing deadlines, salaries, visa sponsorship, teaching loads, application materials, or institutional designations. Missing disclosure is not a negative finding.
   - **Appointment badge completeness.** For every newly added or updated posting, verify that its appointment type is represented by an existing display label in `job-context.js` and that the tag appears on the Browse Job Postings page. Distinguish tenure-track, tenured, non-tenure-track, postdoctoral/research, and unverified tenure status; do not infer tenure from academic rank. Missing or unverified status must never be silently hidden. If a new classification lacks a supported label, flag it for a separately reviewed code correction before declaring the release complete; do not modify protected presentation scripts as part of a routine data refresh.
5. **Pre-publication checks.** Confirm that job data parses; counts and archive transitions are plausible; no records are silently dropped; the current dashboard and annual report load; annual-year filtering, charts, navigation, and mobile layout remain functional. Review the changed-file list: a routine run should not change presentation files.
6. **Failure handling.** If validation fails or unexpected presentation files are modified, do not publish that update. Preserve the last working version, inspect the diff, and report the problem.
7. **Audit trail.** Record each run's timestamp (Eastern Time), data sources/search scope, added/updated/archived counts, verification exceptions, files changed, validation result, and commit SHA.

### PDF completeness gate (added October 16, 2026)

Every newly added or substantively changed posting must have a source-body comparison before its PDF is labeled complete. Website and Master List summaries are separate products and must never be substituted for the archived announcement.

1. Prefer the employer's specific official announcement. If only a full secondary copy is obtainable, identify that actual source and label it as secondary; do not claim the employer's full page was verified.
2. Preserve the source announcement verbatim and in order. Reflowed fonts, line wrapping and pagination are acceptable; summarization, paraphrase, translation, omissions and invented additions are not. Include separate tables, sidebars and expanded posting sections: responsibilities, required/preferred qualifications, pay/benefits, appointment/start dates, review/closing dates, all application documents and reference stages, work authorization and sponsorship, and other posting conditions. Preserve announcement link destinations. Navigation, advertising, unrelated recommendations and platform-only application forms may be excluded.
3. Prefer the official Download PDF, Print Job or Print Preview when available; otherwise preserve the complete webpage or explicitly labeled verbatim reflowed text. Record Posting ID, actual source URL and capture time in America/New_York. Distinguish publisher PDFs, webpage images, verbatim reflowed archives, secondary copies and summaries.
4. Compare text extracted from every PDF page with the complete captured source body, allowing only layout whitespace/line-break/hyphenation differences. Verify words, numbers and order, independently check the critical fields above, render every page for clipping/overlays/blank pages, and read the stored Drive file back. Title, first-page appearance, page count or keyword spot checks alone cannot certify completeness.
5. Mark a PDF body-matched/complete only after these checks pass. For inaccessible, removed or partial sources, retain a valid historical copy and record the exact pending/unverified limitation. Never reconstruct a purported original from snippets, an AI summary or Master List. Revisit pending captures on later runs.
6. Preserve prior versions when the source changes. Synchronize verified corrections to the public list, both Insights scopes, Master List/Application Materials, PDF tracking and the four bilingual log/methods documents. Keep quarantined records separate and retain existing eligibility and design rules. Report PDF created/updated/body-matched/pending counts and distinguish matching a recorded secondary source from verifying the official employer announcement.

**Important limitation:** These requirements are configured as instructions for the existing ChatGPT update tasks; they are not repository-enforced guarantees. Each run must execute and document the checks. This source-archive work does not require a custom GitHub Actions capture workflow.

### October 8, 2026 visual design log

- Reorganized Insights into Current Market Snapshot and the 10-chapter Annual Market Report, separating appointment tracks, institutional context, and teaching loads.
- Added prominent two-card switching within Insights, with mobile-responsive stacking and active selection state.
- Standardized Compensation, Visa Sponsorship, and Application Materials chart headings as descriptive noun phrases.
- Refined primary navigation on both pages to compact text-only buttons with subtle active-page gold highlighting after reviewing the mobile appearance.
- Confirmed the current design as the baseline for future data refreshes; routine automation should not alter layout, navigation, charts, or explanatory text.

## Feedback

Visitors can [suggest a missing job posting](https://docs.google.com/forms/d/e/1FAIpQLSevJ-PMzYgU2aDbi0kT7EfaAevPUZllQALj64qMbINh5SLQlQ/viewform) using a short public Google Form. Only the posting URL is required; methodological context and an email address are optional. Suggestions enter a private review queue and are screened for U.S. scope, substantive ERM relevance, duplication, and availability before inclusion. The form does not automatically publish suggestions, and contact details and response records are not public.

Suggestions for additional job sources, search terms, position types, or other improvements are welcome.

**Dr. Nick Chang**  
Virginia Commonwealth University  
Email: changc10@vcu.edu

## Disclaimer

**This is an independently maintained informational resource and is not an official Virginia Commonwealth University website.**

This job board summarizes publicly available information and does not reproduce full job advertisements. Listings are identified and curated through an AI-assisted search process and may contain errors, omissions, outdated information, or changes made by employers after an update. The resource is not affiliated with or endorsed by hiring institutions or job platforms. Inclusion of a position does not constitute endorsement by Virginia Commonwealth University, the RAE program, the Advanced Educational Statistics Certificate, CENTROID Applied Machine Learning Lab, or Nick Chang.

Applicants are responsible for verifying position availability, eligibility requirements, deadlines, and all application details directly with the hiring institution.


## Appointment and Institutional Context

The board displays appointment-track tags where supported by explicit posting language or applicable official appointment policy. Insights provides a collapsible context dashboard for active postings, following the existing role, method and location filters. The academic-year collection includes the same statistics for active and archived postings.

Context covers appointment tracks, public/private institutional control, Carnegie 2025 research designations (R1, R2, RCU and no designation), and teaching-load disclosure. Categories are clickable to inspect the corresponding postings and evidence. Teaching loads retain their stated units, periods and initial reductions; missing statements are not treated as zero. Institutional designations do not establish a department’s teaching expectations. These facts describe the curated collection, not the national market.


Institution-type labels use a controlled vocabulary: `Public`, `Private nonprofit`, and `Not verified`. Normalize equivalent nonprofit labels such as `Private not-for-profit` and `Private non-profit` to `Private nonprofit` in current records and public context data before publishing; retain original evidence wording and historical snapshots.

Public context metadata is stored in `job-context-data.json`; it contains limited factual metadata and paraphrases, never private source PDFs or Google Drive references. The private Master List retains the fuller evidence record. Context review dates are separate from job-board release dates.
