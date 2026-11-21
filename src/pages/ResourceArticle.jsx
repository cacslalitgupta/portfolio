// src/pages/ResourceArticle.jsx
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";
import Notfound from "./Notfound";
import { resourceBySlug } from "../lib/content";

const fmt = (iso) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function ResourceArticle({ site }) {
  const { slug } = useParams();
  const a = resourceBySlug(slug);
  if (!a) return <Notfound />;
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow={`${a.readMinutes} min read`}
          title={a.title}
          description={a.lead}
          breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: a.title }]}
        />
        <article className="section">
          <div className="container-x max-w-3xl">
            <p className="mb-10 text-sm text-muted">
              By <b className="text-ink">CA Lalit Gupta</b>, LG &amp; Associates · Updated{" "}
              <time dateTime={a.dateModified}>{fmt(a.dateModified)}</time>
            </p>
            <div className="grid gap-10">
              {a.sections.map((sec) => (
                <section key={sec.h2}>
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
                </section>
              ))}
            </div>

            <div className="card mt-12 p-6 shadow-card">
              <p className="text-sm leading-relaxed text-muted">
                This guide is general information and is not professional advice. Rules and limits change, so please
                confirm the current position for your own circumstances.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                {a.cta && (
                  <Link to={a.cta.to} className="btn btn-primary">
                    {a.cta.label} <ArrowRight size={16} />
                  </Link>
                )}
                <Link to="/contact" className="btn btn-ghost">Contact the office</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}
