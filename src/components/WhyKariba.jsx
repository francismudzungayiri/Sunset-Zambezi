import { whyKariba } from '@/content/site.js';
import { IMAGES, srcFor } from '@/lib/images.js';
import { useParallax } from '@/hooks/index.js';
import { Reveal } from '@/components/ui/primitives.jsx';
import './WhyKariba.css';

/**
 * A full-bleed landscape, then the four qualities of the place on hairlines.
 *
 * The standfirst carries the fact the whole site is built on - the drowned
 * forest - because it is the one thing that makes this lake unlike anywhere
 * else a guest could spend the same money.
 */
export default function WhyKariba() {
  const [parallaxRef, offset] = useParallax(0.06, 60);
  const { src, srcSet } = srcFor(IMAGES.wilderness);

  return (
    <section className="why on-dark" id="why-kariba">
      <div className="why__banner" ref={parallaxRef}>
        <img
          className="why__img"
          src={src}
          srcSet={srcSet}
          sizes="100vw"
          alt={IMAGES.wilderness.alt}
          loading="lazy"
          decoding="async"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
        />
        <div className="why__scrim" aria-hidden="true" />
      </div>

      <div className="why__inner">
        <div className="why__head">
          <Reveal>
            <h2 className="why__headline">
              Why <span className="accent-italic">Kariba?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="why__standfirst">{whyKariba.standfirst}</p>
          </Reveal>
        </div>

        <ul className="why__list">
          {whyKariba.points.map((point, i) => (
            <Reveal as="li" className="why__point" key={point.id} delay={i * 90}>
              <h3 className="why__point-title">{point.title}</h3>
              <p className="why__point-body">{point.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
