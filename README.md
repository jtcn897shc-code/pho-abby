# Savanna Roofing Ltd. — one-page site

Astro static one-pager for a Metro Vancouver roofing company. Built from the
Destura one-pager playbook.

> ⚠ **Template build — do not publish as-is.** The phone number is a reserved
> fictional number, the testimonials are flagged samples, and most credentials
> are placeholder. `noindex` is set. Work through `DISCOVERY.md` before launch.

## Where things live

| File | What it holds |
|---|---|
| `src/data/site.ts` | **All copy and business facts.** Edit here, never in components. |
| `src/data/images.ts` | Every image on the site. Set `src` to swap a placeholder for a real photo. |
| `src/styles/tokens.css` | Design tokens (OKLCH). Read the contrast rule at the top before changing a colour. |
| `DESIGN.md` | The visual contract — palette roles, type scale, component rules. |
| `PRODUCT.md` | Who this is for, the argument the site makes, anti-references. |
| `DISCOVERY.md` | Confirmed facts vs. open questions for the client. |

Sections are one component each in `src/components/`, composed in
`src/pages/index.astro`.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npx astro dev --background` | Start the dev server on `localhost:4321` |
| `npx astro dev stop` / `status` / `logs` | Manage the background dev server |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |

The site is served under a base path (`/savanna.roofing`) for the GitHub Pages
preview, so the local URL is `http://localhost:4321/savanna.roofing/`.

## Before launch

1. Replace every `TODO:` in `src/data/site.ts` — the fictional phone number
   first.
2. Replace or delete the sample testimonials.
3. Wire `quoteIntake.endpoint` to a form service that accepts photo uploads, or
   leave the checklist + Messenger fallback.
4. Drop real photos into `src/data/images.ts`.
5. Set `site.url` to the real domain, delete `base` in `astro.config.mjs`,
   rename the repo, and remove the `noindex` meta in `src/layouts/Base.astro`.
