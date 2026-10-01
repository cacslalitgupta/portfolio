import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [["Services", "#services"], ["About", "#about"], ["Process", "#process"], ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"]];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition ${scrolled || open ? "border-line bg-canvas/85 backdrop-blur-xl" : "border-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-[72px]">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-onprimary overflow-hidden">
            {/* {(name || "R").trim()[0]} */} LG
                {/* <img
                  src="images/logo_lg.png"
                  alt=""
                  className="h-full w-full object-cover"
                /> */}
          </span>
          <span className="min-w-0 leading-tight">
            <b className="block truncate font-display text-base text-ink">{name}</b>
            <span className="hidden text-xs text-muted sm:block">Chartered Accountant</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([t, h]) => (
            <a key={t} href={h} className="text-sm font-semibold text-muted transition hover:text-brand">{t}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">Talk to me <ArrowRight size={16} /></a>
          <button className="btn btn-ghost btn-icon lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-x animate-pop pb-5 lg:hidden">
          <div className="card grid gap-1 p-2">
            {links.map(([t, h]) => (
              <a key={t} href={h} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-soft hover:text-brand">{t}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-1">Talk to me <ArrowRight size={16} /></a>
          </div>
        </div>
      )}
    </header>
  );
}