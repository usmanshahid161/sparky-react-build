import { Target, TrendingUp, Shield, Lightbulb } from "lucide-react";

const ConsultingSection = () => {
  const services = [
    {
      icon: Target,
      title: "Operational Audits",
      description: "Deep-dive analysis of your current processes to identify inefficiencies and opportunities",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven strategies to expand revenue streams and market presence",
    },
    {
      icon: Shield,
      title: "Compliance Advisory",
      description: "Navigate complex regulatory landscapes with expert guidance and frameworks",
    },
    {
      icon: Lightbulb,
      title: "Process Optimization",
      description: "Streamline workflows and implement best practices for sustainable growth",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Strategic Consulting for{" "}
            <span className="text-gradient">Compliance & Operational Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate accreditation and compliance with confidence. Our consultants deliver gap analyses, CDI training, and RCM improvement programs tailored to local payer rules and regulatory  bodies across your markets—so operational excellence becomes a habit, not a milestone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
