#!/usr/bin/env node
// Pre-renders the EN root (index.html) and the per-language static pages
// (/el/, /ro/, /bg/, /sr/, /ru/) from the source master at _src/master.html.
// Rerun after editing _src/master.html: node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://waveshalkidiki.vercel.app';
const master = readFileSync(join(ROOT, '_src', 'master.html'), 'utf8');

// eval the I18N + MENU literals out of the page script
const script = master.match(/<script>\n(\/\* ---------------- i18n[\s\S]*?)<\/script>/)[1];
const I18N = eval('(' + script.match(/const I18N = (\{[\s\S]*?\n\});/)[1] + ')');
const MENU = eval('(' + script.match(/const MENU = (\[[\s\S]*?\n\]);/)[1] + ')');

const LOCALE = { el: 'el_GR', ro: 'ro_RO', bg: 'bg_BG', sr: 'sr_RS', ru: 'ru_RU' };
const HTMLLANG = { el: 'el', ro: 'ro', bg: 'bg', sr: 'sr-Latn', ru: 'ru' };

function esc(t) { return t.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;'); }
function stripTags(t) { return t.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'); }

function renderMenuHtml(lang) {
  return MENU.map(cat => {
    const img = cat.img ? `<div class="mc-img"><img src="${cat.img}" alt="" loading="lazy"></div>` : '';
    const rows = cat.items.map(it => {
      if (it.hdr) return `<li class="fm-hdr">${it.hdr[lang] || it.hdr.en}</li>`;
      const nm = it.n[lang] || it.n.en;
      const d = it.d ? `<div class="fm-desc">${it.d[lang] || it.d.en}</div>` : '';
      return `<li><div class="fm-row"><span class="nm">${nm}</span><span class="ld"></span><span class="pr">${it.p} €</span></div>${d}</li>`;
    }).join('');
    return `<div class="fm-card">${img}<h3>${cat.t[lang] || cat.t.en}</h3><span class="script">${cat.s[lang] || cat.s.en}</span><ul>${rows}</ul></div>`;
  }).join('');
}

for (const lang of ['el', 'ro', 'bg', 'sr', 'ru']) {
  const dict = I18N[lang];
  let html = master;

  html = html.replace('<html lang="en">', `<html lang="${HTMLLANG[lang]}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(dict._title)}</title>`);
  html = html.replace(/(<meta name="description" id="meta-desc" content=")[^"]*(")/, `$1${esc(dict._desc).replace(/"/g, '&quot;')}$2`);
  html = html.replace(/(<link rel="canonical" id="canon" href=")[^"]*(")/, `$1${BASE}/${lang}/$2`);
  html = html.replace(/(<meta property="og:url" id="og-url" content=")[^"]*(")/, `$1${BASE}/${lang}/$2`);
  html = html.replace(/(<meta property="og:locale" id="og-locale" content=")[^"]*(")/, `$1${LOCALE[lang]}$2`);
  html = html.replace(/(<meta property="og:title" id="og-title" content=")[^"]*(")/, `$1${esc(dict._title).replace(/"/g, '&quot;')}$2`);
  html = html.replace(/(<meta property="og:description" id="og-desc" content=")[^"]*(")/, `$1${esc(dict._desc).replace(/"/g, '&quot;')}$2`);

  // translate every data-i18n element in place (tag-aware so nested <b>/<br> survive)
  for (const [key, val] of Object.entries(dict)) {
    if (key.startsWith('_')) continue;
    const re = new RegExp(`(<(\\w+)([^>]*data-i18n="${key}"[^>]*)>)[\\s\\S]*?(</\\2>)`);
    html = html.replace(re, `$1${val}$4`);
  }

  // pre-render marquee strip and the full menu
  const seq = dict._strip.map(t => `<span>${t}</span><span class="sep">✦</span>`).join('');
  html = html.replace('<div class="strip-track" id="strip-track"></div>', `<div class="strip-track" id="strip-track">${seq}${seq}</div>`);
  html = html.replace('<div class="fullmenu" id="fullmenu"></div>', `<div class="fullmenu" id="fullmenu">${renderMenuHtml(lang)}</div>`);

  // localized FAQ structured data
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4].map(i => ({
      '@type': 'Question', name: stripTags(dict['fq' + i]),
      acceptedAnswer: { '@type': 'Answer', text: stripTags(dict['fa' + i]) }
    }))
  };
  html = html.replace(/<script type="application\/ld\+json" id="ld-faq">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="ld-faq">\n${JSON.stringify(faq, null, 1)}\n</script>`);

  // make the page boot in its own language regardless of localStorage
  html = html.replace('<script>\n/* ---------------- i18n', `<script>window.__FORCE_LANG='${lang}';</script>\n<script>\n/* ---------------- i18n`);

  mkdirSync(join(ROOT, lang), { recursive: true });
  writeFileSync(join(ROOT, lang, 'index.html'), html);
  console.log(`built /${lang}/ (${(html.length / 1024).toFixed(0)} KB) — ${dict._title}`);
}

// EN root: same master with the marquee + full menu pre-rendered (language stays saved/en)
{
  const dict = I18N.en;
  let html = master;
  const seq = dict._strip.map(t => `<span>${t}</span><span class="sep">✦</span>`).join('');
  html = html.replace('<div class="strip-track" id="strip-track"></div>', `<div class="strip-track" id="strip-track">${seq}${seq}</div>`);
  html = html.replace('<div class="fullmenu" id="fullmenu"></div>', `<div class="fullmenu" id="fullmenu">${renderMenuHtml('en')}</div>`);
  writeFileSync(join(ROOT, 'index.html'), html);
  console.log(`built / (root, EN prerendered, ${(html.length / 1024).toFixed(0)} KB)`);
}
console.log('done');
