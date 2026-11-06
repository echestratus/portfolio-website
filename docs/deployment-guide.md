# Deployment Guide — Cloudflare Pages (Free Plan)

This project is configured for **static export**. Cloudflare Pages serves the generated `out/` folder directly. No Node server, no Pages Functions, no Worker, and no database are involved in production.

## Why this fits the free plan

- **Static assets only.** The free plan serves static requests and bandwidth without a request cap.
- **No Functions.** The site never calls a Pages Function, so the daily Worker request quota is untouched.
- **Files:** 203 files (limit is 20,000 per deployment).
- **Largest file:** the portfolio PDF at 4.2 MB (limit is 25 MiB per file).
- **No server-side runtime**, so there is nothing to cold-start or bill.

Cloudflare's published limits can change. Check the current [Pages limits](https://developers.cloudflare.com/pages/platform/limits/) before relying on exact numbers; the architecture here stays well inside them.

## Prerequisites

- Node.js **22** (Next.js 16 requires ≥ 20.9).
- npm (a `package-lock.json` is committed).
- A GitHub or GitLab repository for this folder, or the `wrangler` CLI for a direct upload.

## Local verification

```bash
npm ci            # also installs the pre-push hook
npm run verify    # lint + typecheck + build
```

The build must produce:

```text
out/
  index.html
  projects/index.html
  projects/job-talentio/index.html
  404.html
  _headers
  farhan-nur-hakim-resume.pdf
  farhan-nur-hakim-portfolio.pdf
  robots.txt
  sitemap.xml
```

Preview the exact production output:

```bash
npx serve out
# or
python -m http.server 4321 --directory out
```

## Option A — Git integration (recommended, $0)

1. The repository is already published: `echestratus/portfolio-website`.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select `echestratus/portfolio-website`.
4. Use these build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` if offered, otherwise `None` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` (leave empty) |
   | Production branch | `main` |

   Branch model: `main` is production; `develop` and any `feat/*` or `fix/*`
   branch produce a preview deployment under `*.pages.dev`. Production deploys
   only from `main`.

5. Add environment variables under **Settings → Environment variables** (Production **and** Preview):

   | Variable | Value |
   |---|---|
   | `NODE_VERSION` | `22` |
   | `NEXT_PUBLIC_SITE_URL` | `https://farhan-nur-hakim.pages.dev` |

   `NEXT_PUBLIC_SITE_URL` only affects canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`. The site builds without it, but the default placeholder should be replaced before sharing the link.

6. Save and deploy. The first build produces a `*.pages.dev` URL.

### Current project

| Field | Value |
|---|---|
| Dashboard name | `farhan-nur-hakim` |
| Production URL | https://farhan-nur-hakim.pages.dev |
| Build command | `npm run build` |
| Output directory | `out` |
| Production branch | `main` |
| Node | 22 |

The project was created through the API with a GitHub source, so every push to `main` starts a production build and every other branch starts a preview build.

### Do not connect this repo as a Worker

Connecting the same repository through **Workers & Pages → Create → Worker → Connect to Git** fails, and the error is easy to misread as a code defect:

```text
X [ERROR] Missing entry-point to Worker script or to assets directory
```

That happens because a Workers build finishes with `npx wrangler deploy`, which needs a `main` entry point or an `[assets]` directory. `wrangler.toml` in this repo only declares `pages_build_output_dir = "out"`, a Pages-only key that `wrangler deploy` ignores. The repository is built for Pages and should never be wired to a Worker build. If a stray Worker exists, delete it in **Workers & Pages → the Worker → Settings → Delete**; a Worker with no assets binding answers 404 on `*.workers.dev`.

### If the build fails

- **`next: not found`** — `npm ci` was skipped or the lockfile is out of sync. Use `npm ci` as the install command (Pages runs it automatically when `package-lock.json` exists).
- **Node version error** — set `NODE_VERSION=22`. The repo also contains `.nvmrc` and `.node-version`.
- **Output directory not found** — the build must finish successfully and create `out/`. Check that `next.config.ts` still contains `output: "export"`.
- **404 on `/projects/foo/`** — `trailingSlash: true` must remain enabled; all internal links already include the slash.
- **`Missing entry-point to Worker script or to assets directory`** — the repo is attached to a Worker build instead of a Pages project. See the section above.

## Option B — Direct upload with Wrangler

Useful when the repository must stay private or you want to ship without a Git connection.

```bash
npm run build
npx wrangler@latest pages project create farhan-nur-hakim
npx wrangler@latest pages deploy out --project-name farhan-nur-hakim
```

`wrangler.toml` already sets `pages_build_output_dir = "out"`, so after the first creation this is enough:

```bash
npx wrangler@latest pages deploy
```

Direct uploads do not consume the monthly Git-build allowance. Wrangler asks you to authenticate in a browser the first time.

## Custom domain

1. Pages project → **Custom domains → Set up a domain**.
2. If the domain is on Cloudflare, DNS is created automatically; otherwise add the provided `CNAME`.
3. Update `NEXT_PUBLIC_SITE_URL` to the final `https://` origin and redeploy so metadata and the sitemap match.
4. Optional: set a redirect from `www` to the apex domain, or vice versa.

HTTPS is provisioned automatically and is included in the free plan.

## What Cloudflare serves

- `public/_headers` is copied to `out/_headers`. It adds:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` restrictions
  - immutable caching for `/_next/static/*`
  - a 7-day cache for project images
  - inline PDF delivery with a filename
- `404.html` is used automatically for unknown paths.
- Push-to-preview deployments are created for non-production branches (these count toward the monthly build allowance).

## Post-deploy checklist

- [ ] `https://<domain>/` returns 200 and the dark/light toggle persists after reload.
- [ ] `/projects/` search, category chips, and the technology filter work.
- [ ] All 18 `/projects/<slug>/` pages load and have a single `h1`.
- [ ] The resume PDF downloads from the header, hero, and contact section.
- [ ] The portfolio PDF downloads from the header, hero, and contact section.
- [ ] Both PDFs open with a selectable text layer (resume must remain ATS-parseable).
- [ ] `/robots.txt` and `/sitemap.xml` return 200 and list the final domain.
- [ ] `og.png` resolves and social previews render.
- [ ] No mixed-content or console errors on mobile.
- [ ] Every external project link still resolves (see `project-evidence-report.md`).

A quick automated pass:

```bash
curl -sI https://<domain>/ | head -n 1
curl -s https://<domain>/sitemap.xml | head
curl -sI https://<domain>/farhan-nur-hakim-portfolio.pdf | head -n 5
```

## Verified locally

The export was tested with `wrangler pages dev out` (Wrangler 4.158.0) before delivery:

| Check | Result |
|---|---|
| `GET /` | 200 |
| `GET /projects/` | 200 |
| `GET /projects/job-talentio/` | 200 |
| `GET /projects` | 308 → `/projects/` |
| `GET /nope/` | 404 with the custom `404.html` |
| `GET /sitemap.xml`, `/robots.txt` | 200 |
| `GET /farhan-nur-hakim-resume.pdf` | 200, `application/pdf`, inline disposition |
| `GET /farhan-nur-hakim-portfolio.pdf` | 200, `application/pdf`, inline disposition |
| `_headers` | 5 valid rules parsed and applied |
| `/_next/static/*` | `Cache-Control: public, max-age=31536000, immutable` |
| Functions | "No Functions. Shimming…" — none are deployed |

## Rollback

Pages keeps every deployment. Open **Deployments**, pick the last known-good build, and choose **Rollback**. No rebuild is required.

## Cost

With this configuration the expected cost is **$0/month**: static hosting, unlimited bandwidth, automatic HTTPS, and no Functions usage. The only metered resource is the number of Git-triggered builds (500/month on the free plan at the time of writing), which a portfolio will not approach.

## Other hosts

The same `out/` folder works on Vercel, Netlify, GitHub Pages, or any static host. On GitHub Pages, set `basePath` and `assetPrefix` to the repository name, or use a custom domain, because project sites are served from a subpath.
