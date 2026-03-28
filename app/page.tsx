import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustBarSection from "@/components/sections/TrustBarSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <TrustBarSection />
      <ServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
