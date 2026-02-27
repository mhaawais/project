import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-rv-bg overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[15vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
          Right Call
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                <span className="text-rv-accent">Ready</span> to Make the Right Call?
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-rv-text-secondary leading-relaxed max-w-md">
                If you are about to commit serious capital, reputation, or talent to a major decision and want clarity before consequences, send me a message.
              </p>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-rv-bg-tertiary border border-rv-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-rv-text-secondary text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 bg-rv-bg-secondary border border-rv-border-light rounded-lg text-white text-sm placeholder:text-rv-text-muted focus:outline-none focus:border-rv-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-rv-text-secondary text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 bg-rv-bg-secondary border border-rv-border-light rounded-lg text-white text-sm placeholder:text-rv-text-muted focus:outline-none focus:border-rv-accent transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-rv-text-secondary text-sm mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter E-mail"
                      className="w-full px-4 py-3 bg-rv-bg-secondary border border-rv-border-light rounded-lg text-white text-sm placeholder:text-rv-text-muted focus:outline-none focus:border-rv-accent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-rv-text-secondary text-sm mb-2">Mobile No.</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile No."
                      className="w-full px-4 py-3 bg-rv-bg-secondary border border-rv-border-light rounded-lg text-white text-sm placeholder:text-rv-text-muted focus:outline-none focus:border-rv-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-rv-text-secondary text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-rv-bg-secondary border border-rv-border-light rounded-lg text-white text-sm placeholder:text-rv-text-muted focus:outline-none focus:border-rv-accent transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-rv-accent text-white font-medium text-sm rounded-lg hover:bg-rv-accent-hover transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
