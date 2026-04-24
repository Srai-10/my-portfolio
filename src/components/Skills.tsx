import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Rocket, Zap, GraduationCap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Development',
    skills: ['html', 'CSS', 'JavaScript', 'Wordpress', 'Woocommerce', 'React', 'TypeScript', 'Node.js', 'Next.js', 'PHP', 'MySQL']
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'UI/UX', 'Branding']
  },
  {
    icon: Rocket,
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Vercel', 'Jest']
  },
  {
    icon: Zap,
    title: 'Specialties',
    skills: ['Responsive Design', 'Accessibility', 'Performance', 'SEO', 'UI Animation', 'API Design']
  }
];

export function Skills() {
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
      id="skills"
      ref={ref}
      className="min-h-screen py-24 px-6 md:px-12"
      style={{ backgroundColor: 'var(--portfolio-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span
            style={{
              color: 'var(--portfolio-accent)',
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              display: 'block'
            }}
          >
            Skills & Expertise
          </span>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            What I Bring to the Table
          </h2>
          <p
            style={{
              color: 'var(--portfolio-text-muted)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className="p-8 rounded-lg h-full relative overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, var(--portfolio-accent-glow), transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: 'var(--portfolio-accent-glow)',
                        border: '1px solid var(--portfolio-accent)'
                      }}
                    >
                      <category.icon size={24} style={{ color: 'var(--portfolio-accent)' }} />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        fontFamily: 'Fraunces, serif'
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'var(--portfolio-accent)',
                          color: '#ffffff'
                        }}
                        style={{
                          padding: '0.6rem 1.2rem',
                          backgroundColor: 'var(--portfolio-surface)',
                          border: '1px solid rgba(0,0,0,0.06)',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          cursor: 'default',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '10+', label: 'Technologies' },
            { value: '10+', label: 'Projects Delivered' },
            { value: '2+', label: 'Years Experience' }
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--portfolio-accent)',
                  marginBottom: '0.5rem'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--portfolio-text-muted)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              fontFamily: 'Fraunces, serif',
              marginBottom: '2rem',
              textAlign: 'center'
            }}
          >
            Education
          </h3>

          <div
            className="max-w-3xl mx-auto p-8 rounded-lg relative overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            {/* Decorative accent */}
            <div
              className="absolute top-0 left-0 w-2 h-full"
              style={{ backgroundColor: 'var(--portfolio-accent)' }}
            />

            <div className="flex items-start gap-6">
              <div
                className="p-4 rounded-lg flex-shrink-0"
                style={{
                  backgroundColor: 'var(--portfolio-accent-glow)',
                  border: '1px solid var(--portfolio-accent)'
                }}
              >
                <GraduationCap size={32} style={{ color: 'var(--portfolio-accent)' }} />
              </div>

              <div className="flex-1">
                <h4
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: 'Fraunces, serif',
                    marginBottom: '0.5rem'
                  }}
                >
                  Digital Media and IT
                </h4>
                <p
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--portfolio-accent)',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}
                >
                  Diploma (2 Years)
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--portfolio-text)',
                    marginBottom: '0.25rem'
                  }}
                >
                  Northern Alberta Institute of Technology (NAIT)
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--portfolio-text-muted)',
                    marginBottom: '0.5rem'
                  }}
                >
                  Edmonton, Alberta, Canada
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--portfolio-surface)',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--portfolio-text-muted)',
                    marginTop: '0.5rem'
                  }}
                >
                  2022 - 2025
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
