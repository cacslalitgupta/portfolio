// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const NAV = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Process", "/process"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Footer({ settings = {} }) {
  const year = new Date().getFullYear();
  const firm = settings.firm_name || "LG & Associates";
  const phone = settings.phone || "+91 98320 93139";
  const email = settings.email || "cacslalitgupta@gmail.com";
  const address =
    settings.address ||
    "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005";

  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        {/* Brand + NAP */}
        <div>
          <div className="font-display text-lg font-bold text-ink">{firm}</div>
          <p className="mt-1 text-sm text-muted">Chartered Accountants · Siliguri, West Bengal</p>

          <address className="mt-5 grid gap-3 text-sm not-italic text-muted">
            <span className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>{address}</span>
            </span>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-brand">
              <Phone size={16} className="shrink-0 text-brand" />
              {phone}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-2.5 hover:text-brand">
              <Mail size={16} className="shrink-0 text-brand" />
              {email}
            </a>
          </address>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Explore</div>
          <ul className="mt-3 grid gap-2 text-sm">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="text-muted hover:text-brand">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Map embed */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <iframe
            title={`${firm} office location`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.1626772338577!2d88.424475!3d26.7072495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44168eb828ca1%3A0xa444452259f496c5!2sLG%20%26%20Associates%20CA.Lalit%20Gupta!5e0!3m2!1sen!2sin!4v1794478444827!5m2!1sen!2sin"
            className="h-[200px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x grid gap-3 py-6 text-xs text-muted">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>© {year} {firm}. All rights reserved.</span>
            {/* <span>Powered by RJ WEB TECHNOLOGY</span> */}
          </div>
          <p className="max-w-3xl leading-relaxed">
            This website is for informational purposes only. The information on this website does
            not constitute solicitation, advertisement or professional advice. For professional
            advice specific to your situation, please contact our office directly.
          </p>
        </div>
      </div>
    </footer>
  );
}