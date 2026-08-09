const CHIPS = ['Fintech', 'Enterprise Platforms', 'Marketplace', 'Operational UX', 'B2B & B2C']

export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="eyebrow">Senior Product Designer</div>
      <h1>
        Avin
        <br />
        <span>Abkhiz</span>
      </h1>
      <p className="role">
        I design the systems companies actually run on — leasing platforms, marketplaces, back-office
        tools.
      </p>
      <div className="tagline">
        Before I design a screen, I work out how the business makes money, where it loses time, and
        who gets blamed when something breaks. <b>The interface is the last decision, not the first.</b>
      </div>
      <div className="hero-proof">
        8+ years<i>·</i>Fintech leasing platform<i>·</i>3-product delivery marketplace<i>·</i>B2B &amp;
        B2C
      </div>
      <div className="hero-bottom">
        <div className="contact-block">
          <a href="mailto:avinabkhiz.design@gmail.com">avinabkhiz.design@gmail.com</a>
          <a href="tel:+989384152797">0938 415 2797</a>
        </div>
        <div className="chip-row">
          {CHIPS.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
