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
```

`npm run build` outputs a fully **prerendered** `dist/index.html` (real HTML for
crawlers / first paint) that the client then hydrates.

## Architecture

- `src/App.tsx` — assembles the page and mounts the effects hook.
- `src/components/*` — one component per section (Nav, Hero, Marquee, Manifesto,
  About, Skills, Work, Experience, Writing, CertsEducation, Contact, Footer).
- `src/hooks/usePortfolioEffects.ts` — faithful port of the original
  `componentDidMount` (scroll scrubbing, reveals, count-up, magnetic buttons,
  view-transition theme toggle, custom cursor, horizontal writing rail, timeline
  draw, marquee skew, hero spotlight), with proper React teardown.
- `src/styles/base.css` — the original `<style>` block verbatim, plus the
  `style-hover` → CSS `:hover` conversions and `prefers-reduced-motion` support.
- `src/entry-server.tsx` + `scripts/prerender.mjs` — static prerender (SSG).

## SEO / performance

- Prerendered static HTML + hydration.
- Full meta set: title, description, canonical, Open Graph, Twitter, theme-color.
- JSON-LD `Person` + `WebSite` structured data.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, SVG favicon, apple-touch-icon, OG image.
- Font `preconnect` + `display=swap`, portrait `preload`, lazy-loaded images,
  vendored React chunk, single CSS file.

## Notes

- Update the canonical domain in `index.html`, `sitemap.xml`, `robots.txt` and the
  JSON-LD if you deploy somewhere other than `https://prathameshpatil.in/`.
- Replace `public/og-image.png` with a purpose-made 1200×630 share image when ready.
