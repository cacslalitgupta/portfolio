// src/pages/Resources.jsx
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";
import { RESOURCES } from "../lib/content";

export default function Resources({ site }) {
  const s = site.settings;
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
        <section className="section">
          <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <Link key={r.slug} to={`/resources/${r.slug}`} className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
                <span className="flex items-center gap-1.5 text-xs font-bold text-muted">
                  <Clock size={13} /> {r.readMinutes} min read
                </span>
                <h2 className="mb-2 mt-3 text-xl font-bold leading-snug">{r.title}</h2>
                <p className="flex-1 text-sm leading-relaxed text-muted">{r.metaDescription}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Read guide <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}
