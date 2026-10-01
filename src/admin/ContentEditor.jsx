import { useState } from "react";
import { RotateCcw, Save } from "lucide-react";
import { api } from "../lib/api";
import { useSite } from "../lib/site";
import { Field, PageTitle, useToast } from "./ui";

const groups = [
  { title: "Brand", fields: [["firm_name", "Firm name"], ["tagline", "Tagline"]] },
  { title: "Hero section", fields: [["hero_title", "Headline", "area"], ["hero_text", "Intro text", "area"]] },
  { title: "About section", fields: [["about_title", "Heading", "area"], ["about_text", "Text", "area"]] },
  { title: "Numbers", fields: [["experience", "Years of experience"], ["clients", "Clients supported"], ["businesses", "Businesses advised"], ["response_time", "Response time"]] },
  { title: "Contact details", fields: [["phone", "Phone"], ["email", "Email"], ["address", "Address"], ["working_hours", "Working hours"]] }
];
const keys = groups.flatMap((g) => g.fields.map((f) => f[0]));

export default function ContentEditor() {
  const { site, reload } = useSite();
  const toast = useToast();
  const initial = Object.fromEntries(keys.map((k) => [k, site.settings[k] ?? ""]));
  const [v, setV] = useState(initial);
  const [busy, setBusy] = useState(false);
  const dirty = keys.some((k) => v[k] !== (site.settings[k] ?? ""));

  const save = async (e) => {
    e.preventDefault(); setBusy(true);
    try { await api.saveSettings(v); await reload(); toast("Website content saved"); }
    catch (err) { toast(err.message, "err"); }
    setBusy(false);
  };

  return (
    <form onSubmit={save}>
      <PageTitle title="Site content" text="Edit the text shown on your public website."
        action={<div className="flex gap-2">
          <button type="button" className="btn btn-ghost" disabled={!dirty} onClick={() => setV(initial)}><RotateCcw size={16} /> Reset</button>
          <button className="btn btn-primary" disabled={!dirty || busy}><Save size={16} /> {busy ? "Saving…" : "Save changes"}</button>
        </div>} />
      <div className="grid gap-5">
        {groups.map((g) => (
          <section key={g.title} className="card p-5 sm:p-6">
            <h2 className="mb-4 text-lg font-bold">{g.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {g.fields.map(([k, label, kind]) => (
                <div key={k} className={kind === "area" ? "sm:col-span-2" : ""}>
                  <Field label={label}>
                    {kind === "area"
                      ? <textarea className="input" rows={3} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} />
                      : <input className="input" value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} />}
                  </Field>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </form>
  );
}
