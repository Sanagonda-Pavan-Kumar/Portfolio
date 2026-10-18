import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Websites from './components/Websites.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Profile from './components/Profile.jsx';
import Contact from './components/Contact.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  useReveal();
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Websites />
        <Experience />
        <Projects />
        <Profile />
      </main>
      <Contact />
    </div>
  );
}
