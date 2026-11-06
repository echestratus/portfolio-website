export const about = {
  intro:
    "I am a software developer based in Indonesia, working across fullstack web and backend systems. Most of my work sits close to operations — hotel front desks, warehouse stock rooms, purchasing teams, and hiring pipelines.",
  paragraphs: [
    "I started in telecommunications engineering, where the groundwork was signal processing, machine learning, and measurement. That background still shapes how I work: I care about correctness, traceability, and what happens when a system is under real load rather than on a demo screen.",
    "Since then I have moved into product engineering. I build interfaces, APIs, and data models, and I prefer systems where the rules are explicit — a stock ledger that cannot silently drift, permissions that are checked on the server, and audit trails that answer the question of who changed what.",
    "My projects range from a hotel management system used by front-office and warehouse staff to a multilingual job portal, a cafe platform with a Go backend, and computer-vision work on Android and edge devices. The common thread is practical software: clear scope, honest constraints, and a result someone can actually use.",
  ],
  facts: [
    { label: "Based in", value: "Indonesia" },
    { label: "Focus", value: "Fullstack & backend engineering" },
    { label: "Core stack", value: "Go, TypeScript, Next.js, PostgreSQL" },
    { label: "Also working with", value: "React, NestJS, WordPress, Android" },
    { label: "Working style", value: "Evidence-first, operationally minded" },
    { label: "Availability", value: "Open to fullstack & backend roles" },
  ],
};

export const capabilities = [
  {
    title: "Product & fullstack engineering",
    description:
      "End-to-end web applications: server-rendered interfaces, typed APIs, authentication, and the release pipeline that puts them online.",
    items: ["Next.js / React", "TypeScript", "REST APIs", "CI/CD"],
  },
  {
    title: "Backend, data & integrations",
    description:
      "Relational modelling, stock and financial ledgers, background jobs, search, and third-party integrations such as PMS, Telegram, and object storage.",
    items: ["Go / NestJS / Express", "PostgreSQL", "Redis & queues", "Search"],
  },
  {
    title: "Operational systems",
    description:
      "Software for real operations — hotel front office, purchasing, warehouse counts, POS shifts, asset registers, and hiring pipelines.",
    items: ["Inventory ledgers", "RBAC & audit", "Printing workflows", "PWA"],
  },
  {
    title: "Applied computer vision",
    description:
      "Mobile and edge vision projects: dataset work, model integration, and interfaces that make a prediction useful rather than merely visible.",
    items: ["YOLO models", "Android", "Edge devices", "TensorFlow"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "Go", "JavaScript", "PHP", "Kotlin", "Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "Vue 3",
      "Tailwind CSS",
      "shadcn/Radix",
      "Vite",
      "next-intl",
    ],
  },
  {
    title: "Backend",
    items: ["NestJS", "Express", "Go Fiber", "FastAPI", "REST APIs", "JWT / OAuth", "Zod"],
  },
  {
    title: "Data & infrastructure",
    items: [
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Meilisearch",
      "MinIO / S3",
    ],
  },
  {
    title: "Mobile & AI",
    items: ["Android", "Kotlin", "Java", "YOLOv5 / YOLOv7", "StrongSORT", "OpenCV", "TensorFlow"],
  },
  {
    title: "Practices & tooling",
    items: [
      "Docker",
      "GitHub Actions",
      "Playwright",
      "Vitest",
      "Nginx",
      "PWA",
      "Accessibility",
    ],
  },
];

/**
 * Project-based experience. Each entry maps to a case study in this site.
 * No employment dates or employer names are asserted beyond what the sources
 * support.
 */
export const experience = [
  {
    period: "2026",
    title: "Fullstack developer — Job Talentio",
    description:
      "Job portal and lightweight ATS for the Uzbek market. Candidate, recruiter, and admin surfaces, CV import, weighted matching, Telegram integration, and search.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Meilisearch"],
    href: "/projects/job-talentio/",
  },
  {
    period: "2026",
    title: "Fullstack developer — Hadith Hotel Management System",
    description:
      "Hotel operations platform covering front office, POS, purchasing, warehouse, assets, invoices, and night audit for a property in Samarkand.",
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "Playwright"],
    href: "/projects/hadith-hotel-hms/",
  },
  {
    period: "2026",
    title: "Fullstack developer — 7Oz Espresso",
    description:
      "Cafe platform with a public website, staff dashboard, and Go API. Reservations, loyalty, content management, and containerized releases.",
    technologies: ["Go", "Fiber", "Next.js", "PostgreSQL"],
    href: "/projects/7oz-espresso/",
  },
  {
    period: "2026",
    title: "Fullstack contributor — Cari Kerja",
    description:
      "Multi-role job portal with a candidate/recruiter app, super-admin console, and Express API. Search, CV parsing, matching, and staging CI/CD.",
    technologies: ["Vue 3", "Express", "Elasticsearch", "Redis"],
    href: "/projects/cari-kerja/",
  },
  {
    period: "2026",
    title: "Fullstack developer — EGI Optik Inventory System",
    description:
      "Mobile-first inventory and asset tracking with serial and lot lifecycles, stocktakes, barcode scanning, and document control.",
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "PWA"],
    href: "/projects/egi-optik-ims/",
  },
  {
    period: "Earlier",
    title: "Freelance & academic projects",
    description:
      "Client storefront work for Drite Attire, Android and computer-vision projects, and bootcamp team products across e-commerce and recipe sharing.",
    technologies: ["React", "Kotlin", "Java", "YOLOv5"],
    href: "/projects/",
  },
];

export const education = {
  title: "Telecommunications engineering",
  description:
    "Engineering background in telecommunications, including signal processing and machine-learning foundations — the basis for later work in computer vision and edge inference.",
  focus: ["Signal processing", "Machine learning", "Computer vision", "Embedded and edge deployment"],
};

export const principles = [
  {
    title: "Model the rules, not just the screens",
    description:
      "Stock movement, permissions, and money should be enforced where they cannot be bypassed — in the schema and the server, not in a hidden button.",
  },
  {
    title: "Evidence over adjectives",
    description:
      "A project page should say what was built, what was verified, and what was out of scope. Claims that cannot be checked do not belong here.",
  },
  {
    title: "Design for the person at the counter",
    description:
      "Operational software is used standing up, on a phone, with a queue waiting. Speed and clarity matter more than decoration.",
  },
];
