import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{
      backgroundColor: 'var(--portfolio-bg)',
      color: 'var(--portfolio-text)',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

