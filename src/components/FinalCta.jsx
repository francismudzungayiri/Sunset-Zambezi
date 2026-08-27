import { contact, finalCta } from '@/content/site.js';
import { IMAGES, srcFor } from '@/lib/images.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { Button, Reveal } from '@/components/ui/primitives.jsx';
import HorizonRule from '@/components/ui/HorizonRule.jsx';
import './FinalCta.css';

/**
 * The emotional close. Centred here on purpose - the rest of the page runs on
 * a left axis, so centring this one moment makes it land as an arrival rather
 * than as another section.
 */
export default function FinalCta() {
  const { open } = useEnquiry();
  const { src, srcSet } = srcFor(IMAGES.finale);

  return (
    <section className="finale on-dark" id="contact">
      <div className="finale__media">
        <img
          className="finale__img"
          src={src}
          srcSet={srcSet}
          sizes="100vw"
          alt={IMAGES.finale.alt}
          loading="lazy"
          decoding="async"
        />
        <div className="finale__scrim" aria-hidden="true" />
      </div>

      <div className="finale__inner">
        <Reveal>
          <h2 className="finale__headline">
            {finalCta.headline}
            <br />
            <span className="accent-italic">{finalCta.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="finale__supporting">{finalCta.supporting}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="finale__actions">
            <Button variant="solid" tone="dark" onClick={() => open()}>
              {finalCta.primaryCta}
            </Button>
            <Button variant="ghost" tone="dark" to={`tel:${contact.phoneHref}`}>
              {finalCta.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <HorizonRule tone="hero" className="finale__rule horizon--sm" />
        </Reveal>
      </div>
    </section>
  );
}
