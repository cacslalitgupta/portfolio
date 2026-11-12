// src/lib/seoConfig.js
// Single source of truth for per-route <title> and <meta description>.
// If a route is missing here, SEO.jsx falls back to the "/" entry.

export const SEO_BY_PATH = {
  "/": {
    title: "CA Lalit Gupta | Chartered Accountant in Siliguri – LG & Associates",
    description:
      "CA Lalit Gupta of LG & Associates, Siliguri, provides professional Chartered Accountancy, GST, taxation, auditing, accounting and business advisory services.",
  },
  "/about": {
    title: "About CA Lalit Gupta | Chartered Accountant – LG & Associates",
    description:
      "Learn about CA Lalit Gupta, his professional background, areas of expertise and association with LG & Associates, Chartered Accountants in Siliguri.",
  },
  "/services": {
    title: "Services | LG & Associates – Chartered Accountants in Siliguri",
    description:
      "Income tax, GST consultancy, audit and assurance, accounting and bookkeeping, business registration and advisory services from LG & Associates, Siliguri.",
  },
  "/process": {
    title: "Our Process | LG & Associates – Chartered Accountants, Siliguri",
    description:
      "How LG & Associates works with clients: understanding, planning, execution and advisory — a clear, structured engagement model.",
  },
  "/reviews": {
    title: "Client Feedback | LG & Associates – Chartered Accountants, Siliguri",
    description:
      "Our feedback policy and where to find genuine client reviews on our Google Business Profile.",
  },
  "/faq": {
    title: "Frequently Asked Questions | LG & Associates – Chartered Accountants",
    description:
      "Answers to common questions about income tax, GST, audit and accounting services from LG & Associates, Siliguri.",
  },
  "/contact": {
    title: "Contact LG & Associates | Chartered Accountants in Siliguri",
    description:
      "Contact LG & Associates in Siliguri — Nehru Road, Ward 8, Khalpara. Phone, WhatsApp, email, directions and enquiry form.",
  },
  "/tools": {
    title: "Financial Calculators | LG & Associates – Chartered Accountants",
    description:
      "Free financial calculators: interest, loan EMI, SIP and GST — from LG & Associates, Chartered Accountants in Siliguri.",
  },
};

export const FALLBACK_SEO = SEO_BY_PATH["/"];