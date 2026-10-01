import { proof } from '@/content/site.js';
import { Reveal } from '@/components/ui/primitives.jsx';
import './TrustStrip.css';

/**
 * Four facts on hairlines. No icons, no badges - at this price point the
 * restraint carries more authority than a row of trust seals would.
 */
export default function TrustStrip() {
  return (
    <section className="proof on-dark" id="proof" aria-label="At a glance">
      <div className="proof__inner">
        <ul className="proof__list">
          {proof.map((item, i) => (
            <Reveal as="li" className="proof__item" key={item.label} delay={i * 90}>
              <p className="proof__value">
                {item.value}
                {item.unit && <span className="proof__unit">{item.unit}</span>}
              </p>
              <p className="proof__label label">{item.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
