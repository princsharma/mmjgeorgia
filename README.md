# Medical Marijuana Card Georgia

Marketing website for **medicalmarijuanacardgeorgia.com** — a Georgia
Medical Marijuana Card service. Patients with qualifying conditions are
evaluated and approved online by Georgia-licensed physicians, then
receive their medical marijuana card.

Part of a multi-state network that shares one brand color system (the
parent site is Pennsylvania). Layout, typography pairing, and motion are
deliberately different from the parent — palette is identical.

## Stack

- Next.js 16 (App Router, TypeScript)
- React 19, React DOM 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `motion` (Framer Motion modern package)
- `react-hook-form` + `zod` + `@hookform/resolvers`
- `lucide-react`
- `@fontsource/inter` fallback, `next/font/google` for Fraunces + Inter
- ESLint 9 + `eslint-config-next`

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | What it does                                |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the dev server                        |
| `npm run build` | Production build                            |
| `npm run start` | Start the production server                 |
| `npm run lint`  | Lint with ESLint                            |

## Project map

- `app/` — App Router pages, layout, robots, sitemap
- `components/landing/` — Homepage sections (hero, conditions, etc.)
- `components/motion/` — Reusable motion primitives
- `components/header/`, `components/footer/`, `components/contact/`
- `lib/` — SEO, form schema, utility helpers
- `public/assets/` — SVG illustrations and placeholders
- `types/` — Ambient type declarations (e.g. GTM dataLayer)

## Accessibility

- Single `<h1>` per page; logical heading order
- "Skip to main content" link
- All animations respect `prefers-reduced-motion`
- Visible emerald focus rings on every interactive element
- Form errors announced via `aria-live="polite"`

## SEO

- Metadata helper at `lib/seo.ts`
- Five JSON-LD blocks on the homepage (MedicalOrganization, WebSite,
  FAQPage, HowTo, MedicalBusiness w/ AggregateRating + Reviews)
- `app/robots.ts` + `app/sitemap.ts`
- GTM placeholder `GTM-XXXXXXXX` in `app/layout.tsx`

## Brand

Identical palette to the parent Pennsylvania site:

| Token                | Value                          |
| -------------------- | ------------------------------ |
| `--color-accent`     | `#20B780` (emerald)            |
| `--color-brand-dark` | `#033c3f` (deep teal)          |
| `--color-brand-deeper` | `#002124` (deepest)          |

Differentiation from the PA parent:

- Centered hero (not split with form)
- Fraunces serif paired with Inter (PA uses Inter alone)
- Reordered sections with dedicated form band, ExpertCare dark panel,
  horizontal pricing card, and top-down mobile menu
- Full motion-based reveals, parallax, counters, marquee, accordion
