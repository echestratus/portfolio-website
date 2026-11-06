# Website Architecture

## Summary

| Concern | Decision |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 4 with CSS design tokens |
| Icons | `lucide-react` |
| Rendering | **Fully static export** (`output: "export"`) |
| Output directory | `out/` |
| Hosting | Cloudflare Pages, static assets only, free plan |
| Server runtime at request time | None |
| Database / API | None |
| Fonts | System font stack — no third-party font requests |
| Analytics | None |

The site intentionally has no server-side features. That makes the Cloudflare Pages deployment a pure static upload: unlimited requests and bandwidth on the free plan, no Functions quota, no Node runtime in production.

## Why static export

Cloudflare Pages can run Next.js SSR through the OpenNext adapter, but that requires a Worker runtime and consumes the Workers free-plan request quota. This portfolio does not need per-request rendering, so `output: "export"` is simpler, faster, and cheaper:

- Every route is pre-rendered at build time.
- Images are pre-sized WebP files served directly (`images.unoptimized = true` because the Next.js optimizer needs a server).
- There are no API routes, middleware, cookies, or dynamic search parameters that require a server.
- The whole deployment is a folder of HTML, CSS, JS, images, and one PDF.

## Routes

| Route | Type | Source |
|---|---|---|
| `/` | Static | `src/app/page.tsx` |
| `/projects/` | Static | `src/app/projects/page.tsx` |
| `/projects/[slug]/` | Pre-rendered (17 pages) | `src/app/projects/[slug]/page.tsx` + `generateStaticParams` |
| `/404.html` and `/404/` | Static | `src/app/not-found.tsx` |
| `/robots.txt` | Static at build time | `src/app/robots.ts` |
| `/sitemap.xml` | Static at build time | `src/app/sitemap.ts` |

`trailingSlash: true` is enabled so every internal link ends with `/`, matching Cloudflare Pages' directory-index behaviour (`/projects/foo/` → `/projects/foo/index.html`).

## Directory structure

```text
src/
  app/
    layout.tsx            Root layout, metadata, theme bootstrap, JSON-LD
    page.tsx              Home: hero, selected work, about, experience, skills, contact
    globals.css           Tailwind import, design tokens, reveal animation
    projects/
      page.tsx            Searchable and filterable catalog
      [slug]/page.tsx     Static project case studies
    robots.ts
    sitemap.ts
    not-found.tsx
  components/
    site-header.tsx       Sticky navigation, mobile menu, theme toggle
    site-footer.tsx
    hero.tsx
    project-card.tsx
    project-explorer.tsx  Client-side search/filter
    reveal.tsx            IntersectionObserver reveal, reduced-motion safe
    section-heading.tsx
    theme-toggle.tsx
  data/
    site.ts               Site identity, contact links, navigation
    project-types.ts      Project interface
    projects.ts           The single source of truth for project content
    profile.ts            About, capabilities, skills, experience, education
  lib/
    utils.ts
public/
  images/projects/...     WebP project screenshots
  farhan-nur-hakim-portfolio.pdf
  favicon.svg
  apple-touch-icon.png
  og.png
  _headers                Cloudflare Pages response headers
docs/                     Audit, evidence, architecture, verification, deployment
```

## Content model

Project content lives in `src/data/projects.ts` and is typed by `src/data/project-types.ts`. UI components never hardcode project facts. Optional fields (`problem`, `solution`, `architecture`, `contributions`, `status`, `links`) are omitted when unsupported, and the UI conditionally renders only what exists. This is what prevents empty or fake buttons.

Key rules enforced by the model:

- `links.github` and `links.liveDemo` are only set when a URL was verified.
- `evidence.note` states where the visuals and claims come from.
- `confidentiality` controls whether an "internal system" badge is shown.
- `featured` controls the homepage selection.

## Design system

- CSS custom properties for background, surface, line, text, muted text, accent, and shadows.
- Dark theme is the default; light theme follows `prefers-color-scheme` unless the visitor chooses one.
- A tiny inline script applies the stored theme **before paint** to avoid a flash.
- Typography: system UI for prose, system monospace for labels, metadata, and code-like details.
- Layout: max width 6xl, generous vertical rhythm, hairline borders instead of card shadows.
- Motion: 600 ms fade/translate reveal, hover transitions, and a full `prefers-reduced-motion` override.
- Accessibility: skip link, semantic landmarks, one `h1` per page, visible focus rings, labelled search and select controls, `aria-pressed` filter chips, and `aria-current` navigation.

## Performance

- No web font downloads.
- No third-party scripts, analytics, or embeds.
- Project images are WebP at ≤1800 px and are lazy-loaded by `next/image` by default (priority only on the hero card and detail cover).
- Measured export: **183 files, 20.9 MB total including the 14.7 MB PDF**; 6.8 MB excluding the PDF.
- Static HTML means no server round trip beyond the CDN edge.

## SEO

- Per-page titles and descriptions through the Metadata API.
- Canonical URLs based on `NEXT_PUBLIC_SITE_URL`.
- Open Graph and Twitter cards with a generated 1200×630 `og.png`.
- `Person` JSON-LD on every page.
- `robots.txt` and `sitemap.xml` generated at build time from the same project data.
- Semantic URLs with trailing slashes.

## Accessibility and touch targets

Verified with a scripted audit at a 390 px viewport: every interactive element
(links, buttons, inputs, selects) is at least 44×44 px, except the visually
hidden skip link, which expands on focus. No page has horizontal overflow at
390 px or 1280 px.

- Header icon buttons are 44×44 px on mobile and 36×36 px from `sm` upward.
- Filter chips and the search/select controls are 44 px tall on mobile.
- Detail-page action buttons and footer links meet the same minimum.

## Cloudflare-specific files

- `public/_headers` — security headers, immutable caching for `/_next/static/*`, PDF cache policy.
- `wrangler.toml` — optional config for direct uploads (`pages_build_output_dir = "out"`).
- No `_redirects` file is needed: the site has no legacy URLs, and Pages resolves directory indexes automatically.
- No `functions/` directory, so Pages will not create a Worker.

## Maintenance

- Add a project: append an object to `projects` in `src/data/projects.ts`, add WebP images under `public/images/projects/<slug>/`, rebuild. The sitemap, catalog, filters, and detail page are generated automatically.
- Change copy: edit the data file, not the components.
- Update the PDF: replace `public/farhan-nur-hakim-portfolio.pdf` with a sanitized copy and keep the original outside the site.
- Change the domain: set `NEXT_PUBLIC_SITE_URL` in the Cloudflare Pages build environment and rebuild.
