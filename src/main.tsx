import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 🔹 GitHub Pages SPA redirect fix
const saved = sessionStorage.getItem('gh:redirect')
if (saved) {
  sessionStorage.removeItem('gh:redirect')
  history.replaceState(null, '', saved)
}

createRoot(document.getElementById("root")!).render(<App />)
