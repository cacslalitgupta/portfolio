// src/pages/Tools.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Calculators from "../components/Calculators";
import SocialSidebar from "../components/SocialSidebar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Tools({ site }) {
  const s = site.settings;

  return (
    <>
      <SEO />
      <SocialSidebar />
      <Navbar name={s.firm_name} />
      <main>
        <PageHeader
          eyebrow="Free tools"
          title="Financial calculators"
          description="Estimate interest, loan EMIs, SIP growth and GST in seconds. For advice tailored to your situation, contact our office."
          breadcrumbs={[{ label: "Calculators" }]}
        />

        <Calculators />

        <section className="section border-t border-line">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Need help interpreting these numbers?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Calculators are for illustration only. For financial decisions specific to your
              situation, speak to our office.
            </p>
            <Link to="/contact" className="btn btn-primary mt-6 px-6 py-3.5">
              Talk to us <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer settings={s} />
      <WhatsAppButton number={s.whatsapp || s.phone} firm={s.firm_name} />
    </>
  );
}