import { ticker } from '../data/portfolio.js';

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((k) => (
          <div key={k} className="marquee__group">
            {ticker.map((t) => (
              <span key={t} className="marquee__item">
                {t}
                <span className="diamond" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
