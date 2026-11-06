# Project Audit

Date: 6 November 2026

## 1. Sources inspected

- `Farhan_Nur_Hakim_Portfolio_Summary.pdf` — 9 pages, 9 projects, 29 embedded images.
- 11 project directories named in `MASTER-PROMPT.md`, plus the additional `DriteAttire` folder in `Documents`.
- Git history (author-filtered), package manifests, route trees, database schemas, deployment documentation, and live URLs.

## 2. PDF portfolio inventory

| # | Project | Category | Evidence in PDF |
|---|---|---|---|
| 1 | TenunSantara | Android / ML | Summary, features, tech, 3 phone visuals |
| 2 | HerbCam | Android / ML | Summary, features, tech, 3 phone visuals |
| 3 | Smart Camera Lobster | Computer vision | Summary, features, metrics, 3 visuals |
| 4 | VILERT Smart Monitoring | IoT dashboard | Summary, features, tech, 4 visuals |
| 5 | Job Talentio | Job portal / ATS | Summary, engineering highlights, stack, 4 product screens |
| 6 | Drite Attire | E-commerce client | Summary, features, 3 visuals |
| 7 | Peworld | Marketplace | Summary, features, stack, 3 visuals |
| 8 | Blanja | E-commerce bootcamp | Summary, features, stack, 3 visuals |
| 9 | Mama Recipe | Recipe platform | Summary, features, stack, 3 visuals |

The PDF's project names were preserved. The website expands the descriptions with verified implementation detail where source code exists.

## 3. Directory inventory

| Directory | What it is | Stack (verified) | Status | Attribution |
|---|---|---|---|---|
| `saji-nusantara` | Restaurant marketing site, 3 outlets in Uzbekistan | Next.js 16, React 19, TypeScript, Tailwind 4, next-intl | Ongoing / pre-launch | 25 commits + 12 as `echestratus` |
| `7oz-cafe-website` | Cafe website + admin + Go API monorepo | Next.js 15, React 19, Go 1.25/Fiber, PostgreSQL, Redis, Turborepo | Production-targeted, live domain | ~201 commits across identities |
| `dev-battalion` | IoT monitoring dashboard + Express/MQTT alerting service + docs | React, TypeScript, MQTT, Leaflet, Redux, Express, PostgreSQL | Prototype | Dashboard PR #1; all backend feature commits |
| `egi-optics` | WordPress corporate site | WordPress block theme, PHP, theme.json | Live | 3 commits |
| `EGI-Resources-Holding` | Corporate holding website | React 19, Vite, FastAPI, MongoDB | Live | 19 commits |
| `hadith-hotel-hms` | Hotel management system | Next.js 16, PostgreSQL, Drizzle, MinIO | Active pilot | 214 commits, largest contributor |
| `hotel-kampoeng-indonesia` | Hotel marketing + booking site | Next.js 14, React 18, Tailwind 3, Exely | Live at hotel-kampoengindonesia.com | **No commits attributable to Farhan**; inclusion confirmed by the author |
| `humble8` | Multilingual venue site | Next.js 15, next-intl, Tailwind 4 | Live | 9 of 10 commits |
| `inventory-management-system` | Internal inventory system | Next.js 16, PostgreSQL, Drizzle, Better Auth, S3 | Active, partially deployed | 10 of 22 commits |
| `job-portal` | Umbrella folder with 5 repositories | Vue 3, React, Express, NestJS, PostgreSQL, Elasticsearch | Active staging | 76 + 37 + 41 + 11 + 4 commits |
| `job-talentio` | Job portal + ATS monorepo | Next.js 15, NestJS 11, Prisma, PostgreSQL, Redis, Meilisearch | Live MVP | 170 commits, largest contributor |

Additional folder: `Documents\DriteAttire` contains brand assets and a reference PDF, confirming the client project described in the PDF but no application source.

## 4. Related projects and duplicates

- `hotel-kampoeng-indonesia`, `saji-nusantara`, `7oz-cafe-website`, and `humble8` are separate products serving the same hospitality group ecosystem. They are presented separately.
- `job-talentio` and `job-portal` are **different products** with similar domains. `job-portal` (Cari Kerja) is the earlier multi-repo implementation; `job-talentio` is a separate monorepo. They were not merged.
- `dev-battalion` contains the VILERT dashboard prototype plus specification documents. The PDF's VILERT page corresponds to this work.
- `inventory-management-system` and `hadith-hotel-hms` both contain inventory concepts but serve different organisations and have separate schemas.

## 5. Missing information

- No README or document in any repository states individual responsibilities. Contributions were inferred from author-filtered Git history and commit subjects, and are described as scope rather than sole authorship.
- `dev-battalion` implements the dashboard and the MQTT/alerting backend, but **not** the specification's CSV export or its three-role permission model. Those are called out as unimplemented on the project page.
- `hotel-kampoeng-indonesia` has no attributable commits. It is **included** on the author's explicit confirmation that he worked on it for EGI Resources' Kampoeng Indonesia property business, and the project page states the attribution basis and the live domain.
- Screenshots for the internal systems were captured in November 2026 from the staging HMS deployment and the production IMS deployment, using temporary review accounts that were deleted afterwards. Guest identities and monetary amounts are blurred; report and folio screens were not published.
- No employment dates, employer contracts, certifications, or client testimonials were available and none were invented.

## 6. Evidence and links

Verified live URLs at audit time:

- https://egiresources.com — 200
- https://egi-optics.com — 200
- https://7oz-espresso.com — 200
- https://humble8.com — 200
- https://saji-nusantara.com — 200
- https://jobtalent.io — 200
- https://hotel-management-system.egiresources.com — 200 (sign-in)
- https://inventory.egi-optics.com — 200 (sign-in)

Verified public repositories:

- https://github.com/echestratus/7oz-cafe-website
- https://github.com/echestratus/egi-optics
- https://github.com/EGI-HOLDING/job-talentio
- https://github.com/Dew-dev/cari-kerja-frontend
- https://github.com/Dew-dev/cari-kerja-backend
- https://github.com/echestratus/super-admin-cari-kerja

Private repositories (no public link rendered): `saji-nusantara`, `EGI-Resources-Holding`, `hadith-hotel-hms`, `humble8`, `inventory-management-system`, `hotel-kampoeng-indonesia`.

## 7. Recommended featured projects

1. **Job Talentio** — largest personal commit count, live MVP, public repository, clear technical depth.
2. **Hadith Hotel Management System** — deepest operational system, 214 commits, verified modules.
3. **7Oz Espresso** — full monorepo with a Go backend, live public site and public repository.
4. **Cari Kerja** — large multi-surface product with genuine staging screenshots and multiple public repositories.

These four are featured on the homepage. All other verified projects remain in the catalog.
