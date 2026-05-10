// vite.config.ts
import { defineConfig } from "file:///C:/Users/Jaan/Documents/YourURLS/British-Premier-Clinic/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Jaan/Documents/YourURLS/British-Premier-Clinic/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import mdx from "file:///C:/Users/Jaan/Documents/YourURLS/British-Premier-Clinic/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/Jaan/Documents/YourURLS/British-Premier-Clinic/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/Jaan/Documents/YourURLS/British-Premier-Clinic/node_modules/remark-mdx-frontmatter/dist/remark-mdx-frontmatter.js";
var __vite_injected_original_dirname = "C:\\Users\\Jaan\\Documents\\YourURLS\\British-Premier-Clinic";
var vite_config_default = defineConfig(() => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    mdx({
      // parse YAML front matter and expose it as `frontmatter` export
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }]
      ],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
      jsxImportSource: "react",
      development: false
    }),
    react()
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKYWFuXFxcXERvY3VtZW50c1xcXFxZb3VyVVJMU1xcXFxCcml0aXNoLVByZW1pZXItQ2xpbmljXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKYWFuXFxcXERvY3VtZW50c1xcXFxZb3VyVVJMU1xcXFxCcml0aXNoLVByZW1pZXItQ2xpbmljXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9KYWFuL0RvY3VtZW50cy9Zb3VyVVJMUy9Ccml0aXNoLVByZW1pZXItQ2xpbmljL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1keCBmcm9tIFwiQG1keC1qcy9yb2xsdXBcIjtcclxuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gXCJyZW1hcmstZnJvbnRtYXR0ZXJcIjtcclxuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gXCJyZW1hcmstbWR4LWZyb250bWF0dGVyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4gKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBtZHgoe1xyXG4gICAgICAvLyBwYXJzZSBZQU1MIGZyb250IG1hdHRlciBhbmQgZXhwb3NlIGl0IGFzIGBmcm9udG1hdHRlcmAgZXhwb3J0XHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtcclxuICAgICAgICByZW1hcmtGcm9udG1hdHRlcixcclxuICAgICAgICBbcmVtYXJrTWR4RnJvbnRtYXR0ZXIsIHsgbmFtZTogXCJmcm9udG1hdHRlclwiIH1dLFxyXG4gICAgICBdLFxyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXSxcclxuICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6IFwiQG1keC1qcy9yZWFjdFwiLFxyXG4gICAgICBqc3hJbXBvcnRTb3VyY2U6IFwicmVhY3RcIixcclxuICAgICAgZGV2ZWxvcG1lbnQ6IGZhbHNlLFxyXG4gICAgfSksXHJcbiAgICByZWFjdCgpLFxyXG4gIF0sXHJcbiAgYmFzZTogXCIvXCIsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVyxTQUFTLG9CQUFvQjtBQUNoWSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLDBCQUEwQjtBQUxqQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWEsT0FBTztBQUFBLEVBQ2pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxNQUVGLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLGVBQWUsQ0FBQztBQUFBLE1BQ2hCLHNCQUFzQjtBQUFBLE1BQ3RCLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
