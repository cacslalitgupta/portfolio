// src/lib/content.js
// Single source of truth for service landing pages and guides.
// Used by: React pages, SEO config, the prerender script and the sitemap generator.
// Tone note: informational and factual on purpose (ICAI advertising / solicitation rules).
// Avoid superlatives ("best", "top", "No.1"), guarantees, fee offers and client testimonials.

import { EXTRA_SERVICE_PAGES, HUB_RELATED } from "./contentExtra.js";

export const AREAS_SERVED =
  "Khalpara, Sevoke Road, Hill Cart Road, Pradhan Nagar, Matigara and the wider Siliguri and North Bengal region";

const BASE_SERVICE_PAGES = [
  {
    slug: "income-tax-return-filing-siliguri",
    matchTitles: ["Income Tax & ITR", "Income Tax"],
    icon: "FileText",
    navTitle: "Income Tax & ITR Filing",
    h1: "Income Tax Return (ITR) Filing in Siliguri",
    metaTitle: "Income Tax & ITR Filing in Siliguri | LG & Associates",
    metaDescription:
      "Income tax return filing, tax planning, notices and assessment support in Siliguri by LG & Associates (CA Lalit Gupta) for individuals, traders, professionals and firms.",
    keywords:
      "itr filing siliguri, income tax consultant siliguri, income tax return siliguri, ca in siliguri, tax planning siliguri",
    lead:
      "LG & Associates, a chartered accountancy firm in Khalpara, Siliguri, prepares and files income tax returns for salaried individuals, traders, professionals, partnership firms and companies — with attention to the correct law, the correct form and a clean paper trail.",
    sections: [
      {
        h2: "Who needs professional help with ITR filing",
        paras: [
          "Many returns are simple. The cases where a chartered accountant adds real value are those with more than one source of income, business or professional receipts, capital gains on shares, mutual funds or property, foreign income or assets, or a pending notice.",
        ],
        list: [
          "Salaried individuals with income from other sources, house property or capital gains",
          "Traders, wholesalers, shop owners and service providers filing under books or presumptive taxation",
          "Doctors, consultants and other professionals",
          "Partnership firms, LLPs and companies",
          "Taxpayers who received an intimation, defective-return notice or scrutiny notice",
        ],
      },
      {
        h2: "What our income tax service covers",
        list: [
          "Return preparation and e-filing, including revised and belated returns where permitted",
          "Computation of business and professional income from books of account",
          "Capital gains computation for shares, mutual funds and immovable property",
          "Advance tax estimation and tax planning within the law",
          "Reconciliation of Form 26AS / AIS with your records before filing",
          "Reply to income tax notices and follow-up on refunds",
        ],
      },
      {
        h2: "The new Income-tax Act, 2025 — handled correctly",
        paras: [
          "The Income-tax Act, 2025 came into force on 1 April 2026. Income earned up to 31 March 2026 continues to be assessed under the Income-tax Act, 1961, while income from 1 April 2026 onwards falls under the new Act, which also renumbers sections and revises forms. We keep each filing under the law that applies to it and explain what changed in plain language.",
        ],
      },
      {
        h2: "Documents usually required",
        list: [
          "PAN and Aadhaar, with the mobile number linked to your income tax login",
          "Form 16 or salary statements, if employed",
          "Bank statements and interest certificates",
          "Details of investments, insurance premium and loan repayment",
          "Purchase and sale details for shares, mutual funds or property",
          "Books of account, or sales and expense records, if you run a business or profession",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you file my income tax return if I am outside Siliguri?",
        a: "Yes. Documents are shared securely online and returns are filed electronically, so we can assist clients across West Bengal and the rest of India.",
      },
      {
        q: "I received an income tax notice. What should I do first?",
        a: "Do not ignore it, and note the response deadline mentioned in the notice. Share the notice with our office along with the return it relates to so it can be reviewed and a reply prepared.",
      },
      {
        q: "Which law applies to my return for income earned before April 2026?",
        a: "Income earned up to 31 March 2026 continues to be governed by the Income-tax Act, 1961. The Income-tax Act, 2025 applies to income from 1 April 2026.",
      },
    ],
    related: ["tds-tcs-compliance-siliguri", "audit-and-assurance-siliguri", "accounting-and-bookkeeping-siliguri"],
  },
  {
    slug: "gst-registration-and-returns-siliguri",
    matchTitles: ["GST Services", "GST"],
    icon: "Receipt",
    navTitle: "GST Registration & Returns",
    h1: "GST Registration & Return Filing in Siliguri",
    metaTitle: "GST Registration & Returns in Siliguri | LG & Associates",
    metaDescription:
      "GST registration, GSTR-1 and GSTR-3B filing, annual return, reconciliation and notice replies in Siliguri by LG & Associates, chartered accountants (CA Lalit Gupta).",
    keywords:
      "gst consultant siliguri, gst registration siliguri, gst return filing siliguri, gst services siliguri, ca in siliguri",
    lead:
      "Siliguri is a major trading and distribution hub, and GST compliance sits at the centre of most businesses here. LG & Associates supports GST registration, monthly and annual returns, reconciliation and departmental notices for traders, manufacturers, service providers and e-commerce sellers.",
    sections: [
      {
        h2: "GST services we provide",
        list: [
          "New GST registration, amendments and cancellation",
          "Monthly and quarterly return filing (GSTR-1, GSTR-3B) and annual return",
          "Input tax credit reconciliation with GSTR-2B and purchase records",
          "Guidance on e-invoicing and e-way bill requirements",
          "Review of composition-scheme eligibility",
          "Replies to GST notices, show-cause notices and assessment queries",
        ],
      },
      {
        h2: "Why regular reconciliation matters",
        paras: [
          "Most GST problems — blocked input credit, mismatches and notices — start with differences between what suppliers report and what your books show. A monthly reconciliation routine, rather than a year-end clean-up, keeps credits claimable and returns defensible if the department asks questions later.",
        ],
      },
      {
        h2: "Documents usually required for GST registration",
        list: [
          "PAN and Aadhaar of the proprietor, partners or directors",
          "Proof of business premises (rent agreement and electricity bill, or ownership document)",
          "Bank account details with a cancelled cheque or statement",
          "Passport-size photograph and constitution documents of the entity",
          "Digital signature for companies and LLPs",
        ],
        note: "The exact list depends on your business structure. We share a tailored checklist after an initial discussion.",
      },
    ],
    faqs: [
      {
        q: "Which documents do I need for GST registration?",
        a: "Typically PAN, Aadhaar, proof of business address, bank account details and a photograph, plus constitution documents for firms and companies. We share a tailored checklist after understanding your business structure.",
      },
      {
        q: "Do I have to file a GST return if there was no business in a month?",
        a: "In most cases a nil return is still required for the period. Missing it can attract late fees, so confirm the position for your registration before skipping a filing.",
      },
      {
        q: "Can you help with a GST notice?",
        a: "Yes. Share the notice and the related returns with our office. We review the issue, prepare the reply and, where applicable, assist with the departmental process.",
      },
    ],
    related: ["accounting-and-bookkeeping-siliguri", "company-and-llp-registration-siliguri", "income-tax-return-filing-siliguri"],
  },
  {
    slug: "audit-and-assurance-siliguri",
    matchTitles: ["Audit & Assurance", "Audit"],
    icon: "ShieldCheck",
    navTitle: "Audit & Assurance",
    h1: "Audit & Assurance Services in Siliguri",
    metaTitle: "Statutory & Tax Audit in Siliguri | LG & Associates",
    metaDescription:
      "Statutory audit, tax audit, internal audit and financial verification in Siliguri by LG & Associates, chartered accountants led by CA Lalit Gupta.",
    keywords:
      "audit services siliguri, tax audit siliguri, statutory audit siliguri, ca firm in siliguri, internal audit siliguri",
    lead:
      "An audit is only as useful as the accounts behind it. LG & Associates carries out audit and assurance engagements for companies, LLPs, partnership firms, proprietary businesses and professionals in Siliguri, within the firm's professional scope and ICAI standards.",
    sections: [
      {
        h2: "Audit engagements we undertake",
        list: [
          "Statutory audit of companies, LLPs and other entities required to be audited",
          "Tax audit where turnover, gross receipts or other conditions in the income-tax law make it applicable",
          "Internal audit and review of controls for growing businesses",
          "Financial verification and professional certificates for banks and other authorities",
        ],
      },
      {
        h2: "Tax audit under the new Income-tax Act",
        paras: [
          "Tax audit has moved to a new section and a consolidated report format under the Income-tax Act, 2025 for income earned from 1 April 2026, while earlier years continue under the Income-tax Act, 1961 and its older forms. We confirm which framework applies to your accounts, and what has to be ready, well before the filing deadline.",
        ],
      },
      {
        h2: "How an engagement runs",
        list: [
          "Scoping call to understand the entity, the period and the reporting requirement",
          "Document and ledger request list shared in advance",
          "Fieldwork and queries, with open points discussed before the report is drafted",
          "Report issued, filed where required, and a short note on improvements for next year",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you handle audit engagements?",
        a: "Yes. We support statutory audit, tax audit and internal audit engagements within the firm's professional scope. Contact the office to discuss your specific requirement.",
      },
      {
        q: "How do I know whether my business needs a tax audit?",
        a: "It depends on turnover or gross receipts, the type of income and whether presumptive taxation was used. The limits and section references changed with the Income-tax Act, 2025, so it is best to have the position confirmed for your specific year.",
      },
    ],
    related: ["accounting-and-bookkeeping-siliguri", "income-tax-return-filing-siliguri", "company-and-llp-registration-siliguri"],
  },
  {
    slug: "accounting-and-bookkeeping-siliguri",
    matchTitles: ["Accounting & Bookkeeping", "Accounting"],
    icon: "Calculator",
    navTitle: "Accounting & Bookkeeping",
    h1: "Accounting & Bookkeeping Services in Siliguri",
    metaTitle: "Accounting & Bookkeeping in Siliguri | LG & Associates",
    metaDescription:
      "Structured bookkeeping, bank reconciliation, financial statements and MIS reports for Siliguri businesses by LG & Associates, chartered accountants (CA Lalit Gupta).",
    keywords:
      "accounting services siliguri, bookkeeping siliguri, ca services siliguri, financial statements siliguri, accountant siliguri",
    lead:
      "Clean books make every other compliance easier — GST, TDS, income tax and audit all draw from the same records. LG & Associates maintains and reviews accounts for traders, wholesalers, professionals and small companies in Siliguri.",
    sections: [
      {
        h2: "What accounting support includes",
        list: [
          "Day-to-day bookkeeping and ledger maintenance",
          "Bank, debtor and creditor reconciliation",
          "Preparation of profit and loss account, balance sheet and schedules",
          "Monthly or quarterly MIS so you can see margins, receivables and cash position",
          "Review and clean-up of backlog or incorrectly maintained books",
        ],
      },
      {
        h2: "Who this suits",
        paras: [
          "Owners who spend their evenings sorting vouchers, businesses preparing for a bank loan or audit, and firms whose books have fallen behind. We agree a routine for how documents reach us — physical or digital — and a calendar for what is delivered and when.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you take over books that are several months behind?",
        a: "Yes. We first assess the backlog, agree a scope and timeline, and then bring the records up to date before moving to a regular monthly routine.",
      },
      {
        q: "Do I need to send physical documents?",
        a: "Not necessarily. Scanned bills, bank statements and exports from your billing software can be shared securely online. Physical documents can be handed over at the Khalpara office if you prefer.",
      },
    ],
    related: ["gst-registration-and-returns-siliguri", "audit-and-assurance-siliguri", "tds-tcs-compliance-siliguri"],
  },
  {
    slug: "tds-tcs-compliance-siliguri",
    matchTitles: ["TDS & TCS", "TDS"],
    icon: "Percent",
    navTitle: "TDS & TCS Compliance",
    h1: "TDS & TCS Compliance in Siliguri",
    metaTitle: "TDS & TCS Return Filing in Siliguri | LG & Associates",
    metaDescription:
      "Quarterly TDS and TCS statements, challan checks, certificates and notice support in Siliguri by LG & Associates, chartered accountants (CA Lalit Gupta).",
    keywords:
      "tds return filing siliguri, tcs compliance siliguri, tds consultant siliguri, ca services siliguri",
    lead:
      "Businesses that pay rent, professional fees, contractor bills, commission or salaries usually have TDS obligations, and errors here lead to interest, late fees and disallowance. LG & Associates handles TDS and TCS compliance end to end for Siliguri businesses.",
    sections: [
      {
        h2: "TDS & TCS services",
        list: [
          "Deductor registration and set-up",
          "Working out whether tax is deductible, and at what rate, for each type of payment",
          "Challan preparation and deposit checks",
          "Quarterly TDS and TCS statement preparation and filing",
          "Issue and reconciliation of TDS certificates",
          "Handling of default notices and correction statements",
        ],
      },
      {
        h2: "Common issues we help prevent",
        paras: [
          "Late deposit, wrong section or rate, missing PAN of the deductee and mismatch between the statement and the challan are the usual causes of notices. A short monthly review of payments catches most of these before they reach the quarterly statement.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is required to deduct TDS?",
        a: "Businesses and professionals making certain specified payments — such as salary, rent, contractor and professional fees — above prescribed limits are generally required to deduct tax. The exact rules depend on the nature of the payment and the payer.",
      },
      {
        q: "What happens if TDS is deducted but filed late?",
        a: "Late deposit and late filing can attract interest and fees. If you have already missed a deadline, share the details so the position can be corrected as early as possible.",
      },
    ],
    related: ["income-tax-return-filing-siliguri", "accounting-and-bookkeeping-siliguri", "gst-registration-and-returns-siliguri"],
  },
  {
    slug: "company-and-llp-registration-siliguri",
    matchTitles: ["Company & LLP Compliance", "Business Registration", "Company & LLP"],
    icon: "Building2",
    navTitle: "Company & LLP Registration",
    h1: "Company & LLP Registration in Siliguri",
    metaTitle: "Company & LLP Registration in Siliguri | LG & Associates",
    metaDescription:
      "Company, LLP and partnership registration plus ROC annual compliance in Siliguri by LG & Associates, chartered accountants led by CA Lalit Gupta.",
    keywords:
      "company registration siliguri, llp registration siliguri, private limited company siliguri, roc compliance siliguri, ca firm in siliguri",
    lead:
      "Choosing the right structure — and keeping it compliant afterwards — matters more than the registration itself. LG & Associates assists founders and family businesses in Siliguri with incorporation, partnership and LLP formation and ongoing ROC compliance.",
    sections: [
      {
        h2: "Registration and compliance services",
        list: [
          "Private limited company, one person company and LLP incorporation",
          "Partnership deed drafting support and firm registration",
          "PAN, TAN, GST and other post-incorporation registrations",
          "Director KYC, digital signature and statutory registers",
          "Annual financial statements and annual return filing with the Registrar of Companies",
          "Changes in directors, address, capital or object clause",
        ],
      },
      {
        h2: "Choosing a structure",
        paras: [
          "A proprietorship is the simplest, while a partnership, LLP or company separates the business from its owners to different degrees and carries different compliance and tax consequences. We walk through liability, tax, funding plans and running costs with you before recommending a structure — see our guide below for a side-by-side comparison.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an LLP or a private limited company better for a small business?",
        a: "It depends on your plans for funding, ownership, liability and compliance load. An LLP generally has lighter compliance, while a company is often preferred when external investment is expected. We discuss both before you decide.",
      },
      {
        q: "Do registered companies and LLPs have yearly filings even without business?",
        a: "Yes. Companies and LLPs generally have annual filing obligations with the Registrar even in a year with no turnover, so ongoing compliance should be planned from the start.",
      },
    ],
    related: ["accounting-and-bookkeeping-siliguri", "gst-registration-and-returns-siliguri", "audit-and-assurance-siliguri"],
  },
];

// Existing hub pages + new specialised pages. Hub pages list their new sub-pages first in "related".
export const SERVICE_PAGES = [
  ...BASE_SERVICE_PAGES.map((p) => ({
    ...p,
    related: [...new Set([...(HUB_RELATED[p.slug] || []), ...(p.related || [])])],
  })),
  ...EXTRA_SERVICE_PAGES,
];

export const RESOURCES = [
  {
    slug: "documents-required-for-gst-registration",
    title: "Documents Required for GST Registration in Siliguri",
    metaTitle: "Documents Required for GST Registration | LG & Associates",
    metaDescription:
      "A practical checklist of documents needed for GST registration for proprietors, partnerships, LLPs and companies in Siliguri, West Bengal.",
    keywords: "gst registration documents, gst registration siliguri, gst checklist",
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
    readMinutes: 3,
    lead:
      "Most delays in GST registration come from incomplete or mismatched documents rather than the application itself. This checklist covers what is normally asked for, by type of business.",
    sections: [
      {
        h2: "Common to every applicant",
        list: [
          "PAN of the proprietor, firm, LLP or company",
          "Aadhaar of the proprietor, partners or authorised signatory (for authentication)",
          "Mobile number and email address that you actively use — OTPs are sent to both",
          "Bank account details, usually a cancelled cheque or first page of the passbook or statement",
          "Passport-size photograph of the promoter(s)",
        ],
      },
      {
        h2: "Proof of principal place of business",
        paras: [
          "If the premises are owned, an electricity bill or property tax receipt is usually enough. If rented, a rent agreement along with the owner's electricity bill is typically needed. If the premises are shared or provided by a relative, a consent letter from the owner may be asked for.",
        ],
      },
      {
        h2: "Additional documents by structure",
        list: [
          "Partnership firm — partnership deed and PAN of the firm",
          "LLP — LLP agreement, certificate of incorporation and designated partner details",
          "Company — certificate of incorporation, MOA/AOA, board resolution and director details",
        ],
      },
      {
        h2: "Before you apply",
        paras: [
          "Make sure the name and date of birth on your PAN and Aadhaar match exactly, that the address on the proof is the one you will declare, and that you have chosen the correct business activity description. Small mismatches are the most common reason for queries on the application. Requirements can change, so confirm the current list before applying.",
        ],
      },
    ],
    cta: { label: "GST registration & returns", to: "/services/gst-registration-and-returns-siliguri" },
  },
  {
    slug: "proprietorship-vs-partnership-vs-llp-vs-company",
    title: "Proprietorship vs Partnership vs LLP vs Private Limited Company",
    metaTitle: "Proprietorship vs Partnership vs LLP vs Company | LG & Associates",
    metaDescription:
      "A plain-language comparison of proprietorship, partnership, LLP and private limited company in India — liability, compliance, taxation and when each fits.",
    keywords: "proprietorship vs llp, partnership vs company, business structure india, company registration siliguri",
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
    readMinutes: 4,
    lead:
      "The right structure depends on how you plan to run, fund and eventually hand over the business. This guide compares the four common options in general terms; your own facts decide the answer.",
    sections: [
      {
        h2: "Proprietorship",
        paras: [
          "One individual owns and runs the business; there is no separate legal entity. Set-up and compliance are minimal, but the owner's personal assets are exposed to business liabilities. It suits small, owner-run businesses and early-stage ventures.",
        ],
      },
      {
        h2: "Partnership firm",
        paras: [
          "Two or more people run a business under a partnership deed. Profits are shared as agreed and, in a general partnership, partners are personally liable for the firm's debts. It is common among family-run trading businesses, but it offers limited protection and no easy route for outside investment.",
        ],
      },
      {
        h2: "Limited Liability Partnership (LLP)",
        paras: [
          "A registered entity in which each partner's liability is generally limited to their agreed contribution. Compliance is lighter than for a company, and it is popular with professional firms and small family businesses that want protection without the full company framework.",
        ],
      },
      {
        h2: "Private limited company",
        paras: [
          "A separate legal entity with shareholders and directors, suited to businesses that plan to raise equity funding, issue shares or scale. It has the most regulatory compliance of the four, including annual filings and board processes.",
        ],
      },
      {
        h2: "How to choose",
        list: [
          "Liability: how much personal risk are you comfortable carrying?",
          "Funding: will you need outside equity or only bank finance?",
          "Compliance: how much recurring paperwork and cost can you manage?",
          "Tax: rates and benefits differ by structure and change over time — check the current position before deciding",
          "Succession: who will own or run the business later?",
        ],
      },
    ],
    cta: { label: "Company & LLP registration", to: "/services/company-and-llp-registration-siliguri" },
  },
  {
    slug: "itr-filing-document-checklist",
    title: "ITR Filing Document Checklist for Individuals and Traders",
    metaTitle: "ITR Filing Document Checklist | LG & Associates, Siliguri",
    metaDescription:
      "What to keep ready before filing your income tax return — documents for salaried individuals, traders, professionals and investors.",
    keywords: "itr filing documents, income tax return checklist, itr siliguri",
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
    readMinutes: 3,
    lead:
      "Having documents ready before you start shortens filing time and reduces the chance of a revised return later. Use this checklist as a starting point and add anything specific to your situation.",
    sections: [
      {
        h2: "For everyone",
        list: [
          "PAN, Aadhaar and the mobile number linked to your income tax login",
          "Bank account numbers and IFSC codes, including accounts where you want the refund",
          "Form 26AS / Annual Information Statement (AIS) from the income tax portal",
          "Interest certificates from banks, post office and deposits",
        ],
      },
      {
        h2: "If you are salaried",
        list: [
          "Form 16 from each employer for the year",
          "Salary slips, if there was a change of employer",
          "Details of house rent paid, home loan interest and other claimed deductions",
        ],
      },
      {
        h2: "If you run a business or profession",
        list: [
          "Sales, purchase and expense records or books of account",
          "Bank statements for all business accounts",
          "GST returns filed for the year, if registered",
          "Details of fixed assets bought or sold, loans taken and capital introduced",
        ],
      },
      {
        h2: "If you invest",
        list: [
          "Broker and mutual fund capital-gains statements",
          "Sale and purchase deeds for property transactions",
          "Dividend statements and details of any foreign assets or income",
        ],
      },
      {
        h2: "A note on which law applies",
        paras: [
          "Income earned up to 31 March 2026 is assessed under the Income-tax Act, 1961, while income from 1 April 2026 falls under the Income-tax Act, 2025. Forms, section numbers and some procedures differ, so confirm which framework your return falls under before you start.",
        ],
      },
    ],
    cta: { label: "Income tax & ITR filing", to: "/services/income-tax-return-filing-siliguri" },
  },
];

export const serviceBySlug = (slug) => SERVICE_PAGES.find((s) => s.slug === slug);
export const resourceBySlug = (slug) => RESOURCES.find((r) => r.slug === slug);
export const serviceForTitle = (title) =>
  SERVICE_PAGES.find((s) => s.matchTitles.some((t) => t.toLowerCase() === String(title || "").trim().toLowerCase()));
