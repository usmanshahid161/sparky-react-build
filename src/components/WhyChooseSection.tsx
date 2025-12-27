import { Shield, Zap, Users, Award } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Born Native. Built for Scale",
      description: "Our teams live and breathe the regulatory landscapes of the MENA region and key global markets. We have deep knowledge of every local payer’s rule, ensuring every claim is compliant by design. This multinational expertise is baked into everything we do.",
    },
    {
      icon: Zap,
      title: "We Drive Financial Thrive, Not Just Operational Survival.",
      description: "Our goal is to make you more profitable. We are never an added cost. Our model is built on delivering a clear, measurable ROI—higher collections, reduced administrative hassle, and significant cost savings. We measure success in your gains.",
    },
    {
      icon: Users,
      title: "The Power of \"And\": Deep Expertise AND Cutting-Edge Tech.",
      description: "You don’t have to choose between a seasoned consulting or BPO firm and a flashy AI startup. acrossBorders delivers both. Our certified RCM team are empowered by our proprietary AI, creating an unbeatable combination of expertise and unmatched speed.",
    }
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
