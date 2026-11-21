// src/components/SEO.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSite } from "../lib/site";
import { SEO_BY_PATH, FALLBACK_SEO, SITE_URL, routeGraph } from "../lib/seoConfig";
import { updateSeo, upsertMeta, upsertLink, removeLink, upsertJsonLd } from "../lib/seo";

/**
 * <SEO /> with no props: reads the route config from seoConfig.js and syncs title,
 * meta tags, canonical URL and route JSON-LD on every navigation.
 * Optional overrides: title, description, keywords, canonicalPath.
 * `noindex` is for pages such as the 404 page that must stay out of the index.
 */
export default function SEO({ title, description, keywords, canonicalPath, noindex = false }) {
  const { pathname } = useLocation();
  const { site } = useSite();

  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const known = SEO_BY_PATH[normalizedPath];
  const cfg = known || FALLBACK_SEO;

  const finalTitle = title || cfg.title;
  const finalDesc = description || cfg.description;
  const finalKeywords = keywords || cfg.keywords || FALLBACK_SEO.keywords;
  const canonical = SITE_URL + (canonicalPath || (known ? normalizedPath : "/"));

  useEffect(() => {
    // 1. Global firm / person / website graph and base tags from live site data
    updateSeo(site, normalizedPath);

    // 2. Route-specific title, description, keywords, OG / Twitter and canonical
    document.title = finalTitle;
    upsertMeta('meta[name="description"]', { name: "description" }, finalDesc.slice(0, 160));
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, finalKeywords);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, finalTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, finalDesc);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, finalTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, finalDesc);
    if (noindex || !known) removeLink("canonical");
    else upsertLink("canonical", canonical);

    if (noindex) {
      upsertMeta('meta[name="robots"]', { name: "robots" }, "noindex, follow");
    }

    // 3. Route-specific BreadcrumbList + Service / BlogPosting schema
    const graph = noindex || !known ? [] : routeGraph(normalizedPath, cfg);
    upsertJsonLd("route-graph", graph.length ? { "@context": "https://schema.org", "@graph": graph } : null);

    if (import.meta.env.DEV) console.log(`[SEO] ${normalizedPath} → ${finalTitle}`);
  }, [site, normalizedPath, finalTitle, finalDesc, finalKeywords, canonical, noindex, known, cfg]);

  return null;
}
