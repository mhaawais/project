import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const whoIWorkWith = [
  'Executives making high-stakes technology bets',
  'Product leaders navigating feature sprawl and roadmap drift',
  'Enterprise teams implementing AI without clear governance',
  'Organizations about to commit significant capital or reputation',
];

const whatIDo = [
  'Pressure-test ideas before major investment',
  'Challenge assumptions that hide risk',
  'Clarify governance and decision frameworks',
  'Cut through hype, noise, and internal politics',
  'Align strategy with real-world execution',
];

const whatClientsGain = [
  'Clearer, defensible decisions',
  'Avoidance of expensive missteps',
  'Governance before growth',
  'Strategy that survives contact with reality',
];

const enterpriseResults = [
  '3 million dollars in enterprise revenue year one',
  '8 million dollars in enterprise revenue year two',
  '12 million dollar annual recurring revenue win in complex IoT monitoring',
  'High proof-of-value win rates on enterprise-scale initiatives',
  'Production-grade integrations deployed in live environments',
  'AI and observability initiatives guided under real-world constraints',
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/business-discussion.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rv-bg/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight max-w-4xl mx-auto">
            I Ruin Bad Ideas Early So You Only Invest In What's{' '}
            <span className="text-rv-accent">Truly Worth Building</span>
          </h2>
        </FadeIn>

        {/* Content Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Who I Work With */}
          <StaggerItem>
            <div className="bg-rv-bg-secondary/90 backdrop-blur-sm border border-rv-border rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Who I Work With</h3>
              <ul className="space-y-3">
                {whoIWorkWith.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-rv-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-rv-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* What I Do */}
          <StaggerItem>
            <div className="bg-rv-bg-secondary/90 backdrop-blur-sm border border-rv-border rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">What I Do</h3>
              <ul className="space-y-3">
                {whatIDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-rv-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-rv-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* What Clients Gain */}
          <StaggerItem>
            <div className="bg-rv-bg-secondary/90 backdrop-blur-sm border border-rv-border rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">What Clients Gain</h3>
              <ul className="space-y-3">
                {whatClientsGain.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-rv-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-rv-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Enterprise Results */}
          <StaggerItem>
            <div className="bg-rv-bg-secondary/90 backdrop-blur-sm border border-rv-border rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Enterprise Results</h3>
              <ul className="space-y-3">
                {enterpriseResults.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-rv-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-rv-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
