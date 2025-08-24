import { Card, CardContent } from "@/components/ui/card";
import { Globe, Lightbulb, Link } from "lucide-react";
import bridgeNetwork from "@/assets/bridge.jpg";
import { motion } from "motion/react";

const CoreStrengthsSection = () => {
	const strengths = [
		{
			icon: Globe,
			title: "Global Presence",
			description:
				"Headquartered in the UK, delivering strategic technology solutions globally.",
		},
		{
			icon: Lightbulb,
			title: "Innovation Hub",
			description:
				"Our Pune delivery center houses elite engineers ready to solve complex tech challenges.",
		},
		{
			icon: Link,
			title: "Integrated Solutions",
			description:
				"From infrastructure and software to recruitment and BPO — we are your trusted technology partner.",
		},
	];

	return (
		<section className="relative overflow-hidden py-28">
			{/* Background */}
			<div className="absolute inset-0">
				<img
					src={bridgeNetwork}
					alt="Network Bridge"
					className="w-full h-full object-cover object-center scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
				<div className="text-center mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
					>
						Bridging Global Expertise <br className="hidden md:block" /> with
						Local Talent
					</motion.h2>
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "6rem" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="h-1 bg-gradient-primary mx-auto mt-6 rounded-full"
					></motion.div>
				</div>

				{/* Strengths grid */}
				<div className="grid md:grid-cols-3 gap-10">
					{strengths.map((strength, index) => {
						const IconComponent = strength.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<Card className="group relative bg-white/90 dark:bg-card/80 backdrop-blur-md rounded-2xl border border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
									<CardContent className="relative p-10">
										<div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
											<IconComponent className="w-8 h-8 text-primary-foreground" />
										</div>
										<h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
											{strength.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{strength.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CoreStrengthsSection;
