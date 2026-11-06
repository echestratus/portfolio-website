# Project Evidence Report

This report records what each published project can prove, and what the website deliberately does not claim.

Evidence levels (internal only):
1. Public live deployment and/or public repository.
2. Local source code plus genuine UI captures or deployment configuration.
3. Portfolio PDF or specification documents only.
4. Unverified claim — not published.

The website never prints these numbers. It states the evidence in plain language on each project page.

## Published projects

| Project | Level | Public deployment | Public repo | Visual evidence | Notes |
|---|---|---|---|---|---|
| Job Talentio | 1 | https://jobtalent.io | Yes | 6 captures from the staging build | 252 published vacancies at capture time |
| 7Oz Espresso | 1 | https://7oz-espresso.com | Yes | Live homepage capture | Staff dashboard is private |
| Cari Kerja | 2 | Staging only (not linked) | Yes, 3 repos | 4 captures from the local staging build | Production URL not confirmed |
| Hadith Hotel HMS | 1 | Internal production + staging | No | 6 captures from staging, PII and amounts masked | Repository private; walkthrough on request |
| EGI Optik IMS | 2 | Internal production | No | 3 captures from production | Limited live data set; repository private |
| EGI Resources Holding | 1 | https://egiresources.com | No | Live homepage capture | Private repository |
| Saji Nusantara | 2 | https://saji-nusantara.com | No | Live homepage capture | Pre-launch checklist still open |
| Humble 8 | 1 | https://humble8.com | No | Live homepage capture | Private repository |
| EGI Optics | 1 | https://egi-optics.com | Yes | Live homepage capture | Contribution limited to theme QA and content |
| VILERT | 2 | None | No | 4 specification visuals | Team prototype; CSV export and three-role RBAC unimplemented |
| Smart Camera Lobster | 3 | None | No | 3 PDF visuals | Team final project, 2023; individual contribution undocumented |
| HerbCam | 3 | None | No | 3 PDF visuals | Source not in workspace |
| TenunSantara | 3 | None | No | 3 PDF visuals | Source not in workspace |
| Drite Attire | 3 | None | No | 3 PDF visuals | Freelance client project; source not in workspace |
| Peworld | 3 | None | No | 3 PDF visuals | Source not in workspace |
| Blanja | 3 | None | No | 3 PDF visuals | Bootcamp team project |
| Mama Recipe | 3 | None | No | 3 PDF visuals | Front-end responsibility documented in PDF |

## Excluded project

### Hotel Kampoeng Indonesia (`hotel-kampoeng-indonesia`)

**Excluded from the public portfolio.**

- The repository is a complete Next.js hotel booking site.
- Git history attributes 86 commits to `muaz`, 14 to `muazbachtiar-sketch`, and 1 to `liza.fedotova`.
- No commit, file, or document attributes work to Farhan Nur Hakim.
- It remains in the audit and sync report so that the inspected surface is complete and honest.

## Screenshot provenance

- **Live captures** (`egi-resources`, `egi-optics`, `7oz-cafe`, `humble8`, `saji-nusantara`) were captured with headless Chrome in November 2026 from the public URLs listed above.
- **Job Talentio** (`job-talentio/`) — six captures from `staging.jobtalent.io/en` in November 2026: homepage, job search, job detail, employer landing, company directory, and registration. These replace the older PDF screenshots.
- **Hadith Hotel HMS** (`hadith-hms/`) — six captures from the staging deployment (`stage-hms.egiresources.com`) using a temporary OWNER account that was created for the capture and deleted immediately afterwards: rooms, housekeeping, reservations, warehouse, purchasing, and assets.
- **EGI Optik IMS** (`egi-ims/`) — three captures from the production deployment using a temporary admin account that was created for the capture and deleted immediately afterwards: scan workstation, barcode labels, and sign-in.
- **Portfolio PDF images** (`drite-attire`, `peworld`, `blanja`, `mama-recipe`, `herbcam`, `tenunsantara`, `lobster-monitoring`, `vilert`) were extracted from `Farhan_Nur_Hakim_Portfolio_Summary.pdf`, image by image, then converted to WebP. Their captions state that they come from the portfolio or specification document.
- **Wireframes were rejected:** `dev-battalion/Spesifikasi Dashboard (1).docx` contains 16 embedded images, but they are placeholder wireframes (grey boxes, empty states) rather than runtime captures, so none were used.
- **Cari Kerja captures** come from `job-portal/cari-kerja-frontend/.tmp-shots/`, which contains real staging-build screenshots.
- No image was generated, mocked up, or edited to hide missing functionality. No stock photography is presented as a product screenshot.
- All images were resized to a maximum of 1800 px wide and converted to WebP (quality 82).

## Data protection during capture

Screenshots of client systems were taken on staging or with a purpose-built read-only review account, and reviewed before publication.

| Risk | Handling |
|---|---|
| Guest names, email addresses, phone numbers | Blurred in the reservation screenshot |
| Monetary amounts, supplier pricing | Blurred in purchasing and inventory views |
| Passport / identity numbers | Pages showing them (front office, guest detail) were not captured |
| Revenue reports | Report and folio screens were not published |
| Account lifecycle | Temporary accounts were deleted from the database after capture; verified zero rows remaining |

## Claims that were removed or narrowed

| Potential claim | Why it is not published |
|---|---|
| "Built VILERT's RBAC, CSV export, and WhatsApp alerts" | The specification describes all three. Alerting **is** implemented (Twilio WhatsApp, Gmail, Telegram); CSV export and the three-role model are not. The page states exactly which parts exist. |
| "Developed Hotel Kampoeng Indonesia" | No attributable Git evidence. Project excluded. |
| "Built EGI Optics" | Only three theme/content commits. Page describes a theme-and-content contribution. |
| "Sole developer of Cari Kerja" | Multiple contributors across three repositories. Page says "fullstack contributor". |
| "Led Smart Camera Lobster" | Team final project; individual contribution not documented. Page says "team contributor". |
| "Deployed to production" for internal systems | Sign-in pages are public but the systems are internal. Pages say "internal / restricted" and omit the URL. |
| Numerical skill percentages | No defensible basis. Not used. |
| Client testimonials or business metrics | None available. Not used. |

## Known limitations

1. Git commit counts include merges and co-authored work; they are evidence of involvement, not a precise ownership percentage.
2. Internal systems cannot show their operational screens without exposing client data.
3. The portfolio PDF is the only source for several academic and client projects; it is presented as such.
4. Live URLs can change after the audit date. The deployment guide explains how to re-verify them.
