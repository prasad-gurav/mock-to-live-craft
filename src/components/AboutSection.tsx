import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Constantly embracing change and encouraging creative solutions."
    },
    {
      title: "Integrity", 
      description: "Honesty, ethics, and transparency in every client engagement."
    },
    {
      title: "Customer Focus",
      description: "Commitment to long-term partnerships and client satisfaction."
    },
    {
      title: "Excellence",
      description: "Delivering superior quality in everything we do."
    },
    {
      title: "Teamwork",
      description: "Collaborating to achieve collective goals."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="font-semibold text-foreground">BNS Technologies</span> is your trusted partner for IT infrastructure, software development, and global staffing solutions. Headquartered in the UK with a major delivery center in Pune, we combine global expertise with localized excellence.
            </p>
            
            <div className="space-y-3 text-lg text-muted-foreground">
              <p>• Premier solution provider, Turnkey System Integrator, and Consultant</p>
              <p>• 10+ years of experience in Indian market</p>
              <p>• Expertise: IT Infrastructure, Security Systems, Software, Staffing, BPO</p>
            </div>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver cutting-edge, integrated IT & security solutions that empower businesses worldwide. 
                We are committed to providing scalable, cost-effective, and future-ready technology solutions 
                with unified accountability and customer-centric approach.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To combine innovation, reliability, and customer-centric service for sustainable growth. 
                We envision becoming the global leader in integrated technology solutions, known for quality, 
                trusted brands, and best practices in every project we undertake.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;