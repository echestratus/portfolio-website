# Farhan Nur Hakim — Portfolio

A static portfolio website for fullstack, backend, and software-engineering work. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, exported as static HTML and deployable on **Cloudflare Pages for free**.

Repository: [echestratus/portfolio-website](https://github.com/echestratus/portfolio-website)

## Quick start

```bash
npm ci
npm run dev        # http://localhost:3000
npm run verify     # lint + typecheck + build (the pre-push gate)
npx serve out      # preview the production output
```

`npm ci` installs a `pre-push` hook that runs `npm run verify`. Skip it only with
`PORTFOLIO_SKIP_VERIFY=1` in an agreed emergency. The hook is not installed inside
Cloudflare Pages builds.

## Repository workflow

- `main` — production. Push here and Cloudflare Pages builds the live site.
- `develop` — integration. Every other branch deploys as a preview.
- Work happens on `feat/*` or `fix/*` branches created from `develop`.
- Commits follow Conventional Commits and carry no AI co-author trailer.
- Pull requests target `develop`; a human merges. `develop` → `main` is also a
  human decision.

Rules for agents live in `.cursor/rules/` and `AGENTS.md`.

## Stack

- Next.js 16 App Router with `output: "export"`
- React 19 + TypeScript
- Tailwind CSS 4 with CSS custom-property design tokens
- `lucide-react` icons
- No database, API, server runtime, analytics, or external font requests

## Content

All project and profile content is centralized:

- `src/data/projects.ts` — 17 project case studies
- `src/data/project-types.ts` — typed schema
- `src/data/profile.ts` — about, capabilities, skills, experience, education
- `src/data/site.ts` — identity, contact links, navigation

The site only renders links and claims that are supported by the audit. See `docs/project-evidence-report.md` for the per-project evidence matrix.

## Deploy to Cloudflare Pages

Live: **https://farhan-nur-hakim.pages.dev**

1. Push this repository to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command `npm run build`; output directory `out`.
4. Production branch `main`. Every other branch becomes a preview deployment.
5. Environment variables:
   - `NODE_VERSION=22`
   - `NEXT_PUBLIC_SITE_URL=https://farhan-nur-hakim.pages.dev`
6. Deploy.

Do not connect this repository as a **Worker**. A Workers build ends in
`npx wrangler deploy`, which fails with `Missing entry-point to Worker script or
to assets directory` because the repo only declares `pages_build_output_dir`.
Full instructions, limits, verification checklist, and direct-upload commands: [`docs/deployment-guide.md`](docs/deployment-guide.md).

## Project structure

```text
src/app/            routes, metadata, robots, sitemap
src/components/     layout and UI components
src/data/           content and typed project model
public/             images, PDF, favicon, OG image, _headers
docs/               audit, evidence, architecture, verification, deployment
```

## Documentation

- [Project audit](docs/project-audit.md)
- [Project evidence report](docs/project-evidence-report.md)
- [Content verification](docs/content-verification.md)
- [Website architecture](docs/website-architecture.md)
- [Deployment guide](docs/deployment-guide.md)
- [Project synchronization report](docs/project-sync-report.md)

## Notes

- Two documents are published: an ATS-friendly resume (`public/farhan-nur-hakim-resume.pdf`) and a portfolio deck (`public/farhan-nur-hakim-portfolio.pdf`). Both are generated from the HTML sources in `documents/` with `npm run build:documents`, so the site, the resume, and the deck stay in sync.
- The original portfolio PDF supplied by the author is preserved at the workspace root and is not modified.
- `hotel-kampoeng-indonesia` is included on the author's explicit confirmation that it was delivered for EGI Resources' Kampoeng Indonesia property business. Its Git history contains no attributable commits, and the project page says so.
- Internal hotel and inventory systems are described without public deployment links. Addresses, hostnames, and credentials from the on-premise infrastructure engagement are not published.
- Employment dates and company names come from the author's CV; project-to-employer mapping comes from the author's brief and is stated per project.
