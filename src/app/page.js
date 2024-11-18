import HeroSection from "@/components/UI/HeroSection";
import TestimonialsSection from "@/components/UI/Testimonials";
import Services from "@/components/UI/Services";
import FAQ from "@/components/UI/Faq";
import BentoGrid from "@/components/UI/BentoGrid";
import BlogSection from "@/components/UI/Blog";
import ScrollingBanner from "@/components/ScrollingBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <Services />
      <TestimonialsSection />
      <BlogSection />
      <FAQ />
      <ScrollingBanner />
    </>
  );
}
