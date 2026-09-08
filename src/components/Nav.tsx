import { Link, NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/hummers', label: 'Hummers' },
  { to: '/tapsifood', label: 'TAPSI Food' },
  { to: '/other-projects', label: 'Other Projects' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="nav-mark" to="/">
          <img className="wordmark" src="images/logos/wordmark.png" alt="Avin Abkhiz" />
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-cue">Product Design Portfolio · 2026</div>
      </div>
    </nav>
  )
}
