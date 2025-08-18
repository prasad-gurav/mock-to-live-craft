import { Card, CardContent } from "@/components/ui/card";
import { Globe, Lightbulb, Link } from "lucide-react";

const CoreStrengthsSection = () => {
  const strengths = [
    {
      icon: Globe,
      title: "Global Presence",
      description: "Headquartered in the UK, delivering strategic technology solutions globally."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub", 
      description: "Our Pune delivery center houses elite engineers ready to solve complex tech challenges."
    },
    {
      icon: Link,
      title: "Integrated Solutions",
      description: "From infrastructure and software to recruitment and BPO — we are your trusted technology partner."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bridging Global Expertise with Local Talent
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreStrengthsSection;