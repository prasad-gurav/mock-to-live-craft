import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Users, Headphones, Shield, Network, Database, Zap, Cog, Phone } from "lucide-react";
import dataCenterImg from "@/assets/data-center.png";
import softwareDevImg from "@/assets/software-development.png";
import staffingImg from "@/assets/staffing-solutions.png";
import bpoImg from "@/assets/bpo-services.png";

const NewServicesSection = () => {
  const coreServices = [
    {
      icon: Server,
      title: "IT Infrastructure Development",
      description: "Access Control & Attendance, Physical & Security Systems, Surveillance & Monitoring, Networking & Structured Cabling, Data Center Solutions, Fire Safety & Power Solutions, Building Automation & BMS",
      image: dataCenterImg,
      features: ["CCTV, barriers, detectors, scanners", "Command/control centres", "OFC, aerial, trenching", "Racks, raised flooring, cabling, panels"]
    },
    {
      icon: Code,
      title: "Software Application Development",
      description: "Full lifecycle: planning → development → deployment → support. Custom web, mobile & enterprise systems, legacy modernization & cloud migration, focus on UX & performance",
      image: softwareDevImg,
      features: ["Custom web & mobile systems", "Legacy modernization", "Cloud migration", "UX & performance focused"]
    },
    {
      icon: Users,
      title: "Staffing Solutions", 
      description: "Global talent pool access, contractual, permanent & niche hiring, flexible models for scaling teams",
      image: staffingImg,
      features: ["Global talent access", "Contract & permanent hiring", "Niche skill recruitment", "Flexible scaling models"]
    },
    {
      icon: Headphones,
      title: "Business Process Outsourcing (BPO)",
      description: "24/7 customer support, HR & Payroll outsourcing, Finance & Accounting services, Data entry & back-office operations",
      image: bpoImg,
      features: ["24/7 customer support", "HR & Payroll services", "Finance & Accounting", "Data entry operations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology and business solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-background/80 backdrop-blur-sm border-border/20">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-primary">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;