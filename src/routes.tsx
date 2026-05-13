import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Clinicians from "./pages/Clinicians";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import ClinicianProfilePage from "./pages/ClinicianProfilePage";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/clinicians", element: <Clinicians /> },
  { path: "/clinicians/:id", element: <ClinicianProfilePage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy", element: <Index /> },
  { path: "/terms", element: <Index /> },
  { path: "/accessibility", element: <Index /> },
  { path: "*", element: <NotFound /> },
];
