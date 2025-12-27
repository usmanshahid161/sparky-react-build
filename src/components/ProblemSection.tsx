import { AlertTriangle, TrendingDown, Clock, Ban } from "lucide-react";
import itsImg from "@/assets/problemSection.png";

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
              You’re not losing money for lack of patients—you’re losing it to a payment ecosystem of delays, denials,
              and administrative drag. From Riyadh to Dubai, Cairo to New York, the pattern is universal: administrative
              work expands, denials persist, revenue turns uncertain. Different markets—one revenue choke point. We cut
              it loose.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <problem.icon className="w-5 h-5 text-accent"/>
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
          <img
            src={itsImg}
            alt="Healthcare professionals collaborating"
            className="relative rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
