# Discovery, Verification, and Missed-Job Regression Protocol

**Proposed October 9, 2026 — review branch only.** This protocol supplements, and never overrides, the approved October 8, 2026 design baseline in README.md. It does not itself schedule an update, authorize a release, or change the live board.

## Goals

Reduce false exclusions of broadly titled education faculty openings, retain unreadable candidates for later review, and document why every candidate was included, excluded, deferred, or deduplicated. Do not infer absent facts.

## Tuesday/Friday discovery (2:00 AM America/New_York)

Keep the existing schedule in its actual scheduler. Search AERA, HERC, HigherEdJobs, Chronicle, relevant university job sites and other academic sources. Include broad titles such as `Assistant Professor of Education`, `Educational Studies`, `Learning Sciences`, and `Research Faculty` alongside methodology-specific searches. Search for quantitative, measurement/psychometrics, SEM, multilevel, longitudinal, causal, qualitative, mixed methods, evaluation, critical/equity, learning sciences, and AI in education.

A generic job title is neither sufficient for inclusion nor a reason for exclusion. Inspect full duties, teaching, qualifications, research areas, and departmental context for substantive methodological relevance.

## Candidate states (private working audit; not public board statuses)

- `Discovered`: potential match, full text not yet checked.
- `Pending Verification`: source blocked, incomplete, ambiguous, or unavailable; do not silently discard.
- `Verified Eligible`: specific posting and substantive methodology fit verified.
- `Excluded`: documented reason and supporting evidence.
- `Duplicate`: matched to an existing posting ID or another candidate for the same requisition.

These are candidate-processing states only. The public board continues to use its existing Active and Archive rules.

## Verification fallback

1. Try direct retrieval of the specific discovery page.
2. If unavailable, try a normal browser **only where the executing environment provides one** and site access permits.
3. Search for the specific institution's official employer requisition, or a verified no-login secondary detail page.
4. Record the precise failure or unresolved field. Do not bypass access controls, treat a generic search page as a verified job link, or invent facts.
5. Publish only verified, eligible, nonduplicate records with a specific accessible public posting/application URL. Keep the original discovery URLs in the private audit.

Cloud Browser in ChatGPT Work and Playwright in GitHub Actions are different execution environments; one succeeding does not establish the other's availability.

## Private candidate audit schema

Store a dated audit **outside public GitHub**, using the following header-defined columns:

`Run Date ET, Candidate ID, Source, Search Query, Discovery URL, Discovery Outcome, Full Text Access Outcome, Institution, Title, Employer Requisition, Relevant Methods Evidence, Evidence URL, Duplicate Match Posting ID, Candidate State, Inclusion or Exclusion Reason, Final Verified Public URL, Unresolved Errors, Reviewed At ET`

- Preserve rows from previous runs and update by Candidate ID, not row position.
- Record counts at each stage: discovered URLs, distinct candidate postings, full-text verified, verified eligible, added, already present, duplicates, excluded, and pending.
- Explicitly list potentially relevant unreadable and excluded candidates in each run report, with reasons.
- Keep internal PDF/Drive references out of public JSON and GitHub.

## Deduplication

Match on institution, substantive title, and employer requisition when available; cross-check job content and location. Chronicle, HigherEdJobs and the employer Workday page may be discovery references to one requisition. Preserve stable Posting IDs and actual First Shared dates; never use the source URL alone as the identity.

## Permanent regression case

**University of Findlay — Assistant Professor of Education**, official Workday requisition **R0005549**, Chronicle job **38048557**, HigherEdJobs job **179581653**.

Expected outcome: recognize the three URLs as one posting, recognize graduate-level qualitative research methods teaching and doctoral committee service as substantive evidence, and classify as eligible when the official posting remains accessible and current. On future runs report: found, full-text verified, matched existing Posting ID (or newly added), and any access or evidence failures. Do not re-add a duplicate.

## Release gates and reporting

All existing October 8 requirements remain binding: current Git HEAD rollback SHA; protected presentation hashes; header-matched Sheet writes; complete Active+Archive history snapshots; private PDF checks; EN/ZH logs and methods audits; exact allowlisted data patches; entire diff inspection; reconciliation; live mobile, filter, modal, chart and annual-report QA. If any mandatory layer fails, do not publish or advance the visible update date; report **incomplete** and the failed layer.

Add to each run report: candidate funnel counts, list of unresolved/rejected potentially relevant candidates, source-specific access failures, Findlay regression result, and final verified link for every new record. This protocol alone does **not** prove any automated job search, browser fallback, or production QA has been installed.
