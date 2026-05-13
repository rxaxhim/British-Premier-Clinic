import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { TrackPageViews } from "./hooks/TrackPageViews";
import { routes } from "./routes";
import MaintenancePage from "./components/MaintenancePage";

// ⚠️ Set to false to bring the site back online
const MAINTENANCE_MODE = true;

const queryClient = new QueryClient();

const App = () => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <TrackPageViews />
        <Layout>
          <ScrollToTop />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
