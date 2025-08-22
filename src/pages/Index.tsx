import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreStrengthsSection from "@/components/CoreStrengthsSection";
import NewServicesSection from "@/components/NewServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoreStrengthsSection />
        <NewServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
