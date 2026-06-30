/**
 * SSG Build Script
 * Pre-renders every route to a static HTML file WITH REAL CONTENT so search
 * engines get the full page, then the client hydrates.
 *
 * Pipeline (see package.json "build"):
 *   1. vite build                              -> dist/        (client bundle + index.html template)
 *   2. vite build --ssr src/entry-server.tsx   -> dist-server/ (the render function)
 *   3. node scripts/ssg-build.mjs              -> injects rendered HTML into each page
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { clinicians } from "../src/data/clinicians.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist");
const distServerDir = path.resolve(root, "dist-server");

// Default social-share image (a real file in /public). Swap for a 1200x630 image later.
const OG_DEFAULT = "https://britishpremier.ae/hero-bg.jpg";

// ── Real clinic data (from the site footer) used to build structured data ──
const CLINIC = {
  name: "British Premier Psychiatry & Psychology Center",
  url: "https://britishpremier.ae/",
  logo: "https://britishpremier.ae/logo.png",
  image: OG_DEFAULT,
  telephone: "+971 4 335 7477",
  email: "info@britishpremierpsychiatry.ae",
  streetAddress: "Kia Flagship Building, 1st Floor, Unit 110, Sheikh Zayed Road",
  addressLocality: "Dubai",
  addressCountry: "AE",
  languages: ["English", "Arabic", "Hindi", "Urdu"],
};

// JSON-LD <script> tag. We escape "<" so a value can never break out of the tag.
function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
}

// Site-wide clinic entity (helps every page establish who the business is).
function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC.name,
    url: CLINIC.url,
    logo: CLINIC.logo,
    image: CLINIC.image,
    telephone: CLINIC.telephone,
    email: CLINIC.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.streetAddress,
      addressLocality: CLINIC.addressLocality,
      addressCountry: CLINIC.addressCountry,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    availableLanguage: CLINIC.languages,
    medicalSpecialty: ["Psychiatric", "Psychology"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

// Per-clinician entity, built from the data so it always matches the page.
function physicianSchema(c) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: c.name,
    url: `https://britishpremier.ae/clinicians/${c.url}`,
    image: c.image
      ? c.image.startsWith("http")
        ? c.image
        : `https://britishpremier.ae${c.image}`
      : undefined,
    jobTitle: c.title,
    description: c.bio ? c.bio.slice(0, 300) : undefined,
    worksFor: { "@type": "MedicalClinic", name: CLINIC.name, url: CLINIC.url },
  };
}

// Which schema(s) to emit for a given route.
function buildSchema(route) {
  const scripts = [jsonLd(clinicSchema())];
  if (route.startsWith("/clinicians/") && route !== "/clinicians/") {
    const slug = route.split("/").pop();
    const c = clinicians.find((x) => x.url === slug || x.id === slug);
    if (c) scripts.push(jsonLd(physicianSchema(c)));
  }
  return scripts.join("\n    ");
}

// ── Load the server renderer (built by `vite build --ssr`) ─────────────────
function resolveServerEntry() {
  const direct = path.resolve(distServerDir, "entry-server.js");
  if (fs.existsSync(direct)) return direct;
  const match = fs
    .readdirSync(distServerDir)
    .find((f) => /^entry-server.*\.(js|mjs)$/.test(f));
  if (match) return path.resolve(distServerDir, match);
  throw new Error(
    "SSR entry not found in dist-server/. Did `vite build --ssr src/entry-server.tsx --outDir dist-server` run?"
  );
}

const { render } = await import(pathToFileURL(resolveServerEntry()).href);

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
// Clinician slugs come straight from the data, so generated paths always match
// the real /clinicians/:url routes.
const clinicianRoutes = clinicians.map((c) => `/clinicians/${c.url}`);

// Blog slugs — read from the MDX files at build time
const blogDir = path.resolve(root, "src/content/blog");
const blogSlugs = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.replace(/\.mdx$/, ""));

const allRoutes = [
  ...staticRoutes,
  ...clinicianRoutes,
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
      "Book an appointment or get in touch with British Premier Psychiatry & Psychology Center in Dubai. Call +971 50 273 9020.",
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

function absoluteImage(image) {
  if (!image) return OG_DEFAULT;
  return image.startsWith("http") ? image : `https://britishpremier.ae${image}`;
}

function getMetaForRoute(route) {
  if (routeMeta[route]) return { ...routeMeta[route], image: OG_DEFAULT };

  // Dynamic clinician pages
  if (route.startsWith("/clinicians/")) {
    const slug = route.split("/").pop();
    const clinician = clinicians.find((c) => c.url === slug || c.id === slug);
    return {
      title: clinician
        ? `${clinician.name} | British Premier Psychiatry`
        : "Clinician Profile | British Premier",
      description:
        clinician?.bio?.slice(0, 160) || "View our specialist clinician profile.",
      image: absoluteImage(clinician?.image),
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
      image: OG_DEFAULT,
      canonical: `https://britishpremier.ae${route}`,
    };
  }

  return {
    title: "British Premier Psychiatry & Psychology Center",
    description: "Premier mental health services in Dubai, UAE.",
    image: OG_DEFAULT,
    canonical: `https://britishpremier.ae${route}`,
  };
}

// Escape values placed inside HTML attributes / text so quotes & ampersands
// in a bio don't break the markup.
const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// ── Inject meta + rendered content into the template ───────────────────────
function buildPage(template, route, appHtml) {
  const meta = getMetaForRoute(route);
  const title = esc(meta.title);
  const desc = esc(meta.description);
  const url = esc(meta.canonical);
  const image = esc(meta.image);

  const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${image}" />`;

  // Strip the template's existing title/description/OG/Twitter tags first so we
  // never end up with duplicates, then inject the per-route set.
  const schemaTags = buildSchema(route);

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>/i, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "")
    .replace("</head>", `${metaTags}\n    ${schemaTags}\n  </head>`);

  // Inject the pre-rendered app markup into the root container.
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${appHtml}</div>`
  );

  return html;
}

// ── Write static HTML files ────────────────────────────────────────────────
async function buildSSG() {
  console.log("🔨 Starting SSG build (with real pre-rendered content)...\n");

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  let generated = 0;
  let rendered = 0;

  for (const route of allRoutes) {
    let appHtml = "";
    try {
      appHtml = render(route).html;
      rendered++;
    } catch (err) {
      console.warn(`  ⚠️  render failed for ${route} — writing shell only (${err.message})`);
    }

    const page = buildPage(template, route, appHtml);

    let outPath;
    if (route === "/") {
      outPath = path.resolve(distDir, "index.html");
    } else {
      const dir = path.resolve(distDir, route.slice(1));
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.resolve(dir, "index.html");
    }

    fs.writeFileSync(outPath, page, "utf-8");
    console.log(`  ${appHtml ? "✅" : "⚠️ "} ${route} → ${path.relative(root, outPath)}`);
    generated++;
  }

  console.log(`\n✨ SSG complete — ${generated} pages written, ${rendered} with full content.\n`);

  // ── sitemap.xml ────────────────────────────────────────────────────────────
  const today = new Date().toISOString().split("T")[0];
  const sitemapRoutes = allRoutes.filter(
    (r) => r !== "/privacy" && r !== "/terms" && r !== "/accessibility"
  );
  const urlEntries = sitemapRoutes
    .map((route) => {
      const loc = `https://britishpremier.ae${route === "/" ? "" : route}`;
      const priority =
        route === "/" ? "1.0" : route.split("/").length === 2 ? "0.8" : "0.6";
      const changefreq = route === "/" ? "weekly" : "monthly";
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
  console.log("🗺️  sitemap.xml generated.\n");

  // ── robots.txt ─────────────────────────────────────────────────────────────
  const robots = `User-agent: *
Allow: /

Sitemap: https://britishpremier.ae/sitemap.xml
`;
  fs.writeFileSync(path.resolve(distDir, "robots.txt"), robots, "utf-8");
  console.log("🤖 robots.txt generated.\n");
}

buildSSG().catch((err) => {
  console.error("SSG build failed:", err);
  process.exit(1);
});
