// src/pages/ServiceDetail.jsx
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";
import Notfound from "./Notfound";
import { AREAS_SERVED, SERVICE_PAGES, serviceBySlug } from "../lib/content";

export default function ServiceDetail({ site }) {
  const { slug } = useParams();
  const page = serviceBySlug(slug);
  if (!page) return <Notfound />;

  const s = site.settings;
  const phone = s.phone || "+91-98320-93139";
  const related = (page.related || []).map(serviceBySlug).filter(Boolean);

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="CA Services in Siliguri"
          title={page.h1}
          description={page.lead}
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: page.navTitle }]}
        />

        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_.6fr] lg:gap-16">
            <div className="grid gap-12">
              {page.sections.map((sec) => (
                <div key={sec.h2}>
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{sec.h2}</h2>
                  {sec.paras?.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">{p}</p>
                  ))}
                  {sec.list && (
                    <ul className="mt-4 grid gap-3">
                      {sec.list.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-acctext" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.note && <p className="mt-4 text-sm text-muted">{sec.note}</p>}
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl">Common questions</h2>
                <div className="mt-5 grid gap-3">
                  {page.faqs.map((f) => (
                    <details key={f.q} className="card group p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold marker:content-none">
                        {f.q}
                        <span className="shrink-0 text-brand transition group-open:rotate-180">▾</span>
                      </summary>
                      <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <aside className="grid h-fit gap-5 lg:sticky lg:top-28">
              <div className="card p-6 shadow-card">
                <div className="eyebrow">Discuss your requirement</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Tell us what you need and the office will review your enquiry and get in touch.
                </p>
                <Link to="/contact" className="btn btn-primary mt-5 w-full justify-center">
                  Contact the office <ArrowRight size={16} />
                </Link>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold hover:text-brand">
                  <Phone size={16} className="text-brand" /> {phone}
                </a>
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                  <div className="text-sm leading-relaxed">
                    <b className="font-display">LG &amp; Associates</b>
                    <p className="mt-1 text-muted">{s.address || "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005"}</p>
                    <p className="mt-2 text-muted">Serving {AREAS_SERVED}.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <div className="eyebrow">Related services</div>
            <h2 className="mb-8 mt-2 text-2xl font-bold sm:text-3xl">Other CA services in Siliguri</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {(related.length ? related : SERVICE_PAGES.filter((x) => x.slug !== page.slug).slice(0, 3)).map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="card group p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
                  <h3 className="font-display text-lg font-bold">{r.navTitle}</h3>
                  <p className="mt-2 text-sm text-muted">{r.metaDescription.slice(0, 110).replace(/\s+\S*$/, "")}…</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                    Read more <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}
