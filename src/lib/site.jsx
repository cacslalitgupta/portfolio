// src/lib/site.jsx
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { buildVars } from "./palette";
import { updateSeo } from "./seo";

const Ctx = createContext(null);
export const useSite = () => useContext(Ctx);

const systemQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

// Instant fallback content so bots and first-time visitors never hit an empty spinner
// while api.calalitgupta.in wakes up; live API data seamlessly hydrates right after.
const DEFAULT_SITE = {
  settings: {
    firm_name: "LG & Associates",
    tagline: "Chartered Accountants & CA Firm in Siliguri",
    hero_title: "LG & Associates — Chartered Accountants in Siliguri",
    hero_text:
      "Led by CA Lalit Gupta, our CA firm in Siliguri delivers dependable income tax, GST, audit, accounting and business advisory services for individuals and businesses across Siliguri and North Bengal.",
    about_title: "LG & Associates — Trusted Chartered Accountants in Siliguri",
    about_text:
      "Founded by CA Lalit Gupta, LG & Associates is a Siliguri CA firm located at Khalpara, serving traders, wholesalers, professionals, startups and corporates across Sevoke Road, Hill Cart Road, Pradhan Nagar, Matigara and North Bengal.",
    address: "Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005",
    phone: "+91-98320-93139",
    whatsapp: "+919832093139",
    email: "cacslalitgupta@gmail.com",
    working_hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    theme_primary: "#0b3558",
    theme_accent: "#b18a3b",
    theme_mode: "system",
  },
  services: [
    {
      id: "itr",
      title: "Income Tax & ITR",
      short_description: "Income tax return filing, tax planning, capital gains and assessment advisory in Siliguri.",
      published: true,
    },
    {
      id: "gst",
      title: "GST Services",
      short_description: "GST registration, GSTR-1/3B/9 filing, reconciliation, notices and GST compliance in Siliguri.",
      published: true,
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      short_description: "Statutory audit, tax audit under Section 44AB, internal audit and financial verification.",
      published: true,
    },
    {
      id: "accounting",
      title: "Accounting & Bookkeeping",
      short_description: "Structured bookkeeping, financial statement preparation and MIS reporting for businesses.",
      published: true,
    },
    {
      id: "tds",
      title: "TDS & TCS",
      short_description: "Quarterly TDS/TCS return filing, challan compliance and Form 16/16A issuance.",
      published: true,
    },
    {
      id: "roc",
      title: "Company & LLP Compliance",
      short_description: "Company incorporation, LLP registration, ROC annual filings and corporate compliance.",
      published: true,
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What CA services does LG & Associates offer in Siliguri?",
      answer:
        "LG & Associates (CA Lalit Gupta) provides income tax return filing, GST registration and compliance, statutory and tax audits, bookkeeping, TDS/TCS compliance, company/LLP registration and business advisory in Siliguri and across West Bengal.",
      published: true,
    },
    {
      id: "faq-2",
      question: "Where is CA Lalit Gupta's office located in Siliguri?",
      answer:
        "Our office is located at Nehru Road, Ward 8, Khalpara, Siliguri, West Bengal 734005, easily accessible from Sevoke Road, Hill Cart Road and SF Road.",
      published: true,
    },
  ],
};

export function SiteProvider({ children }) {
  const [site, setSite] = useState(DEFAULT_SITE);
  const [error, setError] = useState("");
  const [userMode, setUserMode] = useState(() => localStorage.getItem("ca_mode") || "");
  const [systemDark, setSystemDark] = useState(() => systemQuery().matches);
  const [preview, setPreview] = useState(null);

  const reload = useCallback(() => {
    setError("");
    return api
      .site()
      .then((data) => {
        if (data && data.settings) setSite(data);
      })
      .catch((e) => {
        // Keep DEFAULT_SITE rendered instead of breaking public pages on cold API starts
        if (window.location.pathname.startsWith("/admin")) setError(e.message);
      });
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

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
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", `rgb(${vars["--primary"].split(" ").join(",")})`);
  }, [isDark, primary, accent, siteMode]);

  useEffect(() => {
    if (site) updateSeo(site);
  }, [site]);

  const setMode = (m) => {
    setUserMode(m);
    if (m) localStorage.setItem("ca_mode", m);
    else localStorage.removeItem("ca_mode");
  };
  const toggle = () => setMode(isDark ? "light" : "dark");

  const value = useMemo(
    () => ({ site, error, reload, isDark, mode, userMode, setMode, toggle, setPreview }),
    [site, error, isDark, mode, userMode] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}