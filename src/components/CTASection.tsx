import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-teal-light to-accent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground leading-tight mb-4">
            Ready to Leap Beyond Limits of Traditional Healthcare Operations?
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-4">
            Stop settling for incremental fixes. Build the engine 
            — once and for all.
          </p>
          <p className="text-sm text-accent-foreground/60 mb-8">
            Start the conversation and see the Accelon difference today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline"
              size="xl"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us: +1 (800) 555-0199
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
