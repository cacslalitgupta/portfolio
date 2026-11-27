// src/pages/About.jsx
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, CheckCircle2, GraduationCap, MapPin, Users } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const ICAI_MEMBERSHIP = "306613"; // ← replace

const expertise = [
  "Income Tax Return Filing & Advisory",
  "GST Registration, Returns & Compliance",
  "Statutory Audit & Tax Audit",
  "Accounting & Bookkeeping",
  "TDS & TCS Compliance",
  "Business Registration & Advisory",
  "Payroll Processing & Statutory Compliance",
  "Financial Planning & MIS Reporting",
];

const approach = [
  [
    "Clarity",
    "Clear, jargon-free explanations of your tax and compliance position — you should never leave a meeting unsure of where you stand.",
  ],
  [
    "Accuracy",
    "Every filing, return and report is reviewed before submission. Small errors in tax filings become large problems later.",
  ],
  [
    "Discipline",
    "Structured processes, a compliance calendar, and follow-through that keep deadlines and records under control.",
  ],
  [
    "Practicality",
    "Advice grounded in your actual business situation, not generic templates or textbook answers.",
  ],
];

const milestones = [
  [
    "The early years",
    "The practice began with a simple focus: help individuals and small businesses in Siliguri get their tax filings right, on time, without surprises. Most of the early work came through word of mouth — referrals from clients who had a clean experience.",
  ],
  [
    "Growing with clients",
    "As clients' businesses grew, the scope of work grew with them — from annual ITR filing to monthly accounting, GST compliance, TDS, and eventually audit and advisory engagements. The practice expanded into a full-service chartered accountancy firm.",
  ],
  [
    "Building a structured practice",
    "Over time, the firm developed a structured engagement model — clear scoping, documented deliverables, agreed timelines, and regular communication. That structure is what allows a small firm to handle complex compliance work reliably.",
  ],
  [
    "Today",
    "LG & Associates works with traders, manufacturers, professionals, startups and established businesses across Siliguri and North Bengal, with a growing base of remote clients across India.",
  ],
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
          description="Chartered Accountant and founder of LG & Associates, serving individuals, professionals and businesses across Siliguri and West Bengal with tax, GST, audit and advisory services."
          breadcrumbs={[{ label: "About" }]}
        />

        {/* ── Profile ────────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-primary p-7 text-onprimary sm:min-h-[460px] sm:p-9">
              <img
                src="/images/photo_lalitgupta.avif"
                alt="CA Lalit Gupta, Chartered Accountant and founder of LG & Associates, Siliguri"
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
                chartered accountancy firm based in Khalpara, Siliguri. The practice works with
                individuals, professionals, traders, entrepreneurs and companies across Siliguri
                and North Bengal — handling income tax, GST, audit, accounting, TDS and statutory
                compliance.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                What began as a small practice focused on income tax filing has grown into a
                full-service firm that clients rely on throughout the year — not just at filing
                deadlines. The firm's approach is straightforward: accurate filings, clear
                communication, and practical financial guidance that helps clients stay compliant
                and make better business decisions.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Most of our work comes through referrals from existing clients — a signal that the
                fundamentals of the practice are right. We take that trust seriously, and it shapes
                how every engagement is handled.
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

        {/* ── Credentials strip ──────────────────────────────────── */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [GraduationCap, "ICAI qualified", "Chartered Accountant, Institute of Chartered Accountants of India"],
                [MapPin, "Based in Siliguri", "Nehru Road, Ward 8, Khalpara — serving North Bengal"],
                [Users, "Client-first practice", "Individuals, traders, professionals and companies"],
                [Award, "ICAI-compliant", "Professional ethics, confidentiality and independence"],
              ].map(([Icon, title, desc]) => (
                <div key={title} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-soft text-brand">
                    <Icon size={18} />
                  </span>
                  <div>
                    <b className="font-display">{title}</b>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Expertise ──────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x">
            <div className="eyebrow">Areas of expertise</div>
            <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">What we work on</h2>
            <p className="mb-8 max-w-2xl text-muted">
              A focused set of services delivered properly, rather than a long list of things we
              claim to do. Every engagement is scoped clearly before work begins.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm font-semibold"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-acctext" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── How we work ────────────────────────────────────────── */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">Professional approach</div>
            <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">How we work</h2>
            <p className="mb-8 max-w-2xl text-muted">
              Four principles that shape every engagement — from a single ITR filing to a
              multi-year audit relationship.
            </p>
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

        {/* ── The practice over time ─────────────────────────────── */}
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="eyebrow">The practice</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                How LG &amp; Associates grew.
              </h2>
              <p className="leading-relaxed text-muted">
                A chartered accountancy practice is built slowly — one client, one engagement, one
                filing at a time. Here's how the firm has grown over the years.
              </p>
            </div>

            <div className="relative grid gap-6 border-l border-line pl-6">
              {milestones.map(([title, desc], i) => (
                <div key={title} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 border-brand bg-background" />
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    Phase {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What clients can expect ────────────────────────────── */}
        <section className="section border-t border-line bg-surface/60">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">What to expect</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                When you work with us.
              </h2>
              <p className="leading-relaxed text-muted">
                The first conversation is usually a short one — you describe what you're dealing
                with, and we tell you honestly whether we're the right fit, what the work will
                involve, and roughly what it will cost. No obligation, no sales pitch.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If we take on the engagement, you'll know exactly what's happening at every stage:
                what we need from you, what we'll deliver, and by when.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                [BookOpen, "Clear scope before work starts", "Written engagement letter covering deliverables, timelines and fees — no surprises later."],
                [Award, "Reviewed work, every time", "No filing or report leaves the office without a review. Accuracy is not negotiable."],
                [Users, "Direct access to the partner", "You're not handed off to a junior. The person who understands your file is the person you speak to."],
                [MapPin, "Local, and available", "A Khalpara office you can walk into, plus phone, WhatsApp and email for everything else."],
              ].map(([Icon, title, desc]) => (
                <div key={title} className="card flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-soft text-brand">
                    <Icon size={18} />
                  </span>
                  <div>
                    <b className="font-display">{title}</b>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="section border-t border-line">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Have a question? Let's talk.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Contact the office to discuss your accounting, taxation or compliance requirements —
              no obligation, no sales pitch.
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