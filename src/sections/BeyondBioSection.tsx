import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Check } from 'lucide-react';

const facts = [
  'Hacked my first computer before I could legally drive',
  'Lived on both sides of complex systems: inside enterprise and outside it',
  "Obsessed with building things, whether it's tech or perfecting my BBQ smoker",
  "I believe in leaving things better, unless you're algae on my boat (sorry, no mercy!)",
];

export function BeyondBioSection() {
  return (
    <section className="py-20 lg:py-32 bg-rv-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Facts */}
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Beyond the <span className="text-rv-accent">Bio</span>
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="space-y-4">
              {facts.map((fact, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-rv-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-rv-accent" />
                    </div>
                    <p className="text-rv-text-secondary leading-relaxed">{fact}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Photo Collage */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-rv-border">
                <img
                  src="/images/photo-collage.jpg"
                  alt="Personal photos collage"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rv-bg/20 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
