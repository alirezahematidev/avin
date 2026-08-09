import { useEffect } from 'react'

/** Fades sections in as they scroll into view. */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal, .sub-product, .decision')
    targets.forEach((el) => el.classList.add('reveal'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' },
    )
    targets.forEach((el) => io.observe(el))

    // safety net: never let anything stay permanently invisible
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'))
    }, 1800)

    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])
}
