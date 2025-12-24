import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [industry, setIndustry] = useState("");

  const industries = [
    "Hospital System",
    "Physician Practice",
    "Urgent Care",
    "Ambulatory Surgery Center",
    "Behavioral Health",
    "Other",
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Send Us A <span className="text-gradient">Message</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your healthcare operations? Get in touch with 
              our team to discuss how we can help optimize your revenue cycle.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">contact@accelonhealth.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">123 Healthcare Blvd, Suite 500<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Which sector is your company?
                </label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Work Email
                </label>
                <Input type="email" placeholder="john.doe@healthcare.com" className="h-12" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your needs..." 
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button variant="accent" size="lg" className="w-full">
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
