# What changed in this client folder

Built on your uploaded SEND_INT_1.zip. `npm run build` was tested: 35 prerendered routes, sitemap and llms.txt generated, no errors.

## New files
- `src/lib/contentExtra.js` : 17 new service landing pages (same format as `content.js`)
- `src/lib/faqExtra.js` : 42 extra FAQs, merged after the FAQs from your admin/database
- `scripts/llms.mjs` : writes `dist/llms.txt` at build time
- `public/robots.txt` : replaced (allows AI crawlers, blocks /admin)

## Edited files
- `src/lib/content.js` : merges the new pages into `SERVICE_PAGES`; hub pages now link to their sub-pages
- `src/lib/site.jsx` : merges extra FAQs into site data
- `scripts/prerender.mjs` : merges extra FAQs for the prerendered HTML
- `src/pages/Faq.jsx` : group headings
- `src/pages/Services.jsx` : new "Specialised CA services" grid + 2 more FAQs
- `src/pages/ServiceDetail.jsx` : shows up to 6 related services
- `package.json` : build script also runs `scripts/llms.mjs`

Nothing else was touched (`main.jsx`, routes, admin, server, design). The sitemap, footer links, SEO tags, JSON-LD and prerender pick up the new pages automatically.

## Before deploying
1. `.env` was left out of this folder. Keep your own `.env`.
2. Have CA Lalit Gupta verify thresholds, due dates and form names in `contentExtra.js`.
3. Run `npm install` then `npm run build`, deploy `dist/` as before.
4. In Google Search Console, resubmit `https://calalitgupta.in/sitemap.xml` and request indexing for the new URLs.
