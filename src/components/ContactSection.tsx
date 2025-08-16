import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At BNS Technologies, we are passionate about technology and dedicated to helping businesses succeed. 
            Contact us today to learn more about how we can help your business achieve its goals through technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Head Office */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Head Office</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">BNS Technologies INC</h3>
                <p className="text-muted-foreground">
                  4 Ann Street, Bergenfield,<br />
                  New Jersey, USA 07621-1602
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (201) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">info@bns-tech.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">www.bns-tech.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* India Office */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">India Office</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">BNS Technologies LLP</h3>
                <p className="text-muted-foreground">
                  39, Khandke Building, 3 Rd floor,<br />
                  Shaheed Bhagat Singh road,<br />
                  Fort, Mumbai 400001
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+91 22 1234 5678</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">india@bns-tech.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            Get in Touch Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;