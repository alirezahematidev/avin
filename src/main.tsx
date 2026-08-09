import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// Tailwind first: React Bits components need its utilities, but the site's own
// CSS has to win wherever preflight and it disagree.
import './tailwind.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
