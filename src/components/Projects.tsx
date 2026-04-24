import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import smokeAndLadleImage from '../assets/smoke-and-ladle.png';
import doBehenBoutiqueImage from '../assets/do-behen-boutique.png';

const projects = [
  {
    title: 'Smoke and Ladle',
    description: 'A recipe website featuring diverse culinary creations and cooking inspiration. Built with WordPress and Classic theme, hosted on Hostinger.',
    tags: ['WordPress', 'Classic Theme', 'Hostinger', 'Recipe Blog'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    image: smokeAndLadleImage,
    link: 'https://smokeandladle.com'
  },
  {
    title: 'Do Behen Boutique',
    description: 'An Indian ethnic wear clothing store offering traditional and contemporary designs. Full e-commerce solution built with WordPress, WooCommerce, and Astra theme.',
    tags: ['WordPress', 'WooCommerce', 'Astra Theme', 'E-Commerce'],
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    image: doBehenBoutiqueImage,
    link: 'https://dobehen.com'
  }
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="work"
      ref={ref}
      className="min-h-screen py-24 px-6 md:px-12"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
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
            Selected Work
          </span>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-lg h-full"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Project Image */}
                <div
                  className="relative h-72 overflow-hidden"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.95,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full"
                      style={{ backgroundColor: 'var(--portfolio-accent)' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={24} color="white" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      fontFamily: 'Fraunces, serif'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--portfolio-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      fontSize: '0.95rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.4rem 0.8rem',
                          backgroundColor: 'var(--portfolio-surface)',
                          border: '1px solid rgba(0,0,0,0.06)',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          color: 'var(--portfolio-text-muted)',
                          fontFamily: 'JetBrains Mono, monospace'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
