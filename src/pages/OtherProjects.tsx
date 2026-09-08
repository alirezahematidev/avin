import Closing from '../components/Closing'
import { ShotEmpty, shotFallback } from '../components/Shot'

export default function OtherProjects() {
  return (
    <>


      <div className="chapter-divider" style={{ background: 'var(--other)' }}>
        <div className="cd-eyebrow">03 · Selected Work</div>
        <h2>Other Projects</h2>
        <p className="cd-sub">A round-up of smaller work — details coming soon.</p>
      </div>

      <section id="other-projects" className="case-section" style={{ paddingTop: '80px' }}>
       <div className="wrap">

        <div className="note todo"><b>Placeholder page.</b> This is a round-up of smaller projects that don't need a full case-study treatment. Duplicate the card block below for each project, and swap in a real title, description, and image once you have them.</div>

        <div className="case-head" style={{ marginTop: '40px' }}>
          <div className="case-icon" style={{ background: 'var(--other)' }}>O</div>
          <div>
            <div className="section-eyebrow">03 · Selected Work</div>
            <h2 className="section-title">Other Projects</h2>
          </div>
        </div>
        <p className="section-sub">[One or two sentences framing what kind of work lives on this page — smaller engagements, side projects, early-career work, etc.]</p>

        <div className="roundup-grid" style={{ marginTop: '56px' }}>

          <div className="roundup-card">
            <span className="rc-tag">Project 01</span>
            <h3>[Project name]</h3>
            <p>[Short description — what it was, your role, and the outcome. A sentence or two is enough here since this isn't a full case study.]</p>
            <div className="shot-stack">
              <figure className="shot">
                <img src="images/other-projects/01-project-one.png" alt="[Project name] — screenshot" loading="lazy" decoding="async" onError={shotFallback} />
                <ShotEmpty file="images/other-projects/01-project-one.png" />
                <figcaption className="caption">[Caption]</figcaption>
              </figure>
            </div>
          </div>

          <div className="roundup-card">
            <span className="rc-tag">Project 02</span>
            <h3>[Project name]</h3>
            <p>[Short description — what it was, your role, and the outcome.]</p>
            <div className="shot-stack">
              <figure className="shot">
                <img src="images/other-projects/02-project-two.png" alt="[Project name] — screenshot" loading="lazy" decoding="async" onError={shotFallback} />
                <ShotEmpty file="images/other-projects/02-project-two.png" />
                <figcaption className="caption">[Caption]</figcaption>
              </figure>
            </div>
          </div>

          <div className="roundup-card">
            <span className="rc-tag">Project 03</span>
            <h3>[Project name]</h3>
            <p>[Short description — what it was, your role, and the outcome.]</p>
            <div className="shot-stack">
              <figure className="shot">
                <img src="images/other-projects/03-project-three.png" alt="[Project name] — screenshot" loading="lazy" decoding="async" onError={shotFallback} />
                <ShotEmpty file="images/other-projects/03-project-three.png" />
                <figcaption className="caption">[Caption]</figcaption>
              </figure>
            </div>
          </div>

        </div>

       </div>
      </section>

      <Closing />
    </>
  )
}
