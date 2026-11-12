// src/pages/Process.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const steps = [
  ["01", "Understand", "We learn about your business, goals, current setup and the specific compliance or accounting work you need."],
  ["02", "Plan", "We define the scope, the documents required, the timeline and the professional work involved."],
  ["03", "Execute", "Our team handles filings, records, review and submission, with checks at every stage."],
  ["04", "Advise", "You receive clear updates on your position and practical next steps — not just a filed return."],
];

const principles = [
  ["Transparent communication", "You always know what’s being filed, when and why."],
  ["Documented scope", "Clear engagement scope so nothing is ambiguous."],
  ["Deadline discipline", "Statutory deadlines are tracked and met."],
  ["Confidentiality", "Client information is handled with strict confidentiality."],
];

export default function Process({ site }) {
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Process"
          title="How we work with clients"
          description="A straightforward engagement model designed to keep your financial work organised, timely and clearly communicated."
          breadcrumbs={[{ label: "Process" }]}
        />

        <section className="section">
          <div className="container-x">
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map(([n, t, d]) => (
                <div key={n} className="card p-6 sm:p-8">
                  <div className="font-display text-3xl font-bold text-brand">{n}</div>
                  <h2 className="mt-4 text-xl font-bold">{t}</h2>
                  <p className="mt-2 leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">Principles</div>
            <h2 className="mb-8 mt-2 text-3xl font-bold leading-tight sm:text-4xl">What we hold ourselves to</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-surface p-5">
                  <b className="font-display">{t}</b>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Contact the office to discuss your requirements.
            </p>
            <Link to="/contact" className="btn btn-primary mt-6 px-6 py-3.5">
              Contact us <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}