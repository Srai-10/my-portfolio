import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/portfoliopic.png';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex py-24 px-6 md:px-12"
      style={{ backgroundColor: 'var(--portfolio-surface)' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                color: 'var(--portfolio-accent)',
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                display: 'block'
              }}
            >
              About Me
            </motion.span>

            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '2rem',
                letterSpacing: '-0.02em'
              }}
            >
              Building the web,{' '}
              <span style={{ color: 'var(--portfolio-accent)' }}>
                Simple. Clean. Effective.
              </span>
            </h2>

            <div

              className="items-center"
              style={{
                color: 'var(--portfolio-text-muted)',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
             <p> Hi! I am Scholastica Rai and I'm a passionate designer and developer with over 2 years of experience
              creating digital products that people love to use. My work sits at the
              intersection of design and code, where beautiful interfaces meet robust
              functionality. I enjoy working with small businesses and helping them build
              a strong and meaningful online presence.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I specialize in designing and developing modern, responsive websites using
              tools like WordPress, along with front-end technologies such as HTML, CSS,
              and JavaScript. For UX/UI design, I use Figma to create intuitive, clean,
              and user-friendly interfaces that enhance the overall user experience and ensure seamless navigation.
            </p>
            <p>
              I believe great design should be simple, intuitive, and purposeful.
              Whether I’m designing in Figma or developing a website, I focus on
              creating visually engaging and functional solutions that help businesses
              grow and connect with their audience.
            </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            aspectRatio: '3/4',
            background: 'linear-gradient(135deg, var(--portfolio-accent-glow), transparent)',
            padding: '2px'
          }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-lg object-cover"
            style={{ backgroundColor: 'var(--portfolio-surface)' }}
          />
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="absolute -bottom-8 -left-8 p-6 rounded-lg"
          style={{
            backgroundColor: 'var(--portfolio-accent)',
            color: '#ffffff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Fraunces, serif' }}>2+</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Years Experience</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="absolute -top-8 -right-8 p-6 rounded-lg"
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid var(--portfolio-accent)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Fraunces, serif', color: 'var(--portfolio-accent)' }}>15+</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--portfolio-text)' }}>Projects Completed</div>
        </motion.div>
      </motion.div>
    </div>
      </div >
        </section>
    
  );
  }
