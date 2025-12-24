import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DifferenceSection from "@/components/DifferenceSection";
import EngineSection from "@/components/EngineSection";
import RCMSection from "@/components/RCMSection";
import ConsultingSection from "@/components/ConsultingSection";
import AutomationSection from "@/components/AutomationSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SuccessSection from "@/components/SuccessSection";
import LogosSection from "@/components/LogosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Accelon Health | End-to-End Healthcare RCM Solutions & Revenue Cycle Partner</title>
        <meta 
          name="description" 
          content="Transform healthcare operations with Accelon Health's intelligent RCM solutions. End-to-end revenue cycle management, compliance consulting, and healthcare automation." 
        />
        <meta name="keywords" content="healthcare RCM, revenue cycle management, medical billing, healthcare consulting, claims management" />
        <link rel="canonical" href="https://accelonhealth.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <DifferenceSection />
          <EngineSection />
          <RCMSection />
          <ConsultingSection />
          <AutomationSection />
          <ContactSection />
          <WhyChooseSection />
          <SuccessSection />
          <LogosSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
