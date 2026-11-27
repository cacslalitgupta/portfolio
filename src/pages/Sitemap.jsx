// src/pages/Sitemap.jsx  (public-facing HTML sitemap)
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";
import { SERVICE_PAGES, RESOURCES } from "../lib/content";
import { NAV_LINKS, groupServices } from "../lib/serviceGroups";

function Block({ title, children }) {
  return (
    <div className="card p-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-ink">{title}</h2>
      <ul className="mt-4 grid gap-2.5 text-sm">{children}</ul>
    </div>
  );
}

function Item({ to, children }) {
  return (
    <li>
      <Link to={to} className="group inline-flex items-center gap-1.5 text-muted transition hover:text-brand">
        <ArrowRight size={14} className="shrink-0 text-brand opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
        {children}
      </Link>
    </li>
  );
}

export default function Sitemap({ site }) {
  const s = site.settings;
  const groups = groupServices(SERVICE_PAGES);

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Sitemap"
          title="Sitemap: all pages of LG & Associates"
          description="Every page of this website in one place: main pages, CA services in Siliguri and guides."
          breadcrumbs={[{ label: "Sitemap" }]}
        />

        <section className="section">
          <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Block title="Main pages">
              {NAV_LINKS.map(([label, href]) => (
                <Item key={href} to={href}>{label}</Item>
              ))}
            </Block>

            {groups.map((g) => (
              <Block key={g.title} title={g.title}>
                {g.items.map((p) => (
                  <Item key={p.slug} to={`/services/${p.slug}`}>{p.navTitle}</Item>
                ))}
              </Block>
            ))}

            <Block title="Guides & resources">
              {RESOURCES.map((r) => (
                <Item key={r.slug} to={`/resources/${r.slug}`}>{r.title}</Item>
              ))}
            </Block>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}