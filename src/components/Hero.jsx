import { useRef } from 'react';
import { profile, heroStats } from '../data/portfolio.js';

const REST = 'rotateX(4deg) rotateY(-9deg)';

export default function Hero() {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transition = 'transform .15s ease-out';
    cardRef.current.style.transform = `rotateX(${-y * 16}deg) rotateY(${x * 22}deg)`;
    glareRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,.4), rgba(255,255,255,0) 55%)`;
  };
  const onLeave = () => {
    cardRef.current.style.transition = 'transform .8s cubic-bezier(.2,.7,.2,1)';
    cardRef.current.style.transform = REST;
  };

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text fade-up">
          <div className="eyebrow eyebrow--slate">
            <span className="eyebrow__rule" />
            Portfolio · 2026
          </div>
          <h1 className="hero__title">{profile.firstName}<br />{profile.lastName}</h1>
          <div className="hero__meta">
            <span className="hero__role">{profile.role}</span>
            <span className="dot" />
            <span className="hero__loc">{profile.location}</span>
          </div>
          <p className="hero__summary">{profile.summary}</p>
          <div className="btn-row">
            <a href="#work" className="btn btn--navy">View my work</a>
            <a href={`mailto:${profile.email}`} className="btn btn--outline">Contact me</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
          </div>
        </div>

        <div className="hero__visual fade-up fade-up--delay">
          <div className="tilt" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="tilt__card" ref={cardRef} style={{ transform: REST }}>
              <div className="tilt__layer tilt__layer--back" />
              <div className="tilt__layer tilt__layer--frame" />
              <div className="tilt__photo">
                <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} />
                <div className="tilt__glare" ref={glareRef} />
                <div className="tilt__shade" />
              </div>
              <div className="tilt__badge">
                <span className="pulse" />
                Open to opportunities
              </div>
            </div>
          </div>
          <div className="stats">
            {heroStats.map((s) => (
              <div key={s.label} className="stats__item">
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
