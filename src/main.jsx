// src/main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import "./index.css";
import { SiteProvider, useSite } from "./lib/site";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Reviews from "./pages/Reviews";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import Admin from "./pages/Admin";
import Notfound from "./pages/Notfound";

function Splash({ error, retry }) {
  return (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      {error ? (
        <div className="card max-w-sm p-6">
          <h1 className="text-xl font-bold">Can’t load the site</h1>
          <p className="my-2 text-sm text-muted">{error}</p>
          <button className="btn btn-primary mt-2" onClick={retry}>Try again</button>
        </div>
      ) : (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-brand" aria-label="Loading" />
      )}
    </div>
  );
}

/**
 * Single Lenis instance + React Router scroll reset.
 * Exposes the Lenis instance via window.__lenis so other components
 * (like anchor-link handlers) can use it.
 */
function SmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.075,
    });
    lenisRef.current = lenis;
    if (typeof window !== "undefined") window.__lenis = lenis;

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (typeof window !== "undefined") window.__lenis = null;
    };
  }, []);

  return null;
}

/**
 * Reset scroll position on every route change.
 * Uses Lenis if available, otherwise falls back to window.scrollTo.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip admin (admin uses its own scroll container)
    if (pathname.startsWith("/admin")) return;

    const lenis = typeof window !== "undefined" ? window.__lenis : null;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}

function App() {
  const { site, error, reload } = useSite();
  if (!site) return <Splash error={error} retry={reload} />;

  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home site={site} />} />
        <Route path="/about" element={<About site={site} />} />
        <Route path="/services" element={<Services site={site} />} />
        <Route path="/process" element={<Process site={site} />} />
        <Route path="/reviews" element={<Reviews site={site} />} />
        <Route path="/faq" element={<Faq site={site} />} />
        <Route path="/contact" element={<Contact site={site} />} />
        <Route path="/tools" element={<Tools site={site} />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/:tab" element={<Admin />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SiteProvider>
      <App />
    </SiteProvider>
  </BrowserRouter>
);