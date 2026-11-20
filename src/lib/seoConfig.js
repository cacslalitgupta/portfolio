// src/lib/seoConfig.js
export const SITE_URL = "https://calalitgupta.in";

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
    "https://g.page/r/CcWW9FkiRUSkEBE/review",
    "https://www.facebook.com/lalit.gupta.58367",
    "https://in.linkedin.com/in/ca-lalit-gupta-9895497a",
  ],
};

export const SEO_BY_PATH = {
  "/": {
    title: "LG & Associates | CA Lalit Gupta — CA Firm in Siliguri",
    description:
      "LG & Associates (CA Lalit Gupta) is a chartered accountancy and CA firm in Siliguri, West Bengal, providing income tax, GST, audit, accounting and CA services across North Bengal.",
    keywords:
      "ca firm in siliguri, ca in siliguri, ca services siliguri, ca service, siliguri ca, ca lalit gupta, lalit gupta, chartered accountant siliguri",
    breadcrumbs: [{ name: "Home", path: "/" }],
  },
  "/about": {
    title: "CA Lalit Gupta — Chartered Accountant & CA Firm in Siliguri | LG & Associates",
    description:
      "Learn about CA Lalit Gupta, ICAI Chartered Accountant and founder of LG & Associates — a Siliguri CA firm serving individuals, traders and businesses across West Bengal.",
    keywords:
      "ca lalit gupta, lalit gupta, ca in siliguri, siliguri ca, chartered accountant siliguri, lg and associates",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About CA Lalit Gupta", path: "/about" },
    ],
  },
  "/services": {
    title: "CA Services in Siliguri — Income Tax, GST, Audit & Accounting | LG & Associates",
    description:
      "Comprehensive CA services in Siliguri by LG & Associates (CA Lalit Gupta): ITR filing, GST registration & returns, statutory & tax audit, bookkeeping, ROC & business advisory.",
    keywords:
      "ca services siliguri, ca service, ca firm in siliguri, gst consultant siliguri, income tax return siliguri, audit services siliguri",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "CA Services in Siliguri", path: "/services" },
    ],
  },
  "/process": {
    title: "How Our CA Firm in Siliguri Works — Engagement Process | LG & Associates",
    description:
      "How LG & Associates works with clients in Siliguri: understanding, planning, execution and ongoing tax & financial advisory — a clear, structured engagement model.",
    keywords: "ca firm in siliguri, ca service process, tax and gst compliance siliguri",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Our Process", path: "/process" },
    ],
  },
  "/reviews": {
    title: "Client Feedback & Google Profile | LG & Associates — CA in Siliguri",
    description:
      "Our ICAI-compliant feedback policy and verified client reviews for LG & Associates (CA Lalit Gupta) on our Google Business Profile in Siliguri.",
    keywords: "lg and associates siliguri reviews, ca lalit gupta reviews, ca in siliguri",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Client Feedback", path: "/reviews" },
    ],
  },
  "/faq": {
    title: "FAQs — CA Services, ITR, GST & Audit in Siliguri | LG & Associates",
    description:
      "Answers to common questions about hiring a CA in Siliguri, income tax return filing, GST registration, audit and accounting services from LG & Associates.",
    keywords: "ca in siliguri faq, ca services siliguri questions, gst and itr siliguri",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  "/contact": {
    title: "Contact LG & Associates | CA Firm in Khalpara, Siliguri (CA Lalit Gupta)",
    description:
      "Contact LG & Associates at Nehru Road, Ward 8, Khalpara, Siliguri 734005. Phone (+91-98320-93139), WhatsApp, email, directions and CA consultation form.",
    keywords: "contact ca in siliguri, ca firm khalpara siliguri, ca lalit gupta contact number",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  },
  "/tools": {
    title: "Free GST, Income Tax, EMI & SIP Calculators | CA Lalit Gupta, Siliguri",
    description:
      "Free online financial calculators for GST, loan EMI, SIP and interest — from LG & Associates, Chartered Accountants in Siliguri.",
    keywords: "gst calculator india, ca services siliguri, ca lalit gupta calculators",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Financial Calculators", path: "/tools" },
    ],
  },
};

export const FALLBACK_SEO = SEO_BY_PATH["/"];