import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lightbulb, Clock, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Experience",
      description: "25+ years of delivering technology excellence across multiple industries."
    },
    {
      icon: Users,
      title: "Client-Centric Approach", 
      description: "Every solution is crafted around your specific needs and challenges."
    },
    {
      icon: Lightbulb,
      title: "Expert Team",
      description: "Skilled professionals with certifications in key technologies and platforms."
    },
    {
      icon: Clock,
      title: "Reliable Support",
      description: "Round-the-clock service with dedicated account managers and support staff."
    },
    {
      icon: TrendingUp,
      title: "Innovation-Driven",
      description: "We stay ahead of the curve to bring you the latest, most effective technology solutions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose BNS Technologies?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses through intelligent, secure, and scalable IT solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-card p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            To be a globally respected technology partner known for transforming businesses through 
            intelligent, secure, and scalable IT solutions.
          </p>
          
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To provide innovative, customized, and future-proof technology services that enable our 
            clients to grow, compete, and succeed in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;