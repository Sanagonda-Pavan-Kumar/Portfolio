import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section section--navy">
      <div className="container">
        <div className="eyebrow eyebrow--gold">03 — Engineering projects</div>
        <h2 className="h2 h2--light reveal section-head">Things I've built</h2>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <article key={p.name} className="proj reveal">
              <div className="proj__top">
                <span className="proj__tag">{p.tag}</span>
                <span className="proj__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="proj__name">{p.name}</h3>
              <p className="proj__blurb">{p.blurb}</p>
              <div className="proj__stack">
                {p.stack.map((t) => <span key={t} className="chip chip--dark">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
