// src/pages/Process.jsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Lock,
  MessageSquare,
  Users,
  CalendarCheck,
  ClipboardCheck,
} from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

const steps = [
  [
    "01",
    "Understand",
    "We start with a conversation — not a form. You describe your business, what's working, what's not, and what you need. We ask questions about how your records are kept, what filings are already in place, and whether anything is pending or overdue. By the end of this conversation, we usually know whether we're the right fit for the engagement.",
  ],
  [
    "02",
    "Plan",
    "Once we understand the work, we put the scope in writing. That means a clear list of deliverables, the documents you'll need to provide, the timeline for each stage, and the fees — before any work begins. If the scope changes later (it happens), we revise it in writing rather than letting it drift.",
  ],
  [
    "03",
    "Execute",
    "This is where the work happens — filings prepared, records reconciled, returns reviewed, reports drafted. We work to a compliance calendar, so deadlines aren't surprises. Every filing or report is reviewed before it leaves the office, and you get a copy of everything that's submitted.",
  ],
  [
    "04",
    "Advise",
    "A filed return is not the end of the engagement. You receive a clear note on what was filed, what it means, and what to watch for next — upcoming deadlines, changes in the law that affect you, or decisions that need attention. The goal is that you understand your position, not just that the paperwork was completed.",
  ],
];

const principles = [
  [
    "Transparent communication",
    "You always know what's being filed, when, and why. No jargon, no vague status updates — plain language at every stage.",
  ],
  [
    "Documented scope",
    "Clear engagement scope in writing, so nothing is ambiguous about what's included, what's not, and what it costs.",
  ],
  [
    "Deadline discipline",
    "Statutory deadlines are tracked on a compliance calendar and met with room to spare — not filed on the last day.",
  ],
  [
    "Confidentiality",
    "Client information is handled with strict confidentiality, in line with ICAI professional standards. Your financial data does not leave the office.",
  ],
];

const engagementTypes = [
  [
    FileText,
    "One-time filings",
    "ITR filing, GST registration, a single notice reply — scoped and delivered on an agreed date.",
  ],
  [
    CalendarCheck,
    "Recurring compliance",
    "Monthly accounting, GST returns, TDS filings, payroll — a scheduled calendar with predictable deliverables.",
  ],
  [
    ClipboardCheck,
    "Audit engagements",
    "Statutory audit, tax audit, internal audit — a structured engagement with documented findings.",
  ],
  [
    Users,
    "Advisory relationships",
    "Ongoing financial guidance across the year, not just at filing deadlines.",
  ],
];

const expectations = [
  [
    MessageSquare,
    "A short first conversation",
    "The initial call is usually 15–20 minutes. You describe what you need, we ask a few questions, and we tell you honestly whether we're the right fit. No obligation, no sales pitch.",
  ],
  [
    Clock,
    "A written engagement letter",
    "If we take the work, you get a written scope before anything begins — deliverables, timeline, fees, and what we need from you. No verbal agreements, no scope creep.",
  ],
  [
    Lock,
    "A named point of contact",
    "You deal with the same person throughout the engagement. Not a rotating cast of juniors, not a call centre. The person who understands your file is the person you speak to.",
  ],
  [
    CheckCircle2,
    "A clear close-out",
    "When the work is delivered, you get a short summary — what was filed, what it means, what's next. Even if the engagement ends there, you're not left guessing.",
  ],
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
          title="How our CA firm in Siliguri works with clients"
          description="A straightforward engagement model designed to keep your financial work organised, timely and clearly communicated — from the first call to the final filing."
          breadcrumbs={[{ label: "Process" }]}
        />

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x">
            <div className="mb-10 max-w-2xl">
              <div className="eyebrow">The engagement model</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Four stages, one clear process.
              </h2>
              <p className="leading-relaxed text-muted">
                Every engagement — whether it's a single ITR filing or a multi-year audit
                relationship — follows the same four stages. The scale changes, but the structure
                doesn't: understand, plan, execute, advise. It's how we make sure nothing gets
                missed and you always know where things stand.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map(([n, t, d]) => (
                <div key={n} className="card p-6 sm:p-8">
                  <div className="font-display text-3xl font-bold text-brand">{n}</div>
                  <h3 className="mt-4 text-xl font-bold">{t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ─────────────────────────────────────────── */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="mb-8 max-w-2xl">
              <div className="eyebrow">Principles</div>
              <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                What we hold ourselves to.
              </h2>
              <p className="text-muted">
                These aren't marketing lines — they're the operating rules of the practice. If
                something isn't meeting them, we want to know.
              </p>
            </div>
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

        {/* ── Engagement types ──────────────────────────────────── */}
        <section className="section">
          <div className="container-x">
            <div className="mb-8 max-w-2xl">
              <div className="eyebrow">Engagement types</div>
              <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Different work, different rhythm.
              </h2>
              <p className="text-muted">
                Not every engagement looks the same. Some are one-off; some run every month. The
                process adapts to the type of work, while the fundamentals stay constant.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engagementTypes.map(([Icon, title, desc]) => (
                <div key={title} className="card p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-soft text-brand">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What to expect ─────────────────────────────────────── */}
        <section className="section border-y border-line bg-surface/60">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">What to expect</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                From first call to final filing.
              </h2>
              <p className="leading-relaxed text-muted">
                Choosing a chartered accountant is a decision made on trust. Here's exactly what
                working with us looks like — so you know what you're signing up for before you
                pick up the phone.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If at any point the engagement isn't what you expected, we want to hear about it.
                Feedback — good or bad — goes directly to the partner, and it shapes how we run the
                practice.
              </p>
            </div>

            <div className="grid gap-3">
              {expectations.map(([Icon, title, desc]) => (
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
        <section className="section">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Contact the office to discuss your requirements — no obligation, no sales pitch.
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