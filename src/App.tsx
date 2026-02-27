import { Navbar } from '@/sections/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { ApproachSection } from '@/sections/ApproachSection';
import { SpeakingSection } from '@/sections/SpeakingSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { BeyondBioSection } from '@/sections/BeyondBioSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rv-bg">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <SpeakingSection />
        <TestimonialsSection />
        <BeyondBioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
