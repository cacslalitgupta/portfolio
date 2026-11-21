// src/lib/defaultSite.js
// Fallback content used (1) while the API wakes up and (2) by the prerender script if the API is unreachable at build time.
export const DEFAULT_SITE = {
  settings: {
    firm_name: "LG & Associates",
    tagline: "Chartered Accountants & CA Firm in Siliguri",
    hero_title: "LG & Associates — CA Firm & Chartered Accountants in Siliguri",
    hero_text:
      "Led by CA Lalit Gupta, our CA firm in Siliguri delivers dependable income tax, GST, audit, accounting and business advisory services for individuals and businesses across Siliguri and North Bengal.",
    about_title: "LG & Associates — Chartered Accountants in Siliguri",
    about_text:
      "Founded by CA Lalit Gupta, LG & Associates is a Siliguri CA firm located at Khalpara, serving traders, wholesalers, professionals, startups and corporates across Sevoke Road, Hill Cart Road, Pradhan Nagar, Matigara and North Bengal.",
    address: "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005",
    phone: "+91-98320-93139",
    whatsapp: "+919832093139",
    email: "cacslalitgupta@gmail.com",
    working_hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    theme_primary: "#0b3558",
    theme_accent: "#b18a3b",
    theme_mode: "system",
  },
  services: [
    {
      id: "itr",
      title: "Income Tax & ITR",
      short_description: "Income tax return filing, tax planning, capital gains and assessment advisory in Siliguri.",
      published: true,
    },
    {
      id: "gst",
      title: "GST Services",
      short_description: "GST registration, GSTR-1/3B/9 filing, reconciliation, notices and GST compliance in Siliguri.",
      published: true,
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      short_description: "Statutory audit, tax audit under the income-tax law, internal audit and financial verification.",
      published: true,
    },
    {
      id: "accounting",
      title: "Accounting & Bookkeeping",
      short_description: "Structured bookkeeping, financial statement preparation and MIS reporting for businesses.",
      published: true,
    },
    {
      id: "tds",
      title: "TDS & TCS",
      short_description: "Quarterly TDS/TCS return filing, challan compliance and Form 16/16A issuance.",
      published: true,
    },
    {
      id: "roc",
      title: "Company & LLP Compliance",
      short_description: "Company incorporation, LLP registration, ROC annual filings and corporate compliance.",
      published: true,
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What CA services does LG & Associates offer in Siliguri?",
      answer:
        "LG & Associates (CA Lalit Gupta) provides income tax return filing, GST registration and compliance, statutory and tax audits, bookkeeping, TDS/TCS compliance, company/LLP registration and business advisory in Siliguri and across West Bengal.",
      published: true,
    },
    {
      id: "faq-2",
      question: "Where is CA Lalit Gupta's office located in Siliguri?",
      answer:
        "Our office is located at Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005, easily accessible from Sevoke Road, Hill Cart Road and SF Road.",
      published: true,
    },
  ],
};

