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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Website Under Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <div className="animate-pulse w-2 h-2 bg-primary rounded-full"></div>
              <div className="animate-pulse w-2 h-2 bg-primary rounded-full animation-delay-200"></div>
              <div className="animate-pulse w-2 h-2 bg-primary rounded-full animation-delay-400"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
