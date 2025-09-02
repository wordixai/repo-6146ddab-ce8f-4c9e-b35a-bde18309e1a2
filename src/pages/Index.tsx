import Navigation from '@/components/Navigation';
import GridBackground from '@/components/GridBackground';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import AIAssistantSection from '@/components/AIAssistantSection';
import FeaturesAccordion from '@/components/FeaturesAccordion';
import ToolsSection from '@/components/ToolsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GridBackground />
      <Navigation />
      
      <main>
        <div className="relative overflow-hidden">
          <HeroSection />
          <FeatureSection />
          <AIAssistantSection />
          <FeaturesAccordion />
          <ToolsSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;