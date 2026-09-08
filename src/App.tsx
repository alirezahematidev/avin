import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Hummers from './pages/Hummers'
import TapsiFood from './pages/TapsiFood'
import OtherProjects from './pages/OtherProjects'
import { useReveal } from './useReveal'

// each page tints its gradient frames and dashed placeholders with its own accent
const ACCENT: Record<string, string> = {
  '/hummers': 'var(--hummers-rgb)',
  '/tapsifood': 'var(--tapsi-rgb)',
  '/other-projects': 'var(--other-rgb)',
}

function Layout() {
  const { pathname } = useLocation()
  useReveal()

  useEffect(() => {
    document.body.style.setProperty('--accent-rgb', ACCENT[pathname] ?? 'var(--indigo-rgb)')
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hummers" element={<Hummers />} />
        <Route path="/tapsifood" element={<TapsiFood />} />
        <Route path="/other-projects" element={<OtherProjects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

// HashRouter, not BrowserRouter: the build is deployed as plain static files
// (Liara static / GitHub Pages), neither of which rewrites unknown paths to
// index.html — a real /hummers URL would 404 on refresh.
export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  )
}
