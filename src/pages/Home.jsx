import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Clock, Clock3, Mail, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";

function Head({ eyebrow, title, text, center }) {
  return (
    <div className={`mb-10 flex flex-col gap-4 sm:mb-12 ${center ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"}`}>
      <div className="max-w-2xl">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">{title}</h2>
      </div>
      {text && <p className="max-w-md leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

const process = [
  ["01", "Understand", "We learn about your business, goals and current setup."],
  ["02", "Plan", "We define the compliance and finance work required."],
  ["03", "Execute", "Our team handles filings, records and review."],
  ["04", "Advise", "You receive clear updates and practical next steps."]
];

export default function Home({ site }) {
  const s = site.settings;
  const { services, testimonials, faqs } = site;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar name={s.firm_name} />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-brand sm:text-sm">
                <Sparkles size={15} /> {s.tagline}
              </span>
              <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{s.hero_title}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{s.hero_text}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn btn-primary px-6 py-3.5">Book a consultation <ArrowRight size={17} /></a>
                <a href="#services" className="btn btn-ghost px-6 py-3.5">Explore services</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted">
                {[[CheckCircle2, "Practical advice"], [ShieldCheck, "Fully confidential"], [Clock3, "Year-round support"]].map(([I, t]) => (
                  <li key={t} className="flex items-center gap-2"><I size={17} className="text-acctext" />{t}</li>
                ))}
              </ul>
            </div>

            {/* image div start */}
            {/* <div className="animate-rise relative overflow-hidden rounded-3xl bg-primary p-6 text-onprimary shadow-card sm:p-8" style={{ animationDelay: ".12s" }}>
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/30" />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Why clients work with us</div>
                <h2 className="mb-6 mt-3 text-2xl font-bold leading-snug sm:text-3xl">Numbers are only useful when they lead to better decisions.</h2>
                {[[s.experience, "Years of experience"], [s.clients, "Clients supported"], [s.businesses, "Businesses advised"], [s.response_time, "Typical response time"]].map(([v, l]) => (
                  <div key={l} className="flex items-center justify-between gap-4 border-t border-onprimary/15 py-3.5">
                    <b className="font-display text-2xl sm:text-3xl">{v}</b>
                    <span className="text-right text-sm opacity-75">{l}</span>
                  </div>
                ))}
              </div>
            </div> */}
            {/* image div end */}

            <div
              className="animate-rise relative overflow-hidden rounded-3xl bg-primary p-6 text-onprimary shadow-card sm:p-8"
              style={{ animationDelay: ".12s" }}
            >
              {/* Background Image */}
              <img
                src="images/image1.webp"
                // src="https://plus.unsplash.com/premium_photo-1661297460381-f75b8ae69a0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark primary overlay */}
              <div className="absolute inset-0 bg-primary/10" />

              {/* Extra subtle dark gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-primary/10" />

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/30" />

              {/* Content */}
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">
                  Why clients work with us
                </div>

                <h2 className="mb-6 mt-3 max-w-2xl text-2xl font-bold leading-snug sm:text-3xl">
                  Numbers are only useful when they lead to better decisions.
                </h2>

                {[
                  [s.experience, "Years of experience"],
                  [s.clients, "Clients supported"],
                  [s.businesses, "Businesses advised"],
                  [s.response_time, "Typical response time"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="flex items-center justify-between gap-4 border-t border-onprimary/20 py-3.5"
                  >
                    <b className="font-display text-2xl sm:text-3xl">
                      {v}
                    </b>

                    <span className="text-right text-sm opacity-85">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section border-y border-line bg-surface/60">
          <div className="container-x">
            <Head eyebrow="What we do" title={<>One firm. <span className="text-brand">Many ways to help.</span></>}
              text="From routine compliance to strategic finance, get the expertise you need without managing five different vendors." />
            {services.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((x) => <ServiceCard key={x.id} service={x} />)}
              </div>
            ) : <p className="text-muted">Services will appear here soon.</p>}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container-x grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            {/* <div className="flex min-h-[320px] flex-col justify-end rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-7 text-onprimary sm:min-h-[420px] sm:p-9">
              <div className="font-display text-6xl font-bold sm:text-7xl">₹</div>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Built around your business.</h3>
              <p className="mt-2 leading-relaxed opacity-80">Clear reporting. Timely compliance. Decisions backed by numbers.</p>
            </div> */}

              <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-7 text-onprimary sm:min-h-[420px] sm:p-9">
  
                {/* Background Image */}
                <img
                  src="images/image2.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/10" />

                {/* Darker bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent" />

                {/* Content */}
                <div className="relative">
                  <div className="font-display text-6xl font-bold sm:text-7xl">
                    ₹
                  </div>

                  <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Built around your business.
                  </h3>

                  <p className="mt-2 max-w-xl leading-relaxed opacity-85">
                    Clear reporting. Timely compliance. Decisions backed by numbers.
                  </p>
                </div>
              </div>

            <div>
              <div className="eyebrow">About the firm</div>
              <h2 className="mb-5 mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{s.about_title}</h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{s.about_text}</p>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {["Transparent communication", "Practical tax planning", "Structured bookkeeping", "Business-focused advice"].map((x) => (
                  <li key={x} className="flex items-center gap-2.5 text-sm font-bold"><CheckCircle2 size={19} className="shrink-0 text-acctext" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section bg-primary text-onprimary">
          <div className="container-x">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">A simple process</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">Less chasing. More clarity.</h2>
              <p className="leading-relaxed opacity-75">A straightforward engagement model designed to keep your financial work organised.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([n, t, d]) => (
                <div key={n} className="rounded-2xl border border-onprimary/15 bg-onprimary/5 p-6">
                  <div className="font-display font-bold text-accent">{n}</div>
                  <h3 className="mb-2 mt-7 text-xl font-bold">{t}</h3>
                  <p className="text-sm leading-relaxed opacity-70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {testimonials.length > 0 && (
          <section id="reviews" className="section">
            <div className="container-x">
              <Head center eyebrow="Client stories" title="Trusted by owners and professionals" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure key={t.id} className="card flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-card">
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <blockquote className="mt-4 flex-1 leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-soft font-display font-bold text-brand">{t.name[0]}</span>
                      <span className="leading-tight"><b className="block text-sm">{t.name}</b><span className="text-xs text-muted">{t.role}</span></span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section id="faq" className="section border-y border-line bg-surface/60">
            <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
              <div>
                <div className="eyebrow">Questions</div>
                <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Frequently asked</h2>
                <p className="text-muted">Can’t find what you’re looking for? Send us a message and we’ll help.</p>
              </div>
              <div className="grid gap-3">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.id} className={`card overflow-hidden transition ${open ? "border-brand/40" : ""}`}>
                      <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                        {f.question}
                        <ChevronDown size={20} className={`shrink-0 text-brand transition ${open ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <p className="overflow-hidden px-5 leading-relaxed text-muted"><span className="block pb-5">{f.answer}</span></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="eyebrow">Start a conversation</div>
              <h2 className="mb-4 mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Have a finance question? Let’s talk.</h2>
              <p className="leading-relaxed text-muted sm:text-lg">Tell us what you need help with. A member of the firm will review your enquiry and get in touch.</p>
              <div className="mt-7 grid gap-4">
                {[[Phone, s.phone, `tel:${s.phone.replace(/\s/g, "")}`], [Mail, s.email, `mailto:${s.email}`], [MapPin, s.address], [Clock, s.working_hours]].filter((r) => r[1]).map(([I, v, href]) => {
                  const inner = <><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft text-brand"><I size={19} /></span><span className="break-words font-semibold">{v}</span></>;
                  return href
                    ? <a key={v} href={href} className="flex items-center gap-3.5 transition hover:text-brand">{inner}</a>
                    : <div key={v} className="flex items-center gap-3.5">{inner}</div>;
                })}
              </div>
            </div>
            <div className="card p-5 shadow-card sm:p-8"><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-surface/60 py-8">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-center text-sm text-muted sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {s.firm_name}. All rights reserved.</span>
          <span className="flex items-center gap-4">Professional accounting &amp; business advisory</span>
        </div>
      </footer>
    </>
  );
}