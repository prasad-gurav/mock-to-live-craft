import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lightbulb, Clock, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Integrated IT & Security Solutions",
      description: "Comprehensive technology solutions combining infrastructure, security, and innovation in one unified approach."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record in Large-Scale Projects",
      description: "Successfully delivered complex enterprise solutions with measurable results and client satisfaction."
    },
    {
      icon: Users,
      title: "Competitive Pricing with Quality Assurance",
      description: "Cost-effective solutions without compromising on quality, backed by rigorous testing and validation."
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock monitoring, support, and maintenance services ensuring uninterrupted business operations."
    },
    {
      icon: Lightbulb,
      title: "Turnkey Project Execution",
      description: "Complete project lifecycle management from planning to maintenance with single vendor simplicity."
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
            Your premier solution provider, turnkey system integrator, and trusted consultant with unified accountability
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
          <h3 className="text-3xl font-bold text-foreground mb-6">Our USP</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">✓ Turnkey Project Execution</h4>
              <p className="text-muted-foreground text-sm">from planning to maintenance</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">✓ Single Vendor Simplicity</h4>
              <p className="text-muted-foreground text-sm">unified accountability</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">✓ Future-Ready Design</h4>
              <p className="text-muted-foreground text-sm">scalable, modular, tech-integrated</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">✓ Quality & Reliability First</h4>
              <p className="text-muted-foreground text-sm">trusted brands & best practices</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">✓ Customer-Centric Approach</h4>
              <p className="text-muted-foreground text-sm">tailored to client's needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;