// src/pages/About.jsx
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const ICAI_MEMBERSHIP = "CS-11023"; // ← replace

const expertise = [
  "Income Tax Return Filing & Advisory",
  "GST Registration, Returns & Compliance",
  "Statutory Audit & Tax Audit",
  "Accounting & Bookkeeping",
  "TDS & TCS Compliance",
  "Business Registration & Advisory",
];

const approach = [
  ["Clarity", "Clear, jargon-free explanations of your tax and compliance position."],
  ["Accuracy", "Every filing, return and report is reviewed before submission."],
  ["Discipline", "Structured processes that keep deadlines and records under control."],
  ["Practicality", "Advice grounded in your actual business situation, not generic templates."],
];

export default function About({ site }) {
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="About"
          title="CA Lalit Gupta — Chartered Accountant in Siliguri"
          description="Chartered Accountant and founder of LG & Associates, serving individuals, professionals and businesses across Siliguri and West Bengal."
          breadcrumbs={[{ label: "About" }]}
        />

        {/* Profile */}
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-primary p-7 text-onprimary sm:min-h-[460px] sm:p-9">
              <img
                src="/images/photo_lalitgupta.avif"
                alt="CA Lalit Gupta, Chartered Accountant and founder of LG & Associates, Siliguri, Siliguri"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="relative">
                <div className="font-display text-5xl font-bold sm:text-6xl">₹</div>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">CA Lalit Gupta</h2>
                <p className="mt-1 text-sm opacity-85">Chartered Accountant · Founder, LG & Associates</p>
              </div>
            </div>

            <div>
              <div className="eyebrow">Professional background</div>
              <h2 className="mb-5 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                A chartered accountancy practice built on discipline and clarity.
              </h2>
              <p className="leading-relaxed text-muted">
                                CA Lalit Gupta is a Chartered Accountant and the founder of LG & Associates, a
                chartered accountancy firm based in Siliguri, West Bengal. The practice supports
                individuals, professionals, entrepreneurs and businesses with income tax, GST,
                audit, accounting and statutory compliance requirements.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                The firm's approach is straightforward: accurate filings, clear communication and
                practical financial guidance that helps clients stay compliant and make better
                decisions throughout the year.
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">Designation</dt>
                  <dd className="mt-1 font-display font-bold">Chartered Accountant</dd>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">Professional body</dt>
                  <dd className="mt-1 font-display font-bold">ICAI</dd>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">Firm</dt>
                  <dd className="mt-1 font-display font-bold">LG &amp; Associates</dd>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">Membership No.</dt>
                  <dd className="mt-1 font-display font-bold">{ICAI_MEMBERSHIP}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">Areas of expertise</div>
            <h2 className="mb-8 mt-2 text-3xl font-bold leading-tight sm:text-4xl">What we work on</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map((x) => (
                <li key={x} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm font-semibold">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-acctext" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section className="section">
          <div className="container-x">
            <div className="eyebrow">Professional approach</div>
            <h2 className="mb-8 mt-2 text-3xl font-bold leading-tight sm:text-4xl">How we work</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map(([t, d]) => (
                <div key={t} className="card p-6">
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-line">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Have a question? Let’s talk.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Contact our office to discuss your accounting, taxation or compliance requirements.
            </p>
            <Link to="/contact" className="btn btn-primary mt-6 px-6 py-3.5">
              Contact the office <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}