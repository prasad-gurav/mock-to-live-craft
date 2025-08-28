import { Card, CardContent } from "@/components/ui/card";
import {
	Building2,
	Factory,
	Hotel,
	Shield,
	Zap,
	Globe,
	Network,
	Cpu,
	Server,
} from "lucide-react";

const IndustriesSection = () => {
	const marketExpertise = [
		{
			icon: Building2,
			name: "Government Facilities",
			description: "Comprehensive solutions for public sector infrastructure",
		},
		{
			icon: Factory,
			name: "Smart Buildings & Campuses",
			description: "Intelligent building automation and management systems",
		},
		{
			icon: Cpu,
			name: "Industrial Automation",
			description: "Advanced manufacturing and process automation solutions",
		},
		{
			icon: Network,
			name: "Corporate IT Infrastructure",
			description: "Enterprise-grade technology infrastructure and networks",
		},
		{
			icon: Hotel,
			name: "Hospitality Automation",
			description: "Hotel automation, security, and PA systems integration",
		},
	];

	const infrastructureCapabilities = [
		{
			name: "Structured Cabling",
			description: "Professional network cabling and infrastructure",
		},
		{
			name: "Server & Network Racks",
			description: "Data center equipment and rack solutions",
		},
		{
			name: "Smart Electric Meters",
			description: "IoT-enabled energy monitoring and management",
		},
		{
			name: "OFC Laying & Route Survey",
			description: "Fiber optic cable installation and planning",
		},
		{
			name: "Command & Control Centers",
			description: "Mission-critical operation centers",
		},
		{
			name: "O&M of Installed Systems",
			description: "Operations and maintenance services",
		},
	];

	return (
		<section className="py-20 bg-gradient-card">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Market Expertise
					</h2>
					<div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Delivering specialized solutions across diverse industry verticals
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{marketExpertise.map((industry, index) => {
						const IconComponent = industry.icon;
						return (
							<Card
								key={index}
								className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
							>
								<CardContent className="p-6">
									<div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
										<IconComponent className="w-8 h-8 text-primary-foreground" />
									</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{industry.name}
									</h3>
									<p className="text-muted-foreground text-sm">
										{industry.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="mb-16">
					<h3 className="text-3xl font-bold text-center text-foreground mb-12">
						Infrastructure Capabilities
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{infrastructureCapabilities.map((capability, index) => (
							<Card
								key={index}
								className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
							>
								<CardContent className="p-6">
									<div className="flex items-center space-x-3 mb-3">
										<div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
										<h4 className="font-semibold text-foreground">
											{capability.name}
										</h4>
									</div>
									<p className="text-muted-foreground text-sm">
										{capability.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Alliances & Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Technology Partners</h4>
                <p className="text-muted-foreground">Cisco, Microsoft, AWS, Dell, HP, VMware</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Quality Certifications</h4>
                <p className="text-muted-foreground">ISO 27001, ISO 9001, CMMI Level 3</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Security Compliance</h4>
                <p className="text-muted-foreground">SOC 2, PCI DSS, GDPR Compliant</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Differentiators</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">End-to-end project lifecycle management</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">24/7 global support and monitoring</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Scalable and future-ready architecture</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Cost-effective solutions with quality assurance</p>
              </div>
            </div>
          </div>
        </div> */}
			</div>
		</section>
	);
};

export default IndustriesSection;
