import { ArrowRight, Briefcase, Database, HelpCircle, Inbox, MessageSquareQuote, Palette } from "lucide-react";
import { PageTitle } from "./ui";

export default function Dashboard({ data, go }) {
  if (!data) return <div className="card p-10 text-center text-muted">Loading…</div>;
  const { stats, recent, db } = data;
  const cards = [
    ["Services", stats.services, Briefcase, "services"],
    ["Testimonials", stats.testimonials, MessageSquareQuote, "testimonials"],
    ["FAQs", stats.faqs, HelpCircle, "faqs"],
    ["New enquiries", stats.newMessages, Inbox, "messages"]
  ];
  return (
    <>
      <PageTitle title="Dashboard" text="A quick overview of your website." />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map(([label, n, I, tab]) => (
          <button key={label} onClick={() => go(tab)} className="card p-4 text-left transition hover:-translate-y-0.5 hover:shadow-card sm:p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-brand"><I size={19} /></span>
            <div className="mt-4 font-display text-3xl font-bold">{n}</div>
            <div className="text-sm text-muted">{label}</div>
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <section className="card p-5">
          <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">Recent enquiries</h2>
            <button className="flex items-center gap-1 text-sm font-bold text-brand" onClick={() => go("messages")}>View all <ArrowRight size={15} /></button></div>
          {recent.length === 0 ? <p className="py-6 text-center text-sm text-muted">No enquiries yet.</p> : (
            <ul className="divide-y divide-line">
              {recent.map((m) => (
                <li key={m.id} className="flex items-start justify-between gap-3 py-3">
                  <div className="min-w-0"><b className="text-sm">{m.name}</b><p className="truncate text-sm text-muted">{m.subject || m.message}</p></div>
                  <span className={`chip shrink-0 capitalize ${m.status === "new" ? "bg-accent/15 text-acctext" : "bg-line text-muted"}`}>{m.status}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="grid content-start gap-5">
          <div className="card p-5">
            <h2 className="mb-3 text-lg font-bold">Database</h2>
            <div className="flex items-center gap-3 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-brand"><Database size={19} /></span>
              <div><b>MongoDB</b><div className={`flex items-center gap-1.5 ${db === "connected" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                <span className="h-2 w-2 rounded-full bg-current" />{db}</div></div>
            </div>
          </div>
          <button onClick={() => go("appearance")} className="card flex items-center gap-3 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-onprimary"><Palette size={19} /></span>
            <span><b className="block">Customise appearance</b><span className="text-sm text-muted">Colour palette &amp; dark mode</span></span>
          </button>
        </section>
      </div>
    </>
  );
}
