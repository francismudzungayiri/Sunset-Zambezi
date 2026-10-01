import { testimonials } from '@/content/stories.js';
import { Eyebrow, Reveal } from '@/components/ui/primitives.jsx';
import HorizonRule from '@/components/ui/HorizonRule.jsx';
import './GuestStories.css';

/**
 * Testimonials as large pull-quotes on hairlines. No cards, no avatars, no
 * star ratings - a review widget would put this page back in the same category
 * as every other tour operator's site.
 */
export default function GuestStories() {
  return (
    <section className="stories" id="stories">
      <div className="stories__inner">
        <header className="stories__head">
          <Reveal>
            <Eyebrow>Guest stories</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="stories__headline">
              Stories from <span className="accent-italic">the Zambezi</span>
            </h2>
          </Reveal>
        </header>

        <div className="stories__list">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <figure className="story">
                <blockquote className="story__quote">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="story__meta">
                  <span className="story__author">{item.author}</span>
                  <span className="story__rule" aria-hidden="true" />
                  <span className="story__origin label">{item.origin}</span>
                  <span className="story__trip label">{item.trip}</span>
                </figcaption>
              </figure>
              {i < testimonials.length - 1 && (
                <HorizonRule tone="light" className="stories__divider horizon--sm" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
