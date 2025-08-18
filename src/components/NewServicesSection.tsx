import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Users, Headphones } from "lucide-react";

const NewServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure Development",
      description: "We specialize in building robust and scalable IT environments. Our services include comprehensive cloud enablement and migration strategies, ensuring your business leverages the power of the cloud. We also provide advanced network security solutions and scalable architecture design to protect your data and support future growth."
    },
    {
      icon: Code,
      title: "Software Application Development",
      description: "Our team creates custom software applications tailored to your business needs. We cover the full lifecycle of development for web, mobile, and enterprise systems. Our expertise includes modernizing legacy systems, implementing cutting-edge technologies, and focusing on intuitive user experience and high performance."
    },
    {
      icon: Users,
      title: "Staffing Solutions", 
      description: "We offer flexible staffing solutions to help you build and scale your team with precision. Our services range from contractual and permanent placements to niche-skill recruitment for specialized roles in areas like AI, DevOps, and Cybersecurity, connecting you with top talent from around the globe."
    },
    {
      icon: Headphones,
      title: "Business Process Outsourcing (BPO)",
      description: "BNS provides comprehensive Business Process Outsourcing to optimize your operations. We offer reliable, 24/7 customer support, efficient HR and payroll services, streamlined finance and accounting solutions, and accurate data entry services, allowing you to focus on your core business."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology and business solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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