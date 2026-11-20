// src/lib/seo.js
import { FIRM, SEO_BY_PATH, FALLBACK_SEO, SITE_URL } from "./seoConfig";

export function upsertMeta(selector, attrs, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content || "");
}

export function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.seoId = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const clean = (v) => String(v || "").replace(/\s+/g, " ").trim();

export function updateSeo(site, pathname = window.location.pathname) {
  const s = site?.settings || {};
  const services = Array.isArray(site?.services) ? site.services : [];
  const faqs = Array.isArray(site?.faqs) ? site.faqs : [];
  const firm = clean(s.firm_name) || FIRM.name;
  const tagline = clean(s.tagline) || "Chartered Accountants in Siliguri";

  const isAdmin = pathname.startsWith("/admin");
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const routeCfg = SEO_BY_PATH[normalizedPath] || FALLBACK_SEO;

  const title = isAdmin ? "Admin Dashboard | CA Lalit Gupta" : routeCfg.title;
  const description =
    normalizedPath === "/" && clean(s.meta_description)
      ? clean(s.meta_description)
      : routeCfg.description;
  const keywords = routeCfg.keywords || FALLBACK_SEO.keywords;
  const canonical = SITE_URL + (isAdmin ? "/admin" : normalizedPath);
  const image = `${SITE_URL}/og-image.png`;

  document.documentElement.lang = "en-IN";
  document.title = title;
  upsertLink("canonical", canonical);

  upsertMeta('meta[name="description"]', { name: "description" }, description.slice(0, 160));
  upsertMeta('meta[name="keywords"]', { name: "keywords" }, keywords);
  upsertMeta(
    'meta[name="robots"]',
    { name: "robots" },
    isAdmin
      ? "noindex, nofollow, noarchive"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );
  upsertMeta('meta[name="author"]', { name: "author" }, "CA Lalit Gupta");
  upsertMeta('meta[name="theme-color"]', { name: "theme-color" }, s.theme_primary || "#0b3558");
  upsertMeta('meta[name="geo.region"]', { name: "geo.region" }, "IN-WB");
  upsertMeta('meta[name="geo.placename"]', { name: "geo.placename" }, "Siliguri");
  upsertMeta('meta[name="geo.position"]', { name: "geo.position" }, `${FIRM.latitude};${FIRM.longitude}`);
  upsertMeta('meta[name="ICBM"]', { name: "ICBM" }, `${FIRM.latitude}, ${FIRM.longitude}`);

  upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
  upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
  upsertMeta('meta[property="og:image:width"]', { property: "og:image:width" }, "1200");
  upsertMeta('meta[property="og:image:height"]', { property: "og:image:height" }, "630");
  upsertMeta(
    'meta[property="og:image:alt"]',
    { property: "og:image:alt" },
    `${firm} — Chartered Accountants & CA Firm in Siliguri`
  );
  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, firm);
  upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_IN");

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);

  if (isAdmin) {
    upsertJsonLd("website-graph", null);
    return;
  }

  const serviceItems = services
    .filter((x) => x?.published !== false && x?.title)
    .map((x) => ({
      "@type": "Service",
      name: clean(x.title),
      serviceType: "Chartered Accountancy Service",
      description: clean(x.short_description),
      provider: { "@id": `${SITE_URL}/#firm` },
      areaServed: [
        { "@type": "City", name: "Siliguri" },
        { "@type": "State", name: "West Bengal" },
      ],
    }));

  const faqItems = faqs
    .filter((x) => x?.published !== false && x?.question && x?.answer)
    .map((x) => ({
      "@type": "Question",
      name: clean(x.question),
      acceptedAnswer: { "@type": "Answer", text: clean(x.answer) },
    }));

  const firmSchema = {
    "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#firm`,
    name: firm,
    alternateName: FIRM.alternateName,
    legalName: FIRM.legalName,
    url: SITE_URL,
    image,
    logo: `${SITE_URL}/favicon.svg`,
    description: FALLBACK_SEO.description,
    slogan: tagline,
    telephone: clean(s.phone) || FIRM.phone,
    email: clean(s.email) || FIRM.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer, Cheque",
    address: {
      "@type": "PostalAddress",
      streetAddress: FIRM.streetAddress,
      addressLocality: FIRM.locality,
      addressRegion: FIRM.region,
      postalCode: FIRM.postalCode,
      addressCountry: FIRM.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: FIRM.latitude,
      longitude: FIRM.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Siliguri" },
      { "@type": "City", name: "Darjeeling" },
      { "@type": "City", name: "Jalpaiguri" },
      { "@type": "City", name: "Kalimpong" },
      { "@type": "City", name: "Cooch Behar" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    founder: { "@id": `${SITE_URL}/#lalit-gupta` },
    employee: { "@id": `${SITE_URL}/#lalit-gupta` },
    sameAs: FIRM.sameAs,
    knowsAbout: [
      "Chartered Accountancy",
      "CA Services in Siliguri",
      "Income Tax Return Filing",
      "Goods and Services Tax",
      "Statutory Audit",
      "Tax Audit",
      "Accounting and Bookkeeping",
      "TDS and TCS Compliance",
      "Business Advisory",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CA Services in Siliguri",
      itemListElement: serviceItems.map((srv) => ({
        "@type": "Offer",
        itemOffered: srv,
      })),
    },
  };

  const personSchema = {
    "@type": "Person",
    "@id": `${SITE_URL}/#lalit-gupta`,
    name: "CA Lalit Gupta",
    alternateName: ["Lalit Gupta", "CA Lalit Gupta Siliguri"],
    givenName: "Lalit",
    familyName: "Gupta",
    jobTitle: "Chartered Accountant",
    worksFor: { "@id": `${SITE_URL}/#firm` },
    memberOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India",
      alternateName: "ICAI",
    },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/photo_lalitgupta.avif`,
    sameAs: FIRM.sameAs,
    knowsAbout: ["Income Tax", "GST", "Audit", "Accounting", "Business Advisory"],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: firm,
    alternateName: "CA Lalit Gupta — CA Firm in Siliguri",
    description: FALLBACK_SEO.description,
    publisher: { "@id": `${SITE_URL}/#firm` },
    inLanguage: "en-IN",
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#firm` },
    inLanguage: "en-IN",
  };

  const graph = [firmSchema, personSchema, websiteSchema, webPageSchema];

  if (routeCfg.breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: routeCfg.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: SITE_URL + b.path,
      })),
    });
  }

  // Only attach FAQPage schema on routes where FAQs are visibly rendered on the page
  if ((normalizedPath === "/" || normalizedPath === "/faq") && faqItems.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: normalizedPath === "/" ? faqItems.slice(0, 4) : faqItems,
    });
  }

  upsertJsonLd("website-graph", { "@context": "https://schema.org", "@graph": graph });
}