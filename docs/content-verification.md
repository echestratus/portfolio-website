# Content Verification

Date: 6 November 2026

## Verification method

Every published sentence was checked against at least one of:

1. Source code, schema, or manifest in the project directory.
2. Author-filtered Git history and commit subjects.
3. Deployment documentation in the repository.
4. A live URL requested during the audit.
5. The portfolio PDF (`Farhan_Nur_Hakim_Portfolio_Summary.pdf`).

Where a claim could only be supported by the PDF, the project page says so in its evidence note. Where support was missing, the claim was removed.

## Project-by-project verification

### Job Talentio

- **Verified:** monorepo layout (`apps/api`, `apps/web`, `apps/admin`, `packages/shared`); NestJS 11, Prisma 6, PostgreSQL, Redis/BullMQ, Meilisearch; public repository; live site.
- **Verified features:** CV import and parsing, matching, ATS pipeline, Telegram integration, PWA, employer verification, admin moderation. Commit subjects and route trees support each.
- **Contribution:** 170 commits, the largest single author count.
- **Not claimed:** sole authorship, customer numbers, revenue, production SLAs.

### Hadith Hotel Management System

- **Verified:** Next.js 16, PostgreSQL, Drizzle, MinIO, Exely integration, role-based permissions, audit log, printing modules.
- **Verified contribution:** 214 commits covering purchasing, POS, assets, warehouse, QA harness, and failover.
- **Not claimed:** live operational screenshots or client testimonials. The system is internal.

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
- LinkedIn — not verified in any source, so it is not shown.
- Location "Indonesia" — from the author's context; no street address or phone number is published.
- No other social profiles are linked.

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
