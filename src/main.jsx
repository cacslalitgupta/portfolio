// src/main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lenis from "lenis";
import { useEffect } from "react";
import "./index.css";
import { SiteProvider, useSite } from "./lib/site";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Notfound from "./pages/Notfound";

function Splash({ error, retry }) {
  return (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      {error ? (
        <div className="card max-w-sm p-6">
          <h1 className="text-xl font-bold">Can’t load the site</h1>
          <p className="my-2 text-sm text-muted">{error}</p>
          <button className="btn btn-primary mt-2" onClick={retry}>
            Try again
          </button>
        </div>
      ) : (
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-brand"
          aria-label="Loading"
        />
      )}
    </div>
  );
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}

// Public section paths — all render <Home>, which scrolls to the right section.
const PUBLIC_PATHS = [
  "/",
  "/services",
  "/about",
  "/process",
  "/reviews",
  "/faq",
  "/contact",
  "/tools",
];

function App() {
  const { site, error, reload } = useSite();
  if (!site) return <Splash error={error} retry={reload} />;

  return (
    <>
      <SmoothScroll />
      <Routes>
        {PUBLIC_PATHS.map((p) => (
          <Route key={p} path={p} element={<Home site={site} />} />
        ))}

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