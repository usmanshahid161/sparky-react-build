import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      
      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center md:text-left">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 animate-fade-up">
            Healthcare Revenue Cycle Management
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Accelon Health |{" "}
            <span className="block mt-2">
              End-to-End Healthcare Solutions & Precision{" "}
              <span className="text-gradient">RCM Partner</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Transform your healthcare operations with intelligent automation, 
            strategic consulting, and comprehensive revenue cycle management 
            that drives measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-primary-foreground">500+</p>
                <p className="text-sm text-primary-foreground/60">Healthcare Providers</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-primary-foreground">$2B+</p>
                <p className="text-sm text-primary-foreground/60">Revenue Recovered</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-primary-foreground">98%</p>
                <p className="text-sm text-primary-foreground/60">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
