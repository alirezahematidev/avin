type Props = {
  shot: { src: string; width: number; height: number }
  alt: string
  style?: React.CSSProperties
}

/** A full-bleed screenshot. Lazy-loaded — the page carries 21 of these. */
export default function Shot({ shot, alt, style }: Props) {
  return (
    <div className="shot plain-shot" style={style}>
      <img {...shot} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}
