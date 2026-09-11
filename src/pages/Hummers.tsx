import Closing from '../components/Closing'

export default function Hummers() {
  return (
    <>


      <div className="chapter-divider" style={{ background: 'var(--hummers)' }}>
        <div className="cd-eyebrow">02 · Selected Work</div>
        <h2>Hummers</h2>
        <p className="cd-sub">Fintech B2B leasing platform — case study starts below.</p>
      </div>

      <section id="hummers" className="case-section" style={{ paddingTop: '80px' }}>
       <div className="wrap">
        <div className="case-head">
          <div className="case-icon has-logo"><img src="images/logos/hummers.webp" alt="Hummers logo" loading="lazy" decoding="async" /></div>
          <div>
            <div className="section-eyebrow">02 · Selected Work</div>
            <h2 className="section-title">Hummers</h2>
          </div>
        </div>
        <p className="section-sub">Turning a long, data-heavy leasing process — from request to contract to installments — into one guided, unified workflow.</p>
        <div className="case-meta">
          <span>ROLE — SOLE PRODUCT DESIGNER</span><span>2026 — PRESENT</span><span>FINTECH / ENTERPRISE B2B</span><span>B2B LEASING PLATFORM</span>
        </div>

        <div className="case-hero">
          <figure className="shot">
            <div className="shot-pair">
              <img src="images/hummers/01-applicant-info.webp" alt="Hummers applicant information step — identity lookup and credit assessment score" loading="lazy" decoding="async" />
              <img src="images/hummers/02-program-selection.webp" alt="Hummers program selection — leasing programs by bank, tenor, and loan ceiling" loading="lazy" decoding="async" />
            </div>
            <figcaption className="caption">Hummers request flow — applicant information, credit assessment, and program selection</figcaption>
          </figure>
        </div>

        <div className="snap">
          <div className="cell"><span className="k">Problem</span><span className="v">Manual, phone-based coordination produced no structured, live data — leaving leadership unable to see performance or scale the business, and requiring a file to be <b>100% complete</b> before it could even be registered.</span></div>
          <div className="cell"><span className="k">My role</span><span className="v">Sole designer — domain research, process architecture, end-to-end flows and UI.</span></div>
          <div className="cell"><span className="k">Outcome</span><span className="v">The unified workflow replaced the manual process it was built to fix, structured enough that the holding company <b>reviewed it and continued the investment</b> on the strength of what it saw.</span></div>
        </div>

        <div className="two-col" style={{ marginTop: '64px' }}>
          <aside className="spec-list">
            <div className="spec-row"><span className="k">Domain</span><span className="v">Fintech / Enterprise B2B</span></div>
            <div className="spec-row"><span className="k">Team</span><span className="v">Solo designer · CEO · PM · Tech Lead · Eng</span></div>
          </aside>
          <div>
            <div className="section-eyebrow">Overview</div>
            <p style={{ fontSize: '16.5px', lineHeight: '1.75' }}>I designed Hummers' B2B leasing platform end to end, as its only designer. The hard part was never the interface — it was learning the domain well enough to restructure the process behind it, then turning that structure into something an operations team could run without picking up the phone.</p>
          </div>
        </div>

        <div className="section-eyebrow" style={{ marginTop: '64px' }}>Business context</div>
        <ul className="alist">
          <li>Leasing already ran — on manual work, phone calls, disconnected panels and in-person steps.</li>
          <li>The goal: unify the lifecycle — contract, installments, accounting documents — on a platform that could also onboard other leasing companies later.</li>
        </ul>

        <div className="section-eyebrow" style={{ marginTop: '48px' }}>The problem, as operations actually lived it</div>
        <p style={{ fontSize: '16.5px', lineHeight: '1.75', maxWidth: '760px' }}>Nobody had filed a complaint. The process simply carried knowledge the system didn't: which documents a contract type required lived in an unwritten protocol, in people's heads. If you knew, the file went through. If you didn't, it came back.</p>
        <ul className="plist">
          <li>A request could only be registered in one completed pass — never built up gradually.</li>
          <li>Roles and access weren't precisely defined, creating quiet dependency on specific people.</li>
          <li>Reporting that combined the pieces into insight didn't exist.</li>
        </ul>

        <div className="section-eyebrow" style={{ marginTop: '48px' }}>Constraints I designed inside</div>
        <ul className="alist">
          <li><b style={{ color: 'var(--ink)' }}>No local benchmark.</b> Nothing mature to copy — every structural decision argued from the domain, so a wrong one was expensive.</li>
          <li><b style={{ color: 'var(--ink)' }}>One domain expert.</b> The CEO held most of the leasing knowledge, and was the primary stakeholder.</li>
          <li><b style={{ color: 'var(--ink)' }}>A real deadline.</b> The holding company had set a decision point on continued funding.</li>
          <li><b style={{ color: 'var(--ink)' }}>External systems.</b> Third-party dependencies; engineering defined what was buildable.</li>
        </ul>

        <div className="quote-block">
          <span className="quote-mark">"</span>
          <p>My first deliverable wasn't a UI. It was a complete understanding of the business domain.</p>
        </div>

        <div className="section-eyebrow" style={{ marginTop: '48px' }}>Research</div>
        <ul className="alist">
          <li>Interviews with the users who run leasing daily; recurring sessions with the CEO.</li>
          <li>Five interviews with finance and a review of real signed contracts.</li>
          <li>Engineering sessions on third-party limits; reference review of comparable fintech products.</li>
        </ul>
        <div className="note"><b>The finding that reframed the project:</b> "register only when the file is 100% complete" was a legacy system limitation, not a business rule. That turned the brief from <i>digitize the process</i> into <i>restructure it</i>, and set the hypothesis for everything after: <b>discrete, independently-savable steps</b>, with rules kept configurable.</div>

        <div className="section-eyebrow" style={{ marginTop: '56px' }}>Design decisions — the leasing request flow</div>
        <div className="stepper">
          <div className="step-pill">Applicant</div><div className="step-arrow">→</div>
          <div className="step-pill">Program</div><div className="step-arrow">→</div>
          <div className="step-pill">Goods</div><div className="step-arrow">→</div>
          <div className="step-pill">Loan &amp; Installments</div><div className="step-arrow">→</div>
          <div className="step-pill">Guarantees</div><div className="step-arrow">→</div>
          <div className="step-pill">Documents</div><div className="step-arrow">→</div>
          <div className="step-pill">Final Registration</div>
        </div>
        <ul className="alist">
          <li>All 7 steps save independently — a contract can progress across days, not one sitting.</li>
          <li>Required documents appear by contract type: the unwritten protocol became a system rule.</li>
          <li>Every contract shows which stage — and which person — it's waiting on.</li>
          <li>A separate finance flow structures accounting documents around debit/credit, with progressive disclosure and expandable ledger rows for density.</li>
        </ul>
        <div className="shot-stack">
          <figure className="shot">
            <div className="shot-pair">
              <img src="images/hummers/03-loan-terms-empty.webp" alt="Hummers loan and installment step — before terms are entered" loading="lazy" decoding="async" />
              <img src="images/hummers/04-loan-installment-schedule.webp" alt="Hummers loan and installment step — after entering loan terms, with the generated installment schedule" loading="lazy" decoding="async" />
            </div>
            <figcaption className="caption">Hummers loan and installment schedule — step 4, before and after entering loan terms</figcaption>
          </figure>
          <figure className="shot">
            <div className="shot-pair">
              <img src="images/hummers/05-guarantee-list.webp" alt="Hummers guarantee step — guarantor and collateral document list" loading="lazy" decoding="async" />
              <img src="images/hummers/06-guarantee-add-document.webp" alt="Hummers guarantee step — add-collateral-document dialog" loading="lazy" decoding="async" />
            </div>
            <figcaption className="caption">Hummers guarantee step — guarantor list and the add-collateral-document dialog</figcaption>
          </figure>
          <figure className="shot">
            <div className="shot-pair">
              <img src="images/hummers/07-contracts-report.webp" alt="Hummers contracts report — filterable list of contracts by status and referral" loading="lazy" decoding="async" />
              <img src="images/hummers/08-treasury.webp" alt="Hummers treasury — cheque lifecycle and ledger detail" loading="lazy" decoding="async" />
            </div>
            <figcaption className="caption">Hummers contracts report and treasury — cheque lifecycle, referrals, and ledger detail</figcaption>
          </figure>
        </div>

       </div>
      </section>

      <Closing />
    </>
  )
}
