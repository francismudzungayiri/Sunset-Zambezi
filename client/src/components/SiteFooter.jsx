import { brand, contact, footer } from '@/content/site.js';
import HorizonRule from '@/components/ui/HorizonRule.jsx';
import './SiteFooter.css';

const YEAR = 2026;

export default function SiteFooter() {
  return (
    <footer className="footer on-dark">
      <HorizonRule tone="dark" className="footer__rule" />

      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__wordmark">{brand.wordmark}</p>
            <p className="footer__tagline">{brand.tagline}</p>
          </div>

          {footer.columns.map((column) => (
            <nav className="footer__col" key={column.title} aria-label={column.title}>
              <h2 className="footer__col-title label">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__col">
            <h2 className="footer__col-title label">Contact</h2>
            <ul className="footer__contact">
              <li>
                <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener">
                  WhatsApp
                </a>
              </li>
              <li className="footer__place">{contact.place}</li>
            </ul>

            <ul className="footer__social">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer noopener">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <p>
            &copy; {YEAR} {brand.legalName}
          </p>
          <p className="footer__base-place">Kariba &bull; Zimbabwe</p>
          <p className="footer__credit">
            Photography via Unsplash, by the photographers credited in
            <code> src/lib/images.js</code>.
          </p>
        </div>
      </div>
    </footer>
  );
}
