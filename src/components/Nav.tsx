import GlassSurface from './GlassSurface'

export default function Nav() {
  return (
    <nav className="nav">
      <GlassSurface
        width="100%"
        height={62}
        borderRadius={0}
        blur={16}
        backgroundOpacity={0.85}
        saturation={1.1}
        distortion={false}
        className="nav-glass"
      >
        <div className="nav-inner">
          <div className="nav-mark">
            <span className="sq">AA</span> AVIN ABKHIZ
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#hummers">Hummers</a>
            <a href="#tapsi">TAPSI Food</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cue">Product Design Portfolio · 2026</div>
        </div>
      </GlassSurface>
    </nav>
  )
}
