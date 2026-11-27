// src/pages/Resources.jsx
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, FileText, Lightbulb } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";
import { RESOURCES } from "../lib/content";

// Editorial grouping — keeps the grid scannable as guides are added.
// Any resource not listed here still appears under "More guides".
const CATEGORY_BY_SLUG = {
  "documents-required-for-gst-registration": "GST & Indirect Tax",
  "itr-filing-document-checklist": "Income Tax",
  "proprietorship-vs-partnership-vs-llp-vs-company": "Business Structure",
};

export default function Resources({ site }) {
  const s = site.settings;

  // Most-read strip — the two guides that solve the most common starting questions.
  const mostRead = RESOURCES.filter((r) =>
    ["itr-filing-document-checklist", "documents-required-for-gst-registration"].includes(r.slug)
  );

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Resources"
          title="CA guides for Siliguri businesses and individuals"
          description="Plain-language guides on GST, income tax and business structures from the team at LG & Associates. General information only; it is not professional advice for your specific situation."
          breadcrumbs={[{ label: "Resources" }]}
        />

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <div>
              <div className="eyebrow">Why we write these</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Clear answers to the questions we hear most.
              </h2>
              <p className="leading-relaxed text-muted">
                A lot of the work in a chartered accountancy practice is answering the same
                questions — what documents do I need for GST registration, which business
                structure makes sense, what should I keep ready before filing my ITR. These
                guides are the answers, written down, so you can start with information instead
                of guessing.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                They're written in plain language, not statutory language. Each one covers the
                practical version of the topic — what's actually required, what actually goes
                wrong, and what to do before you begin. Where the law has changed recently, we
                say so rather than repeating outdated summaries.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Every guide ends with a link to the relevant service. If your situation is
                specific — most are — the office is a phone call away.
              </p>
            </div>

            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-brand">
                  <BookOpen size={20} />
                </span>
                <div>
                  <b className="font-display text-lg">How to use these guides</b>
                  <p className="text-xs text-muted">Read them as a starting point</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted">
                <li>
                  • <b className="text-ink">Use them to prepare, not to decide.</b> The right
                  structure or filing approach depends on your facts.
                </li>
                <li>
                  • <b className="text-ink">Check the date.</b> Tax rules change — verify the
                  position for the year you're dealing with.
                </li>
                <li>
                  • <b className="text-ink">They are general information</b>, not professional
                  advice for your specific situation.
                </li>
                <li>
                  • <b className="text-ink">If something doesn't fit</b>, the office can look at
                  your actual position.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Most-read strip ───────────────────────────────────── */}
        {mostRead.length > 0 && (
          <section className="section border-y border-line bg-surface/60">
            <div className="container-x">
              <div className="mb-8 max-w-2xl">
                <div className="eyebrow">Most read</div>
                <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                  Start here if you're new.
                </h2>
                <p className="text-muted">
                  The two guides that come up most often in first conversations. If you're
                  unsure where to begin, these are the right starting points.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {mostRead.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/resources/${r.slug}`}
                    className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card sm:p-7"
                  >
                    <span className="flex items-center gap-1.5 text-xs font-bold text-muted">
                      <Clock size={13} /> {r.readMinutes} min read
                    </span>
                    <h3 className="mb-2 mt-3 text-xl font-bold leading-snug">{r.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {r.metaDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      Read guide <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── All guides ────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x">
            <div className="mb-8 max-w-2xl">
              <div className="eyebrow">All guides</div>
              <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Browse the full library.
              </h2>
              <p className="text-muted">
                Each guide is grouped by topic. More are added as new questions come up in
                client conversations — if there's a topic you'd like covered, write to the
                office.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {RESOURCES.map((r) => {
                const category = CATEGORY_BY_SLUG[r.slug] || "General";
                return (
                  <Link
                    key={r.slug}
                    to={`/resources/${r.slug}`}
                    className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                  >
                    <span className="flex items-center justify-between gap-3 text-xs font-bold text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <FileText size={13} /> {category}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} /> {r.readMinutes} min
                      </span>
                    </span>
                    <h2 className="mb-2 mt-3 text-xl font-bold leading-snug">{r.title}</h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {r.metaDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      Read guide <ArrowRight size={15} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Closing note ──────────────────────────────────────── */}
        <section className="section border-t border-line bg-surface/60">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">A note on these guides</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                General information, honestly labelled.
              </h2>
              <p className="leading-relaxed text-muted">
                These guides are written to be useful as a starting point, not as a substitute
                for professional advice. Tax and corporate law in India change frequently — the
                position for your specific year, structure and transaction may differ from what
                a general guide describes.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We review each guide when the law changes, but if something in one of them
                matters to a decision you're about to make, it's worth confirming the current
                position with the office first.
              </p>
            </div>

            <div className="card flex flex-col gap-5 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-soft text-brand">
                  <Lightbulb size={18} />
                </span>
                <div>
                  <b className="font-display">Have a topic you'd like covered?</b>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    If there's a question that keeps coming up in your own work — or something
                    you'd like explained more clearly — write to the office. We add guides based
                    on what clients actually ask about.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="btn btn-primary w-full justify-center sm:w-auto"
              >
                Suggest a topic <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}