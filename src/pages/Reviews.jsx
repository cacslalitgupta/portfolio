// src/pages/Reviews.jsx
import { ExternalLink, MessageSquareQuote, Star, Clock, ShieldCheck, Users } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

// Replace with your real GBP place ID from:
// https://developers.google.com/maps/documentation/places/web-service/place-id
const GBP_REVIEW_URL = "https://g.page/r/CcWW9FkiRUSkEBM/review";
const GBP_PROFILE_URL = "https://g.page/r/CcWW9FkiRUSkEBM";

export default function Reviews({ site }) {
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Feedback"
          title="Client feedback and Google reviews"
          description="Real words from real clients. We don't curate testimonials on this site — the honest picture lives on our Google Business Profile."
          breadcrumbs={[{ label: "Feedback" }]}
        />

        {/* ── Main intro ─────────────────────────────────────────── */}
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Where to find our reviews</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Genuine feedback, on Google.
              </h2>
              <p className="leading-relaxed text-muted">
                We're a small practice in Siliguri and most of our work comes from
                clients who were referred by someone we've already helped. That's the
                kind of trust you can't manufacture — and it's why we've never felt the
                need to put polished testimonials on this website.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Instead, we invite every client to leave honest feedback on our Google
                Business Profile. Whether it's a five-star review or a note about
                something we could do better, we read every single one.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                As chartered accountants, we're bound by ICAI's professional guidelines
                on advertising and solicitation. That means no curated quotes, no
                incentives for reviews and no selective showcasing. Just the real
                picture.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GBP_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3.5"
                >
                  View our Google profile <ExternalLink size={16} />
                </a>
                <a
                  href={GBP_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost px-6 py-3.5"
                >
                  <Star size={16} /> Leave a review
                </a>
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-brand">
                  <MessageSquareQuote size={20} />
                </span>
                <div>
                  <b className="font-display text-lg">Our review policy</b>
                  <p className="text-xs text-muted">Consistent with ICAI professional ethics</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted">
                <li>• We don't publish testimonials or client reviews on this website.</li>
                <li>• We don't solicit reviews or offer incentives for them.</li>
                <li>• We don't curate or selectively request only positive reviews.</li>
                <li>• Every piece of genuine feedback is welcome — good or bad.</li>
                <li>• Client confidentiality is maintained at all times.</li>
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                This policy is designed to comply with the Institute of Chartered
                Accountants of India's guidelines on professional advertising and
                solicitation.
              </p>
            </div>
          </div>
        </section>

        {/* ── What clients tend to notice ────────────────────────── */}
        <section className="section border-t border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">What clients say</div>
            <h2 className="mb-3 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              The things we hear most often.
            </h2>
            <p className="mb-8 max-w-2xl text-muted">
              These aren't quotes — they're themes that come up again and again in
              feedback from the clients we work with, across Siliguri and North Bengal.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Clear communication",
                  "No jargon, no vague answers. Clients often tell us they finally understand what their tax situation actually looks like.",
                ],
                [
                  "Deadline discipline",
                  "Filing deadlines don't move. We build our work backwards from them, so returns go out with room to spare — not on the last day.",
                ],
                [
                  "Professional conduct",
                  "Financial information is personal. Clients notice that our office treats it that way — discretion, confidentiality and care.",
                ],
                [
                  "Responsive when it matters",
                  "Notices from the tax department don't wait. Clients value that we respond quickly when something time-sensitive lands.",
                ],
                [
                  "Straightforward fees",
                  "We quote clearly before work starts. No surprise invoices after the return is filed.",
                ],
                [
                  "One point of contact",
                  "You speak with the same person throughout the engagement, not a rotating cast of juniors.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="card p-6">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <b className="mt-3 block font-display">{t}</b>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How we handle feedback ─────────────────────────────── */}
        <section className="section border-t border-line">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">How we handle feedback</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Every piece of feedback gets read.
              </h2>
              <p className="leading-relaxed text-muted">
                When a client takes the time to leave a review — or sends us a note
                after an engagement — it goes straight to the partner. Not to a
                marketing folder, not to a "reviews team," and certainly not to a
                filter that sorts positive from negative.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If something went well, we try to understand why, so we can keep doing
                it. If something didn't, we reach out directly to understand what
                happened and what we can fix. That's not a policy — it's just how a
                small firm like ours stays accountable.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                [ShieldCheck, "Confidential by default", "We never discuss one client's feedback with another client and we never share details of an engagement without permission."],
                [Clock, "Reviewed within the week", "Feedback reaches the partner within a few working days and we follow up on anything that needs a response."],
                [Users, "No cherry-picking", "We don't reach out only to clients we know will be happy. Every client, after every engagement, is welcome to share their honest view."],
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

        {/* ── Closing ────────────────────────────────────────────── */}
        <section className="section border-t border-line bg-surface/60">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Worked with us before?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              If you've engaged the firm and have a minute, we'd genuinely appreciate a
              review on Google. It helps other people in Siliguri decide whether we're
              the right fit for them.
            </p>
            <a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 px-6 py-3.5"
            >
              <Star size={16} /> Leave a review on Google
            </a>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}