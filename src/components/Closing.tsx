const SKILLS = [
  'Native Mobile App Design',
  'Complex Workflow Design',
  'Product Systems Thinking',
  'Maps & Geolocation UX',
  'Business-to-Experience Translation',
  'Operational UX',
  'Information Architecture',
  'Data-heavy Product Design',
  'Design Systems',
  'User Research & Behavioural Analytics',
  'Product Strategy & Collaboration',
]

const EDUCATION = [
  { degree: 'MBA', school: 'Kharazmi University', years: '2015 — 2018' },
  { degree: 'B.Sc Industrial Engineering', school: 'Kharazmi University', years: '2011 — 2015' },
]

/** `full` adds skills and education — the Home page's version. Case-study pages
 *  close with just the CTA and footer. */
export default function Closing({ full = false }: { full?: boolean }) {
  return (
    <section id="contact" className="closing">
      <div className="wrap">
        {full && (
          <>
            <div className="section-eyebrow">Skills</div>
            <div className="skills-cloud">
              {SKILLS.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <div className="section-eyebrow" style={{ marginTop: 64 }}>
              Education
            </div>
            <div className="edu-row">
              {EDUCATION.map((e) => (
                <div className="edu-item" key={e.degree}>
                  <b>{e.degree}</b>
                  <span>{e.school}</span>
                  <small>{e.years}</small>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="cta">
          <h2>Let's talk.</h2>
          <div className="cta-contact">
            <a href="mailto:avinabkhiz.design@gmail.com">avinabkhiz.design@gmail.com</a>
            <a href="tel:+989384152797">0938 415 2797</a>
          </div>
        </div>
      </div>
      <footer className="wrap">
        <div className="foot-row">
          <span>AVIN ABKHIZ — PORTFOLIO</span>
          <span>2026</span>
        </div>
      </footer>
    </section>
  )
}
