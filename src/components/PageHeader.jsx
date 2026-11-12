// src/components/PageHeader.jsx
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-28 sm:pb-16 sm:pt-36">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-x relative">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-muted">
            <Link to="/" className="hover:text-brand">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={b.href || b.label} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="opacity-50" />
                {b.href ? <Link to={b.href} className="hover:text-brand">{b.label}</Link>
                  : <span className="text-ink">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}