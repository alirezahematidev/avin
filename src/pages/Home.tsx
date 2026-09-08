import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Closing from '../components/Closing'

const CASES = [
  {
    to: '/hummers',
    logo: 'hummers.png',
    alt: 'Hummers logo',
    n: '01 · Fintech B2B',
    title: 'Hummers',
    sub: 'Sole designer · investment continued',
  },
  {
    to: '/tapsifood',
    logo: 'tapsifood.png',
    alt: 'TAPSI Food logo',
    n: '02 · Marketplace',
    title: 'TAPSI Food',
    sub: '3 products · thousands of stores',
  },
]

const OTHER_LOGOS = [
  { file: 'pichak.png', alt: 'Pichak logo' },
  { file: 'hamrah-aval.png', alt: 'Hamrah Aval logo' },
  { file: 'mark-blue-o.png', alt: 'Additional project logo' },
  { file: 'mark-zap.png', alt: 'Additional project logo' },
  { file: 'mark-petal.png', alt: 'Additional project logo' },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about">
        <div className="wrap">
          <div className="section-eyebrow">About</div>
          <div className="about-text" style={{ maxWidth: 760 }}>
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
        </div>
      </section>

      <section id="work" className="case-section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Selected Work</div>
            <h2 className="section-title">Companies &amp; case studies</h2>
            <p className="section-sub">
              A closer look at each place I've designed for — process, decisions, and outcomes.
            </p>
          </div>

          <div className="project-grid">
            {CASES.map((c) => (
              <Link className="project-card" to={c.to} key={c.to}>
                <span className="pc-arrow">→</span>
                <div className="pc-icon has-logo">
                  <img src={`images/logos/${c.logo}`} alt={c.alt} />
                </div>
                <span className="pc-n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.sub}</p>
              </Link>
            ))}

            <Link className="project-card is-placeholder project-card--wide" to="/other-projects">
              <span className="pc-status">Coming soon</span>
              <div className="pc-logos">
                {OTHER_LOGOS.map((l) => (
                  <span className="pc-logo-badge" key={l.file}>
                    <img src={`images/logos/${l.file}`} alt={l.alt} />
                  </span>
                ))}
              </div>
              <span className="pc-n">03</span>
              <h3>Other Projects</h3>
              <p>Additional work — in progress.</p>
            </Link>
          </div>
        </div>
      </section>

      <Closing full />
    </>
  )
}
