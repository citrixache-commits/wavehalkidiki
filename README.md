# Waves Coffee & Food — Ouranoupoli, Halkidiki

Website for **Waves Coffee & Food**, a beachfront taverna, grill & all-day café in Ouranoupoli, Halkidiki, Greece.

- **Live (canonical):** https://waveshalkidiki.vercel.app/ — `wavehalkidiki.vercel.app` 308-redirects here
- **Languages:** EN `/` (default) · EL `/el/` · RO `/ro/` · BG `/bg/` · SR `/sr/` · RU `/ru/` — pre-rendered static pages with hreflang; nav switcher navigates between them
- **Google Maps:** https://maps.app.goo.gl/TWM8Gz17om45NjVWA — 4.9★ from 414 reviews
- Open every day 05:30–22:00 · +30 2377 071088

## Stack

Static site, no dependencies. **`_src/master.html` is the source of truth** (embedded i18n dictionaries + menu data); `node scripts/build.mjs` pre-renders the EN root `index.html` and the five language pages `el/ ro/ bg/ sr/ ru/` — never edit those outputs by hand. Photos in `images/` are from the restaurant's public Google Maps listing (≤1600px JPEG + 800px variants for `srcset`). SEO: canonical + hreflang cluster, `robots.txt`, `sitemap.xml`, Restaurant + FAQPage JSON-LD; redirects/headers in `vercel.json`.

## Deploy

Hosted on Vercel as `wavehalkidiki`:

```bash
node scripts/build.mjs
vercel build --prod --yes
CI=1 vercel deploy --prebuilt --prod --yes
```
