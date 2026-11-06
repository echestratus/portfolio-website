export const about = {
  intro:
    "I am a software developer based in Kota Tasikmalaya, Indonesia, working across fullstack web, backend, and infrastructure. Most of my work sits close to operations — hotel front desks, warehouse stock rooms, purchasing teams, and hiring pipelines.",
  paragraphs: [
    "I have spent the last two years at PT EGI Resources and its subsidiaries, building the web platforms that the group's businesses run on: a holding-company site, a defence-optics company site, three hospitality brands, a cafe platform, an internal inventory system, and a hotel management system used daily by front-office and warehouse staff.",
    "I started in telecommunications engineering, where the groundwork was signal processing, machine learning, and measurement. That background still shapes how I work: I care about correctness, traceability, and what happens when a system is under real load rather than on a demo screen.",
    "My work is not limited to application code. For Hadith Hotel I also took responsibility for the on-premise side — hardening remote access to the Windows and Linux servers, publishing the application behind the hotel's firewall and reverse proxy, and bringing the container stack back to a healthy public HTTPS state.",
  ],
  facts: [
    { label: "Based in", value: "Kota Tasikmalaya, West Java" },
    { label: "Known as", value: "Hakim" },
    { label: "Current role", value: "Software Engineer, PT EGI Resources" },
    { label: "Focus", value: "Fullstack, backend & infrastructure" },
    { label: "Core stack", value: "Go, TypeScript, Next.js, PostgreSQL" },
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
  {
    title: "On-premise infrastructure",
    description:
      "Server and network work for a live hotel: hardened remote access, firewall rules, reverse proxy with automatic TLS, and container recovery.",
    items: ["Linux & Windows Server", "Nginx", "Let's Encrypt", "Kerio VPN"],
  },
];

/**
 * Employment history, mirroring the CV. The project list on this site is
 * grouped by employer where the work was delivered.
 */
export const employment = [
  {
    company: "PT EGI Resources",
    role: "Full Stack Web Developer",
    period: "Nov 2024 – Present",
    location: "Indonesia · Uzbekistan operations",
    summary:
      "Built and maintained the group's web estate: the corporate holding site, a defence-optics subsidiary site, three hospitality brand sites, a cafe platform, and internal operational systems for a hotel and an optics inventory division.",
    highlights: [
      "Delivered 15+ corporate websites across EGI Resources and its subsidiaries.",
      "Shipped production systems: Hadith Hotel HMS, EGI Optik inventory, Job Talentio, Cari Kerja, and the 7Oz Espresso platform.",
      "Handled on-premise server and network work for Hadith Hotel, including remote access hardening and HTTPS publishing.",
    ],
    technologies: ["Next.js", "React", "NestJS", "Go", "PostgreSQL", "Docker", "Nginx"],
    href: "/projects/",
  },
  {
    company: "PT AGAT Netcentric",
    role: "Combat Management System Junior Engineer",
    period: "Nov 2024 – Present",
    location: "Indonesia",
    summary:
      "Combat management software for shipborne systems: C++, Java, Qt, and PostgreSQL, with hardware and weapon-system integration.",
    highlights: [
      "Developed combat management software using C++, Java, and the Qt framework.",
      "Implemented PostgreSQL data management and storage.",
      "Customised the CMS so shipborne deployments integrate with varied hardware and weapon systems.",
    ],
    technologies: ["C++", "Java", "Qt", "PostgreSQL"],
    href: "/#skills",
  },
  {
    company: "Nextgen Innotech Solutions",
    role: "Procurement Engineer (Part-time)",
    period: "Dec 2025 – Apr 2026",
    location: "Singapore (remote)",
    summary:
      "Procurement of electronic and optical equipment for research and defence programmes, including international sourcing and vendor evaluation.",
    highlights: [
      "Managed international purchasing, supplier coordination, and shipping documentation.",
      "Handled procurement of optical equipment for PT PAL, against technical specifications and quality standards.",
    ],
    technologies: ["Vendor evaluation", "Technical specification", "Supply chain"],
    href: "/#contact",
  },
  {
    company: "Aruna Indonesia",
    role: "Research & Development (Contract)",
    period: "Oct 2022 – Jul 2023",
    location: "Indonesia",
    summary:
      "Lobster monitoring research for the Amed sea farm: YOLO experimentation, underwater image enhancement, and edge deployment.",
    highlights: [
      "Trained and tested YOLOv6, YOLOv7, and YOLOv8 models on lobster data.",
      "Applied deep-learning image enhancement and integrated it with the detection model.",
      "Delivered real-time detection, tracking, and counting, presented to stakeholders.",
    ],
    technologies: ["Python", "PyTorch", "YOLOv7", "StrongSORT", "Jetson"],
    href: "/projects/smart-camera-lobster/",
  },
];

/**
 * On-premise infrastructure engagement at Hadith Hotel Samarkand.
 * Deliberately omits addresses, hostnames, and credentials.
 */
export const infrastructure = {
  title: "Hadith Hotel on-premise infrastructure",
  employer: "Hadith Hotel Samarkand — PT EGI Resources",
  period: "2026",
  summary:
    "The hotel runs its own servers behind a Kerio Control firewall, with no cloud dependency. I set up and verified the remote access, the public publishing path, and the recovery of the application stack.",
  points: [
    {
      title: "Hardened remote access",
      detail:
        "Configured key-only SSH on both the Linux application host and the Windows Server 2025 domain controller, and built a restricted jump host that forwards only the administrative SSH port and cannot open an interactive shell.",
    },
    {
      title: "Firewall and VPN",
      detail:
        "Defined Kerio Control rules for inbound web traffic, a dedicated VPN identity with no administrative rights, and a block rule that closes everything except the intended administrative port. Verified the restrictions from outside the network.",
    },
    {
      title: "Remote desktop without exposure",
      detail:
        "Delivered Remote Desktop access over an SSH tunnel and over VPN, keeping the RDP port closed to the internet, with a one-click fullscreen launcher for staff.",
    },
    {
      title: "Public HTTPS publishing",
      detail:
        "Configured Nginx as a reverse proxy for the application and issued a Let's Encrypt certificate with automatic renewal, after tracing a connection-refused fault to the web server rather than the firewall.",
    },
    {
      title: "Container recovery",
      detail:
        "Diagnosed a 502 caused by three stopped containers, brought PostgreSQL, MinIO, and the application up in order, and confirmed a public health endpoint reporting database and object storage as ready.",
    },
    {
      title: "Active Directory groundwork",
      detail:
        "Prepared an organisational unit, an operations group, and delegated reception permissions for future staff accounts — left disabled and documented rather than half-enabled.",
    },
  ],
  technologies: [
    "Windows Server 2025",
    "Ubuntu",
    "Kerio Control",
    "Nginx",
    "Let's Encrypt",
    "Docker",
    "PostgreSQL",
    "MinIO",
    "SSH",
    "VPN",
  ],
  note: "Internal infrastructure. No addresses, hostnames, or credentials are published.",
};

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
 * Project engagements delivered under the employment entries above. Kept as a
 * separate list so the site can point at case studies without duplicating the
 * employment history.
 */
export const projectWork = [
  {
    period: "2026",
    title: "Job Talentio",
    organization: "PT EGI Resources — IT project",
    description:
      "Job portal and lightweight ATS for the Uzbek market. Candidate, recruiter, and admin surfaces, CV import, weighted matching, Telegram integration, and search.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Meilisearch"],
    href: "/projects/job-talentio/",
  },
  {
    period: "2026",
    title: "Hadith Hotel Management System",
    organization: "PT EGI Resources — Hadith Hotel",
    description:
      "Hotel operations platform covering front office, POS, purchasing, warehouse, assets, invoices, and night audit, plus the on-premise server work that publishes it.",
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "Docker"],
    href: "/projects/hadith-hotel-hms/",
  },
  {
    period: "2026",
    title: "EGI Optik Inventory System",
    organization: "PT EGI Resources — EGI Optik Indonesia",
    description:
      "Mobile-first inventory and asset tracking with serial and lot lifecycles, stocktakes, barcode scanning, and document control.",
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "PWA"],
    href: "/projects/egi-optik-ims/",
  },
  {
    period: "2026",
    title: "7Oz Espresso platform",
    organization: "PT EGI Resources — F&B division",
    description:
      "Cafe platform with a public website, staff dashboard, and Go API. Reservations, loyalty, content management, and containerized releases.",
    technologies: ["Go", "Fiber", "Next.js", "PostgreSQL"],
    href: "/projects/7oz-espresso/",
  },
  {
    period: "2026",
    title: "Cari Kerja",
    organization: "PT EGI Resources — IT project",
    description:
      "Multi-role job portal with a candidate/recruiter app, super-admin console, and Express API. Search, CV parsing, matching, and staging CI/CD.",
    technologies: ["Vue 3", "Express", "Elasticsearch", "Redis"],
    href: "/projects/cari-kerja/",
  },
  {
    period: "2026",
    title: "Hospitality and corporate web estate",
    organization: "PT EGI Resources — group and subsidiaries",
    description:
      "Holding-company site, defence-optics site, and three hospitality brands: Saji Nusantara, Humble 8, and Hotel Kampoeng Indonesia.",
    technologies: ["Next.js", "WordPress", "next-intl", "Tailwind CSS"],
    href: "/projects/",
  },
  {
    period: "2026",
    title: "VILERT IoT monitoring",
    organization: "Freelance engagement",
    description:
      "Sensor monitoring platform and MQTT ingestion service with threshold alerting for a shrimp-pond monitoring client.",
    technologies: ["React", "Express", "MQTT", "PostgreSQL"],
    href: "/projects/vilert/",
  },
  {
    period: "Earlier",
    title: "Freelance & academic projects",
    organization: "Client and university work",
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
