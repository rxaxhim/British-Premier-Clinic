// src/components/ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    // If navigating to a hash, try to scroll to that element instead of top
    if (hash) {
      const id = hash.slice(1);
      const el =
        document.getElementById(id) ||
        document.querySelector(hash); // supports querySelector-able hashes
      if (el) {
        // wait a tick so layout is ready
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    // Otherwise, go to top (no animation to avoid mid-page flash)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key]);

  return null;
}
