# Content Verification

Date: 6 November 2026

## Verification method

Every published sentence was checked against at least one of:

1. Source code, schema, or manifest in the project directory.
2. Author-filtered Git history and commit subjects.
3. Deployment documentation in the repository.
4. A live URL requested during the audit.
5. The portfolio PDF (`Farhan_Nur_Hakim_Portfolio_Summary.pdf`).
6. The author's CV (`CV_ENG_Farhan-Nur-Hakim.pdf`) for employment, education, and contact facts.
7. The author's written brief for project-to-employer mapping and the on-premise infrastructure engagement, both labelled as author-supplied.

Where a claim could only be supported by the PDF, the project page says so in its evidence note. Where support was missing, the claim was removed.

## Project-by-project verification

### Job Talentio

- **Verified:** monorepo layout (`apps/api`, `apps/web`, `apps/admin`, `packages/shared`); NestJS 11, Prisma 6, PostgreSQL, Redis/BullMQ, Meilisearch; public repository; live site.
- **Verified features:** CV import and parsing, matching, ATS pipeline, Telegram integration, PWA, employer verification, admin moderation. Commit subjects and route trees support each.
- **Contribution:** 170 commits, the largest single author count.
- **Refreshed:** six screenshots captured from the staging build in November 2026 (252 published vacancies), replacing the older PDF visuals.
- **Not claimed:** sole authorship, customer numbers, revenue, production SLAs.

### Hadith Hotel Management System

- **Verified:** Next.js 16, PostgreSQL, Drizzle, MinIO, Exely integration, role-based permissions, audit log, printing modules.
- **Verified contribution:** 214 commits covering purchasing, POS, assets, warehouse, QA harness, and failover.
- **Refreshed:** six operational screenshots captured from the staging deployment: rooms, housekeeping, reservations, warehouse, purchasing, assets. Guest identities and monetary amounts are blurred.
- **Not claimed:** that the screens are publicly reachable, or any revenue figure. The repository stays private and a walkthrough is offered instead.

### 7Oz Espresso

- **Verified:** pnpm/Turborepo monorepo, Go/Fiber backend, PostgreSQL, Redis, admin and website apps, live public site, public repository.
- **Verified contribution:** admin features, guest reviews, gallery/content, responsive fixes, asset CI, Go API and migrations.
- **Not claimed:** that every module was written by Farhan; the repository has another active author.

### Cari Kerja

- **Verified:** Vue 3 frontend, React admin, Express API, PostgreSQL, Elasticsearch, Redis, Socket.IO; public repositories; multiple contributors.
- **Verified contribution:** health checks, filtering, remap scripts, CI/CD, nginx caching, apply-job flow, admin internationalisation.
- **Not claimed:** production deployment. Staging URLs exist in docs but were not linked because they were not HTTP-verified in this audit.

### EGI Optik Inventory System

- **Verified:** Next.js full-stack app, 26-table schema, stock ledger, serial/lot lifecycles, stocktakes, barcode scanning, PWA, S3 storage.
- **Verified contribution:** stock and master data, serial/lot, product 360, object storage, governance, UI refresh.
- **Refreshed:** three screenshots from the production deployment (scan workstation, barcode labels, sign-in). The live instance holds a small data set, and the captions say so rather than implying a busy production system.
- **Not claimed:** that the entire system was built by Farhan; 12 commits belong to another author.

### EGI Resources Holding

- **Verified:** React/Vite + FastAPI + MongoDB, JWT + TOTP, admin console, live site.
- **Verified contribution:** 19 commits: content/news releases, CI/CD and PM2 health, brand-logo refresh.
- **Not claimed:** ownership of the whole corporate platform.

### Saji Nusantara

- **Verified:** Next.js 16, next-intl, localized routes, static content modules, live site.
- **Verified contribution:** pages, i18n layout, design system, brand lockup, menu/location content, deployment.
- **Not claimed:** launch completion. The definition-of-done checklist is still open.

### Humble 8

- **Verified:** Next.js 15, next-intl, single localized page, live site.
- **Verified contribution:** 9 of 10 commits.
- **Not claimed:** business performance or tenant revenue.

### Hotel Kampoeng Indonesia

- **Verified:** live at `hotel-kampoengindonesia.com`; Next.js with localized routes, room catalogue, gallery, news, reviews, and an embedded Exely booking engine; four live captures.
- **Attribution:** the repository is private and its Git history contains no commits by the author. The project is published on the author's explicit confirmation of his role, and the evidence note on the page says so.
- **Not claimed:** sole authorship, booking volumes, or revenue.

### Hadith Hotel on-premise infrastructure

- **Basis:** the author's written account of the engagement, including the architecture, the rules applied, and the test results.
- **Verified in the account:** key-only SSH on Linux and Windows Server, a restricted jump host limited to the administrative port, Kerio Control forwarding and VPN rules with a non-administrative VPN identity, Remote Desktop over SSH tunnel and over VPN, Nginx reverse proxy with Let's Encrypt automatic renewal, and the restart of the PostgreSQL, MinIO, and application containers with a public health response reporting database and storage ready.
- **Withheld:** every address, hostname, VPN range, account name, path, and credential.
- **Not claimed:** that the description is a current audit. The site states it reflects the configuration and test results recorded during the engagement.

### EGI Optics

- **Verified:** WordPress block theme, product post type, 13 templates, 19 patterns, security hardening, live site, public repository.
- **Verified contribution:** three commits limited to theme layout, contrast, and news corrections.
- **Wording used:** "theme and content contributor", not "built the site".

### VILERT

- **Verified:** React/TypeScript dashboard with MQTT service, Leaflet map, device detail modal, and Redux. Express 5 backend with `pg`, `mqtt`, JWT, Twilio WhatsApp, Nodemailer, and Telegram: MQTT ingestion on `vilert/+/data`, per-device threshold evaluation, one-minute offline detection, paginated/filterable history, admin-gated user CRUD, and alerts with a two-minute cooldown.
- **Not implemented:** CSV export and the specification's three-role permission model. The page lists both as unimplemented.
- **Wording used:** "team prototype", with the alerting and ingestion work attributed to Farhan's commits.
- **Note:** The 16 images inside `Spesifikasi Dashboard (1).docx` are wireframes, not runtime captures, so none were published as screenshots.

### Smart Camera Lobster

- **Verified from PDF:** YOLOv7, StrongSORT, underwater enhancement, Jetson deployment, 0.996 mAP@0.5, 14 FPS.
- **Not verified:** individual contribution. The page says "team final project; individual contribution is not documented".
- **Metrics** are labelled as the team's reported results.

### HerbCam and TenunSantara

- **Verified from PDF:** Android stack, YOLOv5/TensorFlow, 30 herbal classes, camera and gallery flows, woven-textile classification.
- **Not verified:** source code or live deployment. Pages are labelled as academic case studies.

### Drite Attire, Peworld, Blanja, Mama Recipe

- **Verified from PDF:** client/freelance or bootcamp context, features, and stacks.
- **Blanja contribution** is stated in the PDF as front-end plus backend cart API work.
- **Mama Recipe contribution** is stated in the PDF as full front-end responsibility.
- **Drite Attire** is stated in the PDF as a freelance client project.
- **Peworld** has no stated individual contribution; the page does not claim one.
- No repository links are shown because none were verified.

## Contact and identity

- Email `farhanz.nh.13@gmail.com` — verified from the Git author configuration in the inspected repositories.
- GitHub `https://github.com/echestratus` — verified public profile; also the author identity in the repositories.
- LinkedIn `https://www.linkedin.com/in/farhan-nur-hakim/` — from the author's CV; profile resolves (HTTP 200).
- Phone `+62 821-1915-1861` and location "Kota Tasikmalaya, West Java" — from the author's CV. The phone number appears on the resume and portfolio documents, not in the site body.
- Nickname "Hakim" — supplied by the author; used in the profile card, the about facts, and the portfolio cover.
- No other social profiles are linked.

## Employer mapping

Company attribution for each project comes from the author's brief and is stored as `organization` on every project entry. Employment dates and role titles come from the CV.

| Employer | Projects and sites |
|---|---|
| PT EGI Resources | Holding site, Job Talentio, Cari Kerja, Hadith Hotel HMS, 7Oz Espresso, Saji Nusantara, Humble 8, Hotel Kampoeng Indonesia |
| PT EGI Resources — EGI Optik Indonesia (defence subholding) | EGI Optics, EGI Optik Inventory System |
| PT AGAT Netcentric | Combat management system work (skills and experience only) |
| Nextgen Innotech Solutions | Procurement work (experience only) |
| Aruna Indonesia | Smart Camera Lobster |
| Freelance | Dev Battalion (VILERT), Drite Attire |
| Bootcamp and university | HerbCam, TenunSantara, Peworld, Blanja, Mama Recipe |

The CV states the EGI Resources role as November 2024 – February 2026; the author confirmed the role is ongoing, so the site and both documents use "Nov 2024 – Present". The CV does not include dates for the group-wide infrastructure engagement, so that work is dated by year only.

## Documents

- `documents/resume.html` → `public/farhan-nur-hakim-resume.pdf`: single column, no tables, no text boxes, no images, standard sans-serif, selectable text. Verified by extracting the PDF text layer.
- `documents/portfolio.html` → `public/farhan-nur-hakim-portfolio.pdf`: nine A4 pages, images and text, also with a selectable text layer.
- Both files are rebuilt by `npm run build:documents`; the site, the resume, and the deck share the same project list, employer mapping, and contact details.
- The digital infrastructure summary is described without addresses, hostnames, or credentials in all three places.

## Bundle content checks

- No `.env` values, tokens, private keys, client names beyond public brands, internal IP addresses, or staff data appear in the site or its assets.
- The PDF is a copy of the provided portfolio, not the original file. The original remains untouched at the workspace root. The copy contains no credentials.
- The internal HMS and inventory systems are described without their deployment URLs.
- Public repository links resolve (HTTP 200 at audit time). Private repositories are not linked.

## Content style checks

- English is the only site language.
- No percentage-based skill ratings.
- No testimonials, client logos, or revenue figures.
- No "years of experience" headline that cannot be verified.
- Project statuses reflect the source: Live, In development, Prototype, Academic project, Client project.
