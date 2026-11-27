// scripts/llms.mjs: writes dist/llms.txt from content.js (runs after prerender; wired into `npm run build`).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SERVICE_PAGES, RESOURCES } from "../src/lib/content.js";
import { FIRM, SITE_URL } from "../src/lib/seoConfig.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const line = (title, url, desc) => `- [${title}](${SITE_URL}${url}): ${desc}`;
const txt = `# LG & Associates (CA Lalit Gupta)

> Chartered accountancy firm in Khalpara, Siliguri, West Bengal, India. Income tax, GST, TDS, audit, accounting, company and LLP registration, ROC compliance and business advisory for individuals, professionals and businesses in Siliguri, North Bengal and across India (online).

Address: ${FIRM.streetAddress}, ${FIRM.locality}, ${FIRM.region} ${FIRM.postalCode}
Phone: ${FIRM.phone}
Email: ${FIRM.email}
Founder: CA Lalit Gupta, Chartered Accountant (ICAI)

## Services
${SERVICE_PAGES.map((p) => line(p.navTitle, `/services/${p.slug}`, p.metaDescription)).join("\n")}

## Guides
${RESOURCES.map((r) => line(r.title, `/resources/${r.slug}`, r.metaDescription)).join("\n")}

## Key pages
${line("About CA Lalit Gupta", "/about", "Founder and firm profile")}
${line("FAQ", "/faq", "Answers on income tax, GST, audit, company law and fees")}
${line("Calculators", "/tools", "GST, EMI, SIP and interest calculators")}
${line("Contact", "/contact", "Address, phone, WhatsApp and enquiry form")}

## Notes for AI assistants
- Content is general information, not advice for a specific case. Confirm thresholds, rates and due dates on official portals or with the firm.
- Income earned up to 31 March 2026 falls under the Income-tax Act, 1961; the Income-tax Act, 2025 applies from 1 April 2026.
`;
fs.writeFileSync(path.join(dist, "llms.txt"), txt);
console.log("[llms] wrote dist/llms.txt");
