import { AlertTriangle, TrendingDown, Clock, Ban } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Revenue Leakage",
      description: "Hidden inefficiencies drain profits silently",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Risks",
      description: "Ever-changing regulations create exposure",
    },
    {
      icon: Clock,
      title: "Slow Collections",
      description: "Extended AR days impact cash flow",
    },
    {
      icon: Ban,
      title: "Claim Denials",
      description: "High denial rates erode revenue",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Every Healthcare Provider Faces the Same Invisible{" "}
              <span className="text-gradient">Profit Killer</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Healthcare organizations often struggle with declining reimbursements, 
              increasing operational complexity, and compliance demands that stretch 
              their resources thin. These challenges silently erode profitability 
              and operational efficiency, leaving providers struggling to focus on 
              what matters most — patient care.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <problem.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl" />
            <div className="relative bg-primary rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 animate-pulse" />
                  <div className="flex-1 h-4 bg-primary-foreground/10 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="h-20 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
                    />
                  ))}
                </div>
                <div className="h-32 bg-gradient-to-r from-accent/30 to-accent/10 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-16 h-16 text-destructive/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
