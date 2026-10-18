import { useState } from 'react';
import { experience } from '../data/portfolio.js';

const pad = (n) => String(n).padStart(2, '0');

export default function Experience() {
  const [active, setActive] = useState(0);
  const role = experience[active];
  const year = (role.period.match(/\d{4}/g) || ['']).pop();

  return (
    <section id="experience" className="section section--beige">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <div className="eyebrow eyebrow--bronze">02 — Experience</div>
            <h2 className="h2 reveal">Professional experience</h2>
          </div>
          <div className="hint">Select a role to explore</div>
        </div>

        <div className="exp">
          <div className="exp__tabs" role="tablist">
            {experience.map((r, i) => (
              <button
                key={r.company}
                role="tab"
                aria-selected={i === active}
                className={`exp__tab ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp__tab-num">{pad(i + 1)}</span>
                <span className="exp__tab-text">
                  <span className="exp__tab-company">{r.company}</span>
                  <span className="exp__tab-period">{r.period}</span>
                </span>
                <span className="exp__tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="exp__panel" role="tabpanel" key={active}>
            <div className="exp__year">{year}</div>
            <div className="exp__content">
              <div className="tag-row">
                <span className="tag tag--solid">{role.type}</span>
                <span className="tag tag--line">{role.place}</span>
              </div>
              <h3 className="exp__title">{role.title}</h3>
              <div className="exp__company">{role.company} · {role.period}</div>
              <div className="exp__points">
                {role.points.map((p, i) => (
                  <div key={i} className="exp__point">
                    <span className="exp__point-num">{pad(i + 1)}</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="exp__tools">
                <div className="label">Tools &amp; technologies</div>
                <div className="chip-row">
                  {role.tech.map((t) => <span key={t} className="chip chip--navy">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
