# Julia Di Costanzo — Personal Portfolio

A Next.js (App Router) personal site styled to match [swaaz.dev](https://swaaz.dev/): light canvas, giant `vh` typography, experience timeline, grayscale project imagery, and a clubs carousel.

## Run locally

```bash
cd /home/ubuntu/julia-di-costanzo   # or your clone path
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Edit content

Almost all copy, links, and image paths live in one file:

**[`src/content/site.ts`](src/content/site.ts)**

1. Replace `[Your …]` / `TODO` placeholders with your bio, roles, skills, projects, and contact email.
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

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com). Default Next.js settings work.

> This project is intentionally separate from `ipl_rag_system`.
