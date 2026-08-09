import { useEffect } from 'react'

/** Everything that fades in on scroll. Document order matters: a container listed
 *  here claims its contents, so anything inside it is left alone. */
const SELECTOR = [
  '.hero .role',
  '.hero .tagline',
  '.hero-proof',
  '.contact-block',
  '.chip',
  '.chapter-divider > *',
  '.section-eyebrow',
  '.section-title',
  '.section-sub',
  '.sub-flag',
  '.sub-title',
  '.sub-sub',
  '.case-meta span',
  '.mini-toc-row',
  '.snap .cell',
  '.spec-row',
  '.step-pill',
  '.alist li',
  '.plist li',
  '.reflection li',
  '.fcard',
  '.shot',
  '.quote-block',
  '.note',
  '.decision',
  '.tradeoff',
  '.ownership',
  '.skills-cloud span',
  '.edu-item',
  '.cta',
  'svg',
  'p',
].join(',')

/** The closing block is the page's footer — it lands as-is, no animation. */
const SKIP = '#contact'

const STAGGER_MS = 70
const MAX_DELAY_MS = 350

export function useReveal() {
  useEffect(() => {
    const targets: HTMLElement[] = []
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      // skip anything already covered by a revealing ancestor, or it stays
      // hidden behind its parent's own fade
      if (el.closest(SKIP)) return
      if (el.parentElement?.closest('.reveal')) return
      el.classList.add('reveal')
      targets.push(el)
    })

    // siblings cascade instead of arriving all at once
    const seen = new Map<Element, number>()
    for (const el of targets) {
      const parent = el.parentElement
      if (!parent) continue
      const i = seen.get(parent) ?? 0
      seen.set(parent, i + 1)
      if (i > 0) el.style.setProperty('--d', `${Math.min(i * STAGGER_MS, MAX_DELAY_MS)}ms`)
    }

    // no observer, no hidden content
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -60px 0px' },
    )
    targets.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
