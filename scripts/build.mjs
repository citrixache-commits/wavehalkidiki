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
const LOCALE = { en: 'en_US', el: 'el_GR', ro: 'ro_RO', bg: 'bg_BG', sr: 'sr_RS', ru: 'ru_RU' };
const HTMLLANG = { en: 'en', el: 'el', ro: 'ro', bg: 'bg', sr: 'sr-Latn', ru: 'ru' };

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
const menuImages = [...jsMatch[1].matchAll(/img:\s*'(\/images\/[a-z0-9-]+\.jpg)'/g)].map(m => m[1]);
const clientVersions = Object.fromEntries(menuImages.map(u => [u, imgVersions[u]]).filter(([, v]) => v));

let css = cssMatch[1];
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

function applyI18n(html, dict) {
  for (const [key, val] of Object.entries(dict)) {
    if (key.startsWith('_')) continue;
    const re = new RegExp(`(<(\\w+)([^>]*data-i18n="${key}"[^>]*)>)[\\s\\S]*?(</\\2>)`);
    html = html.replace(re, `$1${val}$4`);
  }
  return html;
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
  html = html.replace('"url": "https://waveshalkidiki.vercel.app/",', `"url": "${BASE}${path}",`);
  html = html.replace('"hasMenu": "https://waveshalkidiki.vercel.app/#menu",', `"hasMenu": "${BASE}${path}#menu",`);
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
  const seq = dict._strip.map(t => `<span>${t}</span><span class="sep">✦</span>`).join('');
  html = html.replace('<div class="strip-track" id="strip-track"></div>', `<div class="strip-track" id="strip-track">${seq}${seq}</div>`);
  html = html.replace('<div class="fullmenu" id="fullmenu"></div>', `<div class="fullmenu" id="fullmenu">${renderMenuHtml(lang)}</div>`);

  // inline code -> shared, content-hashed assets
  html = html.replace(/<style>[\s\S]*?<\/style>/, `<link rel="stylesheet" href="/assets/${cssName}">`);
  html = html.replace(/<script>\n[\s\S]*?<\/script>\n<\/body>/, `<script src="/assets/${jsName}" defer></script>\n</body>`);

  html = versionImages(toPicture(html));

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
console.log('done');
