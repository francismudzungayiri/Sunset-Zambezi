import { featured } from '@/content/site.js';
import { IMAGES } from '@/lib/images.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { Button, Eyebrow, Reveal, SmartImage } from '@/components/ui/primitives.jsx';
import './FeaturedJourney.css';

/**
 * The signature journey. The photograph runs to the left edge of the viewport
 * and the dark panel overlaps it, so the two elements read as one object rather
 * than as an image beside a box.
 *
 * This is the drowned-forest photograph - the one image on the page that is
 * unmistakably Kariba and nowhere else.
 */
export default function FeaturedJourney() {
  const { open } = useEnquiry();

  return (
    <section className="feature" id="signature">
      <div className="feature__grid">
        <Reveal className="feature__media">
          <SmartImage
            image={IMAGES.featured}
            ratio="4 / 3"
            sizes="(min-width: 62em) 62vw, 100vw"
          />
        </Reveal>

        <Reveal className="feature__panel on-dark" delay={120}>
          <Eyebrow>{featured.eyebrow}</Eyebrow>

          <h2 className="feature__headline">
            {featured.headline}
            <br />
            <span className="accent-italic">{featured.headlineAccent}</span>
          </h2>

          <p className="feature__copy">{featured.description}</p>

          <dl className="feature__facts">
            {featured.facts.map((fact) => (
              <div className="feature__fact" key={fact.label}>
                <dt className="label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="feature__actions">
            <Button variant="solid" tone="dark" to="#signature-itinerary">
              {featured.primaryCta} <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button
              variant="ghost"
              tone="dark"
              onClick={() => open('The Signature Kariba Escape')}
            >
              {featured.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
