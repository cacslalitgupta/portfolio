// src/components/SEO.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_BY_PATH, FALLBACK_SEO } from "../lib/seoConfig";

const SITE_URL = "https://calalitgupta.in";

function setMetaName(name, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * <SEO /> with no props: reads config from seoConfig.js by current route.
 * <SEO title="…" description="…" /> overrides for one-off pages.
 */
export default function SEO({ title, description, canonicalPath }) {
  const { pathname } = useLocation();
  const cfg = SEO_BY_PATH[pathname] || FALLBACK_SEO;

  const finalTitle = title || cfg.title;
  const finalDesc = description || cfg.description;
  const canonical = SITE_URL + (canonicalPath || (pathname === "/" ? "/" : pathname));

  useEffect(() => {
    // 1. Title
    document.title = finalTitle;

    // 2. Description + OG + Twitter
    setMetaName("description", finalDesc);
    setMetaProperty("og:title", finalTitle);
    setMetaProperty("og:description", finalDesc);
    setMetaProperty("og:url", canonical);
    setMetaName("twitter:title", finalTitle);
    setMetaName("twitter:description", finalDesc);

    // 3. Canonical
    setCanonical(canonical);

    // 4. Debug (dev only — remove in production if noisy)
    if (import.meta.env.DEV) {
      console.log(`[SEO] ${pathname} → ${finalTitle}`);
    }
  }, [pathname, finalTitle, finalDesc, canonical]);

  return null;
}