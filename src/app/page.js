import FeaturesSection from "@/components/ui/FeaturesSection";
import HeroSection from "@/components/ui/HeroSection";
import HowItWorks from "@/components/ui/HowItWorks/HowItWorks";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import CTASection from "@/components/ui/Cta";
import FAQSection from "@/components/ui/Faq";
import StatsDivider from "@/components/UI/StatsDivider";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsDivider />
      <FeaturesSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <FAQSection />
    </div>
  );
}
