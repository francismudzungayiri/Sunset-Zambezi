import { contact } from '@/content/site.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { useScrolledPast } from '@/hooks/index.js';
import './MobileActionBar.css';

/**
 * Sticky conversion bar for small screens. Appears only after the hero, so it
 * never covers the first impression, and offers WhatsApp alongside the form -
 * international travellers frequently prefer it to email.
 */
export default function MobileActionBar() {
  const visible = useScrolledPast(600);
  const { open, isOpen } = useEnquiry();

  return (
    <div
      className={`action-bar ${visible && !isOpen ? 'is-visible' : ''}`}
      // Hidden from keyboard and assistive tech until it is actually on screen.
      aria-hidden={!visible || isOpen}
      inert={!visible || isOpen ? '' : undefined}
    >
      <button type="button" className="action-bar__primary label" onClick={() => open()}>
        Plan Your Journey
      </button>

      <a
        className="action-bar__whatsapp"
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">Message us on WhatsApp</span>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.03-.2-.31a8.16 8.16 0 0 1-1.25-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.26 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z"
          />
        </svg>
      </a>
    </div>
  );
}
