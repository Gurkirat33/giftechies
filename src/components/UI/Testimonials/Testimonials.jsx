import SectionHeading from "../SectionHeading";
import TestimonialBox from "./TestimonialsBox";
import {
  testimonials1,
  testimonials2,
  testimonials3,
  testimonials4,
} from "./TestimonialsData";

const Testimonials = () => {
  return (
    <div className="bg-primary-900 pb-12 text-white">
      <div className="section-container">
        <SectionHeading
          subheading="What Our Clients Say"
          heading="Testimonials"
          description="Discover how we’ve made an impact through the words of our satisfied clients."
          color="secondary"
        />

        <div className="relative flex gap-4">
          <div className="flex flex-1 flex-col gap-4">
            {testimonials1.map((review, index) => (
              <TestimonialBox review={review} key={index} />
            ))}
          </div>
          <div className="hidden flex-1 flex-col gap-4 sm:flex">
            {testimonials2.map((review, index) => (
              <TestimonialBox review={review} key={index} />
            ))}
          </div>
          <div className="hidden flex-1 flex-col gap-4 md:flex">
            {testimonials3.map((review, index) => (
              <TestimonialBox review={review} key={index} />
            ))}
          </div>
          <div className="hidden flex-1 flex-col gap-4 lg:flex">
            {testimonials4.map((review, index) => (
              <TestimonialBox review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
