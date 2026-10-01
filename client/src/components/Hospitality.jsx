import { hospitality } from '@/content/site.js';
import { IMAGES } from '@/lib/images.js';
import { Eyebrow, Reveal, SmartImage } from '@/components/ui/primitives.jsx';
import './Hospitality.css';

/**
 * Three photographs at deliberately different sizes and vertical offsets, so
 * the cluster reads as a spread in a magazine rather than a row of thumbnails.
 */
export default function Hospitality() {
  return (
    <section className="hosp" id="on-board">
      <div className="hosp__inner">
        <div className="hosp__head">
          <Reveal>
            <Eyebrow>{hospitality.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="hosp__headline">
              {hospitality.headline}{' '}
              <span className="accent-italic">{hospitality.headlineAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="hosp__message lead">{hospitality.message}</p>
          </Reveal>
        </div>

        <div className="hosp__cluster">
          <Reveal className="hosp__shot hosp__shot--lead zoomable">
            <SmartImage
              image={IMAGES.hospitalityMain}
              ratio="4 / 3"
              sizes="(min-width: 62em) 54vw, 100vw"
            />
          </Reveal>
          <Reveal className="hosp__shot hosp__shot--tall zoomable" delay={110}>
            <SmartImage
              image={IMAGES.galLounge}
              ratio="3 / 4"
              sizes="(min-width: 62em) 30vw, 50vw"
            />
          </Reveal>
          <Reveal className="hosp__shot hosp__shot--detail zoomable" delay={200}>
            <SmartImage
              image={IMAGES.hospitalityDetail}
              ratio="1 / 1"
              sizes="(min-width: 62em) 24vw, 50vw"
            />
          </Reveal>
        </div>

        <ul className="hosp__features">
          {hospitality.features.map((feature, i) => (
            <Reveal as="li" className="hosp__feature" key={feature.title} delay={i * 90}>
              <h3 className="hosp__feature-title label">{feature.title}</h3>
              <p>{feature.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
