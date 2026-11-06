import type { Project } from "@/data/project-types";

/**
 * Central project catalog.
 *
 * Every entry is derived from the local source repositories, the portfolio PDF
 * (Farhan_Nur_Hakim_Portfolio_Summary.pdf), or a live deployment checked in
 * November 2026. Optional fields are omitted rather than invented. Repository
 * and deployment links are only present when they resolve publicly.
 */
export const projects: Project[] = [
  {
    id: "job-talentio",
    slug: "job-talentio",
    title: "Job Talentio",
    tagline: "Job portal and lightweight ATS for the Uzbekistan market",
    shortDescription:
      "Multilingual hiring platform connecting candidates, recruiters, and moderators — with CV import, weighted matching, and a recruiter pipeline.",
    overview:
      "Job Talentio is a job portal and lightweight applicant tracking system built for the Uzbekistan market. Separate experiences serve candidates, recruiters, and super-admins, with content localized in Uzbek, Russian, and English. The product covers job discovery, résumé building, candidate matching, hiring pipelines, messaging, and moderation.",
    category: ["Full Stack", "Enterprise"],
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Meilisearch",
      "TypeScript",
    ],
    features: [
      "Job search with category, city, company, and industry discovery",
      "Candidate profiles and a guided résumé builder",
      "Recruiter applicant-tracking pipeline with screening questions",
      "Weighted candidate–job matching across skills, title, experience, location, education, and language",
      "CV import with parsing, OCR, and on-demand translation",
      "Recruiter–candidate chat, notifications, and job alerts",
      "Telegram sign-in, channel posting, and alert delivery",
      "Super-admin moderation for companies, jobs, verifications, and reports",
    ],
    problem:
      "The Uzbek hiring market needed a local-first platform that handles Uzbek, Russian, and English content, supports recruiters without a heavyweight ATS, and gives candidates a credible way to present their experience.",
    solution:
      "A pnpm monorepo with a NestJS API, separate Next.js apps for the public portal and the admin console, and shared Zod contracts. Search is backed by Meilisearch with self-healing fallback, background work runs through Redis/BullMQ, and documents live in S3-compatible storage.",
    architecture: {
      summary:
        "Separate web and admin clients share one REST API. The API owns authentication, matching, CV processing, billing, and moderation, with Redis workers for alerts and search indexing.",
      layers: [
        {
          label: "Clients",
          detail: "Next.js web app (candidate + recruiter) and Next.js admin console",
        },
        {
          label: "API",
          detail: "NestJS REST modules: auth, jobs, profiles, applications, matching, chat, billing, admin",
        },
        {
          label: "Data",
          detail: "PostgreSQL via Prisma · Meilisearch index · S3/MinIO document storage",
        },
        {
          label: "Background work",
          detail: "Redis + BullMQ for alerts, translation, and search index repairs",
        },
        {
          label: "Integrations",
          detail: "Telegram bot and OAuth, SMTP/Resend email, translation providers",
        },
      ],
    },
    contributions: [
      "Built candidate-facing flows including CV import, job matching, saved searches, and alerts.",
      "Implemented recruiter tooling: hiring funnel, response-time reporting, application sources, and interview stages.",
      "Added Telegram integration for sign-in, job sharing, channel posts, and alert delivery.",
      "Worked on multilingual search and job-title filtering, including stale-index recovery.",
      "Shipped the installable PWA experience, legal pages, and staging readiness checks.",
    ],
    status: "Live",
    year: "2026",
    role: "Fullstack developer — web, API, and admin",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/job-talentio/home.webp",
          alt: "Job Talentio candidate homepage with search and featured jobs",
          caption: "Candidate homepage",
        },
        {
          src: "/images/projects/job-talentio/job-discovery.webp",
          alt: "Job search results with category, city, and work-mode filters",
          caption: "Job discovery with filters",
        },
        {
          src: "/images/projects/job-talentio/job-detail.webp",
          alt: "Job detail page with requirements, benefits, and apply action",
          caption: "Job detail and application entry point",
        },
        {
          src: "/images/projects/job-talentio/employers.webp",
          alt: "Employers landing page for companies that post vacancies",
          caption: "Employer acquisition page",
        },
        {
          src: "/images/projects/job-talentio/companies.webp",
          alt: "Company directory listing employers on the platform",
          caption: "Company directory",
        },
        {
          src: "/images/projects/job-talentio/registration.webp",
          alt: "Candidate registration screen",
          caption: "Candidate registration",
        },
      ],
      note: "Public deployment at jobtalent.io, with a staging environment at staging.jobtalent.io. Screenshots were captured from the staging build in November 2026 against 252 published vacancies.",
    },
    links: {
      github: "https://github.com/EGI-HOLDING/job-talentio",
      liveDemo: "https://jobtalent.io",
    },
    confidentiality: "public",
    featured: true,
    cover: {
      src: "/images/projects/job-talentio/home.webp",
      alt: "Job Talentio candidate homepage",
    },
  },
  {
    id: "hadith-hotel-hms",
    slug: "hadith-hotel-hms",
    title: "Hadith Hotel Management System",
    tagline: "Hotel operations platform for a property in Samarkand",
    shortDescription:
      "Full-stack hotel management system spanning reservations, front office, housekeeping, POS, purchasing, inventory, assets, invoicing, and night audit.",
    overview:
      "Hadith Hotel HMS is the web replacement for a legacy desktop hotel management system. It runs the day-to-day operations of a hotel: reservations and front office, guest records, rooms and housekeeping, point of sale, purchasing, warehouse stock, fixed assets, folios, invoices, and nightly audit reporting.",
    category: ["Full Stack", "Enterprise", "Hotel Operations"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "MinIO",
      "Playwright",
    ],
    features: [
      "Reservations, front office, folios, invoices, and night audit",
      "Guest profiles, room setup, housekeeping, and guest requests",
      "Point of sale with per-outlet registers and cashier shift handover",
      "Purchase requests, bids, receipts, and a multi-warehouse stock ledger",
      "Asset registry with inspection history, movement history, and duplicate detection",
      "Inventory count sheets, opname, transfers, and printable operational documents",
      "Role-based permissions, cookie sessions, and an audit log",
      "Exely PMS integration, 1C export tooling, and multi-property tenancy",
    ],
    problem:
      "Hotel staff were working through a migrated desktop system that could not cover purchasing, warehouse, and asset workflows in one place, and could not be used reliably on mobile devices at the front desk and in the warehouse.",
    solution:
      "A single Next.js application with server-rendered operational modules, PostgreSQL through Drizzle, permission-filtered navigation, and a printing suite for the documents staff actually hand to guests and suppliers. Stock movements are recorded as a ledger rather than overwritten balances.",
    architecture: {
      summary:
        "A full-stack Next.js app backed by PostgreSQL. Each operational module writes through server actions and route handlers into a shared, property-scoped schema.",
      layers: [
        {
          label: "Application",
          detail: "Next.js App Router with module routes for front office, POS, purchasing, inventory, assets, and reports",
        },
        {
          label: "Data",
          detail: "PostgreSQL 16 via Drizzle ORM, property-scoped tables, stock ledger and audit log",
        },
        {
          label: "Files",
          detail: "MinIO/S3-compatible object storage for asset and document images",
        },
        {
          label: "Integrations",
          detail: "Exely PMS sync, internal import/migration endpoints, and 1C export scripts",
        },
        {
          label: "Quality",
          detail: "Vitest unit tests, Playwright end-to-end tests, and a QA harness",
        },
      ],
    },
    contributions: [
      "Built purchasing workflows: purchase requests, bids, receipts, withdrawal boundaries, and print layouts.",
      "Implemented POS outlet access, cashier shifts, handover, and category selection.",
      "Developed the asset registry with specifications, inspections, movement history, and duplicate detection.",
      "Extended warehouse operations with count sheets, stock labels, transfers, and printable documents.",
      "Added a QA harness, mobile layout fixes, and production failover health checks.",
    ],
    status: "Live",
    year: "2026",
    role: "Fullstack developer",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/hadith-hms/rooms.webp",
          alt: "Room board showing 121 rooms with status and floor assignment",
          caption: "Room board across 121 rooms",
        },
        {
          src: "/images/projects/hadith-hms/housekeeping.webp",
          alt: "Housekeeping board grouping rooms by cleaning status",
          caption: "Housekeeping board",
        },
        {
          src: "/images/projects/hadith-hms/reservations.webp",
          alt: "Reservation list with dates, status, and unit counts; guest identities masked",
          caption: "Reservation list (guest identities masked)",
        },
        {
          src: "/images/projects/hadith-hms/warehouse.webp",
          alt: "Warehouse stock list with item codes, categories, and quantities",
          caption: "Warehouse stock ledger",
        },
        {
          src: "/images/projects/hadith-hms/purchasing.webp",
          alt: "Purchase request list with department, status, and approvals; amounts masked",
          caption: "Purchase requests (amounts masked)",
        },
        {
          src: "/images/projects/hadith-hms/assets.webp",
          alt: "Asset registry with asset codes, locations, condition, and status",
          caption: "Asset registry",
        },
      ],
      note: "Deployed to a private production environment with a parallel staging deployment. Screenshots were captured from staging in November 2026; guest identities and monetary amounts are masked, and the repository remains private.",
    },
    links: {},
    confidentiality: "restricted",
    featured: true,
    cover: {
      src: "/images/projects/hadith-hms/rooms.webp",
      alt: "Hotel room board inside the Hadith Hotel management system",
    },
  },
  {
    id: "7oz-espresso",
    slug: "7oz-espresso",
    title: "7Oz Espresso",
    tagline: "Cafe website, staff dashboard, and Go backend",
    shortDescription:
      "Digital platform for a cafe brand: public website, staff admin dashboard, reservations, membership, loyalty, and a Go API.",
    overview:
      "7Oz Espresso is the digital platform behind a cafe brand with several locations. It combines a public website for menus, galleries, stories, and reservations with an internal dashboard for media, customers, loyalty, and content management. A Go service owns the data and business rules.",
    category: ["Full Stack", "E-commerce"],
    technologies: [
      "Next.js",
      "React",
      "Go",
      "Fiber",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Turborepo",
      "Docker",
    ],
    features: [
      "Public site with menu, outlets, gallery, blog, and reservations",
      "Customer accounts with email verification and password reset",
      "Membership and loyalty points, including redemption at the counter",
      "Admin dashboard for CMS pages, media, gallery, blogs, and contact messages",
      "Customer, reservation, and staff-user management",
      "JWT/session authentication, role-based access, and audit logging",
      "Containerized staging and production deployments behind nginx",
    ],
    problem:
      "The brand needed one system that could serve guests, support outlet staff, and let the marketing team publish content without a separate CMS or agency workflow.",
    solution:
      "A pnpm/Turborepo monorepo with separate website, admin, and backend applications. The Go/Fiber API owns authentication, reservations, loyalty, and media metadata, while PostgreSQL stores relational data and Redis handles sessions and caching.",
    architecture: {
      summary:
        "Three deployable apps in one monorepo: a public Next.js site, an internal Next.js dashboard, and a Go REST API with PostgreSQL and Redis.",
      layers: [
        {
          label: "Public site",
          detail: "Next.js App Router: menu, outlets, gallery, blog, reservations, loyalty",
        },
        {
          label: "Admin",
          detail: "Next.js dashboard for content, media, customers, staff, and reservations",
        },
        {
          label: "API",
          detail: "Go + Fiber REST service with JWT/session auth, RBAC, and audit logs",
        },
        {
          label: "Data",
          detail: "PostgreSQL with ~80 SQL migrations · Redis for sessions and caching",
        },
        {
          label: "Delivery",
          detail: "Docker Compose stacks for staging/production with nginx",
        },
      ],
    },
    contributions: [
      "Built and maintained admin features including table CRUD, staff users, loyalty redemption, and reservation closed days.",
      "Shipped guest review, gallery, news, and location content across the public site.",
      "Worked on the Go API and database migrations for reservations, loyalty, and media.",
      "Improved mobile responsiveness and hero video delivery.",
      "Maintained CI asset synchronisation and release practice across staging and production.",
    ],
    status: "Live",
    year: "2026",
    role: "Fullstack developer",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/7oz-cafe/home.webp",
          alt: "7Oz Espresso homepage on the live site",
          caption: "Public homepage, captured from the live deployment",
        },
      ],
      note: "Live at 7oz-espresso.com with a public repository. The staff dashboard is not publicly accessible.",
    },
    links: {
      github: "https://github.com/echestratus/7oz-cafe-website",
      liveDemo: "https://7oz-espresso.com",
    },
    confidentiality: "public",
    featured: true,
    cover: {
      src: "/images/projects/7oz-cafe/home.webp",
      alt: "7Oz Espresso homepage",
    },
  },
  {
    id: "cari-kerja",
    slug: "cari-kerja",
    title: "Cari Kerja",
    tagline: "Multi-role job portal with a super-admin console",
    shortDescription:
      "Job portal ecosystem with candidate and recruiter apps, an admin console, an Express API, and Elasticsearch-backed matching.",
    overview:
      "Cari Kerja is a job portal product with three surfaces: a candidate and recruiter web application, a super-admin console for moderation and billing, and a modular REST API. It supports multilingual content, CV parsing, application pipelines, chat, and candidate matching.",
    category: ["Full Stack", "Enterprise"],
    technologies: [
      "Vue 3",
      "React",
      "Express",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Docker",
    ],
    features: [
      "Job discovery by city, company, category, and industry",
      "Candidate profiles, CV generation, and résumé parsing with OCR",
      "Recruiter dashboards, applicant pipelines, and talent search",
      "Hybrid candidate matching using Elasticsearch dense vectors",
      "Super-admin moderation, verification, billing, and audit logs",
      "Real-time chat with presence and blocked-user handling",
      "Four-language content (English, Indonesian, Russian, Uzbek)",
      "Staging CI/CD with Docker images and SSH deployment",
    ],
    problem:
      "The product needed a consistent hiring experience across candidates, employers, and moderators while keeping multilingual content, CV processing, and billing in one coherent data model.",
    solution:
      "A modular Express API with per-domain command/query/repository layers, a Vue 3 public app, a React admin console, PostgreSQL migrations, Elasticsearch for search and matching, and Redis-backed jobs and sockets.",
    architecture: {
      summary:
        "Three clients talk to one Express API. Search and matching run on Elasticsearch, background jobs and chat use Redis, and each surface deploys as a Docker image.",
      layers: [
        {
          label: "Clients",
          detail: "Vue 3 public portal · React super-admin console",
        },
        {
          label: "API",
          detail: "Express 5 with per-module commands, queries, handlers, and repositories",
        },
        {
          label: "Data",
          detail: "PostgreSQL with 60 SQL migrations · Elasticsearch dense-vector matching",
        },
        {
          label: "Async",
          detail: "Redis + BullMQ workers · Socket.IO chat with presence",
        },
        {
          label: "Delivery",
          detail: "Docker + nginx · GitHub Actions staging deployment",
        },
      ],
    },
    contributions: [
      "Added backend health checks and job-title/category tenure filtering.",
      "Wrote data remapping scripts and improved test coverage on the API.",
      "Set up staging CI/CD with Docker and SSH deployment, including timeout fixes.",
      "Improved frontend asset caching with nginx no-cache and immutable header rules.",
      "Shipped the apply-job modal, CV drag-and-drop upload, and role guards.",
      "Built category internationalisation and multi-locale news in the admin console.",
    ],
    status: "In development",
    year: "2026",
    role: "Fullstack contributor — API, web app, and admin console",
    evidence: {
      level: 2,
      screenshots: [
        {
          src: "/images/projects/cari-kerja/home.webp",
          alt: "Cari Kerja homepage captured from the local staging build",
          caption: "Candidate homepage",
        },
        {
          src: "/images/projects/cari-kerja/jobs.webp",
          alt: "Cari Kerja job listing page",
          caption: "Job listing",
        },
        {
          src: "/images/projects/cari-kerja/companies.webp",
          alt: "Cari Kerja company directory",
          caption: "Company directory",
        },
        {
          src: "/images/projects/cari-kerja/home-mobile.webp",
          alt: "Cari Kerja homepage on a mobile viewport",
          caption: "Mobile homepage",
        },
      ],
      note: "Public repositories for the frontend, backend, and admin console. Screenshots were captured from the local staging build.",
    },
    links: {
      github: "https://github.com/Dew-dev/cari-kerja-frontend",
      extra: [
        {
          label: "Backend repository",
          url: "https://github.com/Dew-dev/cari-kerja-backend",
        },
        {
          label: "Admin repository",
          url: "https://github.com/echestratus/super-admin-cari-kerja",
        },
      ],
    },
    confidentiality: "public",
    featured: true,
    cover: {
      src: "/images/projects/cari-kerja/home.webp",
      alt: "Cari Kerja homepage",
    },
  },
  {
    id: "egi-optik-ims",
    slug: "egi-optik-ims",
    title: "EGI Optik Inventory System",
    tagline: "Inventory, serial tracking, and stocktake for an optics company",
    shortDescription:
      "Mobile-first internal inventory system for optics and laser stock, with receiving, issuing, serial and lot tracking, stocktakes, and barcode scanning.",
    overview:
      "An internal inventory system for EGI Optik. It tracks optics and laser stock across warehouses and locations, records stock movements as a ledger, follows serial numbers and lots through their lifecycle, and supports barcode-driven scanning on the warehouse floor.",
    category: ["Full Stack", "Enterprise", "Inventory"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "S3",
      "PWA",
    ],
    features: [
      "Goods receipt, issue, transfer, adjustment, and live stock balances",
      "Products, SKUs, categories, and structured specification fields",
      "Serial and lot lifecycles with calibration and document expiry tracking",
      "Stocktake sessions with count lines and an apply step",
      "Barcode/QR scan workstation with camera and hardware-scanner input",
      "Product 360 and serial 360 views for full movement history",
      "Role-based access, audit logging, and barcode label printing",
      "Installable PWA for mobile warehouse use",
    ],
    problem:
      "Stock was tracked without a reliable ledger: serials and lots were hard to follow, stocktakes were manual, and technical documents could not be tied to the physical item being inspected.",
    solution:
      "A single Next.js full-stack application over PostgreSQL. Stock movements are written as immutable ledger entries with row-level locking on balances, files live in S3-compatible storage, and the UI is built mobile-first so scanning works on warehouse phones.",
    architecture: {
      summary:
        "Next.js route handlers act as the API over a PostgreSQL ledger, with S3-compatible object storage and Better Auth protecting every role.",
      layers: [
        {
          label: "Application",
          detail: "Next.js App Router, mobile-first UI, PWA service worker",
        },
        {
          label: "API",
          detail: "Route handlers with Zod validation and server-side role checks",
        },
        {
          label: "Data",
          detail: "PostgreSQL + Drizzle ORM · 26 tables · ledger with SELECT FOR UPDATE",
        },
        {
          label: "Files",
          detail: "S3/MinIO presigned uploads for SKU images and documents",
        },
        {
          label: "Devices",
          detail: "Camera and HID barcode scanning through @zxing/browser",
        },
      ],
    },
    contributions: [
      "Implemented master data, stock receipt/issue/transfer flows, and the stock ledger.",
      "Added serial and lot tracking with stocktake sessions and application of count results.",
      "Built product 360 and serial 360 views with movement history.",
      "Set up production object storage with presigned uploads.",
      "Added governance features, audit coverage, CI type-checking, and a UI refresh.",
      "Fixed production authentication origin handling behind nginx.",
    ],
    status: "Live",
    year: "2026",
    role: "Fullstack developer",
    evidence: {
      level: 2,
      screenshots: [
        {
          src: "/images/projects/egi-ims/scan.webp",
          alt: "Scan workstation with lookup, receiving, issue, transfer, and stocktake modes",
          caption: "Scan workstation with five operating modes",
        },
        {
          src: "/images/projects/egi-ims/labels.webp",
          alt: "Barcode label preview for a stock keeping unit",
          caption: "Barcode label printing",
        },
        {
          src: "/images/projects/egi-ims/login-page.webp",
          alt: "EGI Optik Inventory System sign-in screen",
          caption: "Sign-in screen on the production deployment",
        },
      ],
      note: "Deployed to a private production environment for staff. Screenshots were captured from that deployment in November 2026. The live instance currently holds a limited data set, so list pages appear sparse; the repository is private.",
    },
    links: {},
    confidentiality: "restricted",
    featured: false,
    cover: {
      src: "/images/projects/egi-ims/scan.webp",
      alt: "Barcode scan workstation in the EGI Optik inventory system",
    },
  },
  {
    id: "egi-resources",
    slug: "egi-resources",
    title: "EGI Resources Holding",
    tagline: "Bilingual corporate platform for a holding company",
    shortDescription:
      "Corporate web platform covering sectors, subsidiaries, defence systems, news, careers, and a secured admin console.",
    overview:
      "The corporate website for PT EGI Resources. It presents the group's sectors, subsidiaries, projects, leadership, locations, and news, and includes defence-system micro-sites. A secured admin console manages content, job applications, contact submissions, newsletter subscribers, and visit metrics.",
    category: ["Full Stack", "Corporate"],
    technologies: ["React", "Vite", "FastAPI", "MongoDB", "JWT", "TOTP", "Nginx"],
    features: [
      "Bilingual corporate pages for sectors, subsidiaries, projects, and leadership",
      "Defence micro-sites including EGI Military System, EGI Optics, and AGAT",
      "News archive with RSS feed and sitemap",
      "Careers with CV applications and gated document downloads",
      "Admin console with JWT login and TOTP two-factor authentication",
      "Content CRUD, contact submissions, newsletter, and visit metrics",
      "GitHub Actions deployment to PM2/Nginx with health checks",
    ],
    problem:
      "A holding company with several subsidiaries needed one credible corporate presence that could present distinct business lines while giving a small team control over news, careers, and documents.",
    solution:
      "A React single-page frontend served behind nginx, paired with a FastAPI service and MongoDB. Content is modelled generically so the admin console can manage several collections without a rebuild, and authentication requires both a JWT and a TOTP code.",
    architecture: {
      summary:
        "A two-tier deployment: React SPA for public and admin interfaces, FastAPI for the API and authentication, MongoDB for content.",
      layers: [
        {
          label: "Frontend",
          detail: "React 19 + Vite SPA with TanStack Query and shadcn/Radix components",
        },
        {
          label: "Backend",
          detail: "FastAPI monolith with JWT + TOTP authentication and role dependencies",
        },
        {
          label: "Data",
          detail: "MongoDB collections for news, subsidiaries, careers, documents, and metrics",
        },
        {
          label: "Delivery",
          detail: "GitHub Actions → SSH/rsync → PM2 and nginx",
        },
      ],
    },
    contributions: [
      "Contributed to corporate content delivery, including news releases and sector updates.",
      "Worked on CI/CD deployment and PM2 health-check reliability.",
      "Contributed to brand-logo refresh and shared frontend maintenance.",
    ],
    status: "Live",
    year: "2026",
    role: "Contributor — content and deployment",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/egi-resources/home.webp",
          alt: "EGI Resources Holding homepage",
          caption: "Corporate homepage, captured from the live deployment",
        },
      ],
      note: "Live at egiresources.com. The repository is private.",
    },
    links: {
      liveDemo: "https://egiresources.com",
    },
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/egi-resources/home.webp",
      alt: "EGI Resources Holding corporate homepage",
    },
  },
  {
    id: "saji-nusantara",
    slug: "saji-nusantara",
    title: "Saji Nusantara",
    tagline: "Localized restaurant site for three outlets in Uzbekistan",
    shortDescription:
      "Restaurant marketing site with localized menus, outlet information, and WhatsApp-based contact for its locations in Uzbekistan.",
    overview:
      "Saji Nusantara is the public website for an Indonesian restaurant group operating three outlets in Uzbekistan. The site presents the menu, each location, and the brand story, and routes contact through per-outlet WhatsApp links.",
    category: ["Frontend", "Hospitality"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    features: [
      "Localized routes with a language switcher",
      "Menu organized by category with dish imagery",
      "Outlet pages with hours, address, and map links",
      "About and contact pages with per-outlet WhatsApp deep links",
      "Content modules for menu, locations, and site information",
      "Self-hosted deployment behind nginx with CI/CD",
    ],
    problem:
      "The restaurant group needed a consistent brand presence across outlets in a market where guests read several languages, and the team needed to update menus without a developer.",
    solution:
      "A Next.js App Router site with localized routes and content stored in typed modules, so menu and location changes are ordinary code changes with a review step. Contact is deliberately lightweight: no form backend, just a pre-filled WhatsApp message per outlet.",
    architecture: {
      summary:
        "A single content-driven Next.js frontend. No database or authentication; menu, locations, and site copy live in typed content modules.",
      layers: [
        {
          label: "Routing",
          detail: "Next.js App Router with a [locale] segment and next-intl",
        },
        {
          label: "Content",
          detail: "Typed TypeScript modules for menu, locations, and site metadata",
        },
        {
          label: "Delivery",
          detail: "Standalone Next.js build under PM2 behind nginx, deployed from CI",
        },
      ],
    },
    contributions: [
      "Built the home, menu, locations, about, and contact pages.",
      "Implemented the localized layout and language switcher.",
      "Established the design system, brand lockup, and typography.",
      "Maintained menu and outlet content across releases.",
      "Set up the self-hosted deployment workflow.",
    ],
    status: "In development",
    year: "2026",
    role: "Frontend developer",
    evidence: {
      level: 2,
      screenshots: [
        {
          src: "/images/projects/saji-nusantara/home.webp",
          alt: "Saji Nusantara homepage",
          caption: "Homepage captured from the live site",
        },
      ],
      note: "Publicly deployed at saji-nusantara.com. The repository is private and pre-launch checklist items remain open.",
    },
    links: {
      liveDemo: "https://saji-nusantara.com",
    },
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/saji-nusantara/home.webp",
      alt: "Saji Nusantara restaurant homepage",
    },
  },
  {
    id: "humble8",
    slug: "humble8",
    title: "Humble 8",
    tagline: "Multilingual brand site for a social space",
    shortDescription:
      "Single-page brand site for a venue combining a cafe, restaurant, recording studio, playground, school, and inn.",
    overview:
      "Humble 8 is a social space with several businesses under one roof. Its website is a single, localized page that introduces each space, facilities, gallery, and visit information, and links to the resident cafe brand.",
    category: ["Frontend", "Hospitality"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl", "Motion"],
    features: [
      "Localized single-page experience in four languages",
      "Sections for the venue, spaces, facilities, and gallery",
      "Resident cafe tenant teaser",
      "Visit and contact information with map link",
      "JSON-LD, sitemap, robots, and app icons",
      "Docker deployment behind nginx",
    ],
    problem:
      "A multi-concept venue needed one page that could explain several different businesses clearly, without turning into a dense brochure, and serve guests in four languages.",
    solution:
      "A single App Router page composed of focused sections with shared motion and typography, translated through next-intl. Content is structured per section rather than dropped into one long rich-text block.",
    architecture: {
      summary:
        "A single Next.js frontend with localized content. No database or authentication.",
      layers: [
        {
          label: "Page",
          detail: "One localized [locale] route composed of section components",
        },
        {
          label: "Content",
          detail: "next-intl dictionaries for English, Indonesian, Uzbek, and Russian",
        },
        {
          label: "Delivery",
          detail: "Standalone Docker build behind nginx, deployed from CI",
        },
      ],
    },
    contributions: [
      "Built the localized single-page experience and its section components.",
      "Implemented the gallery, facilities, and tenant sections.",
      "Added structured metadata, sitemap, robots, and icons.",
      "Set up the containerized deployment.",
    ],
    status: "Live",
    year: "2026",
    role: "Frontend developer",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/humble8/home.webp",
          alt: "Humble 8 homepage",
          caption: "Homepage captured from the live deployment",
        },
      ],
      note: "Live at humble8.com. The repository is private.",
    },
    links: {
      liveDemo: "https://humble8.com",
    },
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/humble8/home.webp",
      alt: "Humble 8 venue homepage",
    },
  },
  {
    id: "egi-optics",
    slug: "egi-optics",
    title: "EGI Optics",
    tagline: "Custom WordPress site for a defence optics manufacturer",
    shortDescription:
      "Custom WordPress block theme and companion plugin for a defence optics and laser company, with product catalogs, news, and hardened defaults.",
    overview:
      "The public website for PT EGI Optik Indonesia. It is a custom WordPress block theme with a companion plugin that adds product post types, specification fields, block patterns, SEO output, and security hardening. Content is managed by the company team.",
    category: ["Frontend", "WordPress"],
    technologies: ["WordPress", "PHP", "theme.json", "Block Patterns", "Playwright", "WP-CLI"],
    features: [
      "Thirteen block templates and nineteen reusable block patterns",
      "Custom product post type with categories and specification metadata",
      "Organization JSON-LD, sitemap, and redirect map for legacy URLs",
      "Security hardening for comments, XML-RPC, REST users, and uploads",
      "WP-CLI content import and deployment scripts",
      "Automated theme checks with Playwright, Stylelint, ESLint, and PHPCS",
    ],
    problem:
      "The company needed a maintainable marketing site its own team could edit, with structured product pages and news, rather than a fixed set of hard-coded pages.",
    solution:
      "A block theme built around theme.json and patterns, with a plugin owning product data and SEO behaviour. Deployment is automated through GitHub Actions with a backup, rsync, cache flush, and health check.",
    architecture: {
      summary:
        "A standard WordPress installation where the theme and plugin are versioned in Git, while content and uploads remain in the database.",
      layers: [
        {
          label: "Theme",
          detail: "Custom block theme with 13 templates and 19 patterns",
        },
        {
          label: "Plugin",
          detail: "Product post types, metadata, SEO output, and hardening",
        },
        {
          label: "Tooling",
          detail: "wp-env for local development, WP-CLI seeding, Playwright checks",
        },
        {
          label: "Delivery",
          detail: "GitHub Actions with backup, rsync, cache flush, and health check",
        },
      ],
    },
    contributions: [
      "Aligned the header, footer, and hero with the content width and completed a mobile-first CSS pass.",
      "Fixed footer semantics and raised accent contrast to meet AA.",
      "Corrected news content and officer names.",
    ],
    status: "Live",
    year: "2026",
    role: "Theme and content contributor",
    evidence: {
      level: 1,
      screenshots: [
        {
          src: "/images/projects/egi-optics/home.webp",
          alt: "EGI Optics homepage",
          caption: "Homepage captured from the live deployment",
        },
      ],
      note: "Live at egi-optics.com with a public repository. Contribution was scoped to theme QA and content updates.",
    },
    links: {
      github: "https://github.com/echestratus/egi-optics",
      liveDemo: "https://egi-optics.com",
    },
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/egi-optics/home.webp",
      alt: "EGI Optics homepage",
    },
  },
  {
    id: "vilert",
    slug: "vilert",
    title: "VILERT Smart Monitoring",
    tagline: "IoT temperature and humidity monitoring platform",
    shortDescription:
      "React dashboard and Express API for IoT sensors: live MQTT readings, device management, threshold alerting, and offline detection.",
    overview:
      "VILERT was a team project to build a monitoring platform for temperature and humidity sensors. The dashboard provides a device list with map locations, live sensor widgets over MQTT, and a device detail view with a history chart. A companion Express service ingests readings from the MQTT broker, stores them in PostgreSQL, flags devices that stop reporting, and sends threshold alerts over WhatsApp, email, and Telegram.",
    category: ["IoT", "Full Stack"],
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "MQTT",
      "Leaflet",
      "Redux",
      "Twilio",
    ],
    features: [
      "Device list with location on a map",
      "Live temperature and humidity widgets over MQTT/WebSocket",
      "Device detail modal with a sensor history chart",
      "Device management with per-device temperature and humidity thresholds",
      "MQTT ingestion into PostgreSQL with paginated, filterable history",
      "Offline detection when a device stops publishing for a minute",
      "Threshold alerts over WhatsApp (Twilio), Gmail, and Telegram with a cooldown window",
      "JWT-protected API with admin-gated user management",
      "Specified but not implemented: three-role permission model and CSV export",
    ],
    problem:
      "Facilities teams needed a single view of temperature and humidity conditions across devices, instead of checking individual sensors or waiting for threshold alerts.",
    solution:
      "A React single-page dashboard that subscribes to MQTT topics through a service layer and renders live values alongside a map, backed by an Express service that consumes the broker feed, persists readings, tracks device liveness, and dispatches alerts through three channels.",
    architecture: {
      summary:
        "A separate dashboard SPA and API service share one MQTT broker and PostgreSQL database. The API owns ingestion, device state, history queries, and alert delivery.",
      layers: [
        {
          label: "Dashboard",
          detail: "React + TypeScript SPA with Redux state, Leaflet map, and Chart.js history views",
        },
        {
          label: "API",
          detail: "Express 5 REST service with JWT auth, device/user CRUD, and filtered history endpoints",
        },
        {
          label: "Data",
          detail: "PostgreSQL storing devices, readings, and status transitions",
        },
        {
          label: "Ingestion",
          detail: "MQTT subscriber on vilert/+/data with per-device offline detection",
        },
        {
          label: "Alerting",
          detail: "Threshold evaluation dispatched to WhatsApp, Gmail, and Telegram with a debounce window",
        },
      ],
    },
    contributions: [
      "Implemented the device detail modal with a live temperature and humidity chart.",
      "Built the MQTT ingestion service: readings persisted to PostgreSQL, per-device offline detection, and threshold evaluation.",
      "Added alert delivery over WhatsApp, Gmail, and Telegram with a cooldown window.",
      "Fixed timestamp handling between device payloads and database storage.",
    ],
    status: "Prototype",
    year: "2025",
    role: "Frontend and backend contributor — team project",
    evidence: {
      level: 2,
      screenshots: [
        {
          src: "/images/projects/vilert/dashboard.webp",
          alt: "VILERT monitoring dashboard visual",
          caption: "Dashboard visual",
        },
        {
          src: "/images/projects/vilert/sensors.webp",
          alt: "VILERT sensor monitoring visual",
          caption: "Sensor monitoring visual",
        },
        {
          src: "/images/projects/vilert/analytics.webp",
          alt: "VILERT analytics visual",
          caption: "Analytics view visual",
        },
        {
          src: "/images/projects/vilert/mobile.webp",
          alt: "VILERT mobile monitoring view",
          caption: "Mobile view visual",
        },
      ],
      note: "Team prototype. The dashboard and the Express/MQTT service exist in the project folder; interface visuals come from the project specification document. CSV export and the three-role permission model described there were not implemented in the available code.",
    },
    links: {},
    confidentiality: "review_required",
    featured: false,
    cover: {
      src: "/images/projects/vilert/dashboard.webp",
      alt: "VILERT monitoring dashboard",
    },
  },
  {
    id: "smart-camera-lobster",
    slug: "smart-camera-lobster",
    title: "Smart Camera Lobster",
    tagline: "Real-time underwater lobster detection and counting",
    shortDescription:
      "Computer-vision system that enhances underwater footage, detects and counts lobsters, and tracks them across frames for remote monitoring.",
    overview:
      "A team final project built to help Aruna monitor and count lobsters remotely, reducing dependence on divers and weather conditions. The pipeline enhances underwater images, detects and counts lobsters, and tracks individual animals across frames. It was tested on edge devices and a laptop.",
    category: ["Computer Vision", "AI/ML"],
    technologies: ["YOLOv7", "StrongSORT", "Python", "OpenCV", "Jetson Nano", "Jetson Xavier NX"],
    features: [
      "Underwater image enhancement before inference",
      "Lobster detection and counting with YOLOv7",
      "Object tracking across frames with StrongSORT",
      "Deployment and testing on Jetson Nano, Xavier NX, and laptop hardware",
      "Reported team results: 0.996 mAP@0.5 and 14 FPS on laptop/GPU",
    ],
    problem:
      "Manual lobster monitoring relied on divers and favourable weather, which made counts expensive, infrequent, and difficult to verify over time.",
    solution:
      "An end-to-end vision pipeline that runs on edge hardware near the farm: enhance the frame, detect and count lobsters, then track them so the same animal is not counted twice.",
    contributions: [
      "Team final project (2023). Individual contribution is not documented in the available materials.",
    ],
    status: "Academic project",
    year: "2023",
    role: "Team project contributor",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/lobster-monitoring/detection.webp",
          alt: "Lobster detection output visual",
          caption: "Detection output",
        },
        {
          src: "/images/projects/lobster-monitoring/tracking.webp",
          alt: "Lobster tracking output visual",
          caption: "Tracking output",
        },
        {
          src: "/images/projects/lobster-monitoring/enhancement.webp",
          alt: "Underwater image enhancement visual",
          caption: "Underwater enhancement",
        },
      ],
      note: "Documented in the portfolio PDF. Metrics are the team's reported results, not independently reproduced here; individual contribution is unclear.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/lobster-monitoring/detection.webp",
      alt: "Lobster detection output",
    },
  },
  {
    id: "herbcam",
    slug: "herbcam",
    title: "HerbCam",
    tagline: "Android app for herbal-plant recognition",
    shortDescription:
      "Android application that classifies 30 herbal plant classes in real time or from gallery photos using a YOLOv5 model.",
    overview:
      "HerbCam is an Android application for identifying herbal plants. It detects and classifies plants either live through the camera or from an existing gallery photo, then presents the plant's description from an offline reference list.",
    category: ["Mobile", "AI/ML"],
    technologies: ["Java", "Android", "YOLOv5", "Deep Learning"],
    features: [
      "Real-time plant detection through the device camera",
      "Classification from photos already in the gallery",
      "A 30-class herbal plant model",
      "Reference descriptions for each recognized plant",
    ],
    problem:
      "People who want to identify herbal plants in the field need an offline, camera-first tool rather than a search engine and a reference book.",
    solution:
      "A native Android app wrapping a YOLOv5 model for inference within the app, with two input paths — live camera and gallery — and a plant reference screen.",
    contributions: [
      "Android application development and model integration, as documented in the portfolio PDF.",
    ],
    status: "Academic project",
    role: "Android and machine-learning developer",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/herbcam/app-camera.webp",
          alt: "HerbCam camera detection screen",
          caption: "Camera detection",
        },
        {
          src: "/images/projects/herbcam/app-result.webp",
          alt: "HerbCam classification result screen",
          caption: "Classification result",
        },
        {
          src: "/images/projects/herbcam/app-home.webp",
          alt: "HerbCam home screen",
          caption: "App home",
        },
      ],
      note: "Documented in the portfolio PDF. Source code was not available in the audited workspace.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/herbcam/app-home.webp",
      alt: "HerbCam mobile app",
    },
  },
  {
    id: "tenunsantara",
    slug: "tenunsantara",
    title: "TenunSantara",
    tagline: "Android app for Indonesian woven-textile recognition",
    shortDescription:
      "Mobile app that recognizes Indonesian woven-cloth motifs from camera or gallery images and presents textile details.",
    overview:
      "TenunSantara is an Android application for exploring Indonesian woven textiles. A user scans a motif with the camera or picks an image, the app classifies it with a trained model, and the result links to information about the textile.",
    category: ["Mobile", "AI/ML"],
    technologies: ["Kotlin", "Android Studio", "TensorFlow", "Google Cloud"],
    features: [
      "Motif scanning directly from the camera",
      "Machine-learning classification of woven-cloth motifs",
      "Exploration of textile categories and motif details",
      "Mobile reference interface for searching and browsing textiles",
    ],
    problem:
      "Indonesian woven textiles are difficult to identify without specialist knowledge, which limits both appreciation and educational use.",
    solution:
      "A camera-first Android app backed by an image-classification model, with a browseable catalog for people who want to explore motifs without a photo.",
    contributions: [
      "Android application development, model integration, and interface implementation, as documented in the portfolio PDF.",
    ],
    status: "Academic project",
    role: "Android and machine-learning developer",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/tenunsantara/app-scan.webp",
          alt: "TenunSantara scanning screen",
          caption: "Motif scan",
        },
        {
          src: "/images/projects/tenunsantara/app-result.webp",
          alt: "TenunSantara classification result",
          caption: "Classification result",
        },
        {
          src: "/images/projects/tenunsantara/app-detail.webp",
          alt: "TenunSantara textile detail screen",
          caption: "Textile detail",
        },
      ],
      note: "Documented in the portfolio PDF. Source code was not available in the audited workspace.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/tenunsantara/app-scan.webp",
      alt: "TenunSantara mobile app",
    },
  },
  {
    id: "drite-attire",
    slug: "drite-attire",
    title: "Drite Attire",
    tagline: "E-commerce storefront for a freelance client",
    shortDescription:
      "Responsive e-commerce website built as a complete customer journey, from brand discovery to product selection and checkout.",
    overview:
      "Drite Attire is a freelance client project: an e-commerce website for a clothing brand. The work covered the customer journey from the landing page and brand presentation through catalog browsing, product detail, and checkout.",
    category: ["Frontend", "E-commerce"],
    technologies: ["Responsive Web", "E-commerce"],
    features: [
      "Landing page and brand presentation",
      "Shop catalog for product exploration",
      "Product detail pages with purchase options",
      "Checkout and order summary",
      "Responsive layout across desktop and mobile",
    ],
    problem:
      "The brand needed a storefront that felt deliberate rather than a generic template, and that carried a visitor from first impression to checkout without dead ends.",
    solution:
      "A responsive storefront structured around the purchase journey: a brand-led landing page, a browsable catalog, focused product pages, and a clear order summary.",
    contributions: [
      "Storefront work for the Drite Attire freelance client project, as documented in the portfolio PDF.",
    ],
    status: "Client project",
    role: "Freelance web developer",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/drite-attire/storefront.webp",
          alt: "Drite Attire storefront visual",
          caption: "Storefront",
        },
        {
          src: "/images/projects/drite-attire/catalog.webp",
          alt: "Drite Attire catalog visual",
          caption: "Catalog",
        },
        {
          src: "/images/projects/drite-attire/product.webp",
          alt: "Drite Attire product detail visual",
          caption: "Product detail",
        },
      ],
      note: "Documented in the portfolio PDF. The original source repository was not available in the audited workspace, so no live link is shown.",
    },
    links: {},
    confidentiality: "review_required",
    featured: false,
    cover: {
      src: "/images/projects/drite-attire/storefront.webp",
      alt: "Drite Attire storefront",
    },
  },
  {
    id: "peworld",
    slug: "peworld",
    title: "Peworld",
    tagline: "Worker–recruiter marketplace",
    shortDescription:
      "Web app connecting workers and recruiters through professional profiles, talent search, and role-specific hiring flows.",
    overview:
      "Peworld is a marketplace web application that connects workers with recruiters. Workers maintain a professional profile and can see which recruiters have contacted them; recruiters can search the directory and initiate hiring.",
    category: ["Frontend", "Marketplace"],
    technologies: ["React", "Vite", "Tailwind CSS", "Redux Thunk"],
    features: [
      "Registration and login as a worker or recruiter",
      "Worker directory with profile detail",
      "Role-based profile editing",
      "Recruiter-initiated hiring",
      "Worker view of recruiter history",
    ],
    problem:
      "Workers and recruiters were relying on scattered channels, with no structured profile or record of who had approached whom.",
    solution:
      "A role-aware web application with a shared worker directory, profile management, and a hiring action that records the recruiter–worker relationship.",
    contributions: [
      "Individual contribution is not itemized in the available materials; the project is documented in the portfolio PDF.",
    ],
    role: "Web application project",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/peworld/talent-directory.webp",
          alt: "Peworld worker directory",
          caption: "Worker directory",
        },
        {
          src: "/images/projects/peworld/mobile-profile.webp",
          alt: "Peworld mobile profile view",
          caption: "Mobile profile",
        },
        {
          src: "/images/projects/peworld/hiring-flow.webp",
          alt: "Peworld hiring flow",
          caption: "Hiring flow",
        },
      ],
      note: "Documented in the portfolio PDF. Source code was not available in the audited workspace.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/peworld/talent-directory.webp",
      alt: "Peworld worker directory",
    },
  },
  {
    id: "blanja",
    slug: "blanja",
    title: "Blanja",
    tagline: "Bootcamp e-commerce platform",
    shortDescription:
      "E-commerce platform built during Pijar Camp, with product catalog, cart, checkout, and seller-side product management.",
    overview:
      "Blanja was built as a team project during the Pijar Camp bootcamp. The platform covers authentication, a product catalog by category, a shopping cart and checkout, shipping addresses, and product management for sellers.",
    category: ["Full Stack", "E-commerce"],
    technologies: ["React", "Vite", "Tailwind CSS", "Go", "Fiber"],
    features: [
      "Authentication and user profiles",
      "Product catalog and categories",
      "Shopping cart and checkout",
      "Shipping address management",
      "Seller-side product management",
    ],
    problem:
      "The bootcamp brief required a working multi-role commerce flow — buyer and seller — within a fixed team timeline.",
    solution:
      "A React frontend backed by a Go/Fiber API, with the team splitting frontend and backend responsibilities and integrating around the cart and checkout flow.",
    contributions: [
      "Front-end development across the commerce flow.",
      "Backend API request work for the shopping-cart feature.",
    ],
    status: "Academic project",
    role: "Frontend developer with backend contributions",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/blanja/mobile-catalog.webp",
          alt: "Blanja mobile catalog",
          caption: "Mobile catalog",
        },
        {
          src: "/images/projects/blanja/storefront.webp",
          alt: "Blanja storefront",
          caption: "Storefront",
        },
        {
          src: "/images/projects/blanja/product-grid.webp",
          alt: "Blanja product grid",
          caption: "Product grid",
        },
      ],
      note: "Documented in the portfolio PDF. Source code was not available in the audited workspace.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/blanja/storefront.webp",
      alt: "Blanja storefront",
    },
  },
  {
    id: "mama-recipe",
    slug: "mama-recipe",
    title: "Mama Recipe",
    tagline: "Recipe sharing platform",
    shortDescription:
      "Recipe-sharing web app for discovering, uploading, liking, and saving recipes, with a responsive front-end.",
    overview:
      "Mama Recipe is a recipe-sharing platform. Users can discover recipes, log in, read a full recipe, upload their own creations, like and save recipes, and manage their profile.",
    category: ["Frontend"],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Recipe discovery and curated collections",
      "Login and registration",
      "Recipe detail pages",
      "Recipe upload flow for new creations",
      "Likes, saves, and profile management",
    ],
    problem:
      "Home cooks needed a simple place to publish recipes and keep track of the ones they wanted to cook again.",
    solution:
      "A responsive React/Next.js front end built around the recipe lifecycle: discover, open, save, and publish.",
    contributions: ["Responsible for the front-end implementation, as documented in the portfolio PDF."],
    role: "Frontend developer",
    evidence: {
      level: 3,
      screenshots: [
        {
          src: "/images/projects/mama-recipe/recipe-page.webp",
          alt: "Mama Recipe recipe page",
          caption: "Recipe page",
        },
        {
          src: "/images/projects/mama-recipe/mobile-feed.webp",
          alt: "Mama Recipe mobile feed",
          caption: "Mobile feed",
        },
        {
          src: "/images/projects/mama-recipe/mobile-detail.webp",
          alt: "Mama Recipe mobile recipe detail",
          caption: "Mobile recipe detail",
        },
      ],
      note: "Documented in the portfolio PDF. Source code was not available in the audited workspace.",
    },
    links: {},
    confidentiality: "public",
    featured: false,
    cover: {
      src: "/images/projects/mama-recipe/recipe-page.webp",
      alt: "Mama Recipe recipe page",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  const set = new Set<string>();
  for (const project of projects) project.category.forEach((item) => set.add(item));
  return Array.from(set).sort();
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({
      candidate,
      score: candidate.category.filter((item) => project.category.includes(item)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}
