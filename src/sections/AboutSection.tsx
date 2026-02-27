import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-rv-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-rv-border">
                <img
                  src="/images/businessman-silhouette.jpg"
                  alt="Business leader on stage"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rv-bg/30 to-transparent" />
              </div>
            </motion.div>
          </FadeIn>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Smart People Make{' '}
                <span className="text-rv-accent">Expensive Mistakes.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-rv-text-secondary leading-relaxed">
                Because no one slows things down early enough to ask the uncomfortable questions. For over 15 years, I've worked behind the scenes inside Fortune 100 and large-scale enterprise environments. I've stood at the intersection of technology, systems, and business outcomes. I've watched capable teams burn time, money, and credibility because governance was unclear, incentives were misaligned, or no one wanted to challenge momentum.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-rv-text-secondary leading-relaxed">
                My path to this work was not predictable. I was hacking computers as a teenager and consulting before I fully understood what that meant. I tested as having a genius-level IQ, which sounds impressive until you live with it. Add ADHD and legal blindness, and you learn quickly that raw intelligence does not protect you from consequences.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-rv-text-secondary leading-relaxed">
                Today, leaders bring me in when major decisions are drifting and getting them wrong could cost millions. I ask the questions most people are already thinking but will not say out loud. Because reality always collects its bill.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
