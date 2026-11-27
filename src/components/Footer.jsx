// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SERVICE_PAGES } from "../lib/content";
import { NAV_LINKS as NAV, groupServices } from "../lib/serviceGroups";

/* ── Accordion column (mobile) / static (desktop) ─────────────── */
function FooterColumn({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-line md:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:cursor-default md:py-0"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className={`text-muted transition md:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:mt-4 md:grid-rows-[1fr] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-2.5 pb-5 md:pb-0">{children}</ul>
        </div>
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-[13.5px] leading-relaxed text-muted transition-colors duration-150 hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}

/* ── Footer ────────────────────────────────────────────────────── */
export default function Footer({ settings = {} }) {
  const [openCol, setOpenCol] = useState("");
  const year = new Date().getFullYear();

  const firm = settings.firm_name || "LG & Associates";
  const phone = settings.phone || "+91 98320 93139";
  const email = settings.email || "cacslalitgupta@gmail.com";
  const hours = settings.working_hours || "Mon – Sat: 10:00 AM – 7:00 PM";
  const address =
    settings.address ||
    "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005";
  const waDigits = String(
    settings.whatsapp || settings.phone || "+919832093139"
  ).replace(/\D/g, "");
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const groups = groupServices(SERVICE_PAGES);
  const toggle = (t) => setOpenCol((cur) => (cur === t ? "" : t));

  const toTop = () => {
    const lenis = typeof window !== "undefined" ? window.__lenis : null;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // ✅ theme-aware surface, no hardcoded white
    <footer className="border-t border-line bg-surface">

      {/* ── Main grid: brand + map | link columns ────────────── */}
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
        {/* Brand + NAP + map */}
        <div>
          <div className="font-display text-lg font-bold tracking-tight text-ink">
            {firm}
          </div>
          <p className="mt-1 text-[13px] text-muted">
            Chartered Accountants · Siliguri, West Bengal
          </p>

          <address className="mt-6 grid gap-3 text-[13.5px] not-italic leading-relaxed text-muted">
            <span className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-muted/70" />
              <span>{address}</span>
            </span>
            <a
              href={telHref}
              className="flex items-center gap-2.5 transition-colors hover:text-ink"
            >
              <Phone size={14} className="shrink-0 text-muted/70" />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 break-all transition-colors hover:text-ink"
            >
              <Mail size={14} className="shrink-0 text-muted/70" />
              {email}
            </a>
            <span className="flex items-center gap-2.5">
              <Clock size={14} className="shrink-0 text-muted/70" />
              {hours}
            </span>
          </address>

          <div className="relative mt-6 h-44 w-full overflow-hidden rounded-lg border border-line bg-background">
            <iframe
              title={`${firm} office location`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.1626772338577!2d88.424475!3d26.7072495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44168eb828ca1%3A0xa444452259f496c5!2sLG%20%26%20Associates%20CA.Lalit%20Gupta!5e0!3m2!1sen!2sin!4v1794478444827!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0 opacity-90 dark:opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer navigation"
          className="grid border-t border-line md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:border-0 xl:grid-cols-4"
        >
          <FooterColumn
            title="Explore"
            open={openCol === "Explore"}
            onToggle={() => toggle("Explore")}
          >
            {NAV.map(([label, href]) => (
              <FooterLink key={href} to={href}>
                {label}
              </FooterLink>
            ))}
          </FooterColumn>

          {groups.map((g) => (
            <FooterColumn
              key={g.title}
              title={g.title}
              open={openCol === g.title}
              onToggle={() => toggle(g.title)}
            >
              {g.items.map((p) => (
                <FooterLink key={p.slug} to={`/services/${p.slug}`}>
                  {p.navTitle}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </nav>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-line bg-background/60">
        <div className="container-x py-6">
          {/* Row 1 — copyright | legal links */}
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-muted">
              © {year} <span className="font-semibold text-ink">{firm}</span>.
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]">
              <Link
                to="/sitemap"
                className="text-muted transition-colors hover:text-ink"
              >
                Sitemap
              </Link>
              <Link
                to="/privacy"
                className="text-muted transition-colors hover:text-ink"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-muted transition-colors hover:text-ink"
              >
                Terms
              </Link>

              <span aria-hidden className="hidden h-3 w-px bg-line sm:block" />

              <button
                type="button"
                onClick={toTop}
                className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
              >
                Back to top
                <ArrowUp
                  size={12}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          {/* Row 2 — disclaimer */}
          <p className="mt-4 max-w-3xl pt-4 text-[11.5px] leading-relaxed text-muted/80">
            This website is for informational purposes only. The information on
            this website does not constitute solicitation, advertisement, or
            professional advice. For professional advice specific to your
            situation, please contact our office directly.
          </p>
        </div>
      </div>
    </footer>
  );
}