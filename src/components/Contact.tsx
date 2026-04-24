import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    // Check if form was successfully submitted
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
      // Clear form data
      setFormData({ name: '', email: '', message: '' });
      // Remove success parameter from URL after showing message
      window.history.replaceState({}, '', window.location.pathname);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleSubmit = () => {
    // Form will be submitted to FormSubmit
    setIsSubmitted(true);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:scholasrai@gmail.com' },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Srai-10" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/scholas-rai" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" }
];


  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-24 px-6 md:px-12 flex items-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            Get In Touch
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
            Let's Work Together
          </h2>
          <p
            style={{
              color: 'var(--portfolio-text-muted)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg"
                style={{
                  backgroundColor: 'var(--portfolio-accent-glow)',
                  border: '2px solid var(--portfolio-accent)',
                }}
              >
                <p
                  style={{
                    color: 'var(--portfolio-accent)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    margin: 0
                  }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form
              action="https://formsubmit.co/scholasrai@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true#contact`} />

              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--portfolio-text-muted)'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--portfolio-surface)',
                    border: `2px solid ${focusedField === 'name' ? 'var(--portfolio-accent)' : 'rgba(0,0,0,0.1)'}`,
                    borderRadius: '8px',
                    color: 'var(--portfolio-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--portfolio-text-muted)'
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--portfolio-surface)',
                    border: `2px solid ${focusedField === 'email' ? 'var(--portfolio-accent)' : 'rgba(0,0,0,0.1)'}`,
                    borderRadius: '8px',
                    color: 'var(--portfolio-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--portfolio-text-muted)'
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--portfolio-surface)',
                    border: `2px solid ${focusedField === 'message' ? 'var(--portfolio-accent)' : 'rgba(0,0,0,0.1)'}`,
                    borderRadius: '8px',
                    color: 'var(--portfolio-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px var(--portfolio-accent-glow)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '1.2rem',
                  backgroundColor: 'var(--portfolio-accent)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  letterSpacing: '0.02em'
                }}
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="p-8 rounded-lg h-full"
              style={{
                backgroundColor: 'var(--portfolio-surface)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'Fraunces, serif',
                  marginBottom: '1.5rem'
                }}
              >
                Let's Connect
              </h3>

              <p
                style={{
                  color: 'var(--portfolio-text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                  fontSize: '1.05rem'
                }}
              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: 'var(--portfolio-accent-glow)',
                      border: '1px solid var(--portfolio-accent)'
                    }}
                  >
                    <Mail size={20} style={{ color: 'var(--portfolio-accent)' }} />
                  </div>
                  <a
                    href="mailto:scholasrai@gmail.com"
                    style={{
                      color: 'var(--portfolio-text)',
                      fontSize: '1.05rem',
                      textDecoration: 'none'
                    }}
                  >
                    scholasrai@gmail.com
                  </a>
                </div>
              </div>

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  margin: '2rem 0'
                }}
              />

              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: 'var(--portfolio-text-muted)'
                  }}
                >
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '0.8rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--portfolio-text)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--portfolio-accent)';
                        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                        e.currentTarget.style.color = 'var(--portfolio-text)';
                      }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-8 pt-8"
                style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
              >
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    color: 'var(--portfolio-accent)',
                    lineHeight: 1.4
                  }}
                >
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    color: 'var(--portfolio-text-muted)',
                    fontSize: '0.9rem'
                  }}
                >
                  — Steve Jobs
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-24 text-center"
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.1)'
          }}
        >
          <p style={{ color: 'var(--portfolio-text-muted)', fontSize: '0.9rem' }}>
            © 2026 Scholas Rai. Crafted with passion and lots of coffee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
