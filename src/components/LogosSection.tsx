import itsImg from "@/assets/problemSection.png";
import one from "@/assets/logos/acrossBorders/saudia health council 1.png";
import two from "@/assets/logos/acrossBorders/Ministry of health ksa 1.png";
import three from "@/assets/logos/acrossBorders/UHIA-logo 1.png";
import four from "@/assets/logos/acrossBorders/ministry-of-health-iraq-logo-png_seeklogo-520649 1.png";
import five from "@/assets/logos/acrossBorders/Kanad-Hospital-Fav 1.png";
import six from "@/assets/logos/acrossBorders/images 1.png";
import seven from "@/assets/logos/acrossBorders/f8ce44e4 1.png";
import eight from "@/assets/logos/acrossBorders/ce8c1c1c-c756-493a-a398-42261047a8ff 1.png";
import nine from "@/assets/logos/acrossBorders/axa-logo-en 1.png";
import ten from "@/assets/logos/acrossBorders/78fa06dd4d609cf64eb52b23d78aed7f 1.png";
import elevenr from "@/assets/logos/acrossBorders/02 1.png";
import tweleve from "@/assets/logos/acrossBorders/0.6-1.png 1.png";
import thirteen from "@/assets/logos/innovation/98983 1.png";
import fteen from "@/assets/logos/innovation/Aapc-logo-new.svg 1.png";
import steen from "@/assets/logos/innovation/1736058483652 1.png";
import ffteen from "@/assets/logos/innovation/istockphoto-1296987665-612x612 1.png";

const LogosSection = () => {
  const experienceLogos = [
    one, two, three, four, five, six,seven,eight, nine, ten, elevenr, tweleve
  ];

  const complianceLogos = [
   thirteen, fteen, ffteen, steen
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
              <div key={index} className="flex justify-center items-center h-full p-2">
                <img
                  src={logo}
                  alt="Healthcare professionals collaborating"
                  className="relative card-hover object-contain h-3/5"
                />
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center h-full p-2">
                <img
                  src={logo}
                  alt="Healthcare professionals collaborating"
                  className="relative card-hover object-contain h-3/5"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogosSection;
