import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    (window as any).gtag?.("config", "AW-18150370906", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}