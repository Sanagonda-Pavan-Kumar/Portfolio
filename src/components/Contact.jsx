import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="container contact__inner">
        <div className="eyebrow eyebrow--gold eyebrow--center">05 — Contact</div>
        <h2 className="contact__title reveal">Let's build something worth visiting.</h2>
        <a href={`mailto:${profile.email}`} className="contact__email">{profile.email}</a>
        <div className="contact__links">
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="container contact__bar">
        <span>Sanagonda Pavan Kumar</span>
        <span>Hyderabad · India</span>
      </div>
    </footer>
  );
}
