import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, Headphones } from "lucide-react";
import dataCenterImg from "@/assets/data-center.png";
import fleetManagementImg from "@/assets/fleet-management.png";
import staffingImg from "@/assets/staffing-solutions.png";
import globalSupportImg from "@/assets/global-support.png";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      title: "E-Commerce Cloud Transformation",
      client: "UK-based Retailer",
      challenge: "A UK-based retailer's outdated infrastructure struggled with high traffic during sales events.",
      solution: "We migrated their entire platform to a scalable cloud environment, implementing a microservices architecture.",
      result: "The client saw a 40% improvement in load times and zero downtime during peak periods, drastically enhancing the user experience.",
      metrics: ["40% faster load times", "Zero downtime", "Enhanced UX"],
      category: "Infrastructure",
      image: dataCenterImg
    },
    {
      icon: Clock,
      title: "Fleet Management Web App",
      client: "Logistics Client",
      challenge: "A logistics company needed to improve real-time tracking and route optimization for its fleet.",
      solution: "We developed a custom web application with GPS integration and a clean, user-friendly dashboard.",
      result: "The client reduced fuel costs by 15% and improved delivery efficiency by 25%, leading to significant operational savings.",
      metrics: ["15% fuel cost reduction", "25% efficiency gain", "Real-time tracking"],
      category: "Software Development",
      image: fleetManagementImg
    },
    {
      icon: Users,
      title: "DevOps Talent Staffing",
      client: "Fintech Startup",
      challenge: "A fast-growing Fintech startup needed to scale its engineering team with niche DevOps expertise.",
      solution: "Our staffing team quickly sourced and placed three senior DevOps engineers with the exact skill set required.",
      result: "The startup accelerated its product release cycle by 3 months, gaining a crucial competitive advantage in the market.",
      metrics: ["3 months faster delivery", "3 senior engineers placed", "Competitive advantage"],
      category: "Staffing",
      image: staffingImg
    },
    {
      icon: Headphones,
      title: "24/7 BPO Setup",
      client: "SaaS Platform",
      challenge: "A global SaaS company needed to provide round-the-clock customer support without building an internal team.",
      solution: "We established a dedicated 24/7 BPO team from our Pune delivery center, integrating seamlessly with their existing systems.",
      result: "Customer satisfaction scores increased by 30%, and the client gained a loyal international customer base.",
      metrics: ["30% satisfaction increase", "24/7 coverage", "Global customer base"],
      category: "BPO",
      image: globalSupportImg
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Infrastructure": return "bg-blue-100 text-blue-800";
      case "Software Development": return "bg-green-100 text-green-800";
      case "Staffing": return "bg-purple-100 text-purple-800";
      case "BPO": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients across our core service areas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge className={getCategoryColor(study.category)}>
                      {study.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {study.client}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-muted-foreground text-sm mb-3">{study.result}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.metrics.map((metric, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
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

export default CaseStudiesSection;