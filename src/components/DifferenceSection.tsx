import { Check } from "lucide-react";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const DifferenceSection = () => {
  const points = [
    "Deep operational DNA rooted in healthcare complexities",
    "Technology-enabled workflows, not just consulting",
    "End-to-end accountability for measurable outcomes",
    "Proven track record with 500+ healthcare providers",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl" />
            <img 
              src={healthcareTeam}
              alt="Healthcare professionals collaborating"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="font-semibold text-foreground">Trusted Partner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Healthcare organizations across the globe trust our expertise
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              The Accelon Difference
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Beyond Ordinary.{" "}
              <span className="text-gradient">An Operational DNA.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Accelon Health, we don't just consult — we become an extension 
              of your team. Our solutions are built on a deep understanding of 
              healthcare operations, combining strategic insight with cutting-edge 
              technology to deliver transformational results.
            </p>
            
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
