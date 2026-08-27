import { gallery } from '@/content/stories.js';
import { Eyebrow, Reveal, SmartImage } from '@/components/ui/primitives.jsx';
import './Gallery.css';

/**
 * Asymmetric editorial grid. Spans come from content rather than from a
 * component rule, so the rhythm can be re-cut without touching code.
 */
const RATIOS = { wide: '16 / 9', tall: '3 / 4', normal: '4 / 3' };

export default function Gallery() {
  return (
    <section className="gallery on-dark" id="gallery">
      <div className="gallery__inner">
        <header className="gallery__head">
          <Reveal>
            <Eyebrow>The lake</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="gallery__headline">
              Kariba, <span className="accent-italic">unedited.</span>
            </h2>
          </Reveal>
        </header>

        <ul className="gallery__grid">
          {gallery.map((tile, i) => (
            <Reveal
              as="li"
              key={tile.id}
              className={`gallery__tile gallery__tile--${tile.span} zoomable`}
              delay={(i % 3) * 90}
            >
              <SmartImage
                image={tile.image}
                ratio={RATIOS[tile.span] ?? RATIOS.normal}
                sizes="(min-width: 62em) 40vw, (min-width: 48em) 50vw, 100vw"
              />
              {tile.image.place && (
                <p className="gallery__place label">{tile.image.place}</p>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
