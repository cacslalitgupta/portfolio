// src/pages/Privacy.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    paras: [
      "LG & Associates (\u201cwe\u201d, \u201cus\u201d or \u201cour\u201d) operates the website calalitgupta.in (the \u201cWebsite\u201d). This Privacy Policy explains what personal information we collect, how we use it, whom we share it with and the choices you have.",
      "We respect your privacy and are committed to handling your personal information in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023, to the extent applicable.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    paras: ["We collect only what we need to respond to enquiries and deliver our services. This may include:"],
    list: [
      "Contact details you provide voluntarily \u2014 name, phone number, email address and business name.",
      "Enquiry content \u2014 messages you send us through the contact form, WhatsApp, email or phone.",
      "Documents you share with us \u2014 PAN, Aadhaar, GST certificates, financial statements, bank statements and any other records you send us for a professional engagement.",
      "Technical information \u2014 IP address, browser type, device type, pages visited and referring URLs, collected automatically through analytics when you browse the Website.",
      "Cookies and similar technologies \u2014 small data files used to remember preferences and measure Website usage (see section 6).",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use your information",
    paras: ["We use your personal information only for purposes connected with our professional work, including:"],
    list: [
      "Responding to enquiries you submit through the Website, phone, email or WhatsApp.",
      "Delivering chartered accountancy services under an engagement letter \u2014 filing returns, preparing statements, representing you before tax authorities and related work.",
      "Complying with legal, regulatory and professional obligations, including know-your-client (KYC), anti-money-laundering and record-keeping requirements.",
      "Improving the Website and understanding how visitors use it.",
      "Sending occasional updates about the firm\u2019s services or regulatory changes, only where you have asked to receive them.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal basis and consent",
    paras: [
      "We process personal information because it is necessary to respond to your enquiry, to perform a professional engagement, to comply with legal obligations and where you have given consent. You may withdraw consent at any time by contacting us, though this may affect our ability to serve you.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing of information",
    paras: [
      "We do not sell your personal information. We share it only where necessary and with appropriate safeguards:",
    ],
    list: [
      "With service providers we rely on to operate the Website and office \u2014 for example hosting, email, analytics and secure document-sharing providers.",
      "With government or regulatory authorities where we are required to do so by law, court order, or professional obligation.",
      "With other professionals (such as advocates, valuers or auditors) only where necessary for your engagement and with your knowledge.",
      "With your explicit consent, in any other case.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and analytics",
    paras: [
      "The Website may use cookies and similar technologies to remember your preferences and to understand how visitors use the site. You can disable cookies in your browser settings; some features of the Website may not work as intended if you do.",
    ],
  },
  {
    id: "security",
    title: "7. Data security",
    paras: [
      "We take reasonable technical and organisational measures to protect the personal information you share with us, including access controls, secure transmission and restricted internal access.",
      "No method of transmission or storage is completely secure. You share information with us at your own risk and we encourage you to send sensitive documents through the secure channels we provide rather than ordinary email.",
    ],
  },
  {
    id: "retention",
    title: "8. How long we keep information",
    paras: [
      "We retain personal information only as long as necessary for the purpose for which it was collected, or as required by law. Client records are typically retained for the period required by the Chartered Accountants Act, 1949 and related regulations, after which they are securely disposed of.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your rights",
    paras: ["Subject to applicable law, you may request the following:"],
    list: [
      "Access to the personal information we hold about you.",
      "Correction of any inaccurate or incomplete information.",
      "Deletion of your personal information, where we are not required by law to retain it.",
      "Withdrawal of consent you previously gave us.",
    ],
    after: [
      "To exercise any of these rights, please contact the office using the details in the footer. We will respond within a reasonable time and in accordance with applicable law.",
    ],
  },
  {
    id: "children",
    title: "10. Children",
    paras: [
      "The Website and our services are not directed at children. We do not knowingly collect personal information from anyone under 18 without the involvement of a parent or guardian.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to this policy",
    paras: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised \u201cLast updated\u201d date. Continued use of the Website after changes are posted constitutes your acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact us",
    paras: [
      "If you have questions about this Privacy Policy, wish to exercise any of your rights, or wish to raise a concern about how we have handled your personal information, please contact the office using the details on the Contact page or in the footer.",
    ],
  },
];

export default function Privacy({ site }) {
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
          title="Privacy Policy"
          description="How LG & Associates collects, uses and protects the personal information you share with us."
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />

        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.35fr_.65fr] lg:gap-16">
            {/* Sticky TOC */}
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
            <article className="grid gap-8">
              <p className="text-sm text-muted">
                Last updated: <span className="font-semibold text-ink">{lastUpdated}</span>
              </p>

              {SECTIONS.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold leading-tight text-ink sm:text-2xl">
                    {sec.title}
                  </h2>
                  {sec.paras?.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                  {sec.list && (
                    <ul className="mt-3 grid gap-2">
                      {sec.list.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.after?.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <div className="card bg-surface/60 p-5 text-sm leading-relaxed text-muted">
                This policy is provided for transparency. It does not create any rights
                beyond those available under applicable law. For questions, please{" "}
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