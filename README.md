# Julia Di Costanzo — Personal Portfolio

A Next.js (App Router) personal site styled to match [swaaz.dev](https://swaaz.dev/): light canvas, giant `vh` typography, experience timeline, grayscale project imagery, and a clubs carousel.

**Live site:** [https://juliadc.dev](https://juliadc.dev)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/).

### Preview the static export

```bash
npm run build
npx --yes serve out
```

Then open the URL `serve` prints (site root).

## Edit content

Almost all copy, links, and image paths live in one file:

**[`src/content/site.ts`](src/content/site.ts)**

1. Replace `[Your …]` / `TODO` placeholders with your bio, roles, projects, and contact email.
2. Swap images under `public/`:
   - `public/portrait.svg` → your portrait (PNG/JPG also fine; update the path in `site.ts`)
   - `public/projects/project-*.svg` → project screenshots
   - `public/clubs/club-*.svg` → club/org logos
   - `public/icons/` → optional social icon swaps
3. Save and refresh — components only read from `site.ts`.

## Stack

- Next.js App Router + TypeScript
- CSS Modules + `app/globals.css` tokens (no styled-components / Tailwind)
- CSS-only motion (chip/dot `0.3s`, image grayscale `0.5s`)
- Static export (`output: 'export'`) for GitHub Pages

## Deploy (GitHub Pages + custom domain)

This repo deploys via GitHub Actions (`.github/workflows/deploy-pages.yml`) on every push to `main`. The workflow builds the Next.js static export into `out/` and uploads it with the official Pages actions. `public/CNAME` keeps the custom domain (`juliadc.dev`) in sync with GitHub Pages.

### One-time repo setting

In the GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

### DNS

Point the apex domain at GitHub Pages with A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

And/or set `www` as a CNAME to `sniper7jd.github.io`.

After DNS verifies in **Settings → Pages**, enable **Enforce HTTPS**.

Live URL: `https://juliadc.dev`

> This project is intentionally separate from `ipl_rag_system` and `subway-mate`.
