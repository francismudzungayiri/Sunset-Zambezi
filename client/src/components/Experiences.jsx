import { experiences } from '@/content/experiences.js';
import { useEnquiry } from '@/context/enquiry.jsx';
import { Eyebrow, Reveal, SmartImage, TextLink } from '@/components/ui/primitives.jsx';
import HorizonRule from '@/components/ui/HorizonRule.jsx';
import './Experiences.css';

/**
 * One row per experience, alternating sides - not a four-up card grid, which
 * would make a $3,000 journey look like a product tile.
 *
 * The marker is the hour the experience happens rather than an index. Read top
 * to bottom the section is a single day on the lake, from first light to after
 * dark, which is information a number could not carry.
 */
function ExperienceRow({ item, flip }) {
  const { open } = useEnquiry();

  return (
    <article className={`exp ${flip ? 'exp--flip' : ''}`}>
      <Reveal className="exp__media zoomable">
        <a
          className="exp__media-link"
          href={`#${item.slug}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          <SmartImage
            image={item.image}
            ratio="16 / 11"
            sizes="(min-width: 62em) 58vw, 100vw"
          />
        </a>
      </Reveal>

      <div className="exp__body">
        <Reveal delay={60}>
          <p className="exp__time">
            <span className="exp__time-value">{item.time}</span>
            <span className="exp__time-rule" aria-hidden="true" />
            <span className="exp__time-note label">{item.timeNote}</span>
          </p>

          <h3 className="exp__title">
            <a href={`#${item.slug}`}>{item.title}</a>
          </h3>

          <p className="exp__summary lead">{item.summary}</p>
          <p className="exp__copy">{item.body}</p>

          <div className="exp__actions">
            <TextLink to={`#${item.slug}`}>{item.cta}</TextLink>
            <button
              type="button"
              className="exp__enquire label"
              onClick={() => open(item.enquiryOption)}
            >
              Enquire
            </button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="experiences__inner">
        <header className="experiences__head">
          <Reveal>
            <Eyebrow>One day on the lake</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="experiences__headline">
              Experiences worth <span className="accent-italic">travelling for.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="experiences__standfirst lead">
              From sunrise on the water to evenings beneath an endless African sky.
            </p>
          </Reveal>
        </header>

        <div className="experiences__list">
          {experiences.map((item, i) => (
            <ExperienceRow key={item.id} item={item} flip={i % 2 === 1} />
          ))}
        </div>

        <HorizonRule tone="light" className="experiences__rule" />
      </div>
    </section>
  );
}
