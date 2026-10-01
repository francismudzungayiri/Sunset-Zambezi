import { useEffect, useId, useState } from 'react';
import { contact, enquiry } from '@/content/site.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { useFocusTrap, useLockBodyScroll } from '@/hooks/index.js';
import { Eyebrow } from '@/components/ui/primitives.jsx';
import './EnquiryPanel.css';

/**
 * Renders one field from the content definition. Inputs are underlined rather
 * than boxed, so the form reads like a concierge writing notes rather than a
 * lead-capture widget.
 */
function Field({ field, defaultValue }) {
  const id = useId();
  const describedBy = field.placeholder ? `${id}-hint` : undefined;

  const shared = {
    id,
    name: field.name,
    required: field.required,
    'aria-describedby': describedBy,
    className: 'field__control',
  };

  return (
    <p className={`field field--${field.width}`}>
      <label className="field__label label" htmlFor={id}>
        {field.label}
        {field.required && (
          <span className="field__required" aria-hidden="true">
            *
          </span>
        )}
        {field.required && <span className="sr-only"> (required)</span>}
      </label>

      {field.type === 'textarea' && (
        <textarea {...shared} rows={3} placeholder={field.placeholder} />
      )}

      {field.type === 'select' && (
        <select {...shared} defaultValue={defaultValue ?? ''}>
          <option value="">Select…</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {field.type !== 'textarea' && field.type !== 'select' && (
        <input
          {...shared}
          type={field.type}
          autoComplete={field.autoComplete}
          placeholder={field.placeholder}
          min={field.min}
          max={field.max}
        />
      )}

      {field.placeholder && field.type !== 'select' && (
        <span className="field__hint" id={describedBy}>
          {field.placeholder}
        </span>
      )}
    </p>
  );
}

/**
 * Enquiry panel. A right-hand sheet on desktop, full screen on mobile.
 *
 * Submission is intentionally local: there is no backend in this build, so the
 * form validates, shows the confirmation state and leaves the POST target for
 * whoever wires up the CRM. It never pretends to have sent something it has not.
 */
export default function EnquiryPanel() {
  const { isOpen, close, interest } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useFocusTrap(isOpen, close);
  const titleId = useId();

  useLockBodyScroll(isOpen);

  // Reset back to the form whenever the panel is reopened.
  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`enquiry ${isOpen ? 'is-open' : ''}`}>
      <div
        className="enquiry__backdrop"
        onClick={close}
        aria-hidden="true"
        hidden={!isOpen}
      />

      <div
        className="enquiry__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={containerRef}
        tabIndex={-1}
        hidden={!isOpen}
      >
        <div className="enquiry__bar">
          <Eyebrow>{enquiry.eyebrow}</Eyebrow>
          <button type="button" className="enquiry__close" onClick={close}>
            <span className="sr-only">Close enquiry form</span>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.25"
                fill="none"
              />
            </svg>
          </button>
        </div>

        <div className="enquiry__body">
          {submitted ? (
            <div className="enquiry__done" role="status">
              <h2 className="enquiry__headline" id={titleId}>
                {enquiry.successTitle}
              </h2>
              <p className="enquiry__standfirst">{enquiry.successBody}</p>
              <a
                className="enquiry__whatsapp"
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="label">WhatsApp us</span>
              </a>
            </div>
          ) : (
            <>
              <h2 className="enquiry__headline" id={titleId}>
                {enquiry.headline}
              </h2>
              <p className="enquiry__standfirst">{enquiry.standfirst}</p>

              <form className="enquiry__form" onSubmit={onSubmit} noValidate={false}>
                <div className="enquiry__fields">
                  {enquiry.fields.map((field) => (
                    <Field
                      // Keyed on the value so a new preselect remounts the
                      // select; defaultValue alone would never re-apply,
                      // because this panel stays mounted while hidden.
                      key={field.name === 'interest' ? `interest-${interest}` : field.name}
                      field={field}
                      defaultValue={field.name === 'interest' ? interest : undefined}
                    />
                  ))}
                </div>

                <button type="submit" className="enquiry__submit label">
                  {enquiry.submitLabel}
                </button>

                <p className="enquiry__alt">
                  {enquiry.whatsappLabel}
                  {' — '}
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener">
                    {contact.phoneDisplay}
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
