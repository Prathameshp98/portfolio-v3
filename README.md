# Prathamesh Patil — Portfolio (React + Vite)

A pixel-perfect React + Vite + TypeScript port of the `Portfolio.dc.html` design —
every section, inline style, keyframe, scroll animation, custom cursor, theme
toggle and responsive breakpoint preserved 1:1, with SEO and performance tuning.

## Scripts

```bash
npm install
npm run dev        # Vite dev server (SPA)
npm run build      # tsc + client build + SSR build + static prerender (SSG)
npm run build:spa  # build without the prerender step
npm run preview    # serve the production build locally

npm run typecheck  # tsc --noEmit
npm run lint       # ESLint (correctness/style)
npm run complexity # ESLint complexity gate (cyclomatic + cognitive + depth)
npm run verify     # typecheck + lint + complexity
```

`npm run build` outputs a fully **prerendered** `dist/index.html` (real HTML for
crawlers / first paint) that the client then hydrates.

A **Husky pre-commit hook** (`.husky/pre-commit`) runs `typecheck` and then
`lint-staged`, which lints + complexity-checks the staged `.ts/.tsx` files. Commits
are blocked on any type error, lint error, or a function exceeding the complexity
thresholds (cyclomatic 15, cognitive 15, depth 4).

## Architecture

```
src/
  main.tsx / entry-server.tsx   # client hydrate + SSR entry
  App.tsx                       # composes sections + mounts the effects hook
  components/
    sections/                   # one component per page section
    ui/                         # shared atoms (Eyebrow, SectionTitle, Overlays)
  animations/                   # one module per behaviour (SRP), see below
  data/                         # all content (projects, posts, skills, …)
  types/                        # shared content types
  lib/                          # tokens (fonts/palette) + animation math
  styles/base.css               # original <style> block + hover/reduced-motion
```

**Separation of concerns**

- **Content** lives in `src/data/*` (typed by `src/types/content.ts`), so copy and
  links are edited in one place — components just map over the data.
- **Design tokens** (`src/lib/tokens.ts`) hold the brand fonts + accent palette;
  theme colours stay as CSS vars in `base.css` because they switch with the theme.
- **Animations** are split by single responsibility under `src/animations/*`
  (`navigation`, `theme`, `reveal`, `stagger`, `countUp`, `cursor`, `magnetic`,
  `tilt`, `heroName`, `scrollFx`, `scrub`, `toolkit`, `marquee`, `projectPreview`,
  `heroSpotlight`). Each is `init(ctx)` and registers listeners/rAF/observers on a
  shared `EffectContext` that guarantees teardown. `usePortfolioEffects` only owns
  the lifecycle; `animations/index.ts` composes the modules.

## SEO / performance

- Prerendered static HTML + hydration.
- Full meta set: title, description, canonical, Open Graph, Twitter, theme-color.
- JSON-LD `Person` + `WebSite` structured data.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, SVG favicon, apple-touch-icon, OG image.
- Self-hosted variable fonts (`public/fonts/`, preloaded), lazy-loaded images,
  vendored React chunk, single CSS file, `prefers-reduced-motion` support.

## Notes

- Update the canonical domain in `index.html`, `sitemap.xml`, `robots.txt` and the
  JSON-LD if you deploy somewhere other than `https://prathameshpatil.in/`.
- Replace `public/og-image.png` with a purpose-made 1200×630 share image when ready.
