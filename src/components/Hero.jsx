import { hero } from '@/content/site.js';
import { IMAGES, srcFor } from '@/lib/images.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { Button, Eyebrow } from '@/components/ui/primitives.jsx';
import HorizonRule from '@/components/ui/HorizonRule.jsx';
import './Hero.css';

/**
 * Full-bleed hero. The headline is set bottom-left against the grid rather than
 * centred: centred hero type is the tell of a template, and the left column
 * keeps the whole page on one axis.
 *
 * The background <img> is eager and high priority - it is the LCP element - and
 * carries an empty alt because the headline beside it already says what the
 * page is about.
 */
export default function Hero() {
  const { open } = useEnquiry();
  const { src, srcSet } = srcFor(IMAGES.hero, 80);

  return (
    <section className="hero on-dark" id="top">
      <div className="hero__media">
        <img
          className="hero__img"
          src={src}
          srcSet={srcSet}
          sizes="100vw"
          alt=""
          fetchpriority="high"
          decoding="sync"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <Eyebrow className="hero__eyebrow">{hero.eyebrow}</Eyebrow>

          <h1 className="hero__headline">
            {hero.headline.map((line) => (
              <span className="hero__line" key={line}>
                {line}
              </span>
            ))}{' '}
            <span className="hero__line accent-italic">{hero.headlineAccent}</span>
          </h1>

          <p className="hero__supporting lead">{hero.supporting}</p>

          <div className="hero__actions">
            <Button variant="solid" tone="dark" to="#experiences">
              {hero.primaryCta}
            </Button>
            <Button variant="ghost" tone="dark" onClick={() => open()}>
              {hero.secondaryCta} <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>

        <HorizonRule tone="hero" className="hero__rule" />

        <a className="hero__scroll" href="#proof">
          <span className="label">{hero.scrollCue}</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
