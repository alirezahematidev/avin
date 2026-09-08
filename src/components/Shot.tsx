/** Marks a frame as empty when its image 404s — the manifest's drop-in-later workflow. */
export function shotFallback(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.closest('.shot')?.classList.add('shot--empty')
}

/** The dashed "not added yet" placeholder shown in place of a missing single image. */
export function ShotEmpty({ file }: { file: string }) {
  return (
    <div className="shot-empty">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <b>Image not added yet</b>
      <span>{file}</span>
    </div>
  )
}
