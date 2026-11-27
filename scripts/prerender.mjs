// scripts/prerender.mjs
// Runs after `vite build`. For every indexable route it writes a static HTML file containing:
//   - the route's own <title>, meta description, canonical, Open Graph / Twitter tags
//   - route JSON-LD (BreadcrumbList, Service / BlogPosting)
//   - a crawlable HTML snapshot of the page inside #root (React replaces it as soon as it mounts)
// It also writes sitemap.xml (with lastmod), 404.html and routes.json (used by the Express server).
//
// Live content (settings, services, FAQs) is fetched from the API at build time; if the API is
// unreachable the script falls back to src/lib/defaultSite.js so the build never fails.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEO_BY_PATH, INDEXABLE_PATHS, SITE_URL, FIRM, routeGraph } from "../src/lib/seoConfig.js";
import { SERVICE_PAGES, RESOURCES, AREAS_SERVED, serviceBySlug, resourceBySlug, serviceForTitle } from "../src/lib/content.js";
import { DEFAULT_SITE } from "../src/lib/defaultSite.js";
import { withExtraFaqs } from "../src/lib/faqExtra.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const API = process.env.SITE_API || "https://api.calalitgupta.in/api/site";
const today = new Date().toISOString().slice(0, 10);

const esc = (v) =>
  String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attr = esc;

async function loadSite() {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(API, { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data?.settings) throw new Error("no settings in response");
    console.log(`[prerender] live site data loaded from ${API}`);
    return withExtraFaqs(data);
  } catch (e) {
    console.warn(`[prerender] API unavailable (${e.message}); using defaultSite.js`);
    return withExtraFaqs(DEFAULT_SITE);
  }
}

// ---------- snapshot builders ----------
const li = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const a = (href, text) => `<a href="${attr(href)}">${esc(text)}</a>`;

function sectionsHtml(sections = []) {
  return sections
    .map(
      (s) =>
        `<section><h2>${esc(s.h2)}</h2>${(s.paras || []).map((p) => `<p>${esc(p)}</p>`).join("")}${
          s.list ? li(s.list.map(esc)) : ""
        }${s.note ? `<p>${esc(s.note)}</p>` : ""}</section>`
    )
    .join("");
}

function faqsHtml(faqs = [], heading = "Frequently asked questions") {
  if (!faqs.length) return "";
  return `<section><h2>${esc(heading)}</h2>${faqs
    .map((f) => `<h3>${esc(f.q || f.question)}</h3><p>${esc(f.a || f.answer)}</p>`)
    .join("")}</section>`;
}

function servicesList(site) {
  const items = (site.services || []).filter((x) => x.published !== false && x.title);
  return li(
    items.map((x) => {
      const p = serviceForTitle(x.title);
      const title = p ? a(`/services/${p.slug}`, x.title) : esc(x.title);
      return `<strong>${title}</strong> — ${esc(x.short_description)}`;
    })
  );
}

function chrome(site, body) {
  const s = site.settings;
  const nav = [
    ["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Process", "/process"],
    ["Resources", "/resources"], ["Calculators", "/tools"], ["Reviews", "/reviews"], ["FAQ", "/faq"], ["Contact", "/contact"],
  ];
  return `<header><a href="/">${esc(s.firm_name || FIRM.name)}</a><nav aria-label="Primary">${nav
    .map(([t, h]) => a(h, t))
    .join(" · ")}</nav></header><main>${body}</main><footer><address>${esc(s.firm_name || FIRM.name)}, ${esc(
    s.address || "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005"
  )}. Phone: ${a("tel:" + (s.phone || FIRM.phone).replace(/[^\d+]/g, ""), s.phone || FIRM.phone)}. Email: ${a(
    "mailto:" + (s.email || FIRM.email),
    s.email || FIRM.email
  )}.</address><nav aria-label="Services">${SERVICE_PAGES.map((p) => a(`/services/${p.slug}`, p.navTitle)).join(" · ")}</nav></footer>`;
}

function snapshot(pathname, site) {
  const s = site.settings;
  const cfg = SEO_BY_PATH[pathname];
  const faqs = (site.faqs || []).filter((f) => f.published !== false && f.question && f.answer);

  let body = "";
  switch (cfg.type) {
    case "home":
      body =
        `<h1>${esc(s.hero_title)}</h1><p>${esc(s.hero_text)}</p>` +
        `<section><h2>CA services in Siliguri</h2>${servicesList(site)}<p>${a("/services", "View all CA services")}</p></section>` +
        `<section><h2>${esc(s.about_title)}</h2><p>${esc(s.about_text)}</p><p>${a("/about", "About CA Lalit Gupta")}</p></section>` +
        faqsHtml(faqs.slice(0, 4)) +
        `<section><h2>Contact LG &amp; Associates</h2><p>${a("/contact", "Book a consultation")}</p></section>`;
      break;
    case "faq":
      body = `<h1>FAQs about CA services in Siliguri</h1><p>${esc(cfg.description)}</p>${faqsHtml(faqs, "Answers to common questions")}`;
      break;
    case "contact":
      body = `<h1>Contact LG &amp; Associates in Siliguri</h1><p>${esc(cfg.description)}</p><p>Working hours: ${esc(
        s.working_hours || "Mon – Sat: 10:00 AM – 7:00 PM"
      )}</p>`;
      break;
    case "service": {
      const p = serviceBySlug(cfg.slug);
      body =
        `<h1>${esc(p.h1)}</h1><p>${esc(p.lead)}</p>${sectionsHtml(p.sections)}${faqsHtml(p.faqs, "Common questions")}` +
        `<p>Serving ${esc(AREAS_SERVED)}.</p><section><h2>Other CA services in Siliguri</h2>${li(
          (p.related || []).map(serviceBySlug).filter(Boolean).map((r) => a(`/services/${r.slug}`, r.navTitle))
        )}</section>`;
      break;
    }
    case "article": {
      const r = resourceBySlug(cfg.slug);
      body = `<h1>${esc(r.title)}</h1><p>${esc(r.lead)}</p>${sectionsHtml(r.sections)}${
        r.cta ? `<p>${a(r.cta.to, r.cta.label)}</p>` : ""
      }`;
      break;
    }
    default: {
      if (pathname === "/services") {
        body = `<h1>Chartered Accountancy Services in Siliguri</h1><p>${esc(cfg.description)}</p>${servicesList(site)}${li(
          SERVICE_PAGES.map((p) => a(`/services/${p.slug}`, p.h1))
        )}`;
      } else if (pathname === "/resources") {
        body = `<h1>CA guides for Siliguri businesses and individuals</h1><p>${esc(cfg.description)}</p>${li(
          RESOURCES.map((r) => `${a(`/resources/${r.slug}`, r.title)} — ${esc(r.metaDescription)}`)
        )}`;
      } else if (pathname === "/about") {
        body =
          `<h1>CA Lalit Gupta — Chartered Accountant in Siliguri</h1><p>${esc(cfg.description)}</p>` +
          `<p>CA Lalit Gupta is a Chartered Accountant and the founder of LG &amp; Associates, a chartered accountancy firm based in Siliguri, West Bengal. The practice supports individuals, professionals, entrepreneurs and businesses with income tax, GST, audit, accounting and statutory compliance requirements.</p>`;
      } else {
        const h1 = { "/process": "How our CA firm in Siliguri works with clients", "/reviews": "Client feedback and Google reviews", "/tools": "Free GST, EMI, SIP and interest calculators" }[pathname] || cfg.title;
        body = `<h1>${esc(h1)}</h1><p>${esc(cfg.description)}</p>`;
      }
    }
  }
  return chrome(site, body);
}

// ---------- head rewriting ----------
function setTag(html, re, replacement) {
  if (!re.test(html)) console.warn(`[prerender] template is missing ${re}`);
  return html.replace(re, replacement);
}

function renderRoute(template, pathname, site) {
  const cfg = SEO_BY_PATH[pathname];
  const url = SITE_URL + (pathname === "/" ? "/" : pathname);
  const desc = cfg.description.slice(0, 160);
  let html = template;

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(cfg.title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${attr(desc)}" />`);
  html = setTag(html, /<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${attr(cfg.keywords)}" />`);
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<link rel="alternate" hreflang="en-in" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en-in" href="${url}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${attr(cfg.title)}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${attr(cfg.description)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${attr(cfg.title)}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${attr(cfg.description)}" />`);

  const graph = routeGraph(pathname, cfg);
  if (graph.length) {
    const ld = `<script type="application/ld+json" data-seo-id="route-graph">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>\n    `;
    html = html.replace('<link rel="preconnect" href="https://fonts.googleapis.com" />', ld + '<link rel="preconnect" href="https://fonts.googleapis.com" />');
  }
  return setTag(html, /<div id="root"><\/div>/, `<div id="root">${snapshot(pathname, site)}</div>`);
}

function render404(template) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found | LG &amp; Associates</title>");
  html = html.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
  html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, "");
  html = html.replace(/\s*<link rel="alternate" hreflang="en-in" href="[^"]*" \/>/, "");
  return html.replace(
    /<div id="root"><\/div>/,
    '<div id="root"><main><h1>Page not found</h1><p>The page you are looking for does not exist or has moved. <a href="/">Go to the LG &amp; Associates home page</a>.</p></main></div>'
  );
}

// ---------- sitemap ----------
function sitemap() {
  const priority = (p) => (p === "/" ? "1.0" : p === "/services" || p === "/contact" || p === "/about" ? "0.9" : p.startsWith("/services/") ? "0.9" : p.startsWith("/resources/") ? "0.6" : "0.7");
  const lastmod = (p) => SEO_BY_PATH[p].dateModified || today;
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    INDEXABLE_PATHS.map(
      (p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc><lastmod>${lastmod(p)}</lastmod><priority>${priority(p)}</priority></url>`
    ).join("\n") +
    `\n</urlset>\n`
  );
}

// ---------- main ----------
const templatePath = path.join(dist, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("[prerender] dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf8");
const site = await loadSite();

for (const p of INDEXABLE_PATHS) {
  const out = p === "/" ? path.join(dist, "index.html") : path.join(dist, p, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, renderRoute(template, p, site));
}
fs.writeFileSync(path.join(dist, "404.html"), render404(template));
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap());
fs.writeFileSync(path.join(dist, "routes.json"), JSON.stringify(INDEXABLE_PATHS));
console.log(`[prerender] wrote ${INDEXABLE_PATHS.length} routes, 404.html, sitemap.xml, routes.json`);
