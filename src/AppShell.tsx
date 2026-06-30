import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ReactNode } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { TrackPageViews } from "./hooks/TrackPageViews";
import { routes } from "./routes";

const queryClient = new QueryClient();

/**
 * The routed part of the app — everything that lives inside the router.
 * Shared so the client and the build-time pre-render produce identical markup.
 */
export const RoutedApp = () => (
  <>
    <TrackPageViews />
    <Layout>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Layout>
  </>
);

/**
 * Shared providers. `children` is the router: <BrowserRouter> on the client,
 * <StaticRouter> during the SSG pre-render. Keeping one source of truth here
 * is what keeps the static HTML and the hydrated client render in sync.
 */
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);
