import { intro } from '@/content/site.js';
import { IMAGES } from '@/lib/images.js';
import { Eyebrow, Reveal, SmartImage, TextLink } from '@/components/ui/primitives.jsx';
import './Intro.css';

/**
 * Editorial split. The image runs tall on the left; the eyebrow sits out in the
 * margin column so the headline can start on the same axis as the body copy.
 */
export default function Intro() {
  return (
    <section className="intro" id="about">
      <div className="intro__inner">
        <Reveal className="intro__media zoomable">
          <SmartImage
            image={IMAGES.intro}
            ratio="4 / 5"
            sizes="(min-width: 62em) 42vw, 100vw"
          />
          <p className="intro__caption label">
            Matusadona escarpment, seen across the lake
          </p>
        </Reveal>

        <div className="intro__content">
          <Reveal>
            <Eyebrow className="intro__eyebrow">{intro.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="intro__headline">
              {intro.headline}
              <br />
              <span className="accent-italic">{intro.headlineAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="intro__quote">
              <p>{intro.pullQuote}</p>
            </blockquote>
          </Reveal>

          <Reveal delay={220}>
            <div className="intro__body prose">
              {intro.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <TextLink to="#journal" className="intro__cta">
              {intro.cta} <span aria-hidden="true">&rarr;</span>
            </TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
