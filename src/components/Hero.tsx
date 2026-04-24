import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-48"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at 20% 50%, var(--portfolio-accent-glow) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--portfolio-accent-glow) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              color: 'var(--portfolio-accent)',
              fontSize: '0.95rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}
          >
            Designer • Developer • Creator
          </motion.p>

          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              marginBottom: '2rem',
              letterSpacing: '-0.02em'
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Crafting
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block"
              style={{
                background: 'linear-gradient(135deg, var(--portfolio-accent) 0%, var(--portfolio-accent-hover) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Digital
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="block"
            >
              Experiences
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              maxWidth: '600px',
              color: 'var(--portfolio-text-muted)',
              marginBottom: '3rem'
            }}
          >
            Web designer & developer specializing in creating beautiful,
            functional, and user-centered digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--portfolio-accent-glow)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '1rem 2.5rem',
                backgroundColor: 'var(--portfolio-accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.02em'
              }}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '1rem 2.5rem',
                backgroundColor: 'transparent',
                color: 'var(--portfolio-text)',
                border: '2px solid var(--portfolio-accent)',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.02em'
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-12"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <ArrowDown size={24} style={{ color: 'var(--portfolio-accent)' }} />
      </motion.div>
    </section>
  );
}
