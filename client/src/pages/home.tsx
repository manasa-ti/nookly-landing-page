import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AIAssistantSection from "@/components/ai-assistant-section";
import CompleteDatingExperienceSection from "@/components/complete-dating-experience-section";
import FutureFeaturesSection from "@/components/future-features-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans bg-nookly-bg">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CompleteDatingExperienceSection />
      <AIAssistantSection />
      <TestimonialsSection />
      <FutureFeaturesSection />
      <FAQSection />
      <ContactSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
