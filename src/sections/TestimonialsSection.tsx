import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Robert naturally adds value to organizations and goes the extra mile without being asked. These qualities are invaluable.",
    name: 'Edward Shanahan',
    title: 'Sr. AI Solutions Engineer',
    avatar: '/images/avatar-edward.jpg',
  },
  {
    quote: "Robert brings quality in every interaction he has and delivers results. You truly do inspire.",
    name: 'Eugene Breen',
    title: 'Senior Customer Success Engineer',
    avatar: '/images/avatar-eugene.jpg',
  },
  {
    quote: "With Robert's cleverness we were always one step ahead. We achieved excellent results.",
    name: 'Mehmet Taluk',
    title: 'Consultant',
    avatar: '/images/avatar-mehmet.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-rv-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Trusted Behind the Scenes of{' '}
            <span className="text-rv-accent">Fortune 100</span> and Global Enterprise Organizations
          </h2>
        </FadeIn>

        {/* Testimonial Cards */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-rv-bg-secondary border border-rv-border rounded-xl p-6 lg:p-8 h-full"
                whileHover={{ y: -4, borderColor: '#E85A2B' }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-rv-accent mb-4" />

                {/* Quote Text */}
                <p className="text-rv-text-secondary text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-rv-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-rv-text-muted text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
