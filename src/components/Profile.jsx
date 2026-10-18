import { about, education, skills, certifications } from '../data/portfolio.js';

export default function Profile() {
  return (
    <section id="about" className="section section--ivory">
      <div className="container profile">
        <div>
          <div className="eyebrow eyebrow--bronze">04 — Profile</div>
          <h2 className="h2 h2--profile reveal">A developer with an eye for detail.</h2>
          {about.map((p, i) => <p key={i} className="profile__para">{p}</p>)}
          <div className="edu">
            {education.map((e) => (
              <div key={e.school} className="edu__row">
                <div>
                  <div className="edu__school">{e.school}</div>
                  <div className="edu__detail">{e.detail}</div>
                </div>
                <div className="edu__period">{e.period}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile__side">
          <div>
            <div className="eyebrow eyebrow--bronze">Capabilities</div>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.label}>
                  <div className="label">{g.label}</div>
                  <div className="chip-row">
                    {g.items.map((s) => <span key={s} className="chip chip--navy">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow eyebrow--bronze">Certifications</div>
            <div className="certs">
              {certifications.map((c) => (
                <div key={c.title} className="certs__row">{c.issuer} — {c.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
