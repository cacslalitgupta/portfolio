import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { buildVars } from "./palette";

const Ctx = createContext(null);
export const useSite = () => useContext(Ctx);

const systemQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Loads site data and owns the theme:
 *  - palette + default mode come from the database (Admin → Appearance)
 *  - each visitor can override light/dark with the toggle (remembered in their browser)
 *  - `setPreview` lets the admin see palette changes live before saving
 */
export function SiteProvider({ children }) {
  const [site, setSite] = useState(null);
  const [error, setError] = useState("");
  const [userMode, setUserMode] = useState(() => localStorage.getItem("ca_mode") || "");
  const [systemDark, setSystemDark] = useState(() => systemQuery().matches);
  const [preview, setPreview] = useState(null);

  const reload = useCallback(() => {
    setError("");
    return api.site().then(setSite).catch((e) => setError(e.message));
  }, []);
  useEffect(() => { reload(); }, [reload]);

  useEffect(() => {
    const mq = systemQuery();
    const on = (e) => setSystemDark(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const s = site?.settings;
  const primary = preview?.primary ?? s?.theme_primary ?? "#0b3558";
  const accent = preview?.accent ?? s?.theme_accent ?? "#b18a3b";
  const siteMode = preview?.mode ?? s?.theme_mode ?? "system";
  const mode = userMode || siteMode;
  const isDark = mode === "dark" || (mode === "system" && systemDark);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    const light = buildVars(primary, accent, false);
    const dark = buildVars(primary, accent, true);
    const vars = isDark ? dark : light;
    for (const k in vars) root.style.setProperty(k, vars[k]);
    localStorage.setItem("ca_vars", JSON.stringify({ light, dark }));
    localStorage.setItem("ca_site_mode", siteMode);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", `rgb(${vars["--primary"].split(" ").join(",")})`);
  }, [isDark, primary, accent, siteMode]);

  useEffect(() => {
    if (s?.firm_name) document.title = `${s.firm_name} — ${s.tagline || "Chartered Accountants"}`;
  }, [s?.firm_name, s?.tagline]);

  const setMode = (m) => { // "light" | "dark" | "system" | "" (follow the site default)
    setUserMode(m);
    if (m) localStorage.setItem("ca_mode", m); else localStorage.removeItem("ca_mode");
  };
  const toggle = () => setMode(isDark ? "light" : "dark");

  const value = useMemo(
    () => ({ site, error, reload, isDark, mode, userMode, setMode, toggle, setPreview }),
    [site, error, isDark, mode, userMode] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
