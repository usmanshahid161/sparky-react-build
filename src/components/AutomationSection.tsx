import { NotebookPen, Codepen, Shield, AudioLines } from "lucide-react";

const AutomationSection = () => {
  const features = [
    {
      icon: NotebookPen,
      title: "Accelon Note",
      description: "Faster clinical notes and pre-visit abstracts with zero disruption to patient care.",
    },
    {
      icon: Codepen,
      title: "Accelon Code",
      description: "Autonomous coding at 95%+ accuracy, delivering consistent, 1000X faster turnarounds.",
    },
    {
      icon: Shield,
      title: "Accelon Audit",
      description: "Re-submission checks that prevent rejections before they happen.",
    },
    {
      icon: AudioLines,
      title: "Accelon Voice",
      description: "24/7 patient communication automation in Arabic/English across 20+ dialects.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Quiet Automation, <span className="text-gradient">Loud Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invisible, on-purpose automation that lifts every workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                <feature.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
