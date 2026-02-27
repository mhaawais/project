import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

const keynotes = [
  {
    title: 'Why Smart Ideas Fail',
    description: 'How intelligent teams make expensive mistakes and how judgment prevents them.',
  },
  {
    title: 'AI, Governance & The Human Cost of Getting It Wrong',
    description: 'The financial and human consequences of rushed AI implementation.',
  },
  {
    title: 'Pressure-Testing Innovation Before It Burns Resources',
    description: 'Designing systems that survive contact with reality.',
  },
  {
    title: 'Building the Wrong Thing Well Is Still Failure',
    description: "Why execution doesn't save flawed strategy.",
  },
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="py-20 lg:py-32 bg-gradient-to-b from-rv-bg-secondary to-rv-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Speaking & Media
              </h2>
              <p className="text-rv-text-secondary leading-relaxed">
                I am a Strategic Advisor trusted inside some of the largest enterprises to guide complex technology, product, and governance decisions.
              </p>
              <p className="text-rv-text-secondary leading-relaxed mt-4">
                I am known for asking the questions most people avoid, especially when the cost of getting it wrong is high.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-xl font-semibold text-white mb-6">Signature Keynotes</h3>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="space-y-0">
              {keynotes.map((keynote, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="py-5 border-b border-rv-border last:border-b-0 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-base font-semibold text-white mb-1 group-hover:text-rv-accent transition-colors duration-200">
                      {keynote.title}
                    </h4>
                    <p className="text-rv-text-muted text-sm">
                      {keynote.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5} className="pt-4">
              <PrimaryButton href="#contact">Invite Me to Speak</PrimaryButton>
            </FadeIn>
          </div>

          {/* Right - Portrait */}
          <FadeIn direction="right" className="lg:sticky lg:top-32">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-rv-border">
                <img
                  src="/images/speaking-portrait.jpg"
                  alt="Robert Vandervoort speaking"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rv-bg/40 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
