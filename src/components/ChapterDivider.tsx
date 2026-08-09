type Props = {
  eyebrow: string
  title: string
  sub: string
  color: string
  style?: React.CSSProperties
}

export default function ChapterDivider({ eyebrow, title, sub, color, style }: Props) {
  return (
    <div className="chapter-divider" style={{ background: color, ...style }}>
      <div className="cd-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p className="cd-sub">{sub}</p>
    </div>
  )
}
