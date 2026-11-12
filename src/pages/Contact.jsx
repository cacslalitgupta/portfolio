// src/pages/Contact.jsx
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact({ site }) {
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Contact LG & Associates in Siliguri"
          description="Get in touch with our chartered accountancy office for income tax, GST, audit and accounting requirements."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="eyebrow">Office details</div>
              <h2 className="mb-5 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Visit, call or message
              </h2>
              <div className="grid gap-4">
                {[
                  [MapPin, s.address || "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005", null],
                  [Phone, s.phone, s.phone ? `tel:${s.phone.replace(/\s/g, "")}` : null],
                  [Mail, s.email, s.email ? `mailto:${s.email}` : null],
                  [Clock, s.working_hours, null],
                ].filter((r) => r[1]).map(([I, v, href]) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft text-brand">
                        <I size={19} />
                      </span>
                      <span className="break-words font-semibold">{v}</span>
                    </>
                  );
                  return href
                    ? <a key={v} href={href} className="flex items-center gap-3.5 transition hover:text-brand">{inner}</a>
                    : <div key={v} className="flex items-center gap-3.5">{inner}</div>;
                })}
              </div>

              <a
                className="btn btn-primary mt-7 px-6 py-3.5"
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.1626772338577!2d88.424475!3d26.7072495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44168eb828ca1%3A0xa444452259f496c5!2sLG%20%26%20Associates%20CA.Lalit%20Gupta!5e0!3m2!1sen!2sin!4v1794478444827!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>

              <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                <iframe
                  title="LG & Associates office location in Siliguri"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.1626772338577!2d88.424475!3d26.7072495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44168eb828ca1%3A0xa444452259f496c5!2sLG%20%26%20Associates%20CA.Lalit%20Gupta!5e0!3m2!1sen!2sin!4v1794478444827!5m2!1sen!2sin"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="card p-5 shadow-card sm:p-8">
              <h2 className="mb-1 text-xl font-bold">Send an enquiry</h2>
              <p className="mb-6 text-sm text-muted">
                Tell us briefly about your requirement and we’ll respond.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}