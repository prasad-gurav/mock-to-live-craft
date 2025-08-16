import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Cloud, Shield, Settings, Briefcase, Database, Server, Code } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Network,
      title: "Network Solutions",
      items: [
        "Network architecture planning and design",
        "LAN/WAN implementation and optimization", 
        "Wireless network setup and security",
        "Structured cabling and hardware deployment"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      items: [
        "Cloud readiness assessment and migration",
        "Public, private, and hybrid cloud solutions",
        "Microsoft Azure, AWS, and Google Cloud support",
        "Cloud storage, data management, and DevOps integration"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      items: [
        "Risk and vulnerability assessment",
        "Firewall and endpoint protection",
        "Network intrusion detection systems (IDS/IPS)",
        "Data encryption and secure access control"
      ]
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      items: [
        "24/7 remote monitoring and technical support",
        "IT infrastructure maintenance and optimization",
        "Server and workstation management",
        "Patch management and software updates"
      ]
    },
    {
      icon: Briefcase,
      title: "IT Consulting",
      items: [
        "IT infrastructure audit and roadmap planning",
        "Technology strategy alignment",
        "Digital transformation consulting",
        "Compliance and regulatory consulting (GDPR, ISO, etc.)"
      ]
    },
    {
      icon: Database,
      title: "Data Backup & Disaster Recovery",
      items: [
        "Business continuity planning",
        "Automated cloud backup solutions",
        "Real-time data replication and failover",
        "Disaster recovery testing and support"
      ]
    },
    {
      icon: Server,
      title: "Enterprise IT Infrastructure",
      items: [
        "Server and storage systems setup",
        "Virtualization (VMware, Hyper-V)",
        "Data center design and migration",
        "Hardware procurement and lifecycle management"
      ]
    },
    {
      icon: Code,
      title: "Application & Software Services",
      items: [
        "Custom software development",
        "Web and mobile application design",
        "ERP and CRM implementation",
        "API integrations and legacy system modernization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Service Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;