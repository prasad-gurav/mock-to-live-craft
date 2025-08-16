import bnsLogo from "@/assets/bns-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={bnsLogo} alt="BNS Technologies" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 mb-4 max-w-md">
              Connecting the dots in technology for over 25 years. 
              Your trusted partner for comprehensive IT solutions.
            </p>
            <p className="text-background/60 text-sm">
              © 2023 BNS Technologies. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Network Solutions</li>
              <li>Cloud Services</li>
              <li>Cybersecurity</li>
              <li>Managed IT</li>
              <li>IT Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <div className="space-y-2 text-background/80 text-sm">
              <p>4 Ann Street, Bergenfield,<br />New Jersey, USA</p>
              <p>info@bns-tech.com</p>
              <p>www.bns-tech.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Connecting the Dots | BNS Technologies - Your Technology Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;