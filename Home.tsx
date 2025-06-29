import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClassesSection from "@/components/ClassesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ClassesSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
