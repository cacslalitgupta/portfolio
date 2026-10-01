import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { CheckCircle2, TriangleAlert, X } from "lucide-react";

/* ---------- Toasts ---------- */
const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const id = useRef(0);
  const push = useCallback((message, type = "ok") => {
    const key = ++id.current;
    setItems((l) => [...l, { key, message, type }]);
    setTimeout(() => setItems((l) => l.filter((t) => t.key !== key)), 3600);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex flex-col items-center gap-2 px-4">
        {items.map((t) => (
          <div key={t.key} className={`pointer-events-auto flex max-w-md animate-pop items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg ${t.type === "err" ? "bg-red-600 text-white" : "bg-ink text-canvas"}`}>
            {t.type === "err" ? <TriangleAlert size={16} /> : <CheckCircle2 size={16} />}{t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

/* ---------- Modal ---------- */
export function Modal({ title, onClose, children, footer }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" className="card flex max-h-[92vh] w-full animate-pop flex-col rounded-b-none shadow-2xl sm:max-w-lg sm:rounded-b-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button className="btn btn-ghost btn-icon h-9 w-9" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>
        <div className="overflow-y-auto p-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-line px-5 py-4">{footer}</div>}
      </div>
    </div>
  );
}

/* ---------- Form bits ---------- */
export const Field = ({ label, hint, children }) => (
  <div><label className="label">{label}</label>{children}{hint && <p className="mt-1 text-xs text-muted">{hint}</p>}</div>
);

export function Switch({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className="flex items-center gap-2.5 text-sm font-semibold">
      <span className={`relative h-6 w-11 shrink-0 rounded-full transition ${checked ? "bg-primary" : "bg-line"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${checked ? "left-[22px]" : "left-0.5"}`} />
      </span>
      {label}
    </button>
  );
}

export function Confirm({ title, text, confirmLabel = "Delete", onConfirm, onClose, busy }) {
  return (
    <Modal title={title} onClose={onClose} footer={<>
      <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
      <button className="btn bg-red-600 text-white hover:bg-red-700" disabled={busy} onClick={onConfirm}>{busy ? "Working…" : confirmLabel}</button>
    </>}>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </Modal>
  );
}

export const PageTitle = ({ title, text, action }) => (
  <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
    <div><h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>{text && <p className="mt-1 text-sm text-muted">{text}</p>}</div>
    {action}
  </div>
);
