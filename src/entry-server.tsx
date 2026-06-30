import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppProviders, RoutedApp } from "./AppShell";
import { clinicians } from "./data/clinicians.js";

/**
 * Renders a route to an HTML string at build time so each page ships real,
 * crawlable content (not an empty shell). HelmetProvider is included so the
 * <Helmet> tags inside the clinician page don't throw during server render.
 */
export function render(url: string) {
  const html = renderToString(
    <HelmetProvider context={{}}>
      <AppProviders>
        <StaticRouter location={url}>
          <RoutedApp />
        </StaticRouter>
      </AppProviders>
    </HelmetProvider>
  );
  return { html };
}

// Slugs for the dynamic /clinicians/:url routes, taken straight from the data.
export const clinicianSlugs = clinicians.map((c) => c.url);
