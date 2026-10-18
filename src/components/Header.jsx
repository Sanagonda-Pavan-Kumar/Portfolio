import { useState } from 'react';
import { navLinks } from '../data/portfolio.js';
import useScrollProgress from '../hooks/useScrollProgress.js';

export default function Header() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__progress" style={{ width: `${progress}%` }} />
      <a href="#top" className="brand">
        <span className="brand__name">Pavan Kumar</span>
        <span className="brand__sub">Sanagonda</span>
      </a>
      <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav className={`nav ${open ? 'nav--open' : ''}`} onClick={() => setOpen(false)}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
        ))}
        <a href="#contact" className="btn btn--gold btn--sm">Enquire</a>
      </nav>
    </header>
  );
}
