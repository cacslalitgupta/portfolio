import { useCallback, useEffect, useState } from "react";
import { Archive, Inbox, Mail, MailOpen, Phone, Trash2 } from "lucide-react";
import { api } from "../lib/api";
import { Confirm, PageTitle, useToast } from "./ui";

const TABS = ["all", "new", "read", "archived"];
const tone = { new: "bg-accent/15 text-acctext", read: "bg-soft text-brand", archived: "bg-line text-muted" };

export default function MessagesPanel({ onChange }) {
  const toast = useToast();
  const [items, setItems] = useState(null);
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const load = useCallback(async () => {
    try { setItems(await api.messages()); } catch (e) { toast(e.message, "err"); setItems([]); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  const setStatus = async (m, status) => {
    try {
      await api.setMessageStatus(m.id, status);
      setItems((l) => l.map((x) => (x.id === m.id ? { ...x, status } : x))); onChange?.();
    } catch (e) { toast(e.message, "err"); }
  };
  const expand = (m) => { setOpen(open === m.id ? null : m.id); if (m.status === "new") setStatus(m, "read"); };
  const remove = async () => {
    try {
      await api.deleteMessage(deleting.id);
      setItems((l) => l.filter((x) => x.id !== deleting.id)); toast("Message deleted"); setDeleting(null); onChange?.();
    } catch (e) { toast(e.message, "err"); }
  };

  const list = (items || []).filter((m) => tab === "all" || m.status === tab);
  const count = (t) => (items || []).filter((m) => t === "all" || m.status === t).length;

  return (
    <>
      <PageTitle title="Enquiries" text="Messages sent through your website’s contact form." />
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`btn shrink-0 capitalize ${tab === t ? "btn-primary" : "btn-ghost"}`}>{t} <span className="opacity-70">({count(t)})</span></button>
        ))}
      </div>

      {items === null ? <div className="card p-10 text-center text-muted">Loading…</div>
        : list.length === 0 ? <div className="card grid place-items-center gap-2 p-12 text-muted"><Inbox size={30} />No messages here.</div>
        : <div className="grid gap-3">
          {list.map((m) => {
            const isOpen = open === m.id;
            return (
              <div key={m.id} className={`card overflow-hidden ${m.status === "new" ? "border-accent/50" : ""}`}>
                <button className="flex w-full items-start gap-3 p-4 text-left" onClick={() => expand(m)}>
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft font-display font-bold text-brand">{m.name[0]}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2"><b>{m.name}</b><span className={`chip capitalize ${tone[m.status]}`}>{m.status}</span></span>
                    <span className="block truncate text-sm font-semibold">{m.subject || "(No subject)"}</span>
                    <span className={`block text-sm text-muted ${isOpen ? "" : "line-clamp-1"}`}>{isOpen ? "" : m.message}</span>
                  </span>
                  <time className="shrink-0 text-xs text-muted">{new Date(m.createdAt).toLocaleDateString()}</time>
                </button>
                {isOpen && (
                  <div className="border-t border-line bg-canvas/60 p-4 sm:pl-[68px]">
                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">{m.message}</p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                      <a className="flex items-center gap-1.5 hover:text-brand" href={`mailto:${m.email}`}><Mail size={15} />{m.email}</a>
                      {m.phone && <a className="flex items-center gap-1.5 hover:text-brand" href={`tel:${m.phone}`}><Phone size={15} />{m.phone}</a>}
                      <span>{new Date(m.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a className="btn btn-primary" href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || "Your enquiry")}`}><Mail size={16} /> Reply</a>
                      {m.status !== "new" && <button className="btn btn-ghost" onClick={() => setStatus(m, "new")}><MailOpen size={16} /> Mark unread</button>}
                      {m.status !== "archived" && <button className="btn btn-ghost" onClick={() => setStatus(m, "archived")}><Archive size={16} /> Archive</button>}
                      <button className="btn btn-danger" onClick={() => setDeleting(m)}><Trash2 size={16} /> Delete</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>}

      {deleting && <Confirm title="Delete message?" onClose={() => setDeleting(null)} onConfirm={remove}
        text={`The message from ${deleting.name} will be permanently deleted.`} />}
    </>
  );
}
