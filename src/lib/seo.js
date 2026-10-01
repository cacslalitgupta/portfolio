const SITE_URL = "https://calalitgupta.in";

function upsertMeta(selector, attrs, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content || "");
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.seoId = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const clean = (value) => String(value || "").replace(/\s+/g, " ").trim();

export function updateSeo(site) {
  const s = site?.settings || {};
  const services = Array.isArray(site?.services) ? site.services : [];
  const faqs = Array.isArray(site?.faqs) ? site.faqs : [];
  const firm = clean(s.firm_name) || "CA Lalit Gupta";
  const tagline = clean(s.tagline) || "Chartered Accountant";
  const title = `${firm} | Chartered Accountant & Business Advisory`;
  const description = clean(s.meta_description) || clean(s.hero_text) || `${firm} provides professional accounting, taxation, compliance and business advisory services.`;
  const canonical = SITE_URL + (window.location.pathname.startsWith("/admin") ? "/admin" : "/");
  const image = `${SITE_URL}/images/ca_firm.avif`;
  const isAdmin = window.location.pathname.startsWith("/admin");

  document.documentElement.lang = "en-IN";
  document.title = isAdmin ? "Admin Dashboard | CA Lalit Gupta" : title;
  upsertLink("canonical", canonical);

  upsertMeta('meta[name="description"]', { name: "description" }, description.slice(0, 160));
  upsertMeta('meta[name="robots"]', { name: "robots" }, isAdmin ? "noindex, nofollow, noarchive" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertMeta('meta[name="author"]', { name: "author" }, firm);
  upsertMeta('meta[name="theme-color"]', { name: "theme-color" }, s.theme_primary || "#0b3558");
  upsertMeta('meta[name="geo.region"]', { name: "geo.region" }, "IN-WB");

  upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
  upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
  upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, `${firm} - Chartered Accountant and business advisory firm`);
  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, firm);
  upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_IN");

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);

  if (isAdmin) return;

  const serviceItems = services.filter(x => x?.published !== false).map((x) => ({
    "@type": "Service",
    name: clean(x.title),
    description: clean(x.short_description),
    provider: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/#services`
  })).filter(x => x.name);

  const faqItems = faqs.filter(x => x?.published !== false && x?.question && x?.answer).map((x) => ({
    "@type": "Question",
    name: clean(x.question),
    acceptedAnswer: { "@type": "Answer", text: clean(x.answer) }
  }));

  const organization = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: firm,
    url: SITE_URL,
    logo: image,
    image,
    description,
    slogan: tagline,
    telephone: clean(s.phone) || undefined,
    email: clean(s.email) || undefined,
    address: clean(s.address) ? {
      "@type": "PostalAddress",
      streetAddress: clean(s.address),
      addressCountry: "IN"
    } : undefined,
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: ["Accounting", "Income Tax", "GST", "Tax Planning", "Business Advisory", "Financial Compliance"]
  };

  const graph = [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: firm,
      description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN"
    },
    ...serviceItems
  ];

  if (faqItems.length) graph.push({ "@type": "FAQPage", mainEntity: faqItems });
  upsertJsonLd("website-graph", { "@context": "https://schema.org", "@graph": graph });
}
