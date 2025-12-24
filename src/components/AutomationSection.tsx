import { Bot, FileSearch, ClipboardCheck, BarChart2 } from "lucide-react";

const AutomationSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Seamless RPA",
      description: "Robotic Process Automation streamlines repetitive tasks with 99.9% accuracy",
    },
    {
      icon: FileSearch,
      title: "Smart Claims",
      description: "AI-powered claim scrubbing reduces errors before submission",
    },
    {
      icon: ClipboardCheck,
      title: "Auto Verification",
      description: "Real-time eligibility and pre-authorization checks",
    },
    {
      icon: BarChart2,
      title: "Predictive Analytics",
      description: "Machine learning identifies trends and forecasts revenue",
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
            Our automation works silently in the background, delivering powerful 
            results without disrupting your existing workflows.
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
