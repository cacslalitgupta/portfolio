import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, RefreshCw, Send, TriangleAlert } from "lucide-react";
import { api } from "../lib/api";

const empty = { name: "", email: "", phone: "", subject: "", message: "", captchaAnswer: "", website: "" };

export default function ContactForm() {
  const [captcha, setCaptcha] = useState(null);
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ loading: false, error: "", success: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const loadCaptcha = useCallback(async () => {
    try { setCaptcha(await api.captcha()); setForm((f) => ({ ...f, captchaAnswer: "" })); }
    catch { setCaptcha(null); }
  }, []);
  useEffect(() => { loadCaptcha(); }, [loadCaptcha]);

  const submit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: "", success: "" });
    try {
      await api.contact({ ...form, captchaId: captcha?.id || "" });
      setForm(empty);
      setState({ loading: false, error: "", success: "Message sent successfully. We’ll get back to you shortly." });
    } catch (err) {
      setState({ loading: false, error: err.message, success: "" });
    }
    loadCaptcha();
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <input name="website" value={form.website} onChange={set("website")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className="label">Full name</label><input required className="input" value={form.name} onChange={set("name")} placeholder="Your name" autoComplete="name" /></div>
        <div><label className="label">Email</label><input required type="email" className="input" value={form.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" /></div>
        <div><label className="label">Phone</label><input className="input" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91" autoComplete="tel" /></div>
        <div><label className="label">Subject</label><input className="input" value={form.subject} onChange={set("subject")} placeholder="How can we help?" /></div>
      </div>
      <div><label className="label">Message</label><textarea required minLength={10} rows={5} className="input resize-y" value={form.message} onChange={set("message")} placeholder="Tell us briefly about your requirement…" /></div>

      <div className="rounded-xl border border-line bg-canvas p-3.5">
        <div className="flex items-center justify-between gap-3">
          <div><div className="text-xs font-bold uppercase tracking-wide text-muted">Bot protection</div><b className="font-display text-lg">{captcha?.question || "Loading…"}</b></div>
          <button type="button" className="btn btn-ghost btn-icon" onClick={loadCaptcha} aria-label="New CAPTCHA"><RefreshCw size={16} /></button>
        </div>
        <input required inputMode="numeric" className="input mt-3" value={form.captchaAnswer} onChange={set("captchaAnswer")} placeholder="Enter answer" />
      </div>

      {state.error && <div className="flex items-start gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400"><TriangleAlert size={16} className="mt-0.5 shrink-0" />{state.error}</div>}
      {state.success && <div className="flex items-start gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-400"><CheckCircle2 size={16} className="mt-0.5 shrink-0" />{state.success}</div>}

      <button disabled={state.loading} className="btn btn-primary py-3">{state.loading ? "Sending…" : <>Send message <Send size={16} /></>}</button>
      <p className="text-xs text-muted">Your details are used only to respond to this enquiry.</p>
    </form>
  );
}