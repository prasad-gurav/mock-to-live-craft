import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/50 to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Connecting the{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Dots
                  </span>
                  <div className="absolute -bottom-2 left-0 flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-300"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
                  </div>
                </span>
                {" "}with our forward-thinking
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                BNS Technologies bridges global expertise with local excellence, creating seamless connections 
                in IT infrastructure and comprehensive business solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-3 h-12">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-12">
                View Case Study
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Trusted by world's</div>
                <div className="text-sm text-muted-foreground">biggest brands</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Efficiency</span>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Blockchain</span>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Mobile</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Cards */}
          <div className="relative">
            {/* Large stat card */}
            <Card className="absolute top-0 right-0 p-6 bg-card/80 backdrop-blur-sm border shadow-lg w-48 z-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Active IT companies that</div>
                <div className="text-sm text-muted-foreground">we work with individual or</div>
                <div className="text-sm text-muted-foreground">group of employees</div>
              </div>
            </Card>
            
            {/* Analytics chart card */}
            <Card className="relative mt-16 p-6 bg-card/80 backdrop-blur-sm border shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">Bridge Network Solutions</h3>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">Drive more connectivity</div>
                <div className="text-muted-foreground">and business growth</div>
                
                {/* Mock chart */}
                <div className="flex items-end space-x-2 h-24">
                  <div className="bg-primary/20 w-8 h-12 rounded-t"></div>
                  <div className="bg-primary/40 w-8 h-16 rounded-t"></div>
                  <div className="bg-primary w-8 h-20 rounded-t"></div>
                  <div className="bg-primary/60 w-8 h-14 rounded-t"></div>
                  <div className="bg-primary/80 w-8 h-18 rounded-t"></div>
                </div>
              </div>
            </Card>
            
            {/* Bottom stat card */}
            <Card className="absolute bottom-0 left-0 p-4 bg-primary text-primary-foreground shadow-lg w-40 z-20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-90">Projects completed</div>
                <div className="text-sm opacity-90">successfully</div>
                <div className="flex justify-center mt-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-background/20 rounded-full border border-primary-foreground"></div>
                    <div className="w-6 h-6 bg-background/20 rounded-full border border-primary-foreground"></div>
                    <div className="w-6 h-6 bg-background/20 rounded-full border border-primary-foreground"></div>
                    <div className="w-6 h-6 bg-background/20 rounded-full border border-primary-foreground flex items-center justify-center text-xs">+</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-muted-foreground text-sm mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;