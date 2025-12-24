const LogosSection = () => {
  const experienceLogos = [
    { name: "Ministry of Health", region: "Saudi Arabia" },
    { name: "Dubai Health Authority", region: "UAE" },
    { name: "SEHA", region: "Abu Dhabi" },
    { name: "Cleveland Clinic", region: "Abu Dhabi" },
  ];

  const complianceLogos = [
    "Health First",
    "MedCare",
    "AXA",
    "Limitless Care",
    "Suliman Habib",
    "Tawuniya",
    "Bupa",
    "ADDC",
  ];

  return (
    <>
      {/* Experience Across Borders */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Experience <span className="text-gradient">Across Borders</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experienceLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {logo.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground text-sm">{logo.name}</p>
                <p className="text-xs text-muted-foreground">{logo.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Innovation */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Powered By <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground mb-10">Backed By Compliance</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {complianceLogos.map((logo, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-lg bg-secondary/50 text-muted-foreground font-medium hover:text-foreground hover:bg-secondary transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogosSection;
