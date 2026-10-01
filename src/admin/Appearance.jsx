import { useEffect, useState } from "react";
import { Check, Monitor, Moon, RotateCcw, Save, Sun } from "lucide-react";
import { api } from "../lib/api";
import { useSite } from "../lib/site";
import { PRESETS } from "../lib/palette";
import { Field, PageTitle, useToast } from "./ui";

const HEX = /^#[0-9a-f]{6}$/i;
const MODES = [["light", "Light", Sun], ["dark", "Dark", Moon], ["system", "Match device", Monitor]];

function ColorInput({ label, value, onChange }) {
  const [text, setText] = useState(value);
  useEffect(() => setText(value), [value]);
  return (
    <Field label={label}>
      <div className="flex items-center gap-2">
        <input type="color" value={HEX.test(value) ? value : "#000000"} onChange={(e) => onChange(e.target.value)}
          className="h-11 w-14 shrink-0 cursor-pointer rounded-xl border border-line bg-surface p-1" aria-label={label} />
        <input className="input font-mono uppercase" value={text} maxLength={7}
          onChange={(e) => { let t = e.target.value.trim(); if (t && t[0] !== "#") t = "#" + t; setText(t); if (HEX.test(t)) onChange(t.toLowerCase()); }} />
      </div>
    </Field>
  );
}

export default function Appearance() {
  const { site, reload, setPreview, setMode, userMode } = useSite();
  const toast = useToast();
  const saved = { primary: site.settings.theme_primary, accent: site.settings.theme_accent, mode: site.settings.theme_mode };
  const [c, setC] = useState(saved);
  const [busy, setBusy] = useState(false);
  const dirty = c.primary !== saved.primary || c.accent !== saved.accent || c.mode !== saved.mode;

  // Live preview: the whole admin + site recolours as you pick. Cleared when you leave.
  useEffect(() => { setPreview(dirty ? c : null); }, [c]); // eslint-disable-line
  useEffect(() => () => setPreview(null), []); // eslint-disable-line

  const save = async () => {
    setBusy(true);
    try {
      await api.saveSettings({ theme_primary: c.primary, theme_accent: c.accent, theme_mode: c.mode });
      await reload(); setPreview(null);
      if (userMode) setMode(""); // let the newly saved default take effect for you too
      toast("Appearance saved — live on your website");
    } catch (e) { toast(e.message, "err"); }
    setBusy(false);
  };

  return (
    <>
      <PageTitle title="Appearance" text="Choose your brand colours and default light/dark mode. Changes preview instantly."
        action={<div className="flex gap-2">
          <button className="btn btn-ghost" disabled={!dirty} onClick={() => setC(saved)}><RotateCcw size={16} /> Undo</button>
          <button className="btn btn-primary" disabled={!dirty || busy} onClick={save}><Save size={16} /> {busy ? "Saving…" : "Save & publish"}</button>
        </div>} />

      <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-5">
          <section className="card p-5 sm:p-6">
            <h2 className="mb-1 text-lg font-bold">Colour palettes</h2>
            <p className="mb-4 text-sm text-muted">Pick a ready-made palette…</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {PRESETS.map((p) => {
                const active = p.primary === c.primary && p.accent === c.accent;
                return (
                  <button key={p.name} onClick={() => setC({ ...c, primary: p.primary, accent: p.accent })}
                    className={`relative rounded-xl border p-3 text-left transition hover:-translate-y-0.5 ${active ? "border-brand ring-2 ring-primary/25" : "border-line hover:border-brand/50"}`}>
                    <div className="mb-2 flex h-10 overflow-hidden rounded-lg">
                      <span className="flex-[2]" style={{ background: p.primary }} /><span className="flex-1" style={{ background: p.accent }} />
                    </div>
                    <span className="text-xs font-bold">{p.name}</span>
                    {active && <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-white text-black shadow"><Check size={12} /></span>}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="card p-5 sm:p-6">
            <h2 className="mb-1 text-lg font-bold">Custom colours</h2>
            <p className="mb-4 text-sm text-muted">…or fine-tune your own brand colours.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ColorInput label="Primary colour" value={c.primary} onChange={(v) => setC((s) => ({ ...s, primary: v }))} />
              <ColorInput label="Accent colour" value={c.accent} onChange={(v) => setC((s) => ({ ...s, accent: v }))} />
            </div>
          </section>
        </div>

        <div className="grid content-start gap-5">
          <section className="card p-5 sm:p-6">
            <h2 className="mb-1 text-lg font-bold">Default mode</h2>
            <p className="mb-4 text-sm text-muted">What new visitors see first. They can always switch with the ☀/🌙 button.</p>
            <div className="grid gap-2">
              {MODES.map(([id, label, I]) => (
                <button key={id} onClick={() => setC({ ...c, mode: id })}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm font-bold transition ${c.mode === id ? "border-brand bg-soft text-brand" : "border-line hover:border-brand/50"}`}>
                  <I size={18} /> {label}
                  {c.mode === id && <Check size={16} className="ml-auto" />}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">Tip: use the toggle in the top bar to preview both modes right now.</p>
          </section>

          <section className="card p-5 sm:p-6">
            <h2 className="mb-4 text-lg font-bold">Preview</h2>
            <div className="rounded-xl bg-primary p-4 text-onprimary">
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Primary surface</div>
              <div className="mt-1 font-display text-xl font-bold">Clarity for your numbers.</div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Outline</button>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm"><span className="chip bg-soft text-brand">Brand tint</span><span className="chip bg-accent/15 text-acctext">Accent tint</span></div>
          </section>
        </div>
      </div>
    </>
  );
}
