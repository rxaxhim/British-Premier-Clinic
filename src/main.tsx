// main.tsx
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

// Use the same base as your repo (or pull from Vite's BASE_URL if you set it)
const BASENAME = "/British-Premier-Clinic"

// 🔹 GitHub Pages SPA redirect fix (preserve deep links on refresh)
const saved = sessionStorage.getItem("gh:redirect")
if (saved) {
  sessionStorage.removeItem("gh:redirect")
  const normalized = saved.startsWith("/") ? saved : `/${saved}`
  const corrected = normalized.startsWith(BASENAME)
    ? normalized
    : `${BASENAME}${normalized}`
  history.replaceState(null, "", corrected)
}

createRoot(document.getElementById("root")!).render(<App />)
