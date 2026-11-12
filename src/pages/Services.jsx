// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

// Per-service URLs — matches your master plan §6.
// When you build each page, the slug here will route to it.
// Until then, ServiceCard falls back to #contact for unpublished services.
const SERVICE_SLUGS = {
  "Income Tax & ITR": "income-tax-consultancy",
  "GST Services": "gst-consultancy",
  "Accounting & Bookkeeping": "accounting-bookkeeping",
  "Audit & Assurance": "audit-assurance",
  "TDS & TCS": "tds-tcs",
  "Company & LLP Compliance": "business-registration",
  "Business Advisory": "business-advisory",
  "Payroll & Compliance": "payroll-compliance",
};

// Services that actually have a dedicated page live.
// Add to this set as you build each page.
const LIVE_SERVICE_PAGES = new Set([
  // "gst-consultancy",
  // "income-tax-consultancy",
]);

const serviceFaqs = [
  {
    q: "Which documents do I need for GST registration?",
    a: "Typically PAN, Aadhaar, proof of business address, bank account details and a photograph. Exact requirements depend on your business structure — we share a tailored checklist after an initial discussion.",
  },
  {
    q: "Can you file my income tax return if I work outside Siliguri?",
    a: "Yes. Most of our work is handled online through secure document sharing, so we support clients across West Bengal and India.",
  },
  {
    q: "Do you handle audit engagements?",
    a: "We support statutory audit, tax audit and internal audit engagements within the firm’s professional scope. Contact the office to discuss your specific requirement.",
  },
];

export default function Services({ site }) {
  const s = site.settings;
  const { services } = site;

  // Enrich each service with a slug + whether its page exists.
  const enriched = services.map((svc) => {
    const slug = SERVICE_SLUGS[svc.title];
    return {
      ...svc,
      slug,
      slugLive: slug ? LIVE_SERVICE_PAGES.has(slug) : false,
    };
  });

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Services"
          title="Chartered Accountancy Services in Siliguri"
          description="Income tax, GST consultancy, audit and assurance, accounting and bookkeeping, business registration and advisory — from LG & Associates."
          breadcrumbs={[{ label: "Services" }]}
        />

        {/* Services grid */}
        <section className="section">
          <div className="container-x">
            {enriched.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {enriched.map((x) => (
                  <ServiceCard key={x.id} service={x} slug={x.slug} slugLive={x.slugLive} />
                ))}
              </div>
            ) : (
              <p className="text-muted">Services will appear here soon.</p>
            )}
          </div>
        </section>

        {/* Why Siliguri — location signal for local SEO */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Based in Siliguri</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Serving clients across Siliguri and West Bengal.
              </h2>
              <p className="leading-relaxed text-muted">
                Our office is on Nehru Road, Ward 8, Khalpara, Siliguri. We work with
                individuals, professionals, entrepreneurs and businesses in Siliguri, Darjeeling,
                Jalpaiguri and across India.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-sm font-semibold">
                  {s.address || "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005"}
                </span>
              </div>
              <ul className="mt-6 grid gap-2 text-sm">
                {[
                  "Remote support across India",
                  "In-office consultations by appointment",
                  "Secure document sharing",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-acctext" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow">How engagements work</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                A clear, structured engagement model.
              </h2>
              <div className="grid gap-3">
                {[
                  ["01", "Initial discussion", "We learn about your business, goals and current setup."],
                  ["02", "Scope & plan", "We define the compliance and finance work required."],
                  ["03", "Execution", "Our team handles filings, records and review."],
                  ["04", "Ongoing advisory", "You receive clear updates and practical next steps."],
                ].map(([n, t, d]) => (
                  <div key={n} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4">
                    <span className="font-display text-lg font-bold text-brand">{n}</span>
                    <div>
                      <b className="font-display">{t}</b>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service FAQs — helps FAQPage schema on this page */}
        <section className="section">
          <div className="container-x grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="eyebrow">Questions</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Service questions
              </h2>
              <p className="text-muted">
                A few common questions about our services. For more, see the{" "}
                <Link to="/faq" className="font-semibold text-brand hover:underline">
                  full FAQ page
                </Link>.
              </p>
            </div>
            <div className="grid gap-3">
              {serviceFaqs.map((f) => (
                <details key={f.q} className="card p-5 group">
                  <summary className="cursor-pointer list-none font-display font-semibold marker:content-none flex items-center justify-between gap-4">
                    {f.q}
                    <span className="shrink-0 text-brand transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-line bg-surface/60">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Not sure what you need?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Tell us what you’re dealing with and we’ll suggest the right engagement.
            </p>
            <Link to="/contact" className="btn btn-primary mt-6 px-6 py-3.5">
              Talk to us <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}