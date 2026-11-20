// src/components/SEO.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSite } from "../lib/site";
import { SEO_BY_PATH, FALLBACK_SEO, SITE_URL } from "../lib/seoConfig";
import { updateSeo, upsertMeta, upsertLink, upsertJsonLd } from "../lib/seo";

/**
 * <SEO /> with no props: reads route config from seoConfig.js and syncs
 * title, meta tags, canonical URL, and route JSON-LD on every navigation.
 * Supports optional overrides: <SEO title="…" description="…" keywords="…" canonicalPath="…" faqs={[...]} />
 */
export default function SEO({ title, description, keywords, canonicalPath, faqs = [] }) {
  const { pathname } = useLocation();
  const { site } = useSite();

  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const cfg = SEO_BY_PATH[normalizedPath] || FALLBACK_SEO;

  const finalTitle = title || cfg.title;
  const finalDesc = description || cfg.description;
  const finalKeywords = keywords || cfg.keywords || FALLBACK_SEO.keywords;
  const canonical = SITE_URL + (canonicalPath || normalizedPath);

  useEffect(() => {
    // 1. Apply global firm/person/website graph and base tags from live site data
    updateSeo(site, normalizedPath);

    // 2. Apply route-specific title, description, keywords, OG/Twitter & canonical
    document.title = finalTitle;
    upsertMeta('meta[name="description"]', { name: "description" }, finalDesc.slice(0, 160));
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, finalKeywords);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, finalTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, finalDesc);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, finalTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, finalDesc);
    upsertLink("canonical", canonical);

    // 3. Inject route-specific BreadcrumbList + optional FAQPage schema
    const routeGraph = [];

    if (cfg.breadcrumbs?.length) {
      routeGraph.push({
        "@type": "BreadcrumbList",
        itemListElement: cfg.breadcrumbs.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: SITE_URL + item.path,
        })),
      });
    }

    const normalizedFaqs = Array.isArray(faqs)
      ? faqs
          .map((f) => ({
            q: (f?.question || f?.q || "").trim(),
            a: (f?.answer || f?.a || "").trim(),
          }))
          .filter((f) => f.q && f.a)
      : [];

    if (normalizedFaqs.length) {
      routeGraph.push({
        "@type": "FAQPage",
        mainEntity: normalizedFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    upsertJsonLd(
      "route-graph",
      routeGraph.length
        ? {
            "@context": "https://schema.org",
            "@graph": routeGraph,
          }
        : null
    );

    // 4. Dev-only debug log
    if (import.meta.env.DEV) {
      console.log(`[SEO] ${normalizedPath} → ${finalTitle}`);
    }
  }, [site, normalizedPath, finalTitle, finalDesc, finalKeywords, canonical, cfg.breadcrumbs, faqs]);

  return null;
}