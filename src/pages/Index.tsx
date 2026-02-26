import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <AboutSection />
    <GallerySection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <SiteFooter />
  </div>
);

export default Index;
