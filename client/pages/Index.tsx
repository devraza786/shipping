import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PortfolioSection from "@/components/PortfolioSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import WarehouseSection from "@/components/WarehouseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MissionSection />
        <AboutSection />
        <AwardsSection />
        <HowItWorksSection />
        <PortfolioSection />
        <IntegrationsSection />
        <WarehouseSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
