# Image manifest

Every screenshot on the site lives inside a gradient-background frame (`.shot`). Frames are
stacked vertically down the page via `.shot-stack`. Within a single frame, related screens can
share one card: two side by side via `.shot-pair` (e.g. Hummers' before/after steps), or a
whole feature area as a row of 3–5 via `.shot-filmstrip` (e.g. TAPSI Food's Merchant App
sections). Both collapse to a plain vertical stack below 860px, where there's no room for
multiple columns. This list doubles as the order the images appear on each page.

Two `.shot` boxes can also sit side by side as a pair (`shot-stack shot-stack--pair`) — each
box its own filmstrip, own caption. A 50/50 split (equal frame counts on each side) uses the
plain `--pair` class; an uneven split (e.g. 3-up next to 2-up, as in TAPSI Food's Customer App
search section) adds `pair--uneven` plus `shot--wide`/`shot--narrow` on the two figures, which
gives the bigger box proportionally more room so both sides' frames land close in size. A
single unpaired filmstrip that needs to match another box's frame width exactly (rather than
stretching to fill its own row) gets `filmstrip--match` on the `.shot-filmstrip` div, which
pins every frame to a fixed width and centers the row — used for TAPSI Food's 3-up dashboard,
the single discount-code frame, and the gamified-journey box so their frames match the 5-up
reference box elsewhere on the page.

Some filmstrips mix real screenshots with frames that genuinely haven't been supplied yet at
usable resolution — a `.frame-missing` div sits inline among the real `<img>` tags, showing a
dashed placeholder (icon + "Not added yet" + filename) sized to match the other frames. Unlike
the old all-or-nothing `shotFallback`/`shot--empty` mechanism (still used for single-image
frames, see below), `.frame-missing` lets a filmstrip show some real frames and some
placeholders side by side without any of them affecting each other.

**Until a file exists at the exact path below, that frame shows a clean placeholder**
(dashed border + the expected filename) instead of a broken image — so you can drop images
in one at a time, in any order, and the site never looks broken in the meantime.

Just save each raw frame at the path listed, using that exact filename, and it will appear
automatically — no HTML editing required. PNG or JPG both work (the `<img>` tag doesn't care
about extension as long as the filename matches).

## Hummers (`hummers.html` → `images/hummers/`) — ✅ real images in place

Hummers is filled in with real screenshots. Each `.shot` frame on this page now holds **two**
related screens stacked inside one shared card via `.shot-pair` (e.g. a step before/after, or a
list next to the dialog it opens) — not the old one-image-per-frame layout.

| File | Shows |
|---|---|
| `01-applicant-info.png` | Applicant information step — identity lookup and credit score |
| `02-program-selection.png` | Program selection — leasing programs by bank, tenor, and loan ceiling |
| `03-loan-terms-empty.png` | Loan & installment step — before terms are entered |
| `04-loan-installment-schedule.png` | Loan & installment step — after entering terms, generated schedule |
| `05-guarantee-list.png` | Guarantee step — guarantor and collateral document list |
| `06-guarantee-add-document.png` | Guarantee step — add-collateral-document dialog |
| `07-contracts-report.png` | Contracts report — filterable list by status and referral |
| `08-treasury.png` | Treasury — cheque lifecycle and ledger detail |

## TAPSI Food (`tapsifood.html` → `images/tapsifood/`)

**Merchant App — ✅ real screenshots in place**

Each feature area is a `.shot-filmstrip` — several related screens in one row, read left to
right, sharing one placeholder card and caption. Collapses to a vertical stack below 860px.

| File | Shows |
|---|---|
| `merchant-01a-new-orders.png` … `merchant-01e-cancel-modal.png` (5) | Order management — new orders, confirm/prep-time, order detail, ongoing orders list, cancellation |
| `merchant-02a-new-product.png`, `merchant-02b-upload-images.png` (2) | Menu builder — new product form and product image upload |
| `merchant-03a-new-discount.png`, `merchant-03b-products-list.png` (2) | Discount setup — percentage, time window, and discounted-products selection |
| `merchant-04a-overview.png` … `merchant-04c-order-count.png` (3) | Dashboard — sales overview, best-selling products, operational KPIs, order-count breakdown |
| `merchant-05a-zone-map.png`, `merchant-05b-zone-settings.png` (2) | Delivery zone management — map-based zone editor and per-zone delivery settings |
| `merchant-06a-comment-ratings.png`, `merchant-06b-comment-reply.png` (2) | Customer comment management — ratings, reviews, and reply workflow with guidance |

**Customer App**

| File | Shows |
|---|---|
| `customer-01-ticketing-flow.png` | ⬜ **Still needed** — full ticketing flow map across the Customer App, Merchant App, and Chef back-office |
| `customer-07a-journey-map.png` … `customer-07c-profile-progress.png` (3) | ✅ Gamified journey — milestone path, stage rewards, profile badges/progress |

Group ordering (designed, never shipped) — one box, two `filmstrip--match` rows stacked (5 frames, then 2), all pinned to the 197px reference width:

| File | Shows |
|---|---|
| `customer-08a-my-groups.png` | ✅ My groups list |
| `customer-08b-create-empty.png` | ✅ New group, before adding members |
| `customer-08c-add-by-phone.png` | ✅ Adding a member by phone number |
| `customer-08d-select-contacts.png` | ✅ Adding members from contacts |
| `customer-08e-create-members.png` | ✅ New group with members added |
| `customer-08f-discount-tiers.png` | ✅ Discount-tier explainer by group size |
| `customer-08g-group-cart.png` | ✅ A group's shared cart open inside a store |

The write-up for this section is a placeholder for now — flagged inline on the page — pending a
fuller explanation from Avin.

Search section — two boxes shown side by side (`shot-stack shot-stack--pair pair--uneven`), a 3-up box next to a 2-up box:

| File | Shows |
|---|---|
| `customer-02a-home.png` | ✅ TAPSI Food home screen |
| `customer-02b-search-active.png` | ✅ The search bar activated with quick-search chips |
| `customer-02c-search-landing.png` | ✅ Search landing state before typing |
| `customer-02d-autosuggest.png`, `customer-02e-substitute-suggestion.png` (2) | ✅ Fuzzy-matching autosuggest while typing, and the zero-result fallback offering a substitute keyword |

Second search pair — two 2-up boxes side by side (`shot-stack shot-stack--pair`):

| File | Shows |
|---|---|
| `customer-03a-autosuggest-reuse.png`, `customer-03b-search-results.png` (2) | ✅ Search suggestions resurfacing mid-flow, leading into results across business-line tabs |
| `customer-03c-ai-search-suggestion.png`, `customer-03d-clarification-modal.png` (2) | ✅ AI-assisted descriptive search suggestion on a zero-result search, and the clarification modal for an ambiguous term |

Discount code — single frame, `filmstrip--match` so it matches the 197px reference width:

| File | Shows |
|---|---|
| `customer-06-checkout-discount.png` | ✅ Discount code field placed at checkout, with add-coupon action |

Cart review — 5-up filmstrip inside the "single active cart" decision card:

| File | Shows |
|---|---|
| `customer-05a-out-of-stock.png` … `customer-05e-full-summary.png` (5) | ✅ Out-of-stock item modal, note to courier/restaurant, in-cart menu browsing, coupon selection, full order summary |

**Chef** — ✅ real screenshots in place

Desktop back-office screenshots, much wider and taller than the mobile-app frames elsewhere on
this page. Every group below is ONE `.shot` box — no side-by-side `shot-stack--pair` boxes in
this section — stacked vertically one after another via plain `.shot-stack`. Multiple related
frames inside a box still sit in a `.shot-filmstrip` row together, keeping their own native
aspect ratio rather than being pinned to a fixed width. Three filmstrip modifiers support the
internal proportions: `filmstrip--col` stacks two related frames top-to-bottom as one flex item
inside a wider row (a `.shot-filmstrip` nested inside another gets the same flex-basis:0 sizing
as a plain `<img>` sibling, so the single frame and the stacked pair split the row evenly);
`filmstrip--chef2` gives three frames of very different native widths (a wide dashboard screen
next to two narrow modal dialogs) proportional flex instead of equal thirds, so the dialogs
aren't stretched past their natural modal width.

Delivery-zone management — one box: vendor page, and a `filmstrip--col` stack of the two zone-editor variants, side by side in the same row:

| File | Shows |
|---|---|
| `chef-01a-vendor-map.png` | Vendor detail page — delivery radius map, aerial-distance tiers, and per-channel delivery settings |
| `chef-01b-zone-circles.png` | Delivery zone editor — concentric aerial-distance rings |
| `chef-01c-zone-polygons.png` | Delivery zone editor — custom polygon zones drawn on the street map |

Order details — one box, a plain 50/50 filmstrip row:

| File | Shows |
|---|---|
| `chef-02a-order-items.png` | Order details — items tab, with cancelled and returned items broken out separately |
| `chef-02b-order-delivery.png` | Order details — delivery tab, live courier route and a full delivery status change log |

Order details + ticketing — one box, `filmstrip--chef2` (proportional widths):

| File | Shows |
|---|---|
| `chef-03a-order-tickets.png` | Order details — tickets tab, with fraud and risk flags |
| `chef-03b-ticket-type.png` | New ticket — source and type selection (step 1) |
| `chef-03c-ticket-reason.png` | New ticket — reason and affected line items (step 2) |

Page Builder (inside the "Standout work" decision card) — one box: a `filmstrip--col` stack of the component builder and component list, next to the full page-configuration form, side by side in the same row:

| File | Shows |
|---|---|
| `chef-04a-component-builder.png` | Page Builder — composing a new carousel component from a vendor-card design library |
| `chef-04b-components-list.png` | Page Builder — a page's component list |
| `chef-04c-page-form.png` | Page Builder — full page configuration: display rules, list source and ranking, card design, and a raw Elasticsearch query |

## Pichak and Hamrah Aval — removed

Both no longer get a full case-study page or a nav entry — `pichak.html`, `hamrah-aval.html`,
and their `images/pichak/` and `images/hamrah-aval/` folders were deleted. Their logos live on
instead, in the logo strip on the Home page's "Other Projects" card (see below).

## Other Projects (`other-projects.html` → `images/other-projects/`)

Placeholder slots for a 3-project round-up. Duplicate the `.roundup-card` block in the HTML
for more projects; each one needs its own numbered image file.

| File | Shows |
|---|---|
| `01-project-one.png` | Project 1 screenshot (placeholder) |
| `02-project-two.png` | Project 2 screenshot (placeholder) |
| `03-project-three.png` | Project 3 screenshot (placeholder) |

## Project logos (`images/logos/`) — ✅ in place

Each project's brand mark. Used in the `.case-icon` badge at the top of a case study, the
`.pc-icon` badge on the Home page project grid, and — for the two without a full case study —
the small `.pc-logo-badge` strip on the "Other Projects" card.

| File | Used for |
|---|---|
| `hummers.png` | Hummers — `.case-icon` + `.pc-icon` |
| `tapsifood.png` | TAPSI Food — `.case-icon` + `.pc-icon` |
| `pichak.png` | Pichak — logo strip on the "Other Projects" card only (no case study) |
| `hamrah-aval.png` | Hamrah Aval — logo strip on the "Other Projects" card only (no case study) |
| `mark-blue-o.png` | Additional project mark — logo strip on the "Other Projects" card |
| `mark-zap.png` | Additional project mark — logo strip on the "Other Projects" card |
| `mark-petal.png` | Additional project mark — logo strip on the "Other Projects" card |

Each logo file is already a complete rounded-square icon — its own gradient border baked in,
with fully transparent corners outside it. The containers apply no radius and no clipping of
their own; they just size the `<img>`. A container-side radius almost never lines up to the
pixel with the artwork's own curve, which cuts a visible notch out of the border — so the fix
is to not clip at all and let the artwork's own edge show as exported.

## Site branding / nav (`images/logos/icon-mark.png`, `images/logos/wordmark.png`) — ✅ in place

The nav bar's `.nav-mark` (top-left of every page) is a two-image lockup: `icon-mark.png` (the
standalone gradient "a" mark) followed by `wordmark.png` (the "AvinAbkhiz" logotype), sized so
their visual weight sits on one line with the nav menu, and vertically centered against it via
the nav bar's own `align-items:center`. Both are transparent-background PNGs — swap either file
in place to update the branding without touching the HTML.

---

### How the placeholder → real-image swap works

Each image tag looks like this:

```html
<figure class="shot">
  <img src="images/other-projects/01-project-one.png" alt="…" onerror="shotFallback(this)">
  <div class="shot-empty">…dashed placeholder, shown only if the image 404s…</div>
  <figcaption class="caption">…</figcaption>
</figure>
```

If the file at `src` doesn't exist, the browser fires `onerror`, which adds a `shot--empty`
class to the frame and swaps in the dashed placeholder. The moment a real file lands at that
exact path, the placeholder disappears and the real screenshot renders inside the gradient
frame — no code changes needed on your end, just add the file.
