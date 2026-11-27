// Drop-in template: renders any entry from content/services.json
// Route: <Route path="/services/:slug" element={<ServicePage />} />  (put AFTER your 6 existing service routes)
// Copy content/services.json to src/data/services.json. Restyle with your existing Tailwind classes.
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import services from "../data/services.json";

const BASE = "https://calalitgupta.in";

function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}

export default function ServicePage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);

  useEffect(() => {
    if (!s) return;
    document.title = s.title;
    setMeta("description", s.meta);
    setMeta("og:title", s.title, "property");
    setMeta("og:description", s.meta, "property");
    setMeta("og:url", `${BASE}${s.url}`, "property");
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = `${BASE}${s.url}`;

    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", name: `${s.name} in Siliguri`, serviceType: s.name, description: s.meta, url: `${BASE}${s.url}`,
          provider: { "@id": `${BASE}/#organization` }, areaServed: { "@type": "City", name: "Siliguri" } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
          { "@type": "ListItem", position: 3, name: s.name, item: `${BASE}${s.url}` } ] },
        { "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ],
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json"; tag.id = "ld-service"; tag.text = JSON.stringify(graph);
    document.getElementById("ld-service")?.remove();
    document.head.appendChild(tag);
    return () => tag.remove();
  }, [s]);

  if (!s) return null; // render your 404 here

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {s.name}
      </nav>
      <h1 className="text-3xl font-bold">{s.h1}</h1>
      <p className="mt-4">{s.intro}</p>

      <h2 className="mt-8 text-xl font-semibold">Who needs {s.name.toLowerCase()}</h2>
      <ul className="list-disc pl-6">{s.who.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 className="mt-8 text-xl font-semibold">What our service covers</h2>
      <ul className="list-disc pl-6">{s.covers.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 className="mt-8 text-xl font-semibold">Documents usually required</h2>
      <ul className="list-disc pl-6">{s.docs.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 className="mt-8 text-xl font-semibold">How we work</h2>
      <ol className="list-decimal pl-6">{s.steps.map((x) => <li key={x.title}><strong>{x.title}.</strong> {x.text}</li>)}</ol>

      <h2 className="mt-8 text-xl font-semibold">Common questions</h2>
      {s.faqs.map((f) => (
        <details key={f.q} className="mt-2"><summary className="font-medium">{f.q}</summary><p className="mt-1">{f.a}</p></details>
      ))}

      <h2 className="mt-8 text-xl font-semibold">Related services</h2>
      <ul className="list-disc pl-6">
        {s.related.map((r) => { const x = services.find((y) => y.slug === r); return x && <li key={r}><Link to={x.url}>{x.name}</Link></li>; })}
      </ul>

      <p className="mt-8">Serving Khalpara, Sevoke Road, Hill Cart Road, Pradhan Nagar, Matigara and the wider Siliguri and North Bengal region.</p>
      <Link to="/contact" className="inline-block mt-4 underline">Book a consultation</Link>
    </main>
  );
}
