import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      lerp: 0.075,
      autoRaf: false,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchor = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -84, duration: 1.2 });
      history.replaceState(null, "", id);
    };

    document.addEventListener("click", onAnchor);
    return () => {
      document.removeEventListener("click", onAnchor);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
