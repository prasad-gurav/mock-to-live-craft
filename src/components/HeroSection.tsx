import { Button } from "@/components/ui/button";
import techHero from "@/assets/tech-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={techHero} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            BNS Technologies
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-white/30 rounded"></div>
            <div className="mx-4">
              <span className="text-2xl md:text-3xl text-white/90 font-light">
                Connecting the Dots
              </span>
            </div>
            <div className="h-1 w-16 bg-white/30 rounded"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Delivering scalable, secure, and innovative IT solutions that empower organizations 
            across industries to achieve operational excellence and sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Discover Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;