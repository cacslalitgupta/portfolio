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

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
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
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.id} className={`card overflow-hidden transition ${isOpen ? "border-brand/40" : ""}`}>
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
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}