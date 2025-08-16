import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Network,
	Cloud,
	Shield,
	Settings,
	Briefcase,
	Database,
	Server,
	Code,
} from "lucide-react";
import { useRef, useEffect } from "react";

const fadeInUp = `
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(40px) scale(0.96);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
`;

const ServicesSection = () => {
	const services = [
		{
			icon: Network,
			title: "Network Solutions",
			items: [
				"Network architecture planning and design",
				"LAN/WAN implementation and optimization",
				"Wireless network setup and security",
				"Structured cabling and hardware deployment",
			],
		},
		{
			icon: Cloud,
			title: "Cloud Services",
			items: [
				"Cloud readiness assessment and migration",
				"Public, private, and hybrid cloud solutions",
				"Microsoft Azure, AWS, and Google Cloud support",
				"Cloud storage, data management, and DevOps integration",
			],
		},
		{
			icon: Shield,
			title: "Cybersecurity Services",
			items: [
				"Risk and vulnerability assessment",
				"Firewall and endpoint protection",
				"Network intrusion detection systems (IDS/IPS)",
				"Data encryption and secure access control",
			],
		},
		{
			icon: Settings,
			title: "Managed IT Services",
			items: [
				"24/7 remote monitoring and technical support",
				"IT infrastructure maintenance and optimization",
				"Server and workstation management",
				"Patch management and software updates",
			],
		},
		{
			icon: Briefcase,
			title: "IT Consulting",
			items: [
				"IT infrastructure audit and roadmap planning",
				"Technology strategy alignment",
				"Digital transformation consulting",
				"Compliance and regulatory consulting (GDPR, ISO, etc.)",
			],
		},
		{
			icon: Database,
			title: "Data Backup & Disaster Recovery",
			items: [
				"Business continuity planning",
				"Automated cloud backup solutions",
				"Real-time data replication and failover",
				"Disaster recovery testing and support",
			],
		},
		{
			icon: Server,
			title: "Enterprise IT Infrastructure",
			items: [
				"Server and storage systems setup",
				"Virtualization (VMware, Hyper-V)",
				"Data center design and migration",
				"Hardware procurement and lifecycle management",
			],
		},
		{
			icon: Code,
			title: "Application & Software Services",
			items: [
				"Custom software development",
				"Web and mobile application design",
				"ERP and CRM implementation",
				"API integrations and legacy system modernization",
			],
		},
	];

	// Animation on scroll (simple fade-in)
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			cardsRef.current.forEach((card) => {
				if (card) {
					const rect = card.getBoundingClientRect();
					if (rect.top < window.innerHeight - 60) {
						card.classList.add("animate-fadeInUp");
					}
				}
			});
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section id="services" className="py-20 bg-muted/30 relative">
			<style>
				{fadeInUp}
				{`
				.animate-fadeInUp {
					animation: fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) forwards;
				}
				`}
			</style>
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl opacity-60"></div>
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Service Portfolio
					</h2>
					<div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded"></div>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Comprehensive technology solutions tailored to your business needs
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<div
								key={index}
								ref={(el) => (cardsRef.current[index] = el)}
								className="opacity-0 transform transition-all duration-500"
								style={{ transitionDelay: `${index * 80}ms` }}
							>
								<Card
									className="group relative overflow-hidden rounded-2xl border-0 shadow-lg bg-gradient-to-br from-card/80 via-background/80 to-card/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl min-h-[500px]"
									tabIndex={0}
									role="region"
									aria-label={service.title}
								>
									<CardHeader className="text-center pb-2 border-b border-muted/40 bg-gradient-to-t from-muted/30 to-transparent">
										<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative">
											<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/60 blur-lg opacity-30 scale-110 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500"></div>
											<div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
												<IconComponent className="w-8 h-8 text-primary-foreground drop-shadow" />
											</div>
										</div>
										<CardTitle className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="pt-4 pb-6 px-6">
										<ul className="space-y-3">
											{service.items.map((item, itemIndex) => (
												<li
													key={itemIndex}
													className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors duration-300"
												>
													<span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></span>
													{item}
												</li>
											))}
										</ul>
									</CardContent>
									{/* Animated border on hover */}
									<span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/60 group-focus-within:border-primary/80 transition-all duration-300"></span>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
