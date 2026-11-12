const SITE_URL = "https://calalitgupta.in";

const FIRM = {
  name: "LG & Associates",
  legalName: "LG & Associates",
  phone: "+91-98320-93139",
  phoneIntl: "+919832093139",
  email: "cacslalitgupta@gmail.com",
  streetAddress: "Nehru Road, Ward 8, Khalpara",
  locality: "Siliguri",
  region: "West Bengal",
  postalCode: "734005",
  country: "IN",
  latitude: 26.707250279621732,
  longitude: 88.424475582686,
  sameAs: [
    "https://g.page/r/CcWW9FkiRUSkEBE/review",
    "https://www.facebook.com/lalit.gupta.58367",
    "https://in.linkedin.com/in/ca-lalit-gupta-9895497a",
    // "https://www.instagram.com/your-handle",
  ],
};



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

const clean = (v) => String(v || "").replace(/\s+/g, " ").trim();

export function updateSeo(site) {
  const s = site?.settings || {};
  const services = Array.isArray(site?.services) ? site.services : [];
  const faqs = Array.isArray(site?.faqs) ? site.faqs : [];
  const firm = clean(s.firm_name) || FIRM.name;
  const tagline = clean(s.tagline) || "Chartered Accountants";
  const title = `${firm} | CA Lalit Gupta | Chartered Accountants, Siliguri`;
  const description =
    clean(s.meta_description) ||
    `${firm} (CA Lalit Gupta) is a chartered accountancy firm in Siliguri, West Bengal, providing income tax, GST, audit, accounting and business advisory services.`;
  const isAdmin = window.location.pathname.startsWith("/admin");
  const canonical = SITE_URL + (isAdmin ? "/admin" : "/");
  const image = `${SITE_URL}/og-image.png`;

  document.documentElement.lang = "en-IN";
  document.title = isAdmin ? "Admin Dashboard | CA Lalit Gupta" : title;
  upsertLink("canonical", canonical);

  upsertMeta('meta[name="description"]', { name: "description" }, description.slice(0, 160));
  upsertMeta('meta[name="robots"]', { name: "robots" }, isAdmin ? "noindex, nofollow, noarchive" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
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
  upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, `${firm} — Chartered Accountants, Siliguri`);
  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, firm);
  upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_IN");

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);

  if (isAdmin) return;

  const serviceItems = services
    .filter((x) => x?.published !== false)
    .map((x) => ({
      "@type": "Service",
      name: clean(x.title),
      description: clean(x.short_description),
      provider: { "@id": `${SITE_URL}/#firm` },
      areaServed: { "@type": "City", name: "Siliguri" },
    }))
    .filter((x) => x.name);

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
    name: FIRM.name,
    legalName: FIRM.legalName,
    url: SITE_URL,
    image,
    logo: `${SITE_URL}/favicon.svg`,
    description,
    slogan: tagline,
    telephone: FIRM.phone,
    email: FIRM.email,
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
    sameAs: FIRM.sameAs.length ? FIRM.sameAs : undefined,
    knowsAbout: [
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
      name: "Chartered Accountancy Services",
      itemListElement: serviceItems,
    },
  };

  const personSchema = {
    "@type": "Person",
    "@id": `${SITE_URL}/#lalit-gupta`,
    name: "CA Lalit Gupta",
    givenName: "Lalit",
    familyName: "Gupta",
    jobTitle: "Chartered Accountant",
    worksFor: { "@id": `${SITE_URL}/#firm` },
    // Add once you have it verified in the footer too:
    // identifier: { "@type": "PropertyValue", propertyID: "ICAI Membership No.", value: "XXXXXXXX" },
    memberOf: { "@type": "Organization", name: "Institute of Chartered Accountants of India", alternateName: "ICAI" },
    url: SITE_URL,
    image: `${SITE_URL}/images/photo_lalitgupta.avif`,
    sameAs: FIRM.sameAs.length ? FIRM.sameAs : undefined,
    knowsAbout: ["Income Tax", "GST", "Audit", "Accounting", "Business Advisory"],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: FIRM.name,
    description,
    publisher: { "@id": `${SITE_URL}/#firm` },
    inLanguage: "en-IN",
  };

  const graph = [firmSchema, personSchema, websiteSchema, ...serviceItems];
  if (faqItems.length) graph.push({ "@type": "FAQPage", mainEntity: faqItems });

  upsertJsonLd("website-graph", { "@context": "https://schema.org", "@graph": graph });
}