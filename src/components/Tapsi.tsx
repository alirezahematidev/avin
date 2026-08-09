import ChapterDivider from './ChapterDivider'
import EcosystemDiagram from './EcosystemDiagram'
import MerchantApp from './MerchantApp'
import CustomerApp from './CustomerApp'
import Chef from './Chef'

export default function Tapsi() {
  return (
    <section id="tapsi" style={{ padding: '0 0 120px' }}>
      <ChapterDivider
        eyebrow="02 · Selected Work"
        title="TAPSI Food"
        sub="Three dedicated apps covering every side of a delivery marketplace — customer, merchant, and internal operations."
        color="var(--tapsi)"
        style={{ marginTop: 120 }}
      />
      <div className="wrap" style={{ marginTop: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 40,
            flexWrap: 'wrap',
            marginTop: 20,
          }}
        >
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 400,
              color: 'var(--body)',
              flex: '0 1 400px',
              margin: 0,
              marginRight: 'auto',
            }}
          >
            One marketplace, three operating surfaces — a customer-facing app for discovery and
            ordering, a merchant app for fulfillment and store management, and an internal operations
            platform coordinating support, marketing, and logistics behind the scenes.
          </p>
          <EcosystemDiagram />
        </div>

        <MerchantApp />
        <CustomerApp />
        <Chef />
      </div>
    </section>
  )
}
