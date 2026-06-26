import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }],
      ],
      providerImportSource: "@mdx-js/react",
      jsxImportSource: "react",
      development: false,
    }),

    react(),
  ],

  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});