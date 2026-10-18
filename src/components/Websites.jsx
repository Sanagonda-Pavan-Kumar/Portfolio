import { websites } from '../data/portfolio.js';

export default function Websites() {
  return (
    <section id="work" className="section section--sand">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <div className="eyebrow eyebrow--bronze">01 — Websites designed &amp; developed</div>
            <h2 className="h2 reveal">Live client websites</h2>
          </div>
          <p className="section-head__note">
            {websites.length} production websites across real estate, hospitality and e-commerce — built responsive, fast and content-managed.
          </p>
        </div>

        <div className="site-grid">
          {websites.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="site-card reveal">
              <div className="site-card__media">
                <img src={s.img} alt={`${s.name} website hero`} loading="lazy" decoding="async" />
              </div>
              <div className="site-card__body">
                <div className="site-card__top">
                  <h3 className="site-card__name">{s.name}</h3>
                  <span className="site-card__kind">{s.kind}</span>
                </div>
                <p className="site-card__blurb">{s.blurb}</p>
                <div className="site-card__foot">
                  <span className="site-card__domain">{s.domain}</span>
                  <span className="site-card__visit">Visit ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
