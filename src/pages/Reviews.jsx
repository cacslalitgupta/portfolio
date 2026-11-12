// src/pages/Reviews.jsx
import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
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
          title="Client feedback and reviews"
          description="We value feedback from every client. Genuine reviews from real clients are available on our Google Business Profile."
          breadcrumbs={[{ label: "Feedback" }]}
        />

        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow">Where to find our reviews</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Genuine feedback on Google
              </h2>
              <p className="leading-relaxed text-muted">
                As a chartered accountancy practice, we follow ICAI professional guidelines on
                advertising and solicitation. Rather than displaying testimonials on this website,
                we invite genuine feedback from clients on our Google Business Profile.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Client feedback helps us improve and helps others understand what working with
                LG &amp; Associates is like.
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
                <li>• We do not publish testimonials or client reviews on this website.</li>
                <li>• We do not solicit reviews or offer incentives for them.</li>
                <li>• We do not curate or selectively request only positive reviews.</li>
                <li>• All genuine client feedback is welcome and appreciated.</li>
                <li>• Client confidentiality is maintained at all times.</li>
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                This policy is designed to comply with the Institute of Chartered Accountants of
                India’s guidelines on professional advertising and solicitation.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-t border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">What clients say</div>
            <h2 className="mb-6 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Read feedback directly on Google
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Clear communication", "Feedback often highlights that our explanations are clear and free of jargon."],
                ["Deadline discipline", "Clients frequently mention that filings are completed and submitted on time."],
                ["Professional conduct", "Our engagements are handled with strict confidentiality and care."],
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
            <p className="mt-6 text-xs leading-relaxed text-muted">
              Themes reflect common topics in client feedback. Actual reviews are visible on our
              Google Business Profile.
            </p>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}