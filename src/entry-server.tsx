import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

export function render(url: string) {
  const queryClient = new QueryClient();

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Layout>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Layout>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  return { html };
}
