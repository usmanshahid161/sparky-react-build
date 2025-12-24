import { Shield, Zap, Users, Award } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Compliance-First Approach",
      description: "Every solution built with regulatory compliance at its core, protecting your organization from exposure.",
    },
    {
      icon: Zap,
      title: "No Upfront Financial Outlay, Just Performance-Based Fees",
      description: "Our performance-based model aligns our success with yours — we only succeed when you do.",
    },
    {
      icon: Users,
      title: "The Power of \"And\": Deep Healthcare Operations Know-How + Tech",
      description: "We combine decades of healthcare expertise with cutting-edge technology for comprehensive solutions.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "500+ healthcare providers trust Accelon Health to optimize their revenue cycle and operations.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Why Leading Providers Choose{" "}
            <span className="text-gradient">Accelon Health?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-2xl bg-secondary/50 border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
