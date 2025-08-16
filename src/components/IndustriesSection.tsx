import { Card, CardContent } from "@/components/ui/card";
import { Factory, ShoppingCart, Heart, DollarSign, GraduationCap, Truck, Building, Rocket } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: ShoppingCart, name: "Retail & E-Commerce" }, 
    { icon: Heart, name: "Healthcare" },
    { icon: DollarSign, name: "Banking & Finance" },
    { icon: GraduationCap, name: "Education" },
    { icon: Truck, name: "Logistics & Supply Chain" },
    { icon: Building, name: "Government & Public Sector" },
    { icon: Rocket, name: "Startups & SMEs" }
  ];

  const certifications = [
    "Microsoft Certified Partner",
    "Cisco Systems Partnership", 
    "Dell Technologies Partner",
    "AWS Solutions Provider",
    "ISO 27001 & ISO 9001 Certified",
    "Vendor-authorized Engineers"
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Focus
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We cater to diverse industries with tailored solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-card p-8 md:p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Strategic Alliances & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-muted-foreground">
              <div>Over 25 years of proven expertise</div>
              <div>Client-focused delivery model</div>
              <div>Certified engineers and experienced professionals</div>
              <div>Scalable solutions with future readiness</div>
              <div>Partnerships with leading technology providers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;