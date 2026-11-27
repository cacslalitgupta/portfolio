// src/lib/seoConfig.js
import { SERVICE_PAGES, RESOURCES } from "./content.js";

export const SITE_URL = "https://calalitgupta.in";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const LOGO_URL = `${SITE_URL}/logo-512.png`;

export const FIRM = {
  name: "LG & Associates",
  alternateName: [
    "CA Lalit Gupta",
    "LG & Associates Chartered Accountants",
    "CA Lalit Gupta Siliguri",
  ],
  legalName: "LG & Associates",
  founder: "CA Lalit Gupta",
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
    "https://g.page/r/CcWW9FkiRUSkEBE",
    "https://www.facebook.com/lalit.gupta.58367",
    "https://in.linkedin.com/in/ca-lalit-gupta-9895497a",
  ],
};

const crumb = (name, path) => ({ name, path });
const HOME = crumb("Home", "/");

export const SEO_BY_PATH = {
  "/": {
    type: "home",
    title: "CA in Siliguri | CA Firm & CA Services — LG & Associates",
    description:
      "LG & Associates (CA Lalit Gupta): chartered accountants in Khalpara, Siliguri. Income tax, GST, audit, accounting, TDS and company compliance for North Bengal.",
    keywords:
      "ca in siliguri, ca firm in siliguri, ca services in siliguri, chartered accountant siliguri, ca lalit gupta, lg and associates",
    breadcrumbs: [HOME],
  },
  "/about": {
    type: "page",
    title: "About CA Lalit Gupta | Chartered Accountant, Siliguri",
    description:
      "CA Lalit Gupta is an ICAI Chartered Accountant and founder of LG & Associates, a Siliguri CA firm serving individuals, traders and businesses across West Bengal.",
    keywords: "ca lalit gupta, lalit gupta siliguri, chartered accountant siliguri, lg and associates",
    breadcrumbs: [HOME, crumb("About CA Lalit Gupta", "/about")],
  },
  "/services": {
    type: "page",
    title: "CA Services in Siliguri: Tax, GST, Audit | LG & Associates",
    description:
      "CA services in Siliguri by LG & Associates: ITR filing, GST registration and returns, statutory and tax audit, bookkeeping, TDS and company or LLP registration.",
    keywords: "ca services in siliguri, ca firm in siliguri, gst consultant siliguri, itr filing siliguri, audit services siliguri",
    breadcrumbs: [HOME, crumb("CA Services in Siliguri", "/services")],
  },
  "/process": {
    type: "page",
    title: "How Our CA Firm in Siliguri Works | LG & Associates",
    description:
      "How LG & Associates works with clients in Siliguri: understanding, planning, execution and ongoing tax and financial advisory in a clear, structured model.",
    keywords: "ca firm in siliguri, ca engagement process, tax and gst compliance siliguri",
    breadcrumbs: [HOME, crumb("Our Process", "/process")],
  },
  "/reviews": {
    type: "page",
    title: "Client Feedback & Google Profile | LG & Associates",
    description:
      "Our ICAI-compliant feedback policy and a link to the LG & Associates (CA Lalit Gupta) Google Business Profile in Khalpara, Siliguri.",
    keywords: "lg and associates siliguri reviews, ca lalit gupta google profile, ca in siliguri",
    breadcrumbs: [HOME, crumb("Client Feedback", "/reviews")],
  },
  "/faq": {
    type: "faq",
    title: "FAQs: CA, ITR, GST & Audit in Siliguri | LG & Associates",
    description:
      "Answers to common questions about hiring a CA in Siliguri, income tax return filing, GST registration, audit and accounting from LG & Associates.",
    keywords: "ca in siliguri faq, ca services siliguri questions, gst and itr siliguri",
    breadcrumbs: [HOME, crumb("FAQ", "/faq")],
  },
  "/contact": {
    type: "contact",
    title: "Contact LG & Associates | CA Firm in Khalpara, Siliguri",
    description:
      "Contact LG & Associates at Nehru Road, Ward 8, Khalpara, Siliguri 734005. Phone +91-98320-93139, WhatsApp, email, directions and enquiry form.",
    keywords: "contact ca in siliguri, ca firm khalpara siliguri, ca lalit gupta contact number",
    breadcrumbs: [HOME, crumb("Contact", "/contact")],
  },
  "/tools": {
    type: "page",
    title: "Free GST, EMI, SIP & Interest Calculators | LG & Associates",
    description:
      "Free online calculators for GST, loan EMI, SIP and interest from LG & Associates, chartered accountants in Siliguri.",
    keywords: "gst calculator india, emi calculator, sip calculator, ca lalit gupta calculators",
    breadcrumbs: [HOME, crumb("Financial Calculators", "/tools")],
  },
  "/sitemap": {
    type: "page",
    title: "Sitemap | All Pages & CA Services | LG & Associates",
    description:
      "Sitemap of LG & Associates, chartered accountants in Siliguri: every service page, guide and key page of the website in one place.",
    keywords: "sitemap, ca services in siliguri, lg and associates pages",
    breadcrumbs: [HOME, crumb("Sitemap", "/sitemap")],
  },
  "/resources": {
    type: "page",
    title: "CA Guides & Resources for Siliguri Businesses | LG & Associates",
    description:
      "Practical guides on GST registration, ITR filing and choosing a business structure, written by the team at LG & Associates, chartered accountants in Siliguri.",
    keywords: "ca guides siliguri, gst registration guide, itr filing checklist, business structure india",
    breadcrumbs: [HOME, crumb("Resources", "/resources")],
  },
};

// Service landing pages
for (const sp of SERVICE_PAGES) {
  SEO_BY_PATH[`/services/${sp.slug}`] = {
    type: "service",
    slug: sp.slug,
    title: sp.metaTitle,
    description: sp.metaDescription,
    keywords: sp.keywords,
    serviceName: sp.navTitle,
    breadcrumbs: [HOME, crumb("CA Services in Siliguri", "/services"), crumb(sp.navTitle, `/services/${sp.slug}`)],
  };
}

// Guides / articles
for (const r of RESOURCES) {
  SEO_BY_PATH[`/resources/${r.slug}`] = {
    type: "article",
    slug: r.slug,
    title: r.metaTitle,
    description: r.metaDescription,
    keywords: r.keywords,
    headline: r.title,
    datePublished: r.datePublished,
    dateModified: r.dateModified,
    breadcrumbs: [HOME, crumb("Resources", "/resources"), crumb(r.title, `/resources/${r.slug}`)],
  };
}

export const FALLBACK_SEO = SEO_BY_PATH["/"];

/** All indexable paths, used by the prerender script and the sitemap generator. */
export const INDEXABLE_PATHS = Object.keys(SEO_BY_PATH);

/** Route-specific JSON-LD nodes (BreadcrumbList + Service / BlogPosting). Pure; safe in Node and browser. */
export function routeGraph(path, cfg = SEO_BY_PATH[path]) {
  if (!cfg) return [];
  const nodes = [];
  if (cfg.breadcrumbs?.length) {
    nodes.push({
      "@type": "BreadcrumbList",
      itemListElement: cfg.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: SITE_URL + b.path,
      })),
    });
  }
  if (cfg.type === "service") {
    nodes.push({
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: cfg.serviceName,
      serviceType: cfg.serviceName,
      url: SITE_URL + path,
      description: cfg.description,
      provider: { "@id": `${SITE_URL}/#firm` },
      areaServed: [
        { "@type": "City", name: "Siliguri" },
        { "@type": "State", name: "West Bengal" },
      ],
    });
  }
  if (cfg.type === "article") {
    nodes.push({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${path}#article`,
      headline: cfg.headline,
      description: cfg.description,
      url: SITE_URL + path,
      mainEntityOfPage: SITE_URL + path,
      datePublished: cfg.datePublished,
      dateModified: cfg.dateModified,
      inLanguage: "en-IN",
      image: OG_IMAGE,
      author: { "@id": `${SITE_URL}/#lalit-gupta` },
      publisher: { "@id": `${SITE_URL}/#firm` },
    });
  }
  return nodes;
}
