# Seenivasan A — Portfolio

Personal portfolio site. Next.js 16 (App Router) + Tailwind CSS, statically exported and deployed to GitHub Pages.

## Stack

- Next.js 16 / React 19, static export (`output: "export"`)
- Tailwind CSS
- Framer Motion (scroll-triggered reveals)
- next-themes (dark/light mode, dark by default)

## Structure

- `src/lib/data.ts` — all content (experience, projects, skills, achievements). Edit this file to update the site; no need to touch components for content changes.
- `src/components/` — one component per section.
- `public/resume/` — resume PDF served at `/resume/Seenivasan_A_Resume.pdf`. Keep in sync with the `resume-builder` repo.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to ./out
```

Deploys automatically to GitHub Pages via `.github/workflows/nextjs.yml` on push to `main`.
