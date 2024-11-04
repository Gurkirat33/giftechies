import React from "react";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BgGrid from "./BgGrid";
import { featuresData } from "../data/WhyChooseUsData";

const FeatureCard = ({ icon, title, description, stat, index }) => (
  <div
    className={`group border border-border p-6 ${
      index === 0 ? "md:border-r-0" : ""
    } ${index === 3 ? "md:border-l-0 md:border-t-0" : ""} ${
      index === 2 ? "md:border-t-0" : ""
    } `}
  >
    <div>
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
      {stat && <p className="mt-4 font-bold text-secondary-500">{stat}</p>}
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-primary-900 pb-12 text-white">
      <BgGrid />
      <div className="section-container relative z-10">
        <SectionHeading
          subheading="WHY CHOOSE US"
          heading="We Transform Ideas into Digital Masterpieces"
          description="At our web agency, we don't just build websites – we craft digital experiences that captivate, convert, and drive your business forward."
          color="secondary"
          className="bg-transparent text-center"
        />

        <div className="flex flex-col items-center md:mt-4 lg:flex-row lg:items-start">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="grid md:grid-cols-2">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://www.akseldigital.com/wp-content/uploads/2018/09/web-design-agency-services-1.jpg"
                alt="Team working on digital projects"
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-black/10 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Turning Vision into Reality
                </h3>
                <p className="mt-2 text-gray-300">
                  Our team of experts working tirelessly to bring your ideas to
                  life.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center rounded-lg bg-white p-4 text-black shadow-xl">
              <Award className="mr-4 h-10 w-10 text-secondary-500" />
              <p className="text-lg font-semibold">
                Trusted by 900+ Clients Worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="rounded bg-white px-6 py-3 font-bold text-black">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
