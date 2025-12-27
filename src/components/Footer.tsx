import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "Revenue Cycle Management",
      "Medical Coding",
      "Claims Management",
      "Denial Management",
      "Consulting Services",
    ],
    company: [
      "About Us",
      "Careers",
      "News & Insights",
      "Contact",
    ],
    resources: [
      "Case Studies",
      "Whitepapers",
      "Blog",
      "FAQ",
    ],
    locations: [
      {
        country:"KSA Office",
        address: "3279 Al-Amir Mamdouh bin Abdul, Riyadh, KSA, 7273"
      },
      {
        country:"US Office",
        address: "254 Chapman Rd, Ste 208, Newark, DE 19702"
      },
      {
        country:"Egypt Office",
        address: "41 Ahmed Tayseer, Nasr City, Cairo 11757"
      }
    ],
    phones: [
      "KSA +966 59 869 8532",
      "US +1(551) 312-7257",
      "Egypt +20 110 200 1134"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Accelon<span className="text-accent">Health</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Our precision-crafted solutions reshape workflows, enrich patient experiences, and unlock effortless performance for providers in Saudi Arabia, the GCC, Egypt, and the US. Trust deeper. Rise higher.
            </p>
            <div className="flex gap-4">
              {[Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Where to find us?</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((item, idx) => (
                <li key={idx}>
                  <h4 className="font-semibold text-sm mb-0">{item.country}</h4>
                  <p className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm mt-2"
                  >
                    {item.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Let’s connect</h3>
            <ul className="space-y-3">
              <h4 className="font-semibold text-sm mb-0">Ready to Leap Beyond Limits?</h4>
              <p className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Tell us what you're building, solving, or imagining — we’ll help you go further, faster.
              </p>
              <h4 className="font-semibold text-sm mt-10">Direct Lines</h4>
              {
                footerLinks.phones.map((item, idx) => (
                  <li key={idx}>
                    <p
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {item}
                    </p>
                  </li>
                ))
              }
              <p
                className="flex gap-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-5 h-5"/> contact@accelonhealth.com
              </p>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <h4 className="font-semibold text-sm">Outsourcing Services</h4>
            <ul className="space-y-3">
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm mt-3"}>
                Revenue Cycle Management
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Healthcare Consulting
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Medical Contact Center
              </li>
            </ul>

            <h4 className="font-semibold text-sm mt-3">Technology Services</h4>
            <ul className="space-y-3 mt-3">
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Accelon Note
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Accelon Code
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Accelon Audit
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Accelon Voice
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Accelon Beauty
              </li>
            </ul>

            <h4 className="font-semibold text-sm mt-3">Company</h4>
            <ul className="space-y-3 mt-3">
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                About Us
              </li>
              <li className={"text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"}>
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}


        {/*<div*/}
        {/*  className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">*/}
        {/*  <p className="text-sm text-primary-foreground/60">*/}
        {/*    © 2024 acrossBorders. All rights reserved.*/}
        {/*  </p>*/}
        {/*  <div className="flex gap-6">*/}
        {/*    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">*/}
        {/*      Privacy Policy*/}
        {/*    </a>*/}
        {/*    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">*/}
        {/*    Terms of Service*/}
        {/*    </a>*/}
        {/*    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">*/}
        {/*      Cookie Policy*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </footer>
  );
};

export default Footer;
