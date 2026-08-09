import Shot from './Shot'
import { shots } from '../assets'

export default function CustomerApp() {
  return (
    <div className="sub-product">
      <span className="sub-flag" style={{ background: 'var(--customer)' }}>
        02 · CUSTOMER APP
      </span>
      <h3 className="sub-title">Customer App (E-commerce Marketplace)</h3>
      <p className="sub-sub">
        The demand side of the ecosystem — customers ordering across very different business lines:
        restaurants, cafés, bakeries, butchers, and greengrocers, unified into one coherent shopping
        experience despite genuinely different underlying shopping behavior.
      </p>

      <div className="snap">
        <div className="cell">
          <span className="k">Problem</span>
          <span className="v">
            Very different business lines needed to feel like one coherent app, despite genuinely
            different shopping behavior underneath.
          </span>
        </div>
        <div className="cell">
          <span className="k">My role</span>
          <span className="v">
            One of three designers. Product strategy sat with the lead — my job was building the
            strongest evidence-based case inside a shared decision.
          </span>
        </div>
        <div className="cell">
          <span className="k">Outcome</span>
          <span className="v">
            Shaped core patterns still in use today; some recommendations were adopted, others
            consciously overridden by the business.
          </span>
        </div>
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Context
      </div>
      <ul className="alist">
        <li>
          Restaurant ordering, grocery shopping, and bakery/butcher purchases are structurally
          different behaviors — different browsing patterns, different basket sizes, different urgency
          — yet all had to live inside one app without feeling stitched together.
        </li>
        <li>
          Working as one of three designers on this product meant strategy sat with the lead designer;
          my contribution was building the strongest evidence-based case wherever research and a
          stakeholder's instinct disagreed — not making the final call alone.
        </li>
      </ul>

      <div className="ownership">
        <span className="ownership-flag">Full ownership</span>
        <h4>Ticketing — designed end-to-end, across all three products</h4>
        <p>
          Ticketing was mine from end to end: every flow, across all three surfaces of the ecosystem —
          the Customer App (commerce), the Merchant App, and the Chef back-office. Not one screen
          contributed to a shared flow — the entire system, across every role and every product it
          touched, was designed by me.
        </p>
        <Shot
          shot={shots.ticketingFlowMap}
          alt="Full ticketing flow map across the Customer App, Merchant App, and Chef back-office"
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Search — a Persian-specific insight
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Search followed the benchmark — fixed box, popular suggestions before typing, results after 3
        characters. The part that wasn't borrowed:{' '}
        <b>
          the Persian keyboard packs more characters into the same screen, so each key gets less touch
          space and typos go up.
        </b>{' '}
        A mistyped dish returning nothing is a lost order, which made fuzzy matching a requirement of
        the language, not a refinement.
      </p>
      <div className="shot-stack">
        <Shot shot={shots.customerSearch} alt="TAPSI Food search suggestions before typing and fuzzy matching for typos" />
      </div>

      <div className="shot-row">
        <Shot
          shot={shots.customerListingCards}
          alt="TAPSI Food listing cards across business lines — restaurant, cafe, and more"
        />
        <Shot
          shot={shots.customerAiSearch}
          alt="TAPSI Food AI-assisted descriptive search suggestion on a zero-result search"
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Trust across thousands of stores
      </div>
      <ul className="alist">
        <li>
          Delivery time shown as an estimate before payment, and store quality carried by ratings and
          reviews — managing expectations instead of risking a broken promise.
        </li>
        <li>
          Cancellation allowed only until the store starts preparing — the Merchant App philosophy
          from the other side: exceptions go to a human, not a unilateral cancel.
        </li>
      </ul>

      <div className="decision">
        <h4>Real disagreement</h4>
        <h3>The single active cart</h3>
        <p>
          <span className="tag tag-fixed">business rule</span>One cart per vendor was structurally
          fixed — a courier only ever collects from one store, so combining vendors was never
          possible.
        </p>
        <p>
          <span className="tag tag-mine">my position</span>The open question was whether a customer
          could hold several half-finished carts across stores. Based on the research I recommended
          no: once a cart exists the flow should carry the user to checkout, not accumulate abandoned
          carts. Instead of a link back to the menu, I designed an in-cart recommendation surface —
          desserts, "you might also like," new arrivals — to keep momentum forward.
        </p>
        <p>
          Counter-arguments: an optional "return to store" link, and multiple carts for price
          comparison. I argued{' '}
          <b>consistency across business lines mattered more than optimising each separately</b> and
          accepted one line performing slightly worse as the price. Looking back, restaurant and
          grocery ordering are different behaviours — today I'd test that per line rather than settle
          it philosophically.
        </p>
        <Shot
          shot={shots.customerCart}
          alt="TAPSI Food cart review — coupon selection, in-cart menu browsing, and note to restaurant/courier"
          style={{ marginTop: 8 }}
        />
      </div>

      <div className="decision">
        <h4>Lost this one</h4>
        <h3>Promo code placement</h3>
        <p>
          <span className="tag tag-lost">business won</span>Based on the research I recommended the
          discount-code field live in the cart, not checkout — standard practice that avoids
          last-minute surprises. Policy put it at checkout for a concrete reason: the delivery address
          is known there, so a discount can apply to the whole order, not items alone. Not UX versus
          opinion — UX versus a quantified revenue trade-off, which deliberately won.
        </p>
        <Shot
          shot={shots.customerCheckoutCoupon}
          alt="TAPSI Food discount code field placed at checkout, with add-coupon action"
          style={{ marginTop: 16 }}
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Growth — a gamified path across business lines
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Most customers stuck to one business line out of habit — a restaurant regular rarely tried
        groceries or a bakery. Rather than push cross-selling with banners, I designed a game-like
        journey: a path with locked milestones, badges, and small rewards that unlock as a customer
        orders from different business lines, invites friends, or completes streaks. The goal was to
        make discovering a new business line feel like progress, not an upsell.
      </p>
      <div className="shot-stack">
        <Shot
          shot={shots.customerGamification}
          alt="TAPSI Food gamified customer journey — milestone path, stage rewards, and profile badges/progress"
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Outcome
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        The patterns shaped here — fuzzy search, the single-cart model, trust signals across store
        types, the gamified path — remain core to how the app works today. Not every recommendation
        survived contact with the business, but the evidence-based case built for each one is what
        made the wins durable and the losses well-understood rather than arbitrary.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Reflection
      </div>
      <ol className="reflection">
        <li>
          Losing the promo-code argument was the right business call once I understood the full
          financial mechanics — a UX best practice is a strong default, not an absolute rule.
        </li>
        <li>
          Consistency vs. per-business-line optimization is a real trade-off, not a solved one — I'd
          test it with data per business line rather than deciding it philosophically up front.
        </li>
        <li>
          As one of three designers, the skill that mattered wasn't making the final call — it was
          building the strongest evidence-based case for the decisions that mattered, and staying
          useful whichever way they landed.
        </li>
      </ol>
    </div>
  )
}
