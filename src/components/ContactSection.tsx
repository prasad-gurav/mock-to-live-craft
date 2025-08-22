import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to grow your business with tailored tech solutions?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* UK Head Office */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">UK Head Office</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">BNS Technologies Ltd</h3>
                <p className="text-muted-foreground">
                  Unit 13 Freeland Park Wareham Road,<br />
                  Lytchett Matravers, Poole, England,<br />
                  BH16 6FA
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+44 [Phone Number]</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">info@bnstechnologies.co.uk</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Pune Delivery Center */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Pune Delivery Center</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">BNS Technologies India</h3>
                <p className="text-muted-foreground">
                  C1-901, KINGSTONE SERENE AUTADE,<br />
                  SR NO 94/1 & 94/2, Handewadi,<br />
                  Pune, Maharashtra 412308
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+91 [Phone Number]</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">pune@bnstechnologies.co.uk</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-gradient-card p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Contact Form</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your project or requirements..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;