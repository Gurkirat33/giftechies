import React from "react";
import { Quote, Twitter } from "lucide-react";
import { testimonials } from "../data/TestimonialsData";
import SectionHeader from "./SectionHeading";

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full p-8 rounded-xl bg-[#282a2e] border border-white/10 relative group">
    <Quote className="w-10 h-10 text-white/10 mb-4" />

    <p className="text-zinc-200 text-lg leading-relaxed mb-8 relative z-10">
      {testimonial.content}
    </p>

    <div className="flex items-start gap-4 relative z-10">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
      />
      <div className="flex-1">
        <h4 className="text-white font-medium text-lg">{testimonial.name}</h4>
        <p className="text-zinc-400 text-sm mb-1">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialColumn = ({ testimonials, speed }) => (
  <div className="relative h-[700px] overflow-hidden">
    <div
      className="flex flex-col gap-6 animate-scroll absolute w-full"
      style={{
        animation: `scroll ${speed}s linear infinite`,
      }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="relative bg-white dark:bg-primary-900 min-h-screen py-20">
      <div className="relative z-10 text-center mb-8">
        <SectionHeader
          heading={"Loved by thousands"}
          description={"Here's what our amazing community has to say"}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t dark:from-primary-900 dark:via-primary-900 to-transparent z-20" />

      <div className="section-container relative">
        <div className="grid grid-cols-3 gap-8">
          <TestimonialColumn testimonials={testimonials[0]} speed="20" />
          <TestimonialColumn testimonials={testimonials[1]} speed="26" />
          <TestimonialColumn testimonials={testimonials[2]} speed="20" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
