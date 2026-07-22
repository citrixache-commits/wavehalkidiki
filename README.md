# Waves Coffee & Food — Ouranoupoli, Halkidiki

Website for **Waves Coffee & Food**, a beachfront taverna, grill & all-day café in Ouranoupoli, Halkidiki, Greece.

- **Live:** https://wavehalkidiki.vercel.app/
- **Google Maps:** https://maps.app.goo.gl/TWM8Gz17om45NjVWA — 4.9★ from 414 reviews
- Open every day 05:30–22:00 · +30 2377 071088

## Stack

Single static page (`index.html`) — no build step, no dependencies. Photos in `images/` are from the restaurant's public Google Maps listing, optimized to ≤1600px JPEG.

## Deploy

Hosted on Vercel as `wavehalkidiki`:

```bash
vercel build --prod --yes
CI=1 vercel deploy --prebuilt --prod --yes
```
