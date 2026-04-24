import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: '150px', width: 'auto' }}
          />
        </motion.div>

        <div className="flex gap-8 items-center">
          {['Work', 'About', 'Skills', 'Contact'].map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative group"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--portfolio-text-muted)',
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.02em'
              }}
            >
              {item}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--portfolio-accent)' }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
