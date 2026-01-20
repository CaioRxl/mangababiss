import HeroSection from "@/components/landing/HeroSection";
import ObjectiveSection from "@/components/landing/ObjectiveSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import VideoSection from "@/components/landing/VideoSection";
import TeamSection from "@/components/landing/TeamSection";
import FooterSection from "@/components/landing/FooterSection";
import AnimatedSection from "@/components/landing/AnimatedSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      
      <AnimatedSection>
        <ObjectiveSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <DifferentialsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <FeaturesCarousel />
      </AnimatedSection>
      
      <AnimatedSection>
        <VideoSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
      
      <FooterSection />
    </main>
  );
};

export default Index;