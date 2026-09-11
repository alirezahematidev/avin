import GradientText from './GradientText'

const CHIPS = [
  'Mobile Apps',
  'Marketplace',
  'Delivery & Logistics',
  'Payments',
  'Operational UX',
  'Research & Behavioural Data',
]

// the page's own indigo → coral ramp, not the React Bits default purples
const NAME_COLORS = ['#2B2D75', '#4C4FE3', '#FF6A45']

export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="eyebrow">Senior Product Designer — Mobile &amp; Marketplace</div>
      <h1>
        Avin
        <GradientText className="hero-name" colors={NAME_COLORS} animationSpeed={9}>
          Abkhiz
        </GradientText>
      </h1>
      <p className="role">
        I design mobile products for marketplaces and the operations behind them — the app a customer
        orders in, the app a store runs its day on, and the platform that coordinates both.
      </p>
      <div className="tagline">
        Before I design a screen, I work out how the business makes money, where it loses time, and
        who gets blamed when something breaks. <b>The interface is the last decision, not the first.</b>
      </div>
      <div className="hero-proof">
        7 years in product design<i>·</i>3-product delivery marketplace<i>·</i>Native mobile
        <i>·</i>Courier &amp; dispatch
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
