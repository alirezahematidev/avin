const CASES = [
  {
    n: '01',
    href: '#hummers',
    letter: 'H',
    color: 'var(--hummers)',
    title: 'Hummers',
    sub: 'Fintech B2B · sole designer · investment continued',
  },
  {
    n: '02',
    href: '#tapsi',
    letter: 'T',
    color: 'var(--tapsi)',
    title: 'TAPSI Food',
    sub: 'Marketplace · 3 products · thousands of stores',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-eyebrow">About</div>
            <p>
              Eight years in, what still holds my attention isn't the screen — it's the system behind
              it. Financial rules, operational workflows, the unwritten protocols a team carries in
              its head. Design starts when I understand those well enough to argue about them.
            </p>
            <p>
              Two case studies: a B2B leasing platform built from zero with no local benchmark, and a
              three-product delivery ecosystem — merchant, back-office, marketplace.
            </p>
          </div>
          <nav className="mini-toc">
            {CASES.map((c) => (
              <div className="mini-toc-row" key={c.n}>
                <a href={c.href}>
                  <span className="n">{c.n}</span>
                  <span className="icon" style={{ background: c.color }}>
                    {c.letter}
                  </span>
                  <span className="t">
                    <b>{c.title}</b>
                    <small>{c.sub}</small>
                  </span>
                  <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
