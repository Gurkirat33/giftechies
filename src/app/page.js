import FeaturesSection from "@/components/ui/FeaturesSection";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import CTASection from "@/components/ui/Cta";
import StatsDivider from "@/components/UI/StatsDivider";
import TestimonialsSection from "@/components/UI/Testimonials";
import Services from "@/components/UI/Services";
import LogoScroller from "@/components/UI/LogoScroller";
import HowItWorks from "@/components/UI/HowItWorks(new)/HowItWorks";
// import FAQ from "@/components/UI/Faq";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <LogoScroller /> */}
      <HowItWorks />
      <Services />
      <TestimonialsSection />
      {/* <StatsDivider /> */}
      {/* <FeaturesSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
      {/* <FAQ /> */}
    </div>
  );
}
