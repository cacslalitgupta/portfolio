import { useCallback, useEffect, useMemo, useState } from "react";
import { Eye, EyeOff, Pencil, Plus, Search, Star, Trash2 } from "lucide-react";
import { api } from "../lib/api";
import { ICON_NAMES } from "../lib/icons";
import Icon from "../components/Icon";
import { Confirm, Field, Modal, PageTitle, Switch, useToast } from "./ui";

/** One reusable screen that gives full Create / Read / Update / Delete for any collection. */
export default function CollectionManager({ config, onChange }) {
  const { collection, title, singular, fields, blank, primaryKey, secondaryKey, description } = config;
  const toast = useToast();
  const [items, setItems] = useState(null);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState(null);   // item (edit) or {} (new)
  const [deleting, setDeleting] = useState(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try { setItems(await api.list(collection)); } catch (e) { toast(e.message, "err"); setItems([]); }
  }, [collection, toast]);
  useEffect(() => { setItems(null); load(); }, [load]);

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return (items || []).filter((i) => !needle || JSON.stringify(i).toLowerCase().includes(needle));
  }, [items, q]);

  const togglePublished = async (item) => {
    try {
      await api.update(collection, item.id, { ...item, published: !item.published });
      setItems((l) => l.map((x) => (x.id === item.id ? { ...x, published: !item.published } : x)));
      toast(item.published ? "Hidden from website" : "Now visible on website"); onChange?.();
    } catch (e) { toast(e.message, "err"); }
  };

  const remove = async () => {
    setBusy(true);
    try {
      await api.remove(collection, deleting.id);
      setItems((l) => l.filter((x) => x.id !== deleting.id));
      toast(`${singular} deleted`); setDeleting(null); onChange?.();
    } catch (e) { toast(e.message, "err"); }
    setBusy(false);
  };

  return (
    <>
      <PageTitle title={title} text={description}
        action={<button className="btn btn-primary" onClick={() => setEditing({ ...blank, _new: true })}><Plus size={17} /> Add {singular}</button>} />

      <div className="relative mb-4">
        <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
        <input className="input pl-10" placeholder={`Search ${title.toLowerCase()}…`} value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      {items === null ? <div className="card p-10 text-center text-muted">Loading…</div>
        : shown.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-muted">{items.length ? "Nothing matches your search." : `No ${title.toLowerCase()} yet.`}</p>
            {!items.length && <button className="btn btn-primary mt-4" onClick={() => setEditing({ ...blank, _new: true })}><Plus size={16} /> Add your first {singular}</button>}
          </div>
        ) : (
          <div className="grid gap-3">
            {shown.map((item) => (
              <div key={item.id} className={`card flex flex-col gap-3 p-4 transition sm:flex-row sm:items-center ${item.published ? "" : "opacity-60"}`}>
                <div className="flex min-w-0 flex-1 items-start gap-3.5">
                  {collection === "services" && <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft text-brand"><Icon name={item.icon} size={20} /></span>}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <b className="break-words font-display">{item[primaryKey]}</b>
                      {item.featured && <span className="chip bg-accent/15 text-acctext">Popular</span>}
                      {!item.published && <span className="chip bg-line text-muted">Hidden</span>}
                      {collection === "testimonials" && <span className="chip bg-accent/15 text-acctext"><Star size={12} fill="currentColor" />{item.rating}</span>}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-sm text-muted">{item[secondaryKey]}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
                  <span className="mr-1 text-xs font-bold text-muted">#{item.sort_order}</span>
                  <button className="btn btn-ghost btn-icon" onClick={() => togglePublished(item)} title={item.published ? "Hide" : "Show"} aria-label="Toggle visibility">{item.published ? <Eye size={17} /> : <EyeOff size={17} />}</button>
                  <button className="btn btn-ghost btn-icon" onClick={() => setEditing(item)} title="Edit" aria-label="Edit"><Pencil size={17} /></button>
                  <button className="btn btn-danger btn-icon" onClick={() => setDeleting(item)} title="Delete" aria-label="Delete"><Trash2 size={17} /></button>
                </div>
              </div>
            ))}
          </div>
        )}

      {editing && (
        <ItemForm config={config} item={editing} onClose={() => setEditing(null)}
          onSaved={(saved, isNew) => {
            setItems((l) => {
              const next = isNew ? [...l, saved] : l.map((x) => (x.id === saved.id ? saved : x));
              return next.sort((a, b) => a.sort_order - b.sort_order);
            });
            setEditing(null); onChange?.();
          }} />
      )}
      {deleting && (
        <Confirm title={`Delete ${singular}?`} busy={busy} onClose={() => setDeleting(null)} onConfirm={remove}
          text={`“${deleting[primaryKey]}” will be permanently removed from the database and the website. This can’t be undone.`} />
      )}
    </>
  );
}

function ItemForm({ config, item, onClose, onSaved }) {
  const { collection, singular, fields } = config;
  const isNew = !item.id;
  const toast = useToast();
  const [v, setV] = useState(() => Object.fromEntries(fields.map((f) => [f.key, item[f.key] ?? config.blank[f.key]])));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const set = (k, val) => setV((s) => ({ ...s, [k]: val }));

  const save = async (e) => {
    e.preventDefault(); setBusy(true); setError("");
    const body = Object.fromEntries(fields.map((f) => [f.key, f.type === "number" || f.type === "rating" ? Number(v[f.key]) : v[f.key]]));
    try {
      const saved = isNew ? await api.create(collection, body) : await api.update(collection, item.id, body);
      toast(isNew ? `${singular} added` : `${singular} updated`);
      onSaved(saved, isNew);
    } catch (err) { setError(err.message); setBusy(false); }
  };

  return (
    <Modal title={`${isNew ? "Add" : "Edit"} ${singular}`} onClose={onClose}
      footer={<>
        <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
        <button form="item-form" className="btn btn-primary" disabled={busy}>{busy ? "Saving…" : isNew ? `Add ${singular}` : "Save changes"}</button>
      </>}>
      <form id="item-form" onSubmit={save} className="grid gap-4">
        {fields.map((f) => (
          <Field key={f.key} label={f.label} hint={f.hint}>
            {f.type === "textarea" ? <textarea className="input" rows={4} required={f.required !== false} value={v[f.key]} onChange={(e) => set(f.key, e.target.value)} />
              : f.type === "checkbox" ? <Switch checked={!!v[f.key]} onChange={(x) => set(f.key, x)} label={f.toggleLabel} />
              : f.type === "icon" ? <IconPicker value={v[f.key]} onChange={(x) => set(f.key, x)} />
              : f.type === "rating" ? (
                <div className="flex gap-1">{[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => set(f.key, n)} aria-label={`${n} stars`} className={n <= v[f.key] ? "text-accent" : "text-line"}><Star size={26} fill="currentColor" /></button>
                ))}</div>
              ) : <input className="input" type={f.type === "number" ? "number" : "text"} min={f.type === "number" ? 0 : undefined} max={f.type === "number" ? 999 : undefined}
                  required={f.required !== false} value={v[f.key]} onChange={(e) => set(f.key, e.target.value)} />}
          </Field>
        ))}
        {error && <div className="rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">{error}</div>}
      </form>
    </Modal>
  );
}

function IconPicker({ value, onChange }) {
  return (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-6">
      {ICON_NAMES.map((n) => (
        <button type="button" key={n} title={n} onClick={() => onChange(n)}
          className={`grid h-11 place-items-center rounded-xl border transition ${value === n ? "border-brand bg-soft text-brand ring-2 ring-primary/20" : "border-line text-muted hover:border-brand/50"}`}>
          <Icon name={n} size={20} />
        </button>
      ))}
    </div>
  );
}
