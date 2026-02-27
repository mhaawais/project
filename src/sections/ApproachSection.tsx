import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const principles = [
  {
    title: 'Truth Over Comfort',
    description: 'Honest questions now beat painful consequences later.',
  },
  {
    title: 'Judgment Beats Genius',
    description: 'Smart ideas fail all the time without discernment.',
  },
  {
    title: 'Human First — Always',
    description: 'People matter more than trends, tools, or ego.',
  },
  {
    title: 'Integrity in Action',
    description: "If it's not worth doing, I'll say so.",
  },
  {
    title: 'Pressure-Test Everything',
    description: 'If your idea survives scrutiny, its worth building.',
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-32 bg-rv-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <FadeIn direction="left" className="lg:sticky lg:top-32">
            <div className="relative overflow-hidden rounded-2xl border border-rv-border">
              <img
                src="/images/team-meeting.jpg"
                alt="Team meeting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rv-bg/30 to-transparent" />
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                My <span className="text-rv-accent">Approach</span>
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="space-y-0">
              {principles.map((principle, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="py-6 border-b border-rv-border last:border-b-0 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rv-accent transition-colors duration-200">
                      {principle.title}
                    </h3>
                    <p className="text-rv-text-secondary text-sm">
                      {principle.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
