import { Cog, BarChart3, Shield, Zap, Users, FileCheck } from "lucide-react";

const EngineSection = () => {
  const features = [
    { icon: Cog, label: "Automation" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Shield, label: "Compliance" },
    { icon: Zap, label: "Integration" },
    { icon: Users, label: "Expertise" },
    { icon: FileCheck, label: "Quality" },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            The Accelon Healthcare <span className="text-gradient">Engine</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            A unified platform connecting every aspect of your revenue cycle, 
            from patient intake to final payment — all powered by intelligent automation.
          </p>
        </div>

        {/* Engine Visualization */}
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-accent/40" />
              <div className="absolute inset-8 rounded-full bg-accent flex items-center justify-center">
                <Cog className="w-10 h-10 text-accent-foreground animate-spin" style={{ animationDuration: '8s' }} />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-medium">{feature.label}</p>
              </div>
            ))}
          </div>

          {/* Connection Lines (decorative) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent/50 via-accent/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default EngineSection;
