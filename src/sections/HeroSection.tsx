import { motion } from 'framer-motion';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-rv-bg to-rv-bg-secondary overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
          Right Call
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-6"
          >
            {/* Tag */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-rv-accent rounded-full" />
              <span className="text-rv-text-secondary text-sm font-medium">Strategic Advisor</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight"
            >
              Who Leaders Call When the Stakes Are High and Getting It Wrong Costs Millions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="text-rv-text-secondary text-lg"
            >
              I pressure-test ideas before you waste people, capital, or credibility.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <PrimaryButton href="#contact">Book Me to Speak</PrimaryButton>
              <SecondaryButton href="#services">Get No-BS Consulting</SecondaryButton>
            </motion.div>

            {/* Trust Line */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              className="text-rv-text-muted text-sm pt-4 max-w-md"
            >
              Trusted inside Fortune 100 and global enterprise environments for high-stakes AI, product, and governance decisions.
            </motion.p>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rv-bg via-transparent to-transparent z-10" />
              
              {/* Portrait Image */}
              <img
                src="/images/hero-portrait.jpg"
                alt="Robert Vandervoort - Strategic Advisor"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rv-bg to-transparent" />
    </section>
  );
}
