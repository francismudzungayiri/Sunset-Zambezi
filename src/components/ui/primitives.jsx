import { useState } from 'react';
import { srcFor } from '@/lib/images.js';
import { useReveal } from '@/hooks/index.js';
import './primitives.css';

/**
 * Section wrapper. All vertical rhythm lives here on a single class with
 * modifiers - component stylesheets never set their own outer margin, which is
 * what normally causes two rules to cancel each other out.
 */
export function Section({
  as: Tag = 'section',
  tone = 'light',
  size = 'default',
  bleed = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'section',
    `section--${tone}`,
    size !== 'default' && `section--${size}`,
    bleed && 'section--bleed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {bleed ? children : <div className="section__inner">{children}</div>}
    </Tag>
  );
}

/** Small tracked label. Used for eyebrows, data labels and captions. */
export function Eyebrow({ as: Tag = 'p', className = '', children, ...rest }) {
  return (
    <Tag className={`eyebrow label ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Button / link. `to` renders an anchor, otherwise a real button - so a link
 * is never faked with a click handler and keyboard users get the right control.
 */
export function Button({
  variant = 'solid',
  tone = 'light',
  to,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--on-${tone} ${className}`.trim();
  if (to) {
    return (
      <a className={classes} href={to} {...rest}>
        <span className="btn__label">{children}</span>
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      <span className="btn__label">{children}</span>
    </button>
  );
}

/** Text link with a rule that draws in from the left on hover. */
export function TextLink({ to = '#', tone = 'light', className = '', children, ...rest }) {
  return (
    <a className={`text-link text-link--on-${tone} ${className}`.trim()} href={to} {...rest}>
      <span className="text-link__label label">{children}</span>
      <span className="text-link__rule" aria-hidden="true" />
    </a>
  );
}

/**
 * Responsive image.
 *
 * Reserves its aspect ratio to prevent layout shift, holds the photograph's own
 * average colour underneath while it loads so the page never flashes white,
 * then fades in. Everything is lazy except art marked `priority`.
 */
export function SmartImage({
  image,
  ratio = '3 / 2',
  priority = false,
  sizes = '100vw',
  quality,
  className = '',
  objectPosition,
}) {
  const [loaded, setLoaded] = useState(false);
  const { src, srcSet } = srcFor(image, quality);

  return (
    <div
      className={`smart-image ${loaded ? 'is-loaded' : ''} ${className}`.trim()}
      style={{ '--ratio': ratio, '--tone': image.tone }}
    >
      <img
        className="smart-image__img"
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}

/**
 * Fades and lifts its children into place once they scroll into view. `delay`
 * staggers siblings. Honours reduced motion via useReveal.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
