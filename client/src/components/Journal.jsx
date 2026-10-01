import { journal } from '@/content/stories.js';
import { Eyebrow, Reveal, SmartImage, TextLink } from '@/components/ui/primitives.jsx';
import './Journal.css';

export default function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="journal__inner">
        <header className="journal__head">
          <div>
            <Reveal>
              <Eyebrow>Journal</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="journal__headline">
                From <span className="accent-italic">the wild</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="journal__head-cta">
            <TextLink to="#journal-index">
              Explore the journal <span aria-hidden="true">&rarr;</span>
            </TextLink>
          </Reveal>
        </header>

        <ul className="journal__list">
          {journal.map((post, i) => (
            <Reveal as="li" key={post.id} delay={i * 100}>
              <article className="post zoomable">
                <a className="post__link" href={`#${post.slug}`}>
                  <SmartImage
                    image={post.image}
                    ratio="4 / 5"
                    sizes="(min-width: 62em) 30vw, (min-width: 48em) 45vw, 100vw"
                  />
                  <p className="post__meta label">
                    <span>{post.category}</span>
                    <span className="post__dot" aria-hidden="true" />
                    <span>{post.readingTime} min read</span>
                  </p>
                  <h3 className="post__title">{post.title}</h3>
                  <p className="post__excerpt">{post.excerpt}</p>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
