import type { CSSProperties } from "react";
import Closing from "../components/Closing";
import EcosystemDiagram from "../components/EcosystemDiagram";
import { ShotEmpty, shotFallback } from "../components/Shot";

export default function TapsiFood() {
  return (
    <>
      <div className="chapter-divider" style={{ background: "var(--tapsi)" }}>
        <div className="cd-eyebrow">01 · Selected Work</div>
        <h2>TAPSI Food</h2>
        <p className="cd-sub">Three dedicated apps covering every side of a delivery marketplace — customer, merchant, and internal operations.</p>
      </div>

      <section id="tapsi" className="case-section" style={{ paddingTop: "80px" }}>
        <div className="wrap">
          <div className="case-head">
            <div className="case-icon has-logo">
              <img src="images/logos/tapsifood.webp" alt="TAPSI Food logo" loading="lazy" decoding="async" />
            </div>
            <div>
              <div className="section-eyebrow">01 · Selected Work</div>
              <h2 className="section-title">TAPSI Food</h2>
            </div>
          </div>
          <p className="section-sub">
            One marketplace, three operating surfaces — a customer-facing app for discovery and ordering, a merchant app for fulfillment and store management, and an internal
            operations platform coordinating support, marketing, and logistics behind the scenes.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "48px" }}>
            <EcosystemDiagram />
          </div>

          <div className="sub-product" style={{ "--accent-rgb": "var(--merchant-rgb)" } as CSSProperties}>
            <span className="sub-flag" style={{ background: "var(--merchant)" }}>
              01 · MERCHANT APP
            </span>
            <h3 className="sub-title">Merchant App (Store side / Vendor)</h3>
            <p className="sub-sub">
              A single native mobile app built to run the full operations of six very different business types — restaurants, cafés, bakeries, pastry shops, butchers, and
              greengrocers — from one interface: order handling and fulfillment, catalog and inventory management, delivery-zone configuration, promotions, performance reporting,
              and customer communication. The operational backbone the rest of the marketplace depends on.
            </p>

            <div className="snap">
              <div className="cell">
                <span className="k">Problem</span>
                <span className="v">Stores needed to run their whole business — menu, orders, reporting — without calling operations for every task.</span>
              </div>
              <div className="cell">
                <span className="k">My role</span>
                <span className="v">Core Product Designer on this product, end to end.</span>
              </div>
              <div className="cell">
                <span className="k">Outcome</span>
                <span className="v">
                  Shipped before the Customer App — the infrastructure the marketplace depended on. A confirmation problem{" "}
                  <b>found in Clarity recordings, fixed, and verified against the same recordings post-launch.</b>
                </span>
              </div>
            </div>

            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img
                    src="images/tapsifood/merchant-01a-new-orders.webp"
                    alt="Merchant App new orders — incoming list with confirmation-deadline alerts"
                    loading="lazy"
                    decoding="async"
                  />
                  <img src="images/tapsifood/merchant-01b-confirm-modal.webp" alt="Merchant App order confirmation — setting prep time" loading="lazy" decoding="async" />
                  <img
                    src="images/tapsifood/merchant-01c-order-details.webp"
                    alt="Merchant App order detail — items, payment, and customer information"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/merchant-01d-orders-list.webp"
                    alt="Merchant App orders list — in-progress and delivered, with courier feedback"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/merchant-01e-cancel-modal.webp"
                    alt="Merchant App order cancellation — pick which current orders to cancel"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">
                  Merchant App order management — new orders, preparing, ready, and order detail with confirmation and prep-time adjustment
                </figcaption>
              </figure>
            </div>

            <div className="shot-stack shot-stack--pair">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/merchant-02a-new-product.webp" alt="Merchant App new product form" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/merchant-02b-upload-images.webp" alt="Merchant App product image upload" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">Merchant App menu builder — new product form and product image upload</figcaption>
              </figure>
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img
                    src="images/tapsifood/merchant-03a-new-discount.webp"
                    alt="Merchant App new discount — percentage, time window, and discounted-products selection"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/merchant-03b-products-list.webp"
                    alt="Merchant App product list — quick links to discounts, add-ons, and categories"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">Merchant App discount setup — percentage, time window, and discounted-products selection</figcaption>
              </figure>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "48px" }}>
              Context
            </div>
            <ul className="alist">
              <li>For a customer to order anything, the store needs its own app — menu, order handling, comments, reports. It's the prerequisite for the whole marketplace.</li>
              <li>
                Shipped <b style={{ color: "var(--ink)" }}>before</b> the Customer App, because the competitor already ran both sides and TAPSI needed the same foundation from day
                one.
              </li>
              <li>As the number of stores grew, operations could no longer run menus and tasks by hand — scale pushed hard toward self-service.</li>
            </ul>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Research
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              The main benchmark was deliberately the competitor's app — stores ran both platforms at once, so matching the journey cut switching friction. Interviews surfaced an
              honest finding: stores' core problem was TAPSI's low order volume, not the app itself — UX alone couldn't fix an adoption problem rooted in order volume.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Decisions
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Order management is the heart of the app. A new order moves to <b>Preparing</b> on confirmation, then auto-advances to <b>Ready for delivery</b> once prep time (set
              per menu item) elapses — which auto-requests a courier and lets support proactively flag delays.
            </p>

            <div className="decision">
              <h4>Deliberate constraint</h4>
              <h3>No direct order rejection</h3>
              <p>
                <span className="tag tag-fixed">e-commerce logic</span>Stores can't reject an order outright. Researching why the competitor used the same pattern surfaced the
                logic: on an e-commerce platform, cancellation should be the exception, not the default — customers expect fulfillment. Instead, stores pick a predefined reason,
                which routes to support to try a substitute first (e.g. swapping an out-of-stock item) before canceling.
              </p>
            </div>

            <div className="decision">
              <h4>Hardest design challenge</h4>
              <h3>System feedback after confirmation</h3>
              <p>
                <span className="tag tag-mine">found via Clarity</span>Session recordings showed stores searching for orders that had just moved from "New" to "Preparing" — they
                assumed the action had failed. I added clear confirmation feedback so the transition reads as success, not disappearance.
              </p>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Menu &amp; store management
            </div>
            <div className="fgrid">
              <div className="fcard">
                <h5>Variants without duplication</h5>
                <p>A pizza in two sizes shares title and image, but each variant carries its own price and stock.</p>
              </div>
              <div className="fcard">
                <h5>Add-ons via Bottom Sheet</h5>
                <p>Free or priced extras, needing the right UX and pricing structure underneath.</p>
              </div>
              <div className="fcard">
                <h5>Fast stock control</h5>
                <p>Marking an item out-of-stock takes one tap from the product list — no drilling into detail.</p>
              </div>
              <div className="fcard">
                <h5>Customer comment management</h5>
                <p>Stores reply to reviews directly, with built-in guidance on how to respond well — turning a public comment into a service touchpoint instead of a liability.</p>
              </div>
              <div className="fcard">
                <h5>Delivery zone &amp; radius control</h5>
                <p>A store sets its own delivery polygon and per-zone delivery fee, rather than inheriting one radius rule for every business type.</p>
              </div>
            </div>
            <p style={{ fontSize: "14.5px", color: "var(--grey)", marginTop: "4px" }}>
              Prep time set per product is the same value that auto-advances order status — one menu decision that removed a manual step from order handling.
            </p>

            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip filmstrip--match">
                  <img
                    src="images/tapsifood/merchant-04a-overview.webp"
                    alt="Merchant App dashboard — overview tab with best-selling products and customer feedback"
                    loading="lazy"
                    decoding="async"
                  />
                  <img src="images/tapsifood/merchant-04b-dashboard.webp" alt="Merchant App dashboard — sales report and operational KPIs" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/merchant-04c-order-count.webp" alt="Merchant App dashboard — order-count breakdown by status" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">Merchant App dashboard — sales overview, best-selling products, operational KPIs, and order-count breakdown</figcaption>
              </figure>
            </div>

            <div className="shot-stack shot-stack--pair">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/merchant-05a-zone-map.webp" alt="Merchant App delivery zone — map-based zone editor" loading="lazy" decoding="async" />
                  <img
                    src="images/tapsifood/merchant-05b-zone-settings.webp"
                    alt="Merchant App delivery zone — per-zone delivery fee and time settings"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">Merchant App delivery zone management — map-based zone editor and per-zone delivery settings</figcaption>
              </figure>
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/merchant-06a-comment-ratings.webp" alt="Merchant App customer comments — ratings and reviews list" loading="lazy" decoding="async" />
                  <img
                    src="images/tapsifood/merchant-06b-comment-reply.webp"
                    alt="Merchant App customer comments — reply to a review with built-in guidance"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">Merchant App customer comment management — ratings, reviews, and reply workflow with guidance</figcaption>
              </figure>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Discounts &amp; coupons
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Stores set their own percentage discount, an active time window, and which products it applies to — a self-serve promotion tool that previously required a request to
              operations, now live the moment a store configures it.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Reports — two levels of the same data
            </div>
            <div className="fgrid">
              <div className="fcard">
                <h5>Daily operational view</h5>
                <p>Today's orders, revenue, and cancellations — what a store owner checks between shifts to know if the day is on track.</p>
              </div>
              <div className="fcard">
                <h5>Historical performance view</h5>
                <p>Trends over weeks and months, surfaced for slower, less frequent decisions like menu pricing or staffing.</p>
              </div>
              <div className="fcard">
                <h5>One data model, two audiences</h5>
                <p>Both views draw from the same underlying data — the split is about decision cadence, not a second reporting system to maintain.</p>
              </div>
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px", marginTop: "16px" }}>
              Splitting by cadence rather than building one dense dashboard kept each view answerable in the time a store owner actually has for it — a glance between orders, or a
              slower look at the end of the week.
            </p>

            <div className="tradeoff">
              <h5>Trade-off</h5>
              <p>
                Across changing managers, the product absorbed more edge cases than most users needed — fully flexible shift scheduling looked good on paper but made the mobile UI
                expensive to build and use. The competitor's equivalent app stayed narrower in scope and shipped faster; I'd ship the standard case first here too, and route
                exceptions to a support process instead of building for them upfront.
              </p>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Validation
            </div>
            <ul className="alist">
              <li>Session recordings in Clarity surfaced the order-status confusion directly — not a hypothesis, a repeatable pattern across multiple stores.</li>
              <li>The confirmation-feedback fix was validated against the same recordings post-launch: the repeat-search behavior that flagged the original problem dropped.</li>
              <li>Delivery-zone and discount features were rolled out to a subset of stores first, with support tickets tracked as the adoption signal before wider release.</li>
              <li>
                Store-side feedback on the no-rejection flow was collected through support tickets, not a formal study — a smaller-scale check on a decision that carried real
                operational risk.
              </li>
            </ul>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Outcome
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Stores run their full order lifecycle — menu, fulfillment, discounts, reporting, customer replies — without calling operations, and the confirmation-feedback fix
              measurably reduced repeat-search behavior in Clarity. This app was the precondition for the entire marketplace: nothing else in the ecosystem, including the Customer
              App itself, could launch without it.
            </p>

            <ol className="reflection">
              <li>
                Simplicity is a design decision, not a default — every added capability costs design, build, training, and upkeep. Worth weighing before saying yes to the next one.
              </li>
              <li>
                Continuous research kept the product honest — interviews that surfaced "it's not the app, it's order volume" prevented months of UX work aimed at the wrong problem.
              </li>
              <li>Prioritizing by data over instinct — Clarity recordings, not opinions, decided which fixes shipped first.</li>
            </ol>
          </div>

          <div className="sub-product sub-product--customer" style={{ "--accent-rgb": "var(--customer-rgb)" } as CSSProperties}>
            <span className="sub-flag" style={{ background: "var(--customer)" }}>
              02 · CUSTOMER APP
            </span>
            <h3 className="sub-title">Customer App (E-commerce Marketplace)</h3>
            <p className="sub-sub">
              The demand side of the ecosystem — customers ordering across very different business lines: restaurants, cafés, bakeries, butchers, and greengrocers, unified into one
              coherent shopping experience despite genuinely different underlying shopping behavior.
            </p>

            <div className="snap">
              <div className="cell">
                <span className="k">Problem</span>
                <span className="v">Very different business lines needed to feel like one coherent app, despite genuinely different shopping behavior underneath.</span>
              </div>
              <div className="cell">
                <span className="k">My role</span>
                <span className="v">
                  One of three designers. Product strategy sat with the lead — my job was building the strongest evidence-based case inside a shared decision.
                </span>
              </div>
              <div className="cell">
                <span className="k">Outcome</span>
                <span className="v">Shaped core patterns still in use today; some recommendations were adopted, others consciously overridden by the business.</span>
              </div>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Context
            </div>
            <ul className="alist">
              <li>
                Restaurant ordering, grocery shopping, and bakery/butcher purchases are structurally different behaviors — different browsing patterns, different basket sizes,
                different urgency — yet all had to live inside one app without feeling stitched together.
              </li>
              <li>
                Working as one of three designers on this product meant strategy sat with the lead designer; my contribution was building the strongest evidence-based case wherever
                research and a stakeholder's instinct disagreed — not making the final call alone.
              </li>
            </ul>

            <div className="ownership">
              <span className="ownership-flag">Full ownership</span>
              <h4>Ticketing — designed end-to-end, across all three products</h4>
              <p>
                A ticket here isn't a support form — it's a shared object that three roles act on from three different products. A customer raises and tracks it in the Customer
                App, a store answers it in the Merchant App, and a support agent triages and resolves it in Chef. One state machine, three sets of affordances, three different
                levels of permission and urgency. Designing it meant defining the states and transitions first, then deciding what each role can see, do, and change at every one of
                them. Two decisions shaped the rest. Tickets open from the order rather than from a separate support section, so a ticket inherits its context instead of asking the
                customer to reconstruct it. And creation splits into two steps — type first, then reason and affected items — which scopes a ticket to specific line items instead
                of the whole order. That scoping is what lets refunds and returns resolve against the item that actually failed. On the Chef side, ticket history sits on the order
                detail beside fraud and risk flags, so an agent judges a claim against the order's full record, not the claim alone. Every flow, every state, every role, across all
                three products — designed by me.
              </p>
              <div className="shot-stack">
                <figure className="shot">
                  <img
                    src="images/tapsifood/customer-01-ticketing-flow.webp"
                    alt="Full ticketing flow map across the Customer App, Merchant App, and Chef back-office"
                    loading="lazy"
                    decoding="async"
                    onError={shotFallback}
                  />
                  <ShotEmpty file="images/tapsifood/customer-01-ticketing-flow.webp" />
                  <figcaption className="caption">Full ticketing flow map across the Customer App, Merchant App, and Chef back-office</figcaption>
                </figure>
              </div>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Search — a Persian-specific insight
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Search followed the benchmark — fixed box, popular suggestions before typing, results after 3 characters. The part that wasn't borrowed:{" "}
              <b>the Persian keyboard packs more characters into the same screen, so each key gets less touch space and typos go up.</b> A mistyped dish returning nothing is a lost
              order, which made fuzzy matching a requirement of the language, not a refinement.
            </p>
            <div className="shot-stack shot-stack--pair pair--uneven">
              <figure className="shot shot--wide">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/customer-02a-home.webp" alt="TAPSI Food home screen" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-02b-search-active.webp" alt="TAPSI Food search bar activated with quick-search chips" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-02c-search-landing.webp" alt="TAPSI Food search landing before typing" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">TAPSI Food home, the search bar activated with quick-search chips, and the landing state before typing</figcaption>
              </figure>
              <figure className="shot shot--narrow">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/customer-02d-autosuggest.webp" alt="TAPSI Food fuzzy-matching autosuggest while typing" loading="lazy" decoding="async" />
                  <img
                    src="images/tapsifood/customer-02e-substitute-suggestion.webp"
                    alt="TAPSI Food zero-result search offering a substitute keyword"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">TAPSI Food fuzzy-matching autosuggest while typing, and the zero-result fallback offering a substitute keyword</figcaption>
              </figure>
            </div>

            <div className="shot-stack shot-stack--pair">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img src="images/tapsifood/customer-03a-autosuggest-reuse.webp" alt="TAPSI Food search suggestions surfaced again mid-flow" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-03b-search-results.webp" alt="TAPSI Food search results across business-line tabs" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">TAPSI Food search resurfacing mid-flow, leading into results across business-line tabs</figcaption>
              </figure>
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img
                    src="images/tapsifood/customer-03c-ai-search-suggestion.webp"
                    alt="TAPSI Food AI-assisted descriptive search suggestion on a zero-result search"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/customer-03d-clarification-modal.webp"
                    alt="TAPSI Food search clarification modal for an ambiguous term"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">
                  TAPSI Food AI-assisted descriptive search suggestion on a zero-result search, and the clarification modal for an ambiguous term
                </figcaption>
              </figure>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Trust across thousands of stores
            </div>
            <ul className="alist">
              <li>
                Delivery time shown as an estimate before payment, and store quality carried by ratings and reviews — managing expectations instead of risking a broken promise.
              </li>
              <li>
                Cancellation allowed only until the store starts preparing — the Merchant App philosophy from the other side: exceptions go to a human, not a unilateral cancel.
              </li>
            </ul>

            <div className="decision">
              <h4>Real disagreement</h4>
              <h3>The single active cart</h3>
              <p>
                <span className="tag tag-fixed">business rule</span>One cart per vendor was structurally fixed — a courier only ever collects from one store, so combining vendors
                was never possible.
              </p>
              <p>
                <span className="tag tag-mine">my position</span>The open question was whether a customer could hold several half-finished carts across stores. Based on the
                research I recommended no: once a cart exists the flow should carry the user to checkout, not accumulate abandoned carts. Instead of a link back to the menu, I
                designed an in-cart recommendation surface — desserts, "you might also like," new arrivals — to keep momentum forward.
              </p>
              <p>
                Counter-arguments: an optional "return to store" link, and multiple carts for price comparison. I argued{" "}
                <b>consistency across business lines mattered more than optimising each separately</b> and accepted one line performing slightly worse as the price. Looking back,
                restaurant and grocery ordering are different behaviours — today I'd test that per line rather than settle it philosophically.
              </p>
              <div className="shot-stack" style={{ marginTop: "8px" }}>
                <figure className="shot">
                  <div className="shot-filmstrip">
                    <img src="images/tapsifood/customer-05a-out-of-stock.webp" alt="TAPSI Food cart — item the store has run out of" loading="lazy" decoding="async" />
                    <img src="images/tapsifood/customer-05b-note.webp" alt="TAPSI Food cart — note for courier or restaurant" loading="lazy" decoding="async" />
                    <img src="images/tapsifood/customer-05c-menu-sheet.webp" alt="TAPSI Food cart — in-cart menu browsing to add more items" loading="lazy" decoding="async" />
                    <img src="images/tapsifood/customer-05d-coupon.webp" alt="TAPSI Food cart — coupon selection" loading="lazy" decoding="async" />
                    <img src="images/tapsifood/customer-05e-full-summary.webp" alt="TAPSI Food cart — full order summary and payment breakdown" loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="caption">TAPSI Food cart review — coupon selection, in-cart menu browsing, and note to restaurant/courier</figcaption>
                </figure>
              </div>
            </div>

            <div className="decision">
              <h4>Lost this one</h4>
              <h3>Promo code placement</h3>
              <p>
                <span className="tag tag-lost">business won</span>Based on the research I recommended the discount-code field live in the cart, not checkout — standard practice
                that avoids last-minute surprises. Policy put it at checkout for a concrete reason: the delivery address is known there, so a discount can apply to the whole order,
                not items alone. Not UX versus opinion — UX versus a quantified revenue trade-off, which deliberately won.
              </p>
              <div className="shot-stack" style={{ marginTop: "16px" }}>
                <figure className="shot">
                  <div className="shot-filmstrip filmstrip--match">
                    <img
                      src="images/tapsifood/customer-06-checkout-discount.webp"
                      alt="TAPSI Food discount code field placed at checkout, with add-coupon action"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="caption">TAPSI Food discount code field placed at checkout, with add-coupon action</figcaption>
                </figure>
              </div>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Growth — a gamified path across business lines
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Most customers stuck to one business line out of habit — a restaurant regular rarely tried groceries or a bakery. Rather than push cross-selling with banners, I
              designed a game-like journey: a path with locked milestones, badges, and small rewards that unlock as a customer orders from different business lines, invites
              friends, or completes streaks. The goal was to make discovering a new business line feel like progress, not an upsell.
            </p>
            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip filmstrip--match">
                  <img src="images/tapsifood/customer-07a-journey-map.webp" alt="TAPSI Food gamified journey milestone path map" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-07b-stage-rewards.webp" alt="TAPSI Food gamified journey stage rewards detail" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-07c-profile-progress.webp" alt="TAPSI Food gamified journey profile badges and progress" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">TAPSI Food gamified customer journey — milestone path, stage rewards, and profile badges/progress</figcaption>
              </figure>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Group ordering — designed, not shipped
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              A feature I designed for the Customer App that never made it to production: an admin creates a shared group, invites members by phone number or straight from their
              contacts, and everyone adds their own items to one cart — with the per-person discount growing the more people join. The screens below cover creating and managing a
              group, the two ways to add members, the discount-tier explainer, and a group's shared cart open inside a store.
            </p>
            <div className="shot-stack shot-stack--group-ordering">
              <figure className="shot">
                <div className="shot-filmstrip filmstrip--match">
                  <img src="images/tapsifood/customer-08a-my-groups.webp" alt="TAPSI Food group ordering — my groups list" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-08b-create-empty.webp" alt="TAPSI Food group ordering — new group, before adding members" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-08c-add-by-phone.webp" alt="TAPSI Food group ordering — adding a member by phone number" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-08d-select-contacts.webp" alt="TAPSI Food group ordering — adding members from contacts" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/customer-08e-create-members.webp" alt="TAPSI Food group ordering — new group with members added" loading="lazy" decoding="async" />
                </div>
                <div className="shot-filmstrip filmstrip--match" style={{ marginTop: "8px" }}>
                  <img
                    src="images/tapsifood/customer-08f-discount-tiers.webp"
                    alt="TAPSI Food group ordering — discount-tier explainer by group size"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/customer-08g-group-cart.webp"
                    alt="TAPSI Food group ordering — a group's shared cart open inside a store"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">
                  Creating and managing a group, adding members by phone or from contacts, the discount-tier explainer, and a group's shared cart open inside a store
                </figcaption>
              </figure>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Outcome
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              The patterns shaped here — fuzzy search, the single-cart model, trust signals across store types, the gamified path — remain core to how the app works today. Not
              every recommendation survived contact with the business, but the evidence-based case built for each one is what made the wins durable and the losses well-understood
              rather than arbitrary.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Reflection
            </div>
            <ol className="reflection">
              <li>
                Losing the promo-code argument was the right business call once I understood the full financial mechanics — a UX best practice is a strong default, not an absolute
                rule.
              </li>
              <li>
                Consistency vs. per-business-line optimization is a real trade-off, not a solved one — I'd test it with data per business line rather than deciding it
                philosophically up front.
              </li>
              <li>
                As one of three designers, the skill that mattered wasn't making the final call — it was building the strongest evidence-based case for the decisions that mattered,
                and staying useful whichever way they landed.
              </li>
            </ol>
          </div>

          <div className="sub-product" style={{ "--accent-rgb": "var(--chef-rgb)" } as CSSProperties}>
            <span className="sub-flag" style={{ background: "var(--chef)" }}>
              03 · CHEF
            </span>
            <h3 className="sub-title">Chef (Back-office / Operations Platform)</h3>
            <p className="sub-sub">
              The internal engine behind TAPSI Food — a multi-role operations platform serving call center/support, marketing, operations, and store management, built to cover
              anything the Merchant App and Customer App didn't.
            </p>
            <p style={{ fontSize: "14px", color: "var(--grey-l)", marginTop: "10px", maxWidth: "780px" }}>
              A shorter read than the other two — scope, one piece of work I'm proud of, and how an organically-grown platform earned its redesign.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Overview
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Chef is the internal back-office platform behind TAPSI Food — not a simple admin panel, but a multi-role operations platform serving very different internal teams:
              call center / support, marketing, operations, and store management. Anything not fully covered by the Merchant App or the Customer App had to be handleable here, so
              the platform could support both of those products end-to-end.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              How it came to be — from a simple start to a redesign
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Chef started as a simple, functional first version — built even before the Merchant App existed. Over time, support tooling, operations features, and other
              capabilities were added incrementally as new needs came up. Eventually that organic growth left the platform cluttered enough that the team made the call to redesign
              it.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Scope — a multi-role operations platform, not an admin panel
            </div>
            <ul className="alist">
              <li>
                <b>User (customer) management</b> — view customers and their information, tagged for quick recognition (loyal customer, poor payment history, first-time / new
                customer), so internal teams instantly understand who they're dealing with.
              </li>
              <li>
                <b>Store / restaurant management</b> — the same configuration tasks a store could do inside the Merchant App, also reachable from the back-office side — the same
                parallel path referenced in the Merchant App case.
              </li>
              <li>
                <b>Order management — a call-center toolkit</b> — view any customer's order, its history, and manually add products to an order when a customer calls in wanting
                items added by hand. Effectively a full call-center system built into the platform.
              </li>
              <li>
                <b>Support ticketing</b> — create and manage support tickets from the same panel.
              </li>
            </ul>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>Access was role-based — each internal user saw only the surface relevant to their role.</p>

            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img
                    src="images/tapsifood/chef-01a-vendor-map.webp"
                    alt="Chef vendor detail page — delivery radius map and per-channel delivery settings"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="shot-filmstrip filmstrip--col">
                    <img src="images/tapsifood/chef-01b-zone-circles.webp" alt="Chef delivery zone editor — concentric aerial-distance rings" loading="lazy" decoding="async" />
                    <img
                      src="images/tapsifood/chef-01c-zone-polygons.webp"
                      alt="Chef delivery zone editor — custom polygon zones on the street map"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <figcaption className="caption">
                  Vendor detail page — delivery radius map, aerial-distance tiers, and per-channel delivery settings; and the delivery zone editor — concentric aerial-distance
                  rings, and custom polygon zones drawn directly on the street map
                </figcaption>
              </figure>
            </div>

            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip">
                  <img
                    src="images/tapsifood/chef-02a-order-items.webp"
                    alt="Chef order details — items tab, with cancelled and returned items broken out"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="images/tapsifood/chef-02b-order-delivery.webp"
                    alt="Chef order details — delivery tab, courier route map and status change log"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="caption">
                  Order details — items tab, with cancelled and returned items broken out separately, and the delivery tab with live courier route and a full delivery status change
                  log
                </figcaption>
              </figure>
            </div>

            <div className="shot-stack">
              <figure className="shot">
                <div className="shot-filmstrip filmstrip--chef2">
                  <img src="images/tapsifood/chef-03a-order-tickets.webp" alt="Chef order details — tickets tab, with fraud and risk flags" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/chef-03b-ticket-type.webp" alt="Chef new ticket — source and type selection" loading="lazy" decoding="async" />
                  <img src="images/tapsifood/chef-03c-ticket-reason.webp" alt="Chef new ticket — reason and affected line items" loading="lazy" decoding="async" />
                </div>
                <figcaption className="caption">
                  Order details surfacing fraud/risk flags above the full ticket history, and the two-step new-ticket flow — type, then reason and affected items — opened straight
                  from the order
                </figcaption>
              </figure>
            </div>

            <div className="decision">
              <h4>Standout work</h4>
              <h3>Marketing — Page Builder</h3>
              <p>
                A tool that let the marketing team build campaign pages themselves — choosing card types and defining what data each card should pull (e.g. "on this page, for
                business line X, only show products rated above Y"). It functioned as a form-builder / page-builder: marketing composed pages by configuring components and data
                rules, without needing engineering for each new campaign. Complex and long to build, but the piece of this platform I'm proudest of.
              </p>
              <p>
                <span className="tag tag-mine">my position</span>Whether a marketing user should be able to edit a component directly inside the Page Builder, in the moment of
                building a page. From a UX standpoint, keeping that ability right alongside the intent to act — without breaking the flow — was the right call.
              </p>
              <p>
                <span className="tag tag-lost">technical constraint won</span>In discussion with the Tech Lead, technical complexity made the call instead: component edits had to
                happen from a separate component table, not inline while building a page. I knew the ideal UX, and adapted the design to a real technical constraint rather than
                ignoring it.
              </p>
              <div className="shot-stack" style={{ marginTop: "8px" }}>
                <figure className="shot">
                  <div className="shot-filmstrip">
                    <div className="shot-filmstrip filmstrip--col">
                      <img src="images/tapsifood/chef-04a-component-builder.webp" alt="Chef Page Builder — composing a new carousel component" loading="lazy" decoding="async" />
                      <img src="images/tapsifood/chef-04b-components-list.webp" alt="Chef Page Builder — a page's component list" loading="lazy" decoding="async" />
                    </div>
                    <img src="images/tapsifood/chef-04c-page-form.webp" alt="Chef Page Builder — full page configuration and display rules" loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="caption">
                    Page Builder — composing a new carousel component from a vendor-card design library, managing it in the page's component list, and the full page configuration
                    form: display rules, list source and ranking, card design, and a raw Elasticsearch query
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Operational dashboard
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Order statistics and area-level health — e.g. identifying a zone currently experiencing a problem (traffic, weather, etc.) and needing to be temporarily turned off
              until resolved.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              A capability unique to Chef: staging seasonal features before the mobile app
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Beyond call-center tooling and store configuration mirrored from the Merchant App, one capability existed only in Chef: seasonal features (e.g. Ramadan, Nowruz
              campaigns) were designed and run on Chef first, before being implemented on the mobile app. If a seasonal feature shipped straight to the mobile app and a problem
              surfaced later, fixing it required a new app update — and convincing users to actually update is its own hard problem, since many users delay or skip updates
              entirely. Chef, being an internal web panel, let the team validate a feature's process and execution issues immediately, with no dependency on end-user install/update
              behavior — a low-risk staging environment for time-sensitive, higher-risk seasonal features before committing them to the mobile app.
            </p>

            <div className="section-eyebrow" style={{ marginTop: "40px" }}>
              Cross-functional complexity &amp; challenges
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.75", maxWidth: "780px" }}>
              Chef connected to user management, staff management, order management, third-party services, the marketing team, and the support team — a genuinely wide internal
              surface, with a high volume of work across very different functional areas. Coordinating this scope meant working with multiple product owners simultaneously: the
              manager responsible for Merchant, the manager responsible for e-commerce (Customer App), and the manager responsible for back-office itself, each driving their own
              piece of scope. Because Chef is a management platform, it had to account for every case not already covered by the Merchant App or Customer App — anything not visible
              or handled in those two apps needed to exist here, with no design gaps, so the platform could fully support both of the other products.
            </p>

            <ol className="reflection">
              <li>
                An internal tool is still a product with users — call-center agents and ops staff, working under time pressure, deserve the same design rigor as a customer-facing
                screen.
              </li>
              <li>
                Staging risk in a low-cost environment first — using Chef to validate seasonal features before the mobile app turned a hard update-adoption problem into a
                non-issue.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
