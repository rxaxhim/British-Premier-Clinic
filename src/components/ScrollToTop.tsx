// src/components/ScrollToTop.tsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// useLayoutEffect in the browser (unchanged behaviour); useEffect during the
// build-time pre-render, which avoids React's "useLayoutEffect on the server" warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useIsomorphicLayoutEffect(() => {
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
