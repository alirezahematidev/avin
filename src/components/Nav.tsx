import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { to: "/tapsifood", label: "TAPSI Food" },
  { to: "/hummers", label: "Hummers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="nav-mark" to="/" onClick={() => setOpen(false)}>
          <img className="wordmark" src="images/logos/wordmark.png" alt="Avin Abkhiz" />
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-cue">Product Design Portfolio · 2026</div>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "nav-burger open" : "nav-burger"} />
        </button>
      </div>
      {open && (
        <div className="nav-drawer">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
