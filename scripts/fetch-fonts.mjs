#!/usr/bin/env node
// One-off vendoring of the web fonts, so the site serves them itself.
//
// Why: Google's CSS for Playfair Display / Dancing Script / Poppins carries no
// Greek at all and Cyrillic only for Playfair, so /el/, /bg/ and /ru/ lost the
// brand typography entirely. Self-hosting also removes the two Google origins
// every visitor's browser contacted before consenting to anything.
//
// Run:  node scripts/fetch-fonts.mjs      (writes fonts/*.woff2 + fonts/fonts.css)
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FONTS = join(ROOT, 'fonts');
mkdirSync(FONTS, { recursive: true });

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// family -> subsets worth shipping. Everything is unicode-range based, so a
// visitor only downloads the subsets their own page needs.
const FAMILIES = [
  { css: 'Playfair+Display:wght@600..800', name: 'Playfair Display', slug: 'playfair', subsets: ['latin', 'latin-ext', 'cyrillic'] },
  { css: 'Dancing+Script:wght@600..700', name: 'Dancing Script', slug: 'dancing', subsets: ['latin', 'latin-ext'] },
  { css: 'Poppins:wght@300;400;500;600;700', name: 'Poppins', slug: 'poppins', subsets: ['latin', 'latin-ext'] },
  // fallbacks carrying the scripts the brand fonts lack
  { css: 'Noto+Sans:wght@300..700', name: 'Noto Sans', slug: 'notosans', subsets: ['greek', 'greek-ext', 'cyrillic', 'cyrillic-ext'] },
  { css: 'Noto+Serif:wght@600..800', name: 'Noto Serif', slug: 'notoserif', subsets: ['greek', 'greek-ext'] },
  { css: 'Caveat:wght@600..700', name: 'Caveat', slug: 'caveat', subsets: ['cyrillic', 'cyrillic-ext'] },
];

const out = [];
let downloaded = 0;

for (const fam of FAMILIES) {
  const url = `https://fonts.googleapis.com/css2?family=${fam.css}&display=swap`;
  const css = await (await fetch(url, { headers: { 'User-Agent': UA } })).text();
  for (const block of css.split('/*').slice(1)) {
    const subset = block.slice(0, block.indexOf('*/')).trim();
    if (!fam.subsets.includes(subset)) continue;
    const body = block.slice(block.indexOf('*/') + 2);
    const src = (body.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
    if (!src) continue;
    const weight = (body.match(/font-weight:\s*([^;]+);/) || [])[1].trim();
    const range = (body.match(/unicode-range:\s*([^;]+);/) || [])[1].trim();
    const file = `${fam.slug}-${subset}-${weight.replace(/\s+/g, '_')}.woff2`;
    if (!existsSync(join(FONTS, file))) {
      writeFileSync(join(FONTS, file), Buffer.from(await (await fetch(src, { headers: { 'User-Agent': UA } })).arrayBuffer()));
      downloaded++;
    }
    out.push(`@font-face{font-family:'${fam.name}';font-style:normal;font-weight:${weight};font-display:swap;src:url(/fonts/${file}) format('woff2');unicode-range:${range}}`);
  }
}
writeFileSync(join(FONTS, 'fonts.css'), out.join('\n') + '\n');
console.log(`vendored ${downloaded} woff2 files, ${out.length} @font-face rules -> fonts/fonts.css`);
