# AGENTS.md

Panduan singkat untuk agen/otomatisasi di repo ini. Aturan rinci ada di `.cursor/rules/`.

## Apa ini

Portofolio statis Farhan Nur Hakim. Next.js 16 App Router dengan `output: "export"`, di-deploy ke Cloudflare Pages (static, free plan). Tidak ada database, API, auth, atau analytics.

## Perintah

```bash
npm ci              # install + pasang pre-push hook
npm run dev         # http://localhost:3000
npm run verify      # lint + typecheck + build (gate sebelum push)
npx serve out       # preview hasil build statis
```

## Struktur

- `src/app/` — route, metadata, `robots.ts`, `sitemap.ts`
- `src/components/` — UI; tidak menyimpan fakta proyek
- `src/data/` — sumber konten tunggal (`projects.ts`, `profile.ts`, `site.ts`)
- `public/` — WebP proyek, PDF publik, `_headers`, favicon, OG image
- `docs/` — audit, evidence, arsitektur, verifikasi, deploy

## Aturan yang tidak boleh dilanggar

1. **Static export.** Jangan menambah route handler, server action, middleware, `cookies()`, `headers()`, atau ISR — build akan gagal.
2. **Konten dari data.** Tambah/ubah proyek di `src/data/projects.ts`, bukan di komponen.
3. **Bukti dulu.** Link hanya dirender jika URL terverifikasi. Jangan mengarang metrik, testimoni, atau kontribusi. Lihat `.cursor/rules/content-evidence.mdc`.
4. **Proyek asli read-only.** Folder `../*` di luar repo ini tidak boleh diubah.
5. **Mobile-first.** Uji 390px dan 1280px; tanpa geser samping; target ketuk 44px di ponsel.
6. **Tanpa secret.** Tidak ada token, URL internal, atau data klien di repo maupun situs.
7. **Git.** Branch `feat/`/`fix/` dari `develop`, Conventional Commits, tanpa trailer AI, PR ke `develop`, merge oleh manusia.

## Deploy

Push `main` → production. Push branch lain → preview. Build command `npm run build`, output `out`. Detail: `docs/deployment-guide.md`.
