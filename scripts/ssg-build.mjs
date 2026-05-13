/**
 * SSG Build Script
 * Pre-renders every route to a static HTML file so Google can crawl all pages.
 * Run after `vite build` via: node scripts/ssg-build.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist");
const distServerDir = path.resolve(root, "dist-server");

// ── Static routes ──────────────────────────────────────────────────────────
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/clinicians",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

// ── Dynamic routes ─────────────────────────────────────────────────────────
// Clinician IDs (keep in sync with src/data/clinicians.tsx)
const clinicianIds = ["1", "2", "3", "4", "5", "6"];

// Blog slugs — read from the MDX files at build time
const blogDir = path.resolve(root, "src/content/blog");
const blogSlugs = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.replace(/\.mdx$/, ""));

const allRoutes = [
  ...staticRoutes,
  ...clinicianIds.map((id) => `/clinicians/${id}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
];

// ── Per-route meta ─────────────────────────────────────────────────────────
const routeMeta = {
  "/": {
    title: "British Premier Psychiatry & Psychology Center | Mental Health UAE",
    description:
      "Premier mental health services in Dubai, UAE. Expert psychiatrists and psychologists providing comprehensive care for adults, children, and adolescents.",
    canonical: "https://britishpremier.ae/",
  },
  "/about": {
    title: "About Us | British Premier Psychiatry & Psychology Center",
    description:
      "Learn about British Premier Psychiatry & Psychology Center — our mission, values, and the expert team delivering evidence-based mental health care in Dubai.",
    canonical: "https://britishpremier.ae/about",
  },
  "/services": {
    title: "Our Services | British Premier Psychiatry & Psychology Center",
    description:
      "Comprehensive psychiatry and psychology services for adults, children, couples, schools, and corporates in Dubai, UAE.",
    canonical: "https://britishpremier.ae/services",
  },
  "/clinicians": {
    title: "Our Clinicians | British Premier Psychiatry & Psychology Center",
    description:
      "Meet our team of board-certified psychiatrists, licensed psychologists, and specialist therapists at British Premier in Dubai.",
    canonical: "https://britishpremier.ae/clinicians",
  },
  "/blog": {
    title: "Blog & Resources | British Premier Psychiatry & Psychology Center",
    description:
      "Mental health insights, research, and resources from the expert team at British Premier Psychiatry & Psychology Center in Dubai.",
    canonical: "https://britishpremier.ae/blog",
  },
  "/contact": {
    title: "Contact Us | British Premier Psychiatry & Psychology Center",
    description:
      "Book an appointment or get in touch with British Premier Psychiatry & Psychology Center in Dubai. Call +971 52 305 2680.",
    canonical: "https://britishpremier.ae/contact",
  },
  "/privacy": {
    title: "Privacy Policy | British Premier Psychiatry & Psychology Center",
    description: "Privacy Policy for British Premier Psychiatry & Psychology Center.",
    canonical: "https://britishpremier.ae/privacy",
  },
  "/terms": {
    title: "Terms of Service | British Premier Psychiatry & Psychology Center",
    description: "Terms of Service for British Premier Psychiatry & Psychology Center.",
    canonical: "https://britishpremier.ae/terms",
  },
  "/accessibility": {
    title: "Accessibility | British Premier Psychiatry & Psychology Center",
    description: "Accessibility statement for British Premier Psychiatry & Psychology Center.",
    canonical: "https://britishpremier.ae/accessibility",
  },
};

function getMetaForRoute(route) {
  if (routeMeta[route]) return routeMeta[route];
  // Dynamic clinician pages
  if (route.startsWith("/clinicians/")) {
    const id = route.split("/").pop();
    return {
      title: `Clinician Profile | British Premier Psychiatry & Psychology Center`,
      description: `View the profile of our specialist clinician at British Premier Psychiatry & Psychology Center in Dubai.`,
      canonical: `https://britishpremier.ae${route}`,
    };
  }
  // Dynamic blog pages
  if (route.startsWith("/blog/")) {
    const slug = route.split("/").pop();
    const title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      title: `${title} | British Premier Blog`,
      description: `Read our latest article: ${title}. Mental health insights from British Premier Psychiatry & Psychology Center.`,
      canonical: `https://britishpremier.ae${route}`,
    };
  }
  return {
    title: "British Premier Psychiatry & Psychology Center",
    description: "Premier mental health services in Dubai, UAE.",
    canonical: `https://britishpremier.ae${route}`,
  };
}

// ── Inject meta into HTML template ────────────────────────────────────────
function injectMeta(template, route) {
  const meta = getMetaForRoute(route);

  const metaTags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />`;

  // Replace the existing title and description, then inject the rest
  return template
    .replace(/<title>.*?<\/title>/, "")
    .replace(/<meta name="description"[^>]*>/, "")
    .replace("</head>", `${metaTags}\n  </head>`);
}

// ── Write static HTML files ────────────────────────────────────────────────
async function buildSSG() {
  console.log("🔨 Starting SSG build...\n");

  // Read the built index.html as the template
  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  let generated = 0;

  for (const route of allRoutes) {
    const meta = injectMeta(template, route);

    // Determine output path: "/" → dist/index.html, "/about" → dist/about/index.html
    let outPath;
    if (route === "/") {
      outPath = path.resolve(distDir, "index.html");
    } else {
      const dir = path.resolve(distDir, route.slice(1)); // strip leading /
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.resolve(dir, "index.html");
    }

    fs.writeFileSync(outPath, meta, "utf-8");
    console.log(`  ✅ ${route} → ${path.relative(root, outPath)}`);
    generated++;
  }

  console.log(`\n✨ SSG complete — ${generated} pages generated.\n`);

  // ── Generate sitemap.xml ─────────────────────────────────────────────────
  const today = new Date().toISOString().split("T")[0];

  const sitemapRoutes = allRoutes.filter(
    (r) => r !== "/privacy" && r !== "/terms" && r !== "/accessibility"
  );

  const urlEntries = sitemapRoutes
    .map((route) => {
      const loc = `https://britishpremier.ae${route === "/" ? "" : route}`;
      const priority =
        route === "/" ? "1.0" : route.split("/").length === 2 ? "0.8" : "0.6";
      const changefreq =
        route === "/" ? "weekly" : route.startsWith("/blog/") ? "monthly" : "monthly";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemap, "utf-8");
  console.log("🗺️  sitemap.xml generated at dist/sitemap.xml\n");

  // ── Generate robots.txt ──────────────────────────────────────────────────
  const robots = `User-agent: *
Allow: /

Sitemap: https://britishpremier.ae/sitemap.xml
`;
  fs.writeFileSync(path.resolve(distDir, "robots.txt"), robots, "utf-8");
  console.log("🤖 robots.txt generated at dist/robots.txt\n");
}

buildSSG().catch((err) => {
  console.error("SSG build failed:", err);
  process.exit(1);
});
