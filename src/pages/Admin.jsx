import { useCallback, useEffect, useState } from "react";
import { ExternalLink, Eye, EyeOff, HelpCircle, Inbox, LayoutDashboard, LogOut, MessageSquareQuote, Palette, FileText, Briefcase, Lock } from "lucide-react";
import { api, clearToken, getToken, setToken } from "../lib/api";
import { useSite } from "../lib/site";
import ThemeToggle from "../components/ThemeToggle";
import { ToastProvider, useToast } from "../admin/ui";
import Dashboard from "../admin/Dashboard";
import ContentEditor from "../admin/ContentEditor";
import Appearance from "../admin/Appearance";
import MessagesPanel from "../admin/MessagesPanel";
import CollectionManager from "../admin/CollectionManager";
import { faqsConfig, servicesConfig, testimonialsConfig } from "../admin/collections";

export default function Admin() {
  const [authed, setAuthed] = useState(!!getToken());
  useEffect(() => {
    const out = () => setAuthed(false);
    window.addEventListener("ca:logout", out);
    return () => window.removeEventListener("ca:logout", out);
  }, []);
  return <ToastProvider>{authed ? <Shell onLogout={() => { clearToken(); setAuthed(false); }} /> : <Login onDone={() => setAuthed(true)} />}</ToastProvider>;
}

function Login({ onDone }) {
  const { site } = useSite();
  const [f, setF] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setErr("");
    try { const r = await api.login(f); setToken(r.token); onDone(); }
    catch (x) { setErr(x.message); setBusy(false); }
  };
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden p-4">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-4 top-4"><ThemeToggle /></div>
      <form onSubmit={submit} className="card relative w-full max-w-md animate-pop p-7 shadow-card sm:p-9">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-onprimary"><Lock size={21} /></span>
        <div className="eyebrow mt-5">{site.settings.firm_name}</div>
        <h1 className="mt-1 text-3xl font-bold">Admin panel</h1>
        <p className="mb-6 mt-1 text-sm text-muted">Sign in to manage your website content and enquiries.</p>
        {err && <div className="mb-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">{err}</div>}
        <label className="label">Email</label>
        <input className="input" type="email" required autoComplete="username" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder="admin@example.com" />
        <label className="label mt-4">Password</label>
        <div className="relative">
          <input className="input pr-11" type={show ? "text" : "password"} required autoComplete="current-password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
          <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted" aria-label="Show password">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
        </div>
        <button className="btn btn-primary mt-6 w-full py-3" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        <a href="/" className="mt-4 block text-center text-sm font-semibold text-muted hover:text-brand">← Back to website</a>
      </form>
    </div>
  );
}

const NAV = [
  ["dashboard", "Dashboard", LayoutDashboard],
  ["content", "Site content", FileText],
  ["services", "Services", Briefcase],
  ["testimonials", "Testimonials", MessageSquareQuote],
  ["faqs", "FAQs", HelpCircle],
  ["messages", "Enquiries", Inbox],
  ["appearance", "Appearance", Palette]
];

function Shell({ onLogout }) {
  const { site, reload } = useSite();
  const toast = useToast();
  const [tab, setTab] = useState(() => location.hash.slice(1) || "dashboard");
  const [dash, setDash] = useState(null);

  const refresh = useCallback(async () => {
    try { setDash(await api.dashboard()); } catch (e) { if (getToken()) toast(e.message, "err"); }
  }, [toast]);
  useEffect(() => { refresh(); }, [refresh]);

  const go = (t) => { setTab(t); history.replaceState(null, "", `#${t}`); window.scrollTo({ top: 0 }); if (t === "dashboard") refresh(); };
  const changed = () => { refresh(); reload(); }; // keep dashboard counts + public site data in sync

  const unread = dash?.stats.newMessages || 0;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[250px_1fr]">
      <aside className="flex flex-col border-b border-line bg-surface lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3 px-4 py-3 lg:flex-col lg:items-stretch lg:gap-0 lg:px-4 lg:py-5">
          <div className="flex min-w-0 items-center gap-3 lg:mb-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-onprimary">{site.settings.firm_name[0]}</span>
            <span className="min-w-0 leading-tight"><b className="block truncate font-display">{site.settings.firm_name}</b><span className="text-xs text-muted">Admin panel</span></span>
          </div>
          <div className="flex items-center gap-2 lg:hidden"><ThemeToggle /><button className="btn btn-ghost btn-icon" onClick={onLogout} aria-label="Log out"><LogOut size={18} /></button></div>
        </div>

        <nav className="flex gap-1.5 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:pb-0">
          {NAV.map(([id, label, I]) => (
            <button key={id} onClick={() => go(id)}
              className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-bold transition ${tab === id ? "bg-primary text-onprimary shadow-md shadow-primary/20" : "text-muted hover:bg-soft hover:text-brand"}`}>
              <I size={18} /> {label}
              {id === "messages" && unread > 0 && <span className="ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1.5 text-[11px] text-onaccent">{unread}</span>}
            </button>
          ))}
        </nav>

        <div className="mt-auto hidden gap-2 border-t border-line p-4 lg:grid">
          <a href="/" target="_blank" rel="noreferrer" className="btn btn-ghost justify-start"><ExternalLink size={16} /> View website</a>
          <div className="flex gap-2"><ThemeToggle /><button className="btn btn-ghost flex-1" onClick={onLogout}><LogOut size={16} /> Log out</button></div>
        </div>
      </aside>

      <main className="min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl">
          {tab === "dashboard" && <Dashboard data={dash} go={go} />}
          {tab === "content" && <ContentEditor />}
          {tab === "services" && <CollectionManager config={servicesConfig} onChange={changed} />}
          {tab === "testimonials" && <CollectionManager config={testimonialsConfig} onChange={changed} />}
          {tab === "faqs" && <CollectionManager config={faqsConfig} onChange={changed} />}
          {tab === "messages" && <MessagesPanel onChange={refresh} />}
          {tab === "appearance" && <Appearance />}
        </div>
      </main>
    </div>
  );
}
