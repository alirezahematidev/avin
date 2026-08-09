import Shot from './Shot'
import { shots } from '../assets'

export default function Chef() {
  return (
    <div className="sub-product">
      <span className="sub-flag" style={{ background: 'var(--chef)' }}>
        03 · CHEF
      </span>
      <h3 className="sub-title">Chef (Back-office / Operations Platform)</h3>
      <p className="sub-sub">
        The internal engine behind TAPSI Food — a multi-role operations platform serving call
        center/support, marketing, operations, and store management, built to cover anything the
        Merchant App and Customer App didn't.
      </p>
      <p style={{ fontSize: 14, color: 'var(--grey-l)', marginTop: 10, maxWidth: 780 }}>
        This case is intentionally lighter than the Hummers and Merchant App write-ups — it focuses on
        scope, one standout piece of work, and the story of how the platform grew and was later
        redesigned, rather than the full research framework.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Overview
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Chef is the internal back-office platform behind TAPSI Food — not a simple admin panel, but a
        multi-role operations platform serving very different internal teams: call center / support,
        marketing, operations, and store management. Anything not fully covered by the Merchant App or
        the Customer App had to be handleable here, so the platform could support both of those
        products end-to-end.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        How it came to be — from a simple start to a redesign
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Chef started as a simple, functional first version — built even before the Merchant App
        existed. Over time, support tooling, operations features, and other capabilities were added
        incrementally as new needs came up. Eventually that organic growth left the platform cluttered
        enough that the team made the call to redesign it.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Scope — a multi-role operations platform, not an admin panel
      </div>
      <ul className="alist">
        <li>
          <b>User (customer) management</b> — view customers and their information, tagged for quick
          recognition (loyal customer, poor payment history, first-time / new customer), so internal
          teams instantly understand who they're dealing with.
        </li>
        <li>
          <b>Store / restaurant management</b> — the same configuration tasks a store could do inside
          the Merchant App, also reachable from the back-office side — the same parallel path
          referenced in the Merchant App case.
        </li>
        <li>
          <b>Order management — a call-center toolkit</b> — view any customer's order, its history,
          and manually add products to an order when a customer calls in wanting items added by hand.
          Effectively a full call-center system built into the platform.
        </li>
        <li>
          <b>Support ticketing</b> — create and manage support tickets from the same panel.
        </li>
      </ul>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Access was role-based — each internal user saw only the surface relevant to their role.
      </p>

      <Shot
        shot={shots.chefDeliveryZones}
        alt="Chef vendor delivery-zone management — map-based radius editor, status, and zone list"
        style={{ marginTop: 20 }}
      />

      <div className="shot-stack" style={{ marginTop: 20 }}>
        <Shot
          shot={shots.chefOrderDetails}
          alt="Chef order details — items and delivery information with fraud/risk flags and courier tracking"
        />
        <Shot
          shot={shots.chefOrderCustomer}
          alt="Chef order details — customer, delivery, and item information with fraud/risk flags"
        />
      </div>

      <div className="decision">
        <h4>Standout work</h4>
        <h3>Marketing — Page Builder</h3>
        <p>
          A tool that let the marketing team build campaign pages themselves — choosing card types and
          defining what data each card should pull (e.g. "on this page, for business line X, only show
          products rated above Y"). It functioned as a form-builder / page-builder: marketing composed
          pages by configuring components and data rules, without needing engineering for each new
          campaign. Complex and long to build, but the piece of this platform I'm proudest of.
        </p>
        <p>
          <span className="tag tag-mine">my position</span>Whether a marketing user should be able to
          edit a component directly inside the Page Builder, in the moment of building a page. From a
          UX standpoint, keeping that ability right alongside the intent to act — without breaking the
          flow — was the right call.
        </p>
        <p>
          <span className="tag tag-lost">technical constraint won</span>In discussion with the Tech
          Lead, technical complexity made the call instead: component edits had to happen from a
          separate component table, not inline while building a page. I knew the ideal UX, and adapted
          the design to a real technical constraint rather than ignoring it.
        </p>
        <Shot
          shot={shots.chefPageBuilder}
          alt="Chef Page Builder — component composer, carousel/vendor card design, and display-condition rules"
          style={{ marginTop: 8 }}
        />
      </div>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Operational dashboard
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Order statistics and area-level health — e.g. identifying a zone currently experiencing a
        problem (traffic, weather, etc.) and needing to be temporarily turned off until resolved.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        A capability unique to Chef: staging seasonal features before the mobile app
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Beyond call-center tooling and store configuration mirrored from the Merchant App, one
        capability existed only in Chef: seasonal features (e.g. Ramadan, Nowruz campaigns) were
        designed and run on Chef first, before being implemented on the mobile app. If a seasonal
        feature shipped straight to the mobile app and a problem surfaced later, fixing it required a
        new app update — and convincing users to actually update is its own hard problem, since many
        users delay or skip updates entirely. Chef, being an internal web panel, let the team validate
        a feature's process and execution issues immediately, with no dependency on end-user
        install/update behavior — a low-risk staging environment for time-sensitive, higher-risk
        seasonal features before committing them to the mobile app.
      </p>

      <div className="section-eyebrow" style={{ marginTop: 40 }}>
        Cross-functional complexity &amp; challenges
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
        Chef connected to user management, staff management, order management, third-party services,
        the marketing team, and the support team — a genuinely wide internal surface, with a high
        volume of work across very different functional areas. Coordinating this scope meant working
        with multiple product owners simultaneously: the manager responsible for Merchant, the manager
        responsible for e-commerce (Customer App), and the manager responsible for back-office itself,
        each driving their own piece of scope. Because Chef is a management platform, it had to
        account for every case not already covered by the Merchant App or Customer App — anything not
        visible or handled in those two apps needed to exist here, with no design gaps, so the
        platform could fully support both of the other products.
      </p>

      <ol className="reflection">
        <li>
          An internal tool is still a product with users — call-center agents and ops staff, working
          under time pressure, deserve the same design rigor as a customer-facing screen.
        </li>
        <li>
          Staging risk in a low-cost environment first — using Chef to validate seasonal features
          before the mobile app turned a hard update-adoption problem into a non-issue.
        </li>
      </ol>
    </div>
  )
}
