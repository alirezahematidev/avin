/** Desktop+mobile icon pair used for the Customer / Merchant nodes. */
function ScreenIcons({ x, y }: { x: number; y: number }) {
  return (
    <>
      <g transform={`translate(${x - 17},${y - 3.3}) scale(1.6)`}>
        <rect x="-9" y="-7" width="18" height="13" rx="1.3" fill="none" stroke="#fff" strokeWidth="1.7" />
        <line x1="-3" y1="7" x2="3" y2="7" stroke="#fff" strokeWidth="1.7" />
        <line x1="0" y1="4.5" x2="0" y2="7" stroke="#fff" strokeWidth="1.7" />
      </g>
      <g transform={`translate(${x + 17},${y}) scale(1.6)`}>
        <rect x="-4" y="-8" width="8" height="16" rx="2" fill="none" stroke="#fff" strokeWidth="1.7" />
        <line x1="-2" y1="5" x2="2" y2="5" stroke="#fff" strokeWidth="1.7" />
      </g>
    </>
  )
}

export default function EcosystemDiagram() {
  return (
    <svg
      viewBox="0 0 700 520"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 560, flex: '0 0 500px', display: 'block', marginLeft: 0 }}
      role="img"
      aria-label="TAPSI Food ecosystem: Chef internal operations, Customer App, and Merchant App around a shared marketplace"
    >
      <line x1="350" y1="110" x2="150" y2="410" stroke="var(--line)" strokeWidth="2" strokeDasharray="5 6" />
      <line x1="350" y1="110" x2="550" y2="410" stroke="var(--line)" strokeWidth="2" strokeDasharray="5 6" />
      <line x1="150" y1="410" x2="550" y2="410" stroke="var(--line)" strokeWidth="2" strokeDasharray="5 6" />

      <circle cx="350" cy="300" r="55" fill="var(--ph-bg)" stroke="var(--line)" strokeWidth="1.5" />
      <text x="350" y="294" textAnchor="middle" fontFamily="var(--mono)" fontSize="12" letterSpacing=".05em" fill="var(--grey)">
        SHARED
      </text>
      <text x="350" y="312" textAnchor="middle" fontFamily="var(--mono)" fontSize="12" letterSpacing=".05em" fill="var(--grey)">
        MARKETPLACE
      </text>

      {/* Chef (top) — desktop only */}
      <g>
        <text x="350" y="29" textAnchor="middle" fontFamily="var(--sans)" fontWeight="700" fontSize="17" fill="var(--ink)">
          Chef
        </text>
        <text x="350" y="47" textAnchor="middle" fontFamily="var(--sans)" fontSize="12" fill="var(--grey-l)">
          internal operations
        </text>
        <circle cx="350" cy="110" r="50" fill="var(--chef)" />
        <g transform="translate(350,110) scale(1.6)">
          <rect x="-12" y="-9" width="24" height="17" rx="1.6" fill="none" stroke="#fff" strokeWidth="1.8" />
          <line x1="-4" y1="9" x2="4" y2="9" stroke="#fff" strokeWidth="1.8" />
          <line x1="0" y1="6" x2="0" y2="9" stroke="#fff" strokeWidth="1.8" />
        </g>
      </g>

      {/* Customer App (bottom-left) */}
      <g>
        <circle cx="150" cy="410" r="50" fill="var(--customer)" />
        <ScreenIcons x={150} y={410} />
        <text x="150" y="483" textAnchor="middle" fontFamily="var(--sans)" fontWeight="700" fontSize="17" fill="var(--ink)">
          Customer App
        </text>
        <text x="150" y="501" textAnchor="middle" fontFamily="var(--sans)" fontSize="12" fill="var(--grey-l)">
          discovery &amp; ordering
        </text>
      </g>

      {/* Merchant App (bottom-right) */}
      <g>
        <circle cx="550" cy="410" r="50" fill="var(--merchant)" />
        <ScreenIcons x={550} y={410} />
        <text x="550" y="483" textAnchor="middle" fontFamily="var(--sans)" fontWeight="700" fontSize="17" fill="var(--ink)">
          Merchant App
        </text>
        <text x="550" y="501" textAnchor="middle" fontFamily="var(--sans)" fontSize="12" fill="var(--grey-l)">
          fulfillment &amp; store mgmt
        </text>
      </g>
    </svg>
  )
}
