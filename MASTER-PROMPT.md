# MASTER PROMPT — Build a Professional Developer Portfolio Website

## 1. Role & Objective

Act as a **Senior Fullstack Developer, Software Architect, UI/UX Designer, Technical Content Writer, and Portfolio Strategist**.

Your task is to analyze my existing projects and build a professional, modern, responsive personal portfolio website that showcases my software development experience, technical capabilities, and completed projects.

This website must communicate my portfolio in a way that is:

- Informative, concise, and easy to understand.
- Professional and credible to recruiters, hiring managers, clients, and technical professionals.
- Visually attractive, modern, and consistent.
- Easy to navigate, responsive, and accessible.
- Honest about project ownership, contributions, technical implementation, and available evidence.

**Do not merely create a generic developer portfolio template.** The website must be based on an actual investigation of my existing PDF portfolio and project directories.

The final result should feel like a carefully curated professional portfolio, not a collection of random project cards.

---

## 2. Existing Resources and Project Directories

I already have a PDF containing a summary of my portfolio. You MUST inspect and use it as one of the primary content sources.

### Existing PDF Portfolio

```text
C:\Users\Hakim\Documents\Freelance\portfolio-project\Farhan_Nur_Hakim_Portfolio_Summary.pdf
```

### Project Directories

Inspect all the following directories:

```text
C:\Users\Hakim\Documents\Freelance\saji-nusantara

C:\Users\Hakim\Documents\Freelance\7oz-cafe-website

C:\Users\Hakim\Documents\Freelance\dev-battalion

C:\Users\Hakim\Documents\Freelance\egi-optics

C:\Users\Hakim\Documents\Freelance\EGI-Resources-Holding

C:\Users\Hakim\Documents\Freelance\hadith-hotel-hms

C:\Users\Hakim\Documents\Freelance\hotel-kampoeng-indonesia

C:\Users\Hakim\Documents\Freelance\humble8

C:\Users\Hakim\Documents\Freelance\inventory-management-system

C:\Users\Hakim\Documents\Freelance\job-portal

C:\Users\Hakim\Documents\Freelance\job-talentio
```

These directories may contain different technology stacks, project structures, documentation, screenshots, configuration files, and implementation stages.

Do not assume that every directory represents a fully completed, independently deployable product.

### Important restrictions

1. Do not modify, delete, rename, or restructure files inside the original project directories.
2. Treat all original projects as read-only resources during the portfolio investigation.
3. Do not expose credentials, API keys, passwords, environment variables, private URLs, internal company information, or confidential client data.
4. Do not copy sensitive information into the portfolio website.
5. Do not assume that a project is publicly publishable just because its source code exists locally.
6. Build the portfolio website in the current designated portfolio workspace. If the current workspace is not the portfolio directory, clarify the target location before making destructive changes.

---

## 2A. Phase Zero — Synchronize All Projects with Their Latest Remote Versions

Before analyzing the PDF portfolio and inspecting the project source code, synchronize all 11 project directories with their latest remote Git repositories whenever a valid Git remote is available.

The objective is to ensure that the portfolio audit and website content are based on the latest available project versions rather than outdated local copies.

### A. Inspect Git Repository Status

For each project directory:

1. Check whether it is a valid Git repository.
2. Inspect its configured remotes using `git remote -v`.
3. Identify the primary remote repository and its default branch.
4. Inspect the current branch.
5. Check whether the working tree contains uncommitted changes.
6. Check whether the local branch is ahead of or behind its remote tracking branch.
7. Identify whether the repository has merge conflicts or other synchronization issues.

### B. Protect Existing Local Work

Before executing any pull operation:

- Never overwrite uncommitted local changes.
- Never automatically discard modified, staged, or untracked files.
- Never use destructive commands such as `git reset --hard`, `git clean -fd`, or force-pull operations.
- Never automatically commit or push local changes.
- Never switch branches if doing so could overwrite or disrupt existing work.
- Do not modify Git remotes or repository configuration without authorization.

If a repository contains uncommitted changes, stop synchronization for that repository and report the situation.

Do not automatically stash changes unless explicitly authorized.

### C. Pull the Latest Remote Changes

For repositories with a clean working tree and a valid remote:

1. Fetch the latest remote information.
2. Determine the correct upstream branch.
3. Compare the local branch with its upstream branch.
4. Pull the latest changes using a safe strategy.
5. Prefer fast-forward-only synchronization when possible.
6. If synchronization requires a merge, rebase, conflict resolution, or branch change, do not perform it automatically. Report the issue and request authorization.

Example safe workflow:

```bash
git status
git remote -v
git branch --show-current
git fetch --all --prune
git status -sb
git pull --ff-only
```

Adapt the commands to the actual repository configuration. Do not blindly execute the example without checking the upstream branch and repository state first.

If the project does not have a Git remote, do not attempt to invent or guess its repository URL.

### D. Handle Special Repository Situations

Use the following rules:

| Repository Condition | Required Action |
|---|---|
| Clean working tree and behind remote | Pull latest changes |
| Clean working tree and already up to date | Continue |
| Local branch ahead of remote | Do not push; preserve local commits and report |
| Local branch diverged from remote | Stop and report; request authorization |
| Uncommitted changes | Do not pull; preserve local work and report |
| Merge conflicts | Stop and request authorization |
| No Git remote | Use the available local version and report |
| Not a Git repository | Inspect available files without attempting Git operations |
| Authentication failure | Report the issue; do not attempt to bypass authentication |
| Remote unavailable | Continue with local files and clearly report the limitation |

### E. Create a Synchronization Report

After checking all 11 directories, create:

```text
docs/project-sync-report.md
```

For each project, record:

- Project directory.
- Git repository status.
- Remote repository URL, if available.
- Current local branch.
- Upstream branch.
- Previous synchronization status.
- Whether a pull was performed.
- Whether the repository is up to date.
- Whether local modifications were detected.
- Any synchronization errors or unresolved issues.

Do not expose private repository URLs or other sensitive Git information in the public portfolio website.

### F. Audit Only After Synchronization

Once synchronization is complete or the applicable exceptions have been documented:

1. Inspect the latest safely synchronized source code.
2. Analyze the project structure and implementation.
3. Verify the actual features and technology stack.
4. Identify genuine screenshots and supporting evidence.
5. Compare findings against the existing PDF portfolio.
6. Proceed with the comprehensive project audit.

**Important:** Synchronization must happen before the project audit, but it must never come at the expense of existing local work. If a repository cannot be safely synchronized, preserve its current state and continue auditing its available local version while clearly identifying it as not synchronized.

## 3. Phase One — Comprehensive Project Audit

Before designing or coding the website, perform a structured audit of all 11 project directories and the existing PDF.

### A. Analyze the PDF Portfolio

Extract and review:

- Existing project names.
- Project descriptions.
- Technologies and frameworks.
- Project objectives and business problems.
- Features and functionality.
- My role and responsibilities.
- Screenshots and visual assets.
- Relevant achievements and outcomes.
- Any available links or references.

If the PDF contains screenshots, diagrams, or visual examples, inspect them rather than relying exclusively on extracted text.

Preserve relevant information from the PDF, but improve the wording and presentation where necessary.

### B. Inspect Every Project Directory

For each project, investigate:

- README and documentation files.
- Source code and folder structure.
- `package.json`, `go.mod`, `requirements.txt`, and other dependency manifests.
- Frontend frameworks and backend technologies.
- Database schemas and migration files.
- API routes and endpoint structures.
- Authentication and authorization mechanisms.
- Major modules and features.
- Existing screenshots, images, videos, and design assets.
- Deployment configurations.
- Git metadata and repository remotes, if available.
- Existing test files and testing configurations.
- Documentation of my actual contributions, if available.

Do not spend time reading every source-code file indiscriminately. Use a targeted inspection strategy to understand the architecture, functionality, and technical implementation.

When necessary, inspect important implementation files to verify that a feature actually exists.

### C. Build a Master Project Inventory

Create a structured inventory containing all projects found in the directories and PDF.

For each project, document:

| Field | Description |
|---|---|
| Project Name | Official or verified project name |
| Category | Fullstack, Backend, Frontend, Mobile, AI/ML, Enterprise, etc. |
| Overview | Concise project explanation |
| Problem | Problem or business requirement addressed |
| Solution | What the project implements |
| Technologies | Verified frameworks, languages, and tools |
| Key Features | Main implemented functionality |
| Architecture | Relevant technical architecture |
| My Contribution | Verified personal responsibilities |
| Project Status | Completed, ongoing, prototype, or unknown |
| GitHub Repository | Verified repository URL, if available |
| Live Demo | Verified deployment URL, if available |
| Visual Evidence | Screenshots, videos, or diagrams |
| Documentation | Available supporting documentation |
| Evidence Level | Assessment based on available evidence |
| Confidentiality | Public, restricted, or requires review |

Do not invent missing information. Use an explicit internal `unknown` or `not_verified` status until sufficient evidence is found.

### D. Detect Duplicate and Related Projects

Some directories may represent related systems, modules, versions, or components of a larger project.

Investigate whether:

- Multiple directories belong to the same overall product.
- A project is a frontend/backend component of another project.
- A project is a continuation or newer version of another.
- Two projects have overlapping features but different purposes.

Do not automatically merge projects based only on similar names.

If multiple directories belong to one larger system, consider presenting them as related components under a single project case study, while retaining their individual technical contributions.

### E. Produce an Audit Report

Before proceeding with the website implementation, create:

```text
docs/project-audit.md
```

The report must include:

1. All 11 inspected directories.
2. Findings from the existing PDF.
3. Project inventory.
4. Identified technology stacks.
5. Related or potentially duplicated projects.
6. Missing information.
7. Available visual and documentary evidence.
8. Verified GitHub and live-demo links.
9. Confidentiality concerns.
10. Recommended featured projects.

Do not stop after creating this report. Continue with the website implementation using the verified findings.

---

## 4. Phase Two — Evidence Management and Credibility Mitigation

This is one of the most important requirements.

Some projects may not have:

- A public GitHub repository.
- A live deployment.
- A publicly accessible website.
- Complete documentation.
- Strong screenshots or visual demonstrations.
- Publicly verifiable client references.

The website must still present these projects professionally without making misleading claims.

### A. Establish an Evidence Hierarchy

Classify available evidence into the following levels.

**Level 1 — Strong Evidence**

Examples:
- Public GitHub repository.
- Working live demo.
- Public technical documentation.
- Public project release.
- Verified screenshots or recorded demonstrations.

**Level 2 — Supporting Evidence**

Examples:
- Local project source code.
- Screenshots of the implemented application.
- Recorded walkthroughs.
- Technical documentation.
- Database schemas.
- Architecture diagrams.
- Test results.
- Deployment configuration.

**Level 3 — Limited Evidence**

Examples:
- Existing PDF portfolio descriptions.
- Personal project notes.
- Incomplete documentation.
- Limited screenshots.
- Partial implementation.
- Historical project descriptions.

**Level 4 — Unverified Information**

Examples:
- Claims without supporting documentation.
- Unknown technical implementation.
- Unverified project status.
- Unconfirmed individual contributions.
- Unverified business impact.

These levels are an internal content-quality assessment. Do not automatically display a numerical credibility score to website visitors.

### B. Alternative Evidence for Projects Without GitHub or Live Demos

For projects without public repositories or live deployments, use appropriate alternatives.

1. **Application Screenshots**

   Capture or use genuine screenshots showing:
   - Dashboard.
   - Main interface.
   - Important workflows.
   - Forms and management modules.
   - Reports and analytics.
   - Relevant application functionality.

2. **Technical Architecture Diagrams**

   Show the actual verified architecture where possible:
   - Frontend.
   - Backend.
   - API.
   - Database.
   - Authentication.
   - External integrations.

   Do not create an architecture diagram based on assumptions.

3. **Feature Demonstrations**

   Use short recorded walkthroughs, GIFs, or videos to demonstrate actual functionality.

4. **Project Case Studies**

   Explain:
   - Project background.
   - Business problem.
   - Technical solution.
   - Implemented functionality.
   - My actual responsibilities.
   - Technical challenges.
   - Results, if verified.

5. **Documentation and Technical References**

   Provide sanitized documentation, diagrams, or technical descriptions when appropriate.

6. **Private or Confidential Projects**

   If a project cannot be publicly shared, present an appropriately sanitized case study.

   Do not expose:
   - Client credentials.
   - Internal IP addresses.
   - Private infrastructure.
   - Employee or customer information.
   - Proprietary source code.
   - Internal business processes that are not approved for disclosure.

### C. Project Evidence Presentation Rules

Use conditional rendering based on available information.

For example:

| Available Evidence | Website Presentation |
|---|---|
| GitHub + Live Demo | Show both links |
| GitHub only | Show repository link and screenshots |
| Live Demo only | Show live demo and technical overview |
| Screenshots only | Show visual case study |
| Documentation only | Show documentation-based case study |
| Limited information | Show concise project overview with clearly bounded claims |
| Confidential project | Show sanitized case study without sensitive details |

Never display broken links or placeholder buttons.

Do not show a GitHub button if the repository does not exist or its URL has not been verified.

Do not show a live demo button if there is no confirmed working deployment.

Do not fabricate project screenshots, fake browser interfaces, fake testimonials, fabricated client logos, fake metrics, or fictional business outcomes.

### D. Honest Project Language

Use language that accurately describes the available evidence.

For example:

Instead of:

"Successfully developed and deployed a complete enterprise platform used by thousands of users."

Use:

"Developed an enterprise-oriented platform featuring inventory management, procurement workflows, and asset tracking."

Only mention actual users, production deployment, business impact, or performance improvements when supported by evidence.

The website should communicate technical competence without exaggeration.

---

## 5. Phase Three — Personal Branding and Website Content

The website should establish a professional developer identity.

Use the following positioning as an initial direction, but refine it based on the actual projects:

**Farhan Nur Hakim — Fullstack Web Developer | Golang Developer | Software Engineer**

The website should not portray me exclusively as a telecommunications engineering graduate or machine learning developer. It should demonstrate the breadth of my software engineering experience.

Potential technical areas include:

- Fullstack Web Development.
- Backend Development.
- Golang Development.
- Frontend Development.
- React.js and Next.js.
- REST API Development.
- Database Design.
- PostgreSQL.
- Software Architecture.
- Enterprise Applications.
- Inventory and Procurement Systems.
- Machine Learning and Computer Vision.
- Android Development.
- System Integration.

Only include skills that are supported by my actual experience, existing projects, or verified qualifications.

### Website Information Architecture

Create the following pages or sections.

#### 1. Home / Hero Section

The first screen should immediately communicate:

- My name.
- Professional title.
- Short professional introduction.
- Main technical specialization.
- A clear call to action.

Suggested positioning:

"Building practical, scalable, and user-focused software solutions across web development, backend engineering, and intelligent applications."

This is an initial example, not mandatory final wording.

Include two primary actions:

- Explore My Projects.
- Download Portfolio PDF.

Optionally include links to LinkedIn, GitHub, and email, but only when verified.

#### 2. About Me

Provide a concise professional introduction covering:

- Educational background.
- Software development experience.
- Technical interests.
- Relevant professional experience.
- Engineering mindset.
- Areas of specialization.

Avoid turning this section into a long biography.

Use the existing PDF and verified background information as sources.

#### 3. Featured Projects

Display the most impressive and relevant projects prominently.

Select featured projects based on:

- Technical complexity.
- Actual implementation.
- Problem-solving value.
- Relevance to my professional positioning.
- Available evidence.
- Quality of documentation.

Do not simply feature projects because their directory names sound impressive.

Each featured project should have a strong visual preview and concise explanation.

#### 4. Complete Project Portfolio

Create a searchable and filterable project collection.

Suggested categories:

- Fullstack Development.
- Backend Development.
- Frontend Development.
- Enterprise Applications.
- Inventory Management.
- Hotel Management Systems.
- AI / Machine Learning.
- Computer Vision.
- Mobile Development.
- Other Software Projects.

Allow visitors to filter projects by:

- Category.
- Technology.
- Project type.

Add search functionality by project name and relevant keywords.

Only display filters that have meaningful corresponding projects.

#### 5. Project Detail Pages

Every project should have a dedicated detail page or well-designed detail view.

Use the following structure:

**Project Overview**
- Project name.
- Short description.
- Project category.
- Project status, if verified.
- Relevant technologies.

**The Problem**
- What problem was being addressed?
- What business or technical requirements existed?

**The Solution**
- What was implemented?
- How does the system address the problem?

**Key Features**
- Important implemented features.
- Relevant workflows.
- Major technical functionality.

**Technical Implementation**
- Technology stack.
- Architecture.
- Backend and frontend responsibilities.
- Database and API implementation.
- Important engineering decisions.

**My Contribution**
- What I personally designed, developed, integrated, or maintained.
- Distinguish personal contributions from team achievements.

**Visual Showcase**
- Genuine screenshots.
- Architecture diagrams.
- Videos or GIFs where available.

**Project References**
- GitHub repository, if verified.
- Live demo, if verified.
- Supporting documentation, if available.

If references are unavailable, omit the corresponding buttons and present the available evidence instead.

#### 6. Skills and Technologies

Present technologies in visually organized groups.

Potential groups:

- Programming Languages.
- Frontend.
- Backend.
- Database.
- Mobile Development.
- AI / Machine Learning.
- Tools and Development Practices.

Use technology icons where appropriate.

Do not use arbitrary percentage-based skill levels such as "Go 95%" unless there is a meaningful and defensible basis for those numbers.

#### 7. Experience and Education

Include relevant professional experience, educational background, certifications, research, and publications when supported by the existing portfolio and verified background information.

Keep this section concise and consistent with my CV.

#### 8. Contact

Provide clear contact options:

- Email.
- LinkedIn.
- GitHub.
- Other professional profiles, if available.

Do not invent contact information.

---

## 6. Phase Four — UI/UX and Visual Design Requirements

The website should have a polished, modern, premium developer-portfolio aesthetic.

### Design Direction

Use a visual style inspired by high-quality engineering and software product websites.

The design should feel:

- Modern.
- Minimalist.
- Professional.
- Clean.
- Technical.
- Premium.
- Readable.
- Visually balanced.

Avoid:
- Excessive gradients.
- Excessive animations.
- Overly colorful layouts.
- Generic template appearance.
- Too many cards.
- Dense paragraphs.
- Unnecessary decorative elements.
- Oversized typography that reduces information density.

### Layout

Implement:

1. A clean navigation bar.
2. A visually compelling hero section.
3. A featured-project showcase.
4. An organized project gallery.
5. Dedicated project details.
6. A professional about section.
7. A technology/skills section.
8. Experience and education.
9. A clear contact section.
10. A professional footer.

### Typography

Use a consistent typography system with clear hierarchy.

Ensure:
- Headings are easy to scan.
- Paragraphs are concise.
- Technical information is readable.
- Project descriptions are not excessively long.

### Color System

Create a coherent color palette.

Prefer a restrained professional palette with good contrast.

Support light and dark modes if they can be implemented cleanly without compromising design quality.

### Animation and Interaction

Use subtle animations where they improve the experience:

- Smooth scrolling.
- Hover interactions.
- Project card transitions.
- Section reveal animations.
- Navigation transitions.

Animations must not interfere with accessibility or performance.

### Responsive Design

The website must work properly on:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Pay particular attention to project cards, navigation, screenshots, tables, and technical diagrams on small screens.

### Accessibility

Implement:
- Semantic HTML.
- Keyboard navigation.
- Accessible labels.
- Appropriate contrast.
- Meaningful alternative text for images.
- Visible focus indicators.
- Reduced-motion support where applicable.

---

## 7. Phase Five — Technical Implementation

First, inspect the existing workspace and determine whether a project structure or technology stack already exists.

Do not blindly replace existing configurations.

Choose the most suitable stack based on the existing environment.

Preferred direction:

- Next.js with TypeScript.
- React.
- Tailwind CSS.
- A suitable component library, if useful.
- Lucide icons.
- A lightweight content-management structure using local JSON, TypeScript objects, or Markdown.

These are preferences, not mandatory constraints. If the existing workspace uses a suitable alternative, evaluate it before making changes.

### Architecture Requirements

Separate:

1. UI components.
2. Layout components.
3. Project content.
4. Project metadata.
5. Images and media.
6. Navigation.
7. Utility functions.
8. Styling and design tokens.

Avoid hardcoding all project information directly into individual page components.

### Centralized Project Data

Create a reusable project data structure.

For example:

```ts
interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  category: string[];
  technologies: string[];
  features: string[];
  problem?: string;
  solution?: string;
  architecture?: string;
  contributions?: string[];
  status?: string;

  evidence: {
    level: 1 | 2 | 3 | 4;
    screenshots: string[];
    videos: string[];
    documentation: string[];
  };

  links: {
    github?: string;
    liveDemo?: string;
  };

  confidentiality: "public" | "restricted" | "review_required";
  featured: boolean;
}
```

Adjust this structure according to the actual project findings.

Important:
- Do not populate optional properties with fabricated values.
- Do not expose internal evidence classifications unnecessarily.
- Ensure missing links are omitted rather than rendered as empty buttons.
- Keep project content independent from UI implementation.

### Media Management

Create a structured directory for portfolio assets.

For example:

```text
public/
  images/
    projects/
      saji-nusantara/
      7oz-cafe-website/
      dev-battalion/
      egi-optics/
      egi-resources-holding/
      hadith-hotel-hms/
      hotel-kampoeng-indonesia/
      humble8/
      inventory-management-system/
      job-portal/
      job-talentio/
```

Use actual screenshots and visual assets from the original projects where appropriate.

If screenshots are missing:

- Determine whether a genuine application screenshot can be captured from a running local project.
- Do not fabricate an interface and present it as an actual screenshot.
- If the project cannot be run, use a professionally designed text-based case study or an actual verified architecture diagram.

Do not copy entire original project repositories into the portfolio website.

### PDF Integration

The existing PDF must be integrated into the website.

Provide:

- A prominent Download Portfolio PDF button.
- A PDF preview or embedded viewer if practical.
- A clear fallback link to open the PDF in a new tab.
- An appropriate filename for the public-facing PDF.

Before publishing, verify that the PDF does not contain confidential or sensitive information.

Do not modify the original PDF.

If a sanitized or optimized public-facing version is needed, create a separate copy.

### Performance and SEO

Implement:

- Optimized images.
- Lazy loading where appropriate.
- Efficient page rendering.
- Appropriate metadata.
- Open Graph metadata.
- Descriptive page titles.
- Semantic URLs.
- Sitemap.
- Robots.txt.
- Favicon.
- Structured metadata where appropriate.

Ensure the website loads quickly and does not depend on unnecessary third-party services.

---

## 8. Phase Six — Content Quality and Writing Standards

The website must use professional English as its primary language.

Use concise, natural, technically accurate English.

Avoid:
- Unnecessary buzzwords.
- Repetitive descriptions.
- Generic marketing statements.
- Overly complicated technical explanations.
- Unsubstantiated claims.
- Excessive first-person language.

Explain technical projects so that both technical and non-technical visitors can understand them.

For example, a project description should answer:

1. What is this project?
2. What problem does it solve?
3. What did I build or contribute?
4. What technologies did I use?
5. What makes the project technically interesting?

Use progressive disclosure:

- Project cards provide a short summary.
- Project detail pages provide deeper technical explanations.
- Technical diagrams and documentation provide additional depth.

Do not place every technical detail on the homepage.

---

## 9. Phase Seven — PDF and Website Content Consistency

The website and PDF portfolio should complement each other.

The PDF should remain accessible as a downloadable document.

The website should provide a more interactive and detailed presentation.

Ensure that:
- Project names are consistent.
- Project descriptions do not contradict one another.
- Technology stacks are consistent with verified implementation.
- Personal contributions are accurately represented.
- Project statuses are not misrepresented.

Where the PDF and actual source code differ, investigate the discrepancy instead of automatically preferring either source.

If the PDF describes a project that cannot be found in the supplied directories, do not discard it automatically. Include it in the inventory and determine whether it has sufficient supporting information for publication.

The goal is to incorporate the complete relevant portfolio from both sources, not merely the projects that happen to have local directories.

---

## 10. Phase Eight — Testing and Quality Assurance

After implementation, conduct a thorough quality check.

### Functional Testing

Verify:

- Navigation works.
- Project filtering works.
- Search works.
- Project detail pages load correctly.
- PDF download works.
- PDF preview works where implemented.
- External links work.
- Contact links work.
- Theme switching works if implemented.
- Mobile navigation works.
- No empty or broken action buttons exist.

### Content Testing

Verify:

- All identified portfolio projects are accounted for.
- No project descriptions are fabricated.
- No unsupported achievements or metrics are displayed.
- No fake GitHub or live-demo links exist.
- No confidential information is exposed.
- Project categories and technologies are accurate.
- Personal contributions are appropriately distinguished from team contributions.

### Technical Testing

Run the relevant:

- Linting.
- Type checking.
- Build process.
- Automated tests, where available.
- Responsive layout checks.

Fix all critical issues before considering the website complete.

### Final Review

Review the finished website from the perspective of:

1. A recruiter evaluating my technical profile.
2. A hiring manager looking for evidence of practical experience.
3. A potential freelance client evaluating my ability to deliver software.
4. A software engineer reviewing technical implementation.

The website should communicate value to all four audiences.

---

## 11. Final Deliverables

At completion, provide:

1. A fully implemented portfolio website.
2. A responsive design for desktop and mobile.
3. A complete project inventory.
4. A dedicated detail page for each publishable project.
5. A project evidence and verification report.
6. The integrated PDF portfolio.
7. A centralized project data structure.
8. A structured asset directory.
9. Technical documentation explaining how to run and maintain the website.
10. Deployment instructions for a platform such as Cloudflare Pages or Vercel, depending on the selected stack.

Create or update these documentation files:

```text
docs/
  project-audit.md
  project-evidence-report.md
  website-architecture.md
  content-verification.md
  deployment-guide.md
```

### Final Report

When finished, summarize:

- Which projects were discovered.
- Which projects were selected as featured projects.
- Which projects were included from the PDF.
- Which projects lack GitHub repositories.
- Which projects lack live demos.
- What alternative evidence was used.
- Which projects require additional information or approval.
- What technologies were used to build the website.
- How to run the website locally.
- How to build and deploy it.
- Any remaining limitations.

Do not claim that the website is deployed unless deployment has actually succeeded.

---

## 12. Execution Rules

Follow these rules throughout the task:

1. **Investigate before implementing.** Never design the entire website based solely on directory names.
2. **Use real project evidence.** Source code, documentation, screenshots, and the existing PDF must inform the content.
3. **Never fabricate.** Do not invent project features, technologies, metrics, clients, repositories, or deployment links.
4. **Preserve original projects.** Do not alter the supplied source directories.
5. **Prioritize clarity.** A visitor should understand each project's purpose within a few seconds.
6. **Prioritize quality over quantity.** Feature the strongest projects, but maintain an accessible catalog of the remaining verified portfolio.
7. **Handle missing evidence professionally.** Lack of a public GitHub repository must not automatically exclude a project.
8. **Avoid unnecessary complexity.** Build a maintainable portfolio rather than an oversized enterprise application.
9. **Make real progress.** Do not stop after generating a plan, audit report, or mockup.
10. **Verify the result.** The finished website must actually run and build successfully.

### Final Objective

Create a professional developer portfolio that represents the breadth of my software engineering work, demonstrates my practical technical capabilities, and gives recruiters, hiring managers, and potential clients a clear understanding of what I have built and what I can contribute.

The final website should be credible even when certain projects do not have public repositories or live demos.

**The quality of the presentation must never exceed the strength of the underlying evidence. Build trust through accurate information, genuine project demonstrations, and clear technical explanations.**