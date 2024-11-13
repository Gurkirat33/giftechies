import HeroSection from "@/components/UI/HeroSection";
// import WhyChooseUs from "@/components/ui/WhyChooseUs";
// import CTASection from "@/components/ui/Cta";
import TestimonialsSection from "@/components/UI/Testimonials";
import Services from "@/components/UI/Services";
// import LogoScroller from "@/components/UI/LogoScroller";
// import HowItWorks from "@/components/UI/HowItWorks(new)/HowItWorks";
import FAQ from "@/components/UI/Faq";
import Itworks from "@/components/UI/ItWorks";
import BentoGrid from "@/components/UI/BentoGrid";
import BlogSection from "@/components/UI/Blog";
import VerticalJourneySection from "@/components/UI/HowItWorks/HowItWorks";
import ScrollingBanner from "@/components/ScrollingBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <LogoScroller /> */}
      <BentoGrid />
      {/* <Itworks /> */}
      {/* <VerticalJourneySection /> */}
      <Services />
      <TestimonialsSection />
      <BlogSection />
      <FAQ />
      <ScrollingBanner />
      {/* <WhyChooseUs /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
      {/* <FAQ /> */}
    </div>
  );
}
