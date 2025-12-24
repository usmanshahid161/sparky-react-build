import rcmAnalytics from "@/assets/rcm-analytics.jpg";

const RCMSection = () => {
  const stats = [
    { value: "20%+", label: "Revenue Increase" },
    { value: "50%+", label: "Faster Collections" },
    { value: "60-80%", label: "Denial Reduction" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            End-to-End <span className="text-gradient">RCM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From patient scheduling to final payment posting, our comprehensive 
            Revenue Cycle Management solutions optimize every touchpoint for 
            maximum efficiency and revenue capture.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg card-hover"
            >
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content with Image */}
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Maximize every claim. Minimize every delay.
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our end-to-end RCM solutions leverage advanced analytics and 
                automation to identify revenue opportunities, reduce claim denials, 
                and accelerate your cash flow. Every step of the revenue cycle is 
                optimized for peak performance.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-authorization & eligibility verification",
                  "Medical coding & charge capture",
                  "Claims submission & tracking",
                  "Payment posting & reconciliation",
                  "Denial management & appeals",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src={rcmAnalytics}
                alt="RCM Analytics Dashboard"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCMSection;
