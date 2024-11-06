import FeaturesSection from "@/components/ui/FeaturesSection";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import CTASection from "@/components/ui/Cta";
import FAQSection from "@/components/ui/Faq";
import StatsDivider from "@/components/UI/StatsDivider";
import TestimonialsSection from "@/components/UI/Testimonials";
import HowItWorks from "@/components/UI/HowItWorks";
import Services from "@/components/UI/Services";
import LogoScroller from "@/components/UI/LogoScroller";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoScroller />
      <HowItWorks />
      <Services />
      <TestimonialsSection />
      {/* <StatsDivider /> */}
      {/* <FeaturesSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
      {/* <FAQSection /> */}
    </div>
  );
}
