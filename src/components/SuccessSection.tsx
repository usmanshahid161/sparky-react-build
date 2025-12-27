import { Quote } from "lucide-react";
import itsImg from "@/assets/success.png";

const SuccessSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              From Operational Headaches to{" "}
              <span className="text-gradient">Celebrated Successes</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 leading-relaxed">
              “A leading polyclinic in Riyadh was struggling with over 40% claim rejections and stagnant revenue. Within
              months of partnering with Accelon Health, they saw a 25% monthly revenue uplift and a 50% reduction in
              backlog. Staff workload eased; patient access improved.”
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"/>
                Net Collection Rate: 95%+
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"/>
                Clean Claim Ratio: 99%+
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"/>
                Monthly Revenue Increase: ~25%+
              </li>
            </ul>
          </div>

          <img
            src={itsImg}
            alt="Healthcare professionals collaborating"
            className="relative rounded-2xl shadow-xl w-full object-cover"
          />

          {/* Right - Testimonial Card */}
          {/*<div className="relative">*/}
          {/*  <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-xl"/>*/}
          {/*  <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">*/}
          {/*    <Quote className="w-12 h-12 text-accent/50 mb-4"/>*/}
          {/*    <p className="text-xl text-primary-foreground/90 italic leading-relaxed mb-6">*/}
          {/*      "Accelon transformed our revenue cycle completely. What seemed*/}
          {/*      like an impossible situation turned into our biggest success story.*/}
          {/*      Their team became an extension of ours."*/}
          {/*    </p>*/}
          {/*    <div className="flex items-center gap-4">*/}
          {/*      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">*/}
          {/*        <span className="text-accent font-bold">SM</span>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <p className="font-semibold text-primary-foreground">Sarah Mitchell</p>*/}
          {/*        <p className="text-sm text-primary-foreground/60">CFO, North Texas ASC</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    /!* Success Badge *!/*/}
          {/*    <div*/}
          {/*      className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg">*/}
          {/*      PROFIT MARGIN IMPROVED*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
