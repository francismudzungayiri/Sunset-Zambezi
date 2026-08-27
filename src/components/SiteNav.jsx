import { useEffect, useState } from 'react';
import { brand, nav } from '@/content/site.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { useLockBodyScroll, useScrolledPast } from '@/hooks/index.js';
import './SiteNav.css';

/**
 * Transparent over the hero, then a blurred dark ground once the page moves.
 * Below 62em the links collapse into a full-screen sheet.
 */
export default function SiteNav() {
  const scrolled = useScrolledPast(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useEnquiry();

  useLockBodyScroll(menuOpen);

  // Close the mobile sheet if the viewport grows past the breakpoint.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const mq = window.matchMedia('(min-width: 62em)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="nav__bar">
        <a className="nav__wordmark" href="#top" aria-label={`${brand.name} — home`}>
          {brand.wordmark}
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link label" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button type="button" className="nav__cta label" onClick={() => open()}>
            Plan Your Journey
          </button>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-sheet"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet. Hidden from assistive tech and keyboard when closed. */}
      <div className="nav__sheet" id="nav-sheet" hidden={!menuOpen}>
        <ul className="nav__sheet-list">
          {nav.map((item, i) => (
            <li key={item.href} style={{ '--i': i }}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav__sheet-cta label"
          onClick={() => {
            setMenuOpen(false);
            open();
          }}
        >
          Plan Your Journey
        </button>
      </div>
    </header>
  );
}
