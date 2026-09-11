import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Closing from "../components/Closing";

const CASES = [
  {
    to: "/tapsifood",
    logo: "tapsifood.webp",
    alt: "TAPSI Food logo",
    n: "01 · Mobile Marketplace",
    title: "TAPSI Food",
    sub: "3 products · native mobile · thousands of stores",
  },
  {
    to: "/hummers",
    logo: "hummers.webp",
    alt: "Hummers logo",
    n: "02 · Fintech B2B",
    title: "Hummers",
    sub: "Sole designer · built from zero · investment continued",
  },
];

const OTHER_LOGOS = [
  { file: "pichak.webp", alt: "Pichak logo" },
  { file: "hamrah-aval.webp", alt: "Hamrah Aval logo" },
  { file: "mark-blue-o.webp", alt: "Additional project logo" },
  { file: "mark-zap.webp", alt: "Additional project logo" },
  { file: "mark-petal.webp", alt: "Additional project logo" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about">
        <div className="wrap">
          <div className="section-eyebrow">About</div>
          <div className="about-text" style={{ maxWidth: 760 }}>
            <p>
              What holds my attention isn't the screen — it's the system behind it. Delivery logistics, financial rules, the unwritten protocols a team carries in its head. Design
              starts when I understand those well enough to argue about them.
            </p>
            <p>
              Four products across two case studies: a three-product delivery ecosystem — a native merchant app, a customer marketplace, and the back-office coordinating both — and
              a B2B leasing platform built from zero with no local benchmark.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="case-section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Selected Work</div>
            <h2 className="section-title">Companies &amp; case studies</h2>
            <p className="section-sub">A closer look at each place I've designed for — process, decisions, and outcomes.</p>
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

            <div className="project-card is-placeholder project-card--wide">
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
            </div>
          </div>
        </div>
      </section>

      <Closing full />
    </>
  );
}
