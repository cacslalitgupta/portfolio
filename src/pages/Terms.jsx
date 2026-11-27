// src/pages/Terms.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    paras: [
      "By accessing or using calalitgupta.in (the \u201cWebsite\u201d), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the Website.",
      "These terms apply to all visitors, clients and prospective clients who access the Website, submit an enquiry, or engage LG & Associates for professional services.",
    ],
  },
  {
    id: "scope",
    title: "2. Nature of information",
    paras: [
      "The content on this Website is provided for general informational purposes only. It is not intended to be, and should not be relied upon as, professional advice on any specific matter.",
      "Tax, GST, audit and regulatory positions change frequently. Any information published here reflects our understanding at the time of writing and may become outdated. You should obtain professional advice specific to your facts and circumstances before acting on anything you read on this Website.",
    ],
  },
  {
    id: "no-solicitation",
    title: "3. No solicitation or advertisement",
    paras: [
      "In accordance with the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this Website is not an advertisement or a solicitation of professional work. Nothing on this Website should be construed as an invitation to engage LG & Associates.",
      "The information is offered solely for the purpose of making visitors aware of the nature of services rendered by the firm. Any engagement will be governed by a separate written agreement between you and the firm.",
    ],
  },
  {
    id: "no-client-relationship",
    title: "4. No client relationship",
    paras: [
      "Accessing this Website, reading its content, submitting an enquiry form, sending an email or initiating a WhatsApp conversation does not create a client relationship between you and LG & Associates.",
      "A client relationship is established only when both parties sign an engagement letter (or otherwise agree in writing) setting out the scope, deliverables, fees and terms of the engagement.",
    ],
  },
  {
    id: "services",
    title: "5. Professional services",
    paras: [
      "LG & Associates provides chartered accountancy services including income tax, GST, audit and assurance, accounting, payroll, company and LLP incorporation, and related advisory, within the professional and regulatory framework applicable to the firm.",
      "Every engagement is subject to: (a) acceptance of the engagement by the firm; (b) completion of know-your-client (KYC) and anti-money-laundering checks as required by law; and (c) the firm\u2019s independence and conflict-of-interest policies.",
      "The scope, fees and deliverables of any engagement will be documented in an engagement letter. Nothing on this Website guarantees any outcome, approval, refund, reduction in tax, or particular result.",
    ],
  },
  {
    id: "client-responsibility",
    title: "6. Your responsibilities",
    paras: [
      "Where you engage the firm, you agree to provide complete, accurate and timely information, documents and instructions necessary to carry out the engagement.",
      "You are responsible for the accuracy of the information and records you share. The firm will rely on the information you provide and will not independently verify it except as specifically agreed in the engagement letter.",
      "You agree to comply with all applicable laws and not to use the Website or the firm\u2019s services for any unlawful, fraudulent or misleading purpose.",
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual property",
    paras: [
      "All content on this Website \u2014 including text, structure, layout, graphics, logos and downloadable material \u2014 is the property of LG & Associates or its licensors and is protected by applicable copyright and intellectual property laws.",
      "You may view, print or download content for personal, non-commercial reference only. You may not reproduce, republish, distribute, modify or create derivative works from this content without prior written permission.",
    ],
  },
  {
    id: "third-party",
    title: "8. Third-party links and tools",
    paras: [
      "This Website may link to third-party websites, tools, calculators or resources. These are provided for convenience only. LG & Associates does not control and is not responsible for the content, accuracy, availability or privacy practices of any third-party site.",
      "Use of any third-party tool or calculator available through the Website is at your own risk. Results are indicative only and should be verified with the firm before being relied upon.",
    ],
  },
  {
    id: "limitation",
    title: "9. Limitation of liability",
    paras: [
      "To the maximum extent permitted by law, LG & Associates, its partners, employees and associates shall not be liable for any direct, indirect, incidental, consequential or special loss or damage arising out of or in connection with your use of this Website or reliance on its content.",
      "This includes, without limitation, any loss of profits, business, data or goodwill. Nothing in these terms limits liability that cannot be limited under applicable law, including liability arising from professional services rendered under a separate engagement letter.",
    ],
  },
  {
    id: "privacy",
    title: "10. Privacy",
    paras: [
      "Our collection and use of personal information is described in our Privacy Policy. By using this Website, you consent to the practices described in that policy.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to these terms",
    paras: [
      "We may update these Terms & Conditions from time to time. The updated version will be posted on this page with a revised \u201cLast updated\u201d date. Continued use of the Website after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    id: "governing-law",
    title: "12. Governing law and jurisdiction",
    paras: [
      "These terms are governed by the laws of India. Any dispute arising out of or in connection with the Website shall be subject to the exclusive jurisdiction of the courts at Siliguri, West Bengal.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    paras: [
      "If you have any questions about these Terms & Conditions, please write to us at the contact details on the Contact page, or email the office using the details provided in the footer.",
    ],
  },
];

export default function Terms({ site }) {
  const s = site.settings;
  const lastUpdated = "27 November 2026";

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Terms & Conditions"
          description="The terms that govern your use of calalitgupta.in and any professional engagement with LG & Associates."
          breadcrumbs={[{ label: "Terms & Conditions" }]}
        />

        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.35fr_.65fr] lg:gap-16">
            {/* Sticky table of contents */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="card p-5">
                <div className="eyebrow">On this page</div>
                <ul className="mt-3 grid gap-1.5 text-sm">
                  {SECTIONS.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block py-1 text-muted transition hover:text-brand"
                      >
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <article className="prose-ca grid gap-8">
              <p className="text-sm text-muted">
                Last updated: <span className="font-semibold text-ink">{lastUpdated}</span>
              </p>

              {SECTIONS.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold leading-tight text-ink sm:text-2xl">
                    {sec.title}
                  </h2>
                  {sec.paras.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <div className="card bg-surface/60 p-5 text-sm leading-relaxed text-muted">
                This page is provided for transparency and general information. It does
                not constitute legal advice and does not replace a formal engagement
                letter. For questions, please{" "}
                <Link to="/contact" className="font-semibold text-brand hover:underline">
                  contact the office
                </Link>
                .
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}