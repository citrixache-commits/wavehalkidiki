#!/usr/bin/env node
// Builds the whole site from the single source file _src/master.html.
//
//   _src/master.html  ->  index.html (EN) + el|ro|bg|sr|ru/index.html
//                     ->  assets/style.<hash>.css + assets/app.<hash>.js
//
// What the build does beyond translating:
//   * lifts the inline <style>/<script> into content-hashed files so every page
//     shares one cached copy and the CSP can forbid inline code entirely;
//   * rewrites every <img> into <picture> with AVIF/WebP sources when those
//     variants exist next to the JPEG;
//   * appends ?v=<content hash> to image URLs so they can be cached immutably
//     and still be replaced in place.
//
// Rerun after editing _src/master.html:  node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://waveshalkidiki.vercel.app';
const LANGS = ['el', 'ro', 'bg', 'sr', 'ru'];
const LASTMOD = '2026-07-24';   // bump when the content changes
const LOCALE = { en: 'en_US', el: 'el_GR', ro: 'ro_RO', bg: 'bg_BG', sr: 'sr_RS', ru: 'ru_RU' };
const HTMLLANG = { en: 'en', el: 'el', ro: 'ro', bg: 'bg', sr: 'sr-Latn', ru: 'ru' };
// the two faces that paint the headline and the body copy above the fold,
// per script, so they start downloading with the stylesheet instead of after it
const PRELOAD = {
  en: ['playfair-latin-600_800', 'poppins-latin-400'],
  ro: ['playfair-latin-600_800', 'poppins-latin-400'],
  sr: ['playfair-latin-600_800', 'poppins-latin-400'],
  el: ['notoserif-greek-600_800', 'notosans-greek-300_700'],
  bg: ['playfair-cyrillic-600_800', 'notosans-cyrillic-300_700'],
  ru: ['playfair-cyrillic-600_800', 'notosans-cyrillic-300_700'],
};

const master = readFileSync(join(ROOT, '_src', 'master.html'), 'utf8');
const hash = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 8);

/* ---------------------------------------------------------------- assets */

const cssMatch = master.match(/<style>([\s\S]*?)<\/style>/);
const jsMatch = master.match(/<script>\n([\s\S]*?)<\/script>\n<\/body>/);
if (!cssMatch || !jsMatch) throw new Error('could not locate the inline <style>/<script> blocks in _src/master.html');

// content hashes for every image the site can reference
const imgVersions = {};
for (const file of readdirSync(join(ROOT, 'images'))) {
  if (!/\.(jpg|png|webp|avif)$/.test(file)) continue;
  imgVersions['/images/' + file] = hash(readFileSync(join(ROOT, 'images', file)));
}
const versionOf = (url) => imgVersions[url] || '';
const hasModern = (base) => existsSync(join(ROOT, base.replace(/^\//, '') + '.avif')) && existsSync(join(ROOT, base.replace(/^\//, '') + '.webp'));

// the client-side renderer only ever injects the menu category images
const menuImages = [...jsMatch[1].matchAll(/"?img"?:\s*['"](\/images\/[a-z0-9-]+\.jpg)['"]/g)].map(m => m[1]);
const clientVersions = Object.fromEntries(menuImages.map(u => [u, imgVersions[u]]).filter(([, v]) => v));

let css = cssMatch[1].replace('/*__FONTS__*/', readFileSync(join(ROOT, 'fonts', 'fonts.css'), 'utf8'));
let js = jsMatch[1].replace(
  'const ASSET_V = window.__ASSET_V || {};',
  'const ASSET_V = ' + JSON.stringify(clientVersions) + ';'
);

const cssName = `style.${hash(css)}.css`;
const jsName = `app.${hash(js)}.js`;
const assetsDir = join(ROOT, 'assets');
if (existsSync(assetsDir)) rmSync(assetsDir, { recursive: true });
mkdirSync(assetsDir, { recursive: true });
writeFileSync(join(assetsDir, cssName), css);
writeFileSync(join(assetsDir, jsName), js);

/* ------------------------------------------------------------ transforms */

// intrinsic width of a JPEG/PNG, straight from the file header
const sizeCache = new Map();
function intrinsicWidth(relUrl) {
  if (sizeCache.has(relUrl)) return sizeCache.get(relUrl);
  const buf = readFileSync(join(ROOT, relUrl.replace(/^\//, '')));
  let width = 0;
  if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') {
    width = buf.readUInt32BE(16);
  } else {
    for (let i = 2; i < buf.length - 9;) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        width = buf.readUInt16BE(i + 7); break;
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  sizeCache.set(relUrl, width);
  return width;
}

// give every image that has smaller siblings a real srcset, with descriptors
// taken from the files themselves (so they can never drift)
function autoSrcset(html) {
  return html.replace(/<img\s([^>]*)>/g, (whole, attrs) => {
    if (/\ssrcset="/.test(attrs)) return whole;
    const src = (attrs.match(/src="([^"]+)"/) || [])[1];
    const m = src && src.match(/^\/images\/([a-z0-9-]+)-(\d+)\.(jpg|png)$/);
    if (!m) return whole;
    const [, stem, size, ext] = m;
    const candidates = [];
    for (const w of ['300', '500', '800', '1200']) {
      const url = `/images/${stem}-${w}.${ext}`;
      if (Number(w) <= Number(size) && existsSync(join(ROOT, url.replace(/^\//, '')))) candidates.push(url);
    }
    if (candidates.length < 2) return whole;
    const srcset = candidates.map(u => `${u} ${intrinsicWidth(u)}w`).join(', ');
    return `<img ${attrs.trim()} srcset="${srcset}">`;
  });
}

// <img src="/images/x.jpg" …>  ->  <picture> with AVIF + WebP sources.
// Every srcset candidate (and its width descriptor) is carried over, so a
// responsive image keeps all of its candidates in the modern formats too.
const q = (url) => (versionOf(url) ? `${url}?v=${versionOf(url)}` : url);

function toPicture(html) {
  return html.replace(/<img\s([^>]*)>/g, (whole, attrs) => {
    const src = (attrs.match(/\ssrc="([^"]+)"/) || attrs.match(/^src="([^"]+)"/) || [])[1];
    if (!src || !src.startsWith('/images/')) return whole;

    const srcsetAttr = (attrs.match(/\ssrcset="([^"]+)"/) || [])[1];
    const sizesAttr = (attrs.match(/\ssizes="([^"]+)"/) || [])[1];
    const candidates = (srcsetAttr ? srcsetAttr.split(',') : [src]).map(c => {
      const [url, ...desc] = c.trim().split(/\s+/);
      return { url, desc: desc.join(' ') };
    });

    const sources = [];
    for (const [type, ext] of [['image/avif', 'avif'], ['image/webp', 'webp']]) {
      const swapped = candidates.map(c => {
        const alt = c.url.replace(/\.(jpg|png)$/, '.' + ext);
        return existsSync(join(ROOT, alt.replace(/^\//, ''))) ? { url: alt, desc: c.desc } : null;
      });
      if (swapped.some(c => c === null)) continue; // only offer a format we have for every candidate
      const srcset = swapped.map(c => `${q(c.url)}${c.desc ? ' ' + c.desc : ''}`).join(', ');
      sources.push(`<source type="${type}" srcset="${srcset}"${sizesAttr ? ` sizes="${sizesAttr}"` : ''}>`);
    }
    if (!sources.length) return whole;
    return `<picture>${sources.join('')}<img ${attrs.trim()}></picture>`;
  });
}

// cache-bust every remaining relative image URL
function versionImages(html) {
  return html.replace(/"(\/images\/[a-z0-9-]+\.(?:jpg|png|webp|avif))"/g,
    (m, url) => (versionOf(url) ? `"${url}?v=${versionOf(url)}"` : m));
}

const attrEsc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function applyI18n(html, dict) {
  for (const [key, val] of Object.entries(dict)) {
    if (key.startsWith('_')) continue;
    const re = new RegExp(`(<(\\w+)([^>]*data-i18n="${key}"[^>]*)>)[\\s\\S]*?(</\\2>)`);
    html = html.replace(re, `$1${val}$4`);
  }
  // data-i18n-attr="alt:key"  /  "aria-label:key;title:key2"
  return html.replace(/<[a-z]+\s[^>]*data-i18n-attr="([^"]+)"[^>]*>/g, (tag, spec) => {
    for (const pair of spec.split(';')) {
      const [attr, key] = pair.split(':').map(x => x.trim());
      if (!attr || dict[key] === undefined) continue;
      const value = attrEsc(dict[key]);
      const has = new RegExp(`\\s${attr}="[^"]*"`);
      tag = has.test(tag) ? tag.replace(has, ` ${attr}="${value}"`) : tag.replace(/>$/, ` ${attr}="${value}">`);
    }
    return tag;
  });
}

const esc = (t) => t.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;');
const stripTags = (t) => t.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');

// eval the data structures out of the (already asset-ified) script
const I18N = eval('(' + js.match(/const I18N = (\{[\s\S]*?\n\});/)[1] + ')');
const MENU = eval('(' + js.match(/const MENU = (\[[\s\S]*?\n\]);/)[1] + ')');

function renderMenuHtml(lang) {
  return MENU.map(cat => {
    const img = cat.img ? `<div class="mc-img"><img src="${cat.img}" alt="" loading="lazy"></div>` : '';
    const rows = cat.items.map(it => {
      if (it.hdr) return `<li class="fm-hdr">${it.hdr[lang] || it.hdr.en}</li>`;
      const nm = it.n[lang] || it.n.en;
      const d = it.d ? `<div class="fm-desc">${it.d[lang] || it.d.en}</div>` : '';
      return `<li><div class="fm-row"><span class="nm">${nm}</span><span class="ld"></span><span class="pr">${it.p} €</span></div>${d}</li>`;
    }).join('');
    return `<div class="fm-card">${img}<h3><button type="button" class="fm-t" aria-expanded="true">${cat.t[lang] || cat.t.en}</button></h3><span class="script">${cat.s[lang] || cat.s.en}</span><ul>${rows}</ul></div>`;
  }).join('');
}

function menuSchema(lang) {
  return {
    '@type': 'Menu',
    '@id': BASE + '/#menu',
    name: 'Waves Coffee & Food menu',
    inLanguage: HTMLLANG[lang],
    hasMenuSection: MENU.map(cat => ({
      '@type': 'MenuSection',
      name: stripTags(cat.t[lang] || cat.t.en),
      hasMenuItem: cat.items.filter(it => !it.hdr).map(it => ({
        '@type': 'MenuItem',
        name: stripTags(it.n[lang] || it.n.en),
        ...(it.d ? { description: stripTags(it.d[lang] || it.d.en) } : {}),
        offers: { '@type': 'Offer', price: it.p, priceCurrency: 'EUR' }
      }))
    }))
  };
}

function graphFor(lang, path, dict) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': BASE + '/#website', url: BASE + '/', name: 'Waves Coffee & Food',
        publisher: { '@id': BASE + '/#restaurant' }, inLanguage: HTMLLANG[lang] },
      { '@type': 'WebPage', '@id': BASE + path + '#webpage', url: BASE + path,
        name: stripTags(dict._title), description: stripTags(dict._desc),
        isPartOf: { '@id': BASE + '/#website' }, about: { '@id': BASE + '/#restaurant' },
        inLanguage: HTMLLANG[lang], primaryImageOfPage: BASE + '/images/og-1200x630.jpg' },
      { '@type': 'Restaurant',
        '@id': BASE + '/#restaurant',
        name: 'Waves Coffee & Food',
        description: stripTags(dict._desc),
        url: BASE + '/',
        image: [BASE + '/images/fried-platter-800.jpg', BASE + '/images/octopus-grill-800.jpg', BASE + '/images/greek-salad-800.jpg'],
        servesCuisine: ['Greek', 'Seafood', 'Grill', 'Caf\u00e9'],
        priceRange: '\u20ac10\u201315',
        currenciesAccepted: 'EUR',
        telephone: '+302377071088',
        address: { '@type': 'PostalAddress', addressLocality: 'Ouranoupoli', postalCode: '630 75', addressRegion: 'Halkidiki', addressCountry: 'GR' },
        geo: { '@type': 'GeoCoordinates', latitude: 40.3255019, longitude: 23.9797725 },
        hasMap: 'https://maps.app.goo.gl/TWM8Gz17om45NjVWA',
        openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '05:30', closes: '22:00' }],
        hasMenu: menuSchema(lang),
        acceptsReservations: true,
        knowsLanguage: ['el', 'en', 'ro', 'bg', 'sr', 'ru'],
        sameAs: ['https://maps.app.goo.gl/TWM8Gz17om45NjVWA'] }
    ]
  };
}

function buildPage(lang) {
  const dict = I18N[lang];
  const path = lang === 'en' ? '/' : `/${lang}/`;
  let html = master;

  // head
  html = html.replace('<html lang="en">', `<html lang="${HTMLLANG[lang]}" data-lang="${lang}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(dict._title)}</title>`);
  html = html.replace(/(<meta name="description" id="meta-desc" content=")[^"]*(")/, `$1${esc(dict._desc).replace(/"/g, '&quot;')}$2`);
  html = html.replace(/(<link rel="canonical" id="canon" href=")[^"]*(")/, `$1${BASE}${path}$2`);
  html = html.replace(/(<meta property="og:url" id="og-url" content=")[^"]*(")/, `$1${BASE}${path}$2`);
  html = html.replace(/(<meta property="og:locale" id="og-locale" content=")[^"]*(")/, `$1${LOCALE[lang]}$2`);
  html = html.replace(/(<meta property="og:title" id="og-title" content=")[^"]*(")/, `$1${esc(dict._title).replace(/"/g, '&quot;')}$2`);
  html = html.replace(/(<meta property="og:description" id="og-desc" content=")[^"]*(")/, `$1${esc(dict._desc).replace(/"/g, '&quot;')}$2`);

  // body copy
  html = applyI18n(html, dict);

  // schema: localized entity URLs + page language
  html = html.replace(/<script type="application\/ld\+json" id="ld-restaurant">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="ld-restaurant">\n${JSON.stringify(graphFor(lang, path, dict), null, 1)}\n</script>`);
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: HTMLLANG[lang],
    mainEntity: [1, 2, 3, 4].map(i => ({
      '@type': 'Question', name: stripTags(dict['fq' + i]),
      acceptedAnswer: { '@type': 'Answer', text: stripTags(dict['fa' + i]) }
    }))
  };
  html = html.replace(/<script type="application\/ld\+json" id="ld-faq">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="ld-faq">\n${JSON.stringify(faq, null, 1)}\n</script>`);

  // pre-rendered marquee + full menu (so the content exists without JavaScript)
  // four copies: two were shorter than a wide viewport, so the band emptied out
  const seq = dict._strip.map(t => `<span>${t}</span><span class="sep">✦</span>`).join('');
  html = html.replace('<div class="strip-track" id="strip-track" aria-hidden="true"></div>',
    `<div class="strip-track" id="strip-track" aria-hidden="true">${seq.repeat(4)}</div>`);
  html = html.replace(/(<div class="fm-chips" id="fmchips"[^>]*>)<\/div>/,
    (m, open) => open + MENU.map((cat, i) => `<button type="button" data-cat="${i}">${cat.t[lang] || cat.t.en}</button>`).join('') + '</div>');
  html = html.replace('<div class="fullmenu" id="fullmenu"></div>', `<div class="fullmenu" id="fullmenu">${renderMenuHtml(lang)}</div>`);

  // inline code -> shared, content-hashed assets
  const preloads = PRELOAD[lang].map(f => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/${f}.woff2">`).join('\n');
  html = html.replace(/<style>[\s\S]*?<\/style>/, `${preloads}\n<link rel="stylesheet" href="/assets/${cssName}">`);
  html = html.replace(/<script>\n[\s\S]*?<\/script>\n<\/body>/, `<script src="/assets/${jsName}" defer></script>\n</body>`);

  html = versionImages(toPicture(autoSrcset(html)));

  const out = lang === 'en' ? join(ROOT, 'index.html') : join(ROOT, lang, 'index.html');
  if (lang !== 'en') mkdirSync(join(ROOT, lang), { recursive: true });
  writeFileSync(out, html);
  return html.length;
}

const kb = (n) => (n / 1024).toFixed(0) + ' KB';
console.log(`assets/${cssName} (${kb(css.length)})  assets/${jsName} (${kb(js.length)})`);
for (const lang of ['en', ...LANGS]) {
  const size = buildPage(lang);
  console.log(`built ${lang === 'en' ? '/' : '/' + lang + '/'} (${kb(size)}) — ${I18N[lang]._title}`);
}
// sitemap, generated so its alternates can never drift from the real page list
const ALL = ['en', ...LANGS];
const hreflangs = ALL.map(l => `    <xhtml:link rel="alternate" hreflang="${l === 'sr' ? 'sr-Latn' : l}" href="${BASE}${l === 'en' ? '/' : '/' + l + '/'}"/>`).join('\n')
  + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/"/>`;
writeFileSync(join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
  + ALL.map(l => `  <url>\n    <loc>${BASE}${l === 'en' ? '/' : '/' + l + '/'}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n${hreflangs}\n  </url>`).join('\n')
  + '\n</urlset>\n');

// a branded 404 instead of the host's plain-text default
const nf = I18N.en;
writeFileSync(join(ROOT, '404.html'), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${nf.nf_title} — Waves Coffee &amp; Food</title>
<meta name="robots" content="noindex">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="stylesheet" href="/assets/${cssName}">
</head>
<body>
<main id="main" class="nf-page">
  <span class="pill">OURANOUPOLI · HALKIDIKI</span>
  <h1>${nf.nf_title}</h1>
  <p class="nf-lead">${nf.nf_text}</p>
  <p><a class="btn btn-orange" href="/">${nf.nf_home}</a></p>
  <p class="nf-langs">${['el', 'ro', 'bg', 'sr', 'ru'].map(l => `<a href="/${l}/">${l.toUpperCase()}</a>`).join(' · ')}</p>
</main>
</body>
</html>
`);
console.log('wrote sitemap.xml and 404.html');
console.log('done');
