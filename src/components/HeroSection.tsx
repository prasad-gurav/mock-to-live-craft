import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-accent">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="white" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M 100 200 Q 300 100 500 300 T 900 200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M 200 500 Q 400 300 600 600 T 800 400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse delay-1000"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Focus on "Connecting the Dots" */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight">
              Connecting
            </h1>
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full self-center"></div>
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse delay-300"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full self-center"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-600"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
              the <span className="text-accent bg-white/10 px-4 py-2 rounded-lg">Dots</span>
            </h1>
          </div>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white/90 font-light">
              BNS Technologies
            </p>
            <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4"></div>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From UK headquarters to Pune delivery center, we bridge global expertise with local excellence, 
            creating seamless connections in IT infrastructure, software development, and comprehensive business solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-10 py-4 bg-white text-primary hover:bg-white/90 font-semibold">
              Start Connecting
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/60 text-sm mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;