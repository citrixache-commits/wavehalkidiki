# Waves Coffee & Food — Ouranoupoli, Halkidiki

Website for **Waves Coffee & Food**, a beachfront taverna, grill and all-day café in Ouranoupoli, Halkidiki — the port village where the boats leave for Mount Athos.

- **Live:** https://waveshalkidiki.vercel.app/ — `wavehalkidiki.vercel.app` 308-redirects here
- **Languages:** EN `/` · EL `/el/` · RO `/ro/` · BG `/bg/` · SR `/sr/` · RU `/ru/` — six pre-rendered pages, a reciprocal hreflang cluster and a crawlable `<a href>` switcher
- **Google Maps:** https://maps.app.goo.gl/TWM8Gz17om45NjVWA — 4.9★ from 414 reviews
- Open every day 05:30–22:00 · +30 2377 071088

## How it is built

`_src/master.html` is the **only file you edit**: it holds the markup, the CSS, the JavaScript, the six translation dictionaries and the menu data. Everything else in the repo is generated:

```bash
node scripts/build.mjs      # -> index.html, el|ro|bg|sr|ru/index.html, assets/, sitemap.xml, 404.html
```

The build also:

- lifts the inline `<style>`/`<script>` into **content-hashed** `assets/style.<hash>.css` and `assets/app.<hash>.js`, shared by all six pages, so no page ships inline code and the CSP can forbid it outright;
- rewrites every `<img>` into `<picture>` with **AVIF and WebP** sources, deriving the `srcset` width descriptors from the image files themselves (300/500/800/1200 ladders);
- appends `?v=<content hash>` to image URLs, which makes the year-long `immutable` cache safe;
- emits the `@graph` structured data (WebSite + WebPage + Restaurant, with the **full 14-section, 98-item menu** as `Menu`/`MenuSection`/`MenuItem`) and the localized `FAQPage`;
- regenerates `sitemap.xml` (bump `LASTMOD` in the script) and a branded `404.html`.

Fonts are **self-hosted** (`fonts/`). `node scripts/fetch-fonts.mjs` re-vendors them: Playfair Display, Dancing Script and Poppins carry no Greek and almost no Cyrillic, so Noto Serif, Noto Sans and Caveat are shipped alongside them under `unicode-range`, and a visitor only downloads the subsets their own language needs. No request ever leaves the site's own origin.

## Deploy

```bash
node scripts/build.mjs
vercel build --prod --yes
CI=1 vercel deploy --prebuilt --prod --yes
```

`images/_originals/` keeps the full-size source photos; `.vercelignore` keeps them out of the upload.

## Still on the owner's side

Vercel is on the Hobby plan (commercial use needs Pro), there is no custom domain yet, the photo reuse rights from the Google Maps listing are not documented, the phone number and hours on TripAdvisor disagree with the ones here, and Search Console is not set up.
