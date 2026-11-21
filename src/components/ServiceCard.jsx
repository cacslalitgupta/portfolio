import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import { serviceForTitle } from "../lib/content";

export default function ServiceCard({ service }) {
  // Link to the dedicated landing page when one exists for this service, otherwise to the contact page.
  const page = serviceForTitle(service.title);
  const to = page ? `/services/${page.slug}` : "/contact";
  return (
    <article className="card group relative flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
      {service.featured && <span className="chip absolute right-4 top-4 bg-accent/15 text-acctext">Popular</span>}
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-brand transition group-hover:bg-primary group-hover:text-onprimary">
        <Icon name={service.icon} />
      </div>
      <h3 className="mb-2 mt-5 text-lg font-bold">
        <Link to={to} className="after:absolute after:inset-0">{service.title}</Link>
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-muted">{service.short_description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
        {page ? "View service details" : "Discuss this"}
        <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </article>
  );
}
