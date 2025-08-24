import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
	return (
		<section
			className="relative min-h-screen flex items-center justify-center overflow-hidden py-14 md:py-0"
			style={{
				backgroundImage: "url('/grid/hero-bg.png')",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 md:left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
				<div className="absolute top-40 right-10 md:right-32 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
				<div className="absolute bottom-40 left-10 md:left-40 w-2 h-2 bg-primary rounded-full animate-pulse delay-2000"></div>
				<div className="absolute bottom-20 right-10 md:right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-500"></div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8 text-center lg:text-left">
						<div className="space-y-6">
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
								Connecting the{" "}
								<span className="relative inline-flex items-center gap-x-3">
									<span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
										Dots
									</span>
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
										<div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-300"></div>
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
									</div>
								</span>
							</h1>

							<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
								BNS Technologies bridges global expertise with local excellence,
								creating seamless connections in IT infrastructure and
								comprehensive business solutions.
							</p>
						</div>

						{/* CTA Buttons (visible only if needed later) */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							{/* <Button size="lg" className="text-lg px-8 py-3 h-12">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 h-12"
              >
                View Case Study
              </Button> */}
						</div>

						{/* Stats */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-6 sm:gap-10 pt-4">
							<div className="text-center sm:text-left">
								<div className="text-sm text-muted-foreground">
									Trusted by world's
								</div>
								<div className="text-sm text-muted-foreground">
									biggest brands
								</div>
							</div>
							<div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
								<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<div className="w-4 h-4 bg-primary rounded-full"></div>
								</div>
								<span className="text-sm text-muted-foreground">
									Efficiency
								</span>
								<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<div className="w-4 h-4 bg-primary rounded-full"></div>
								</div>
								<span className="text-sm text-muted-foreground">
									Blockchain
								</span>
								<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<div className="w-4 h-4 bg-primary rounded-full"></div>
								</div>
								<span className="text-sm text-muted-foreground">Mobile</span>
							</div>
						</div>
					</div>

					{/* Right Content - Dashboard Cards */}
					<div className="relative flex justify-center my-14 lg:justify-end ">
						<Card className="relative p-6 bg-card/80 backdrop-blur-sm border shadow-lg w-full max-w-md">
							<div className="space-y-6">
								{/* Header with stat + badge */}
								<div className="flex justify-between items-center">
									<div>
										<div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
											15+
										</div>
										<div className="text-xs sm:text-sm text-muted-foreground leading-tight">
											Active IT companies <br />
											we work with globally
										</div>
									</div>
									<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
										<div className="w-3 h-3 bg-background rounded-full"></div>
									</div>
								</div>

								{/* Headline */}
								<div>
									<h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
										Bridge Network Solutions
									</h3>
									<div className="text-lg sm:text-2xl font-bold text-primary">
										Drive more connectivity
									</div>
									<div className="text-muted-foreground text-sm sm:text-base">
										and business growth
									</div>
								</div>

								{/* Mini chart */}
								<div className="flex items-end space-x-2 h-20 sm:h-24">
									<div className="bg-primary/20 w-6 sm:w-8 h-10 sm:h-12 rounded-t"></div>
									<div className="bg-primary/40 w-6 sm:w-8 h-14 sm:h-16 rounded-t"></div>
									<div className="bg-primary w-6 sm:w-8 h-16 sm:h-20 rounded-t"></div>
									<div className="bg-primary/60 w-6 sm:w-8 h-12 sm:h-14 rounded-t"></div>
									<div className="bg-primary/80 w-6 sm:w-8 h-16 sm:h-18 rounded-t"></div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
				<div className="flex flex-col items-center animate-bounce">
					<span className="text-muted-foreground text-xs sm:text-sm mb-2">
						Discover More
					</span>
					<div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
						<div className="w-1 h-2 sm:h-3 bg-muted-foreground/60 rounded-full mt-2 animate-pulse"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
