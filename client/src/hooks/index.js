import { useCallback, useEffect, useRef, useState } from 'react';

/** True when the user has asked the OS to reduce motion. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Reports whether the page has scrolled past `threshold`. Used only to swap the
 * navigation ground, so it is throttled to animation frames.
 */
export function useScrolledPast(threshold = 40) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      setPast(window.scrollY > threshold);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return past;
}

/**
 * Adds `is-revealed` once the element enters the viewport, then stops watching.
 * Returns a ref to attach. Under reduced motion it reveals immediately and
 * never creates an observer.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-revealed');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Locks body scroll while `locked`, compensating for the scrollbar so the page
 * behind the enquiry panel does not shift sideways.
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [locked]);
}

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Traps Tab inside `active` dialogs, closes on Escape, and returns focus to
 * whatever was focused before the dialog opened.
 */
export function useFocusTrap(active, onClose) {
  const containerRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    restoreRef.current = document.activeElement;
    const container = containerRef.current;
    if (!container) return undefined;

    const focusFirst = () => {
      const target = container.querySelector(FOCUSABLE);
      if (target) target.focus();
      else container.focus();
    };
    // Wait a frame so the panel has finished its entry transform.
    const raf = window.requestAnimationFrame(focusFirst);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = Array.from(container.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      window.cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown, true);
      const restore = restoreRef.current;
      if (restore && typeof restore.focus === 'function') restore.focus();
    };
  }, [active, onClose]);

  return containerRef;
}

/**
 * Vertical parallax offset in pixels, capped and rAF-throttled. Returns 0 under
 * reduced motion so callers need no branch of their own.
 */
export function useParallax(strength = 0.12, max = 90) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    let frame = 0;
    const read = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const centre = rect.top + rect.height / 2 - window.innerHeight / 2;
      const next = Math.max(-max, Math.min(max, -centre * strength));
      setOffset(next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength, max]);

  return [ref, offset];
}

/** Stable callback identity for handlers passed into effects. */
export function useEvent(handler) {
  const ref = useRef(handler);
  useEffect(() => {
    ref.current = handler;
  });
  return useCallback((...args) => ref.current?.(...args), []);
}
