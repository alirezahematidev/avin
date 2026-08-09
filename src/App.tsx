import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ChapterDivider from './components/ChapterDivider'
import Hummers from './components/Hummers'
import Tapsi from './components/Tapsi'
import Closing from './components/Closing'
import { useEffect } from 'react'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()

  // the browser's anchor jump happens before React renders, so redo it on mount
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <ChapterDivider
        eyebrow="01 · Selected Work"
        title="Hummers"
        sub="Fintech B2B leasing platform — case study starts below."
        color="var(--hummers)"
      />
      <Hummers />
      <Tapsi />
      <Closing />
    </>
  )
}
