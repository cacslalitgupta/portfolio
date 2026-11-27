// src/pages/Faq.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Faq({ site }) {
  const s = site.settings;
  const { faqs } = site;
  const [open, setOpen] = useState(0);

  // Show your own (admin) FAQs + 5 extra ones first, then reveal 10 more per click.
  const ownCount = faqs.filter((f) => !f.group).length;
  const FIRST_EXTRA = 5;
  const STEP = 10;
  const [clicks, setClicks] = useState(0); // how many times "Load more" was pressed
  const visible = ownCount + FIRST_EXTRA + clicks * STEP; // stays correct when admin FAQs finish loading
  const shown = faqs.slice(0, visible);
  const remaining = faqs.length - shown.length;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="FAQ"
          title="FAQs about CA services in Siliguri"
          description="Common questions about income tax, GST, audit and accounting services from LG & Associates, Siliguri."
          breadcrumbs={[{ label: "FAQ" }]}
        />

        <section className="section">
          <div className="container-x grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="eyebrow">Questions</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Answers to common questions
              </h2>
              <p className="text-muted">
                Can’t find what you’re looking for? Send us a message and we’ll help.
              </p>
              <Link to="/contact" className="btn btn-primary mt-6">
                Ask a question <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-3">
              {faqs.length === 0 && <p className="text-muted">FAQs will appear here soon.</p>}
              {shown.map((f, i) => {
                const isOpen = open === i;
                const newGroup = f.group && f.group !== shown[i - 1]?.group;
                return (
                  <div key={f.id} className="grid gap-3">
                    {newGroup && <div className="eyebrow mt-4">{f.group}</div>}
                    <div className={`card overflow-hidden transition ${isOpen ? "border-brand/40" : ""}`}>
                      <button
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                      >
                        {f.question}
                        <ChevronDown size={20} className={`shrink-0 text-brand transition ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <p className="overflow-hidden px-5 leading-relaxed text-muted">
                          <span className="block pb-5">{f.answer}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {remaining > 0 && (
                <button
                  type="button"
                  onClick={() => setClicks((c) => c + 1)}
                  className="btn btn-ghost mt-2 justify-center"
                >
                  Load more questions ({remaining} more) <ChevronDown size={16} />
                </button>
              )}
              {remaining <= 0 && faqs.length > ownCount + FIRST_EXTRA && (
                <button
                  type="button"
                  onClick={() => {
                    setClicks(0);
                    setOpen(0);
                  }}
                  className="btn btn-ghost mt-2 justify-center"
                >
                  Show fewer
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}