// src/lib/serviceGroups.js
// Shared by the footer and the public HTML sitemap page. Any service not listed falls into "More services".
export const SERVICE_GROUPS = [
  {
    title: "Tax & GST",
    slugs: [
      "income-tax-return-filing-siliguri",
      "income-tax-notice-reply-siliguri",
      "tax-planning-siliguri",
      "advance-tax-planning-siliguri",
      "gst-registration-and-returns-siliguri",
      "gst-annual-return-gstr-9-siliguri",
      "gst-notice-reply-siliguri",
      "tds-tcs-compliance-siliguri",
    ],
  },
  {
    title: "Audit & Accounting",
    slugs: [
      "audit-and-assurance-siliguri",
      "statutory-audit-siliguri",
      "tax-audit-siliguri",
      "internal-audit-siliguri",
      "accounting-and-bookkeeping-siliguri",
      "financial-statement-preparation-siliguri",
      "payroll-services-siliguri",
    ],
  },
  {
    title: "Company & Compliance",
    slugs: [
      "company-and-llp-registration-siliguri",
      "private-limited-company-registration-siliguri",
      "llp-registration-siliguri",
      "one-person-company-registration-siliguri",
      "partnership-firm-registration-siliguri",
      "roc-annual-filing-siliguri",
      "dir-3-kyc-filing-siliguri",
      "udyam-msme-registration-siliguri",
    ],
  },
];

export const NAV_LINKS = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Resources", "/resources"],
  ["Calculators", "/tools"],
  ["Reviews", "/reviews"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

/** Returns [{ title, items: [servicePage...] }] for the given SERVICE_PAGES list. */
export function groupServices(pages) {
  const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));
  const used = new Set(SERVICE_GROUPS.flatMap((g) => g.slugs));
  return [
    ...SERVICE_GROUPS.map((g) => ({ title: g.title, items: g.slugs.map((s) => bySlug[s]).filter(Boolean) })),
    { title: "More services", items: pages.filter((p) => !used.has(p.slug)) },
  ].filter((g) => g.items.length);
}