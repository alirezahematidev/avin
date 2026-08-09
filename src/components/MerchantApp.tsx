import Shot from './Shot'
import { shots } from '../assets'

const MENU_FEATURES = [
  {
    h: 'Variants without duplication',
    p: 'A pizza in two sizes shares title and image, but each variant carries its own price and stock.',
  },
  {
    h: 'Add-ons via Bottom Sheet',
    p: 'Free or priced extras, needing the right UX and pricing structure underneath.',
  },
  {
    h: 'Fast stock control',
    p: 'Marking an item out-of-stock takes one tap from the product list — no drilling into detail.',
  },
  {
    h: 'Customer comment management',
    p: 'Stores reply to reviews directly, with built-in guidance on how to respond well — turning a public comment into a service touchpoint instead of a liability.',
  },
  {
    h: 'Delivery zone & radius control',
    p: 'A store sets its own delivery polygon and per-zone delivery fee, rather than inheriting one radius rule for every business type.',
  },
]

const REPORT_FEATURES = [
  {
    h: 'Daily operational view',
    p: "Today's orders, revenue, and cancellations — what a store owner checks between shifts to know if the day is on track.",
  },
  {
    h: 'Historical performance view',
    p: 'Trends over weeks and months, surfaced for slower, less frequent decisions like menu pricing or staffing.',
  },
  {
    h: 'One data model, two audiences',
    p: 'Both views draw from the same underlying data — the split is about decision cadence, not a second reporting system to maintain.',
  },
]

export default function MerchantApp() {
  return (
    <div className="sub-product">
      <span className="sub-flag" style={{ background: 'var(--merchant)' }}>
        01 · MERCHANT APP
      </span>
      <h3 className="sub-title">Merchant App (Store side / Vendor)</h3>
      <p className="sub-sub">
        A single native mobile app built to run the full operations of six very different business
        types — restaurants, cafés, bakeries, pastry shops, butchers, and greengrocers — from one
        interface: order handling and fulfillment, catalog and inventory management, delivery-zone
        configuration, promotions, performance reporting, and customer communication. The operational
        backbone the rest of the marketplace depends on.
      </p>

      <div className="snap">
        <div className="cell">
          <span className="k">Problem</span>
          <span className="v">
            Stores needed to run their whole business — menu, orders, reporting — without calling
            operations for every task.
          </span>
        </div>
        <div className="cell">
          <span className="k">My role</span>
          <span className="v">Core Product Designer on this product, end to end.</span>
        </div>
        <div className="cell">
          <span className="k">Outcome</span>
          <span className="v">
            Shipped before the Customer App — it was the infrastructure the marketplace depended on.
          </span>
        </div>
      </div>

      <Shot
        shot={shots.merchantOrderManagement}
        alt="Merchant App order management — new orders, preparing, ready, and order detail with confirmation and prep-time adjustment"
      />

      <div className="shot-row" style={{ marginTop: 20 }}>
        <Shot shot={shots.merchantMenuBuilder} alt="Merchant App menu builder — new product form and product image upload" />
        <Shot
          shot={shots.merchantDiscounts}
          alt="Merchant App discount setup — percentage, time window, and discounted-products selection"
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 48 }}>
        Context
      </div>
      <ul className="alist">
        <li>
          For a customer to order anything, the store needs its own app — menu, order handling,
          comments, reports. It's the prerequisite for the whole marketplace.
        </li>
        <li>
          Shipped <b style={{ color: 'var(--ink)' }}>before</b> the Customer App, because the
          competitor already ran both sides and TAPSI needed the same foundation from day one.
        </li>
        <li>
          As the number of stores grew, operations could no longer run menus and tasks by hand — scale
          pushed hard toward self-service.
        </li>
      </ul>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Research
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        The main benchmark was deliberately the competitor's app — stores ran both platforms at once,
        so matching the journey cut switching friction. Interviews surfaced an honest finding: stores'
        core problem was TAPSI's low order volume, not the app itself — UX alone couldn't fix an
        adoption problem rooted in order volume.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Decisions
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Order management is the heart of the app. A new order moves to <b>Preparing</b> on
        confirmation, then auto-advances to <b>Ready for delivery</b> once prep time (set per menu
        item) elapses — which auto-requests a courier and lets support proactively flag delays.
      </p>

      <div className="decision">
        <h4>Deliberate constraint</h4>
        <h3>No direct order rejection</h3>
        <p>
          <span className="tag tag-fixed">e-commerce logic</span>Stores can't reject an order
          outright. Researching why the competitor used the same pattern surfaced the logic: on an
          e-commerce platform, cancellation should be the exception, not the default — customers
          expect fulfillment. Instead, stores pick a predefined reason, which routes to support to try
          a substitute first (e.g. swapping an out-of-stock item) before canceling.
        </p>
      </div>

      <div className="decision">
        <h4>Hardest design challenge</h4>
        <h3>System feedback after confirmation</h3>
        <p>
          <span className="tag tag-mine">found via Clarity</span>Session recordings showed stores
          searching for orders that had just moved from "New" to "Preparing" — they assumed the action
          had failed. I added clear confirmation feedback so the transition reads as success, not
          disappearance.
        </p>
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Menu &amp; store management
      </div>
      <div className="fgrid">
        {MENU_FEATURES.map((f) => (
          <div className="fcard" key={f.h}>
            <h5>{f.h}</h5>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '14.5px', color: 'var(--grey)', marginTop: 4 }}>
        Prep time set per product is the same value that auto-advances order status — one menu
        decision that removed a manual step from order handling.
      </p>
      <Shot
        shot={shots.merchantDashboard}
        alt="Merchant App dashboard — sales overview, best-selling products, operational KPIs, and order-count breakdown"
        style={{ marginTop: 20 }}
      />

      <div className="shot-row" style={{ marginTop: 20 }}>
        <Shot
          shot={shots.merchantDeliveryZones}
          alt="Merchant App delivery zone management — map-based zone editor and per-zone delivery settings"
        />
        <Shot
          shot={shots.merchantComments}
          alt="Merchant App customer comment management — ratings, reviews, and reply workflow with guidance"
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Discounts &amp; coupons
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Stores set their own percentage discount, an active time window, and which products it applies
        to — a self-serve promotion tool that previously required a request to operations, now live
        the moment a store configures it.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Reports — two levels of the same data
      </div>
      <div className="fgrid">
        {REPORT_FEATURES.map((f) => (
          <div className="fcard" key={f.h}>
            <h5>{f.h}</h5>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780, marginTop: 16 }}>
        Splitting by cadence rather than building one dense dashboard kept each view answerable in the
        time a store owner actually has for it — a glance between orders, or a slower look at the end
        of the week.
      </p>

      <div className="tradeoff">
        <h5>Trade-off</h5>
        <p>
          Across changing managers, the product absorbed more edge cases than most users needed —
          fully flexible shift scheduling looked good on paper but made the mobile UI expensive to
          build and use. The competitor's equivalent app stayed narrower in scope and shipped faster;
          I'd ship the standard case first here too, and route exceptions to a support process instead
          of building for them upfront.
        </p>
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Validation
      </div>
      <ul className="alist">
        <li>
          Session recordings in Clarity surfaced the order-status confusion directly — not a
          hypothesis, a repeatable pattern across multiple stores.
        </li>
        <li>
          The confirmation-feedback fix was validated against the same recordings post-launch: the
          repeat-search behavior that flagged the original problem dropped.
        </li>
        <li>
          Delivery-zone and discount features were rolled out to a subset of stores first, with
          support tickets tracked as the adoption signal before wider release.
        </li>
        <li>
          Store-side feedback on the no-rejection flow was collected through support tickets, not a
          formal study — a smaller-scale check on a decision that carried real operational risk.
        </li>
      </ul>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Outcome
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Stores run their full order lifecycle — menu, fulfillment, discounts, reporting, customer
        replies — without calling operations, and the confirmation-feedback fix measurably reduced
        repeat-search behavior in Clarity. This app was the precondition for the entire marketplace:
        nothing else in the ecosystem, including the Customer App itself, could launch without it.
      </p>

      <ol className="reflection">
        <li>
          Simplicity is a design decision, not a default — every added capability costs design, build,
          training, and upkeep. Worth weighing before saying yes to the next one.
        </li>
        <li>
          Continuous research kept the product honest — interviews that surfaced "it's not the app,
          it's order volume" prevented months of UX work aimed at the wrong problem.
        </li>
        <li>
          Prioritizing by data over instinct — Clarity recordings, not opinions, decided which fixes
          shipped first.
        </li>
      </ol>
    </div>
  )
}
