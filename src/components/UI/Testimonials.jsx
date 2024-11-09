import React from "react";
import { Quote, Twitter } from "lucide-react";
import { testimonials } from "../data/TestimonialsData";
import SectionHeader from "./SectionHeading";

const TestimonialCard = ({ testimonial }) => (
  <div className="group relative w-full rounded-xl border border-white/10 bg-primary-800 p-8">
    <Quote className="mb-4 h-10 w-10 text-white/10" />

    <p className="relative z-10 mb-8 text-lg leading-relaxed text-zinc-200">
      {testimonial.content}
    </p>

    <div className="relative z-10 flex items-start gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-12 w-12 rounded-full border-2 border-white/10 object-cover"
      />
      <div className="flex-1">
        <h4 className="text-lg font-medium text-white">{testimonial.name}</h4>
        <p className="mb-1 text-sm text-zinc-400">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialColumn = ({ testimonials, speed }) => (
  <div className="relative h-[700px] overflow-hidden">
    <div
      className="animate-scroll absolute flex w-full flex-col gap-6"
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
    <div className="relative min-h-screen bg-white py-20 dark:bg-primary-900">
      <div className="relative z-10 mb-8 text-center">
        <SectionHeader
          heading={"Loved by thousands"}
          description={"Here's what our amazing community has to say"}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t to-transparent dark:from-primary-900 dark:via-primary-900" />

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
