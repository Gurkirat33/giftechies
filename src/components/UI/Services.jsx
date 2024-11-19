"use client";

import React from "react";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    id: 1,
    name: "Digital Strategy",
    tagline: "Transform Your Digital Presence",
    description:
      "Transform your business with our comprehensive digital strategy solutions. We help you navigate the digital landscape and achieve sustainable growth.",
    image:
      "/banner1.png",
  },
  {
    id: 2,
    name: "Cloud Solutions",
    tagline: "Scale Without Limits",
    description:
      "Leverage the power of cloud computing to scale your business. Our cloud solutions provide flexibility, security, and reliability.",
    image:
      "https://fastly.picsum.photos/id/11/1920/500.jpg?hmac=WpSUR9euCQSCs6Xx1Un4lEzpnCWEWM_Km4G0fp7zIGY",
  },
  {
    id: 3,
    name: "AI Integration",
    tagline: "Intelligent Automation",
    description:
      "Enhance your operations with cutting-edge AI solutions. We help you implement intelligent automation and data-driven decision making.",
    image:
      "https://fastly.picsum.photos/id/11/1920/500.jpg?hmac=WpSUR9euCQSCs6Xx1Un4lEzpnCWEWM_Km4G0fp7zIGY",
  },
  {
    id: 4,
    name: "Cyber Security",
    tagline: "Protect Your Digital Assets",
    description:
      "Protect your digital assets with our advanced cybersecurity services. We provide comprehensive security solutions for peace of mind.",
    image:
      "https://fastly.picsum.photos/id/11/1920/500.jpg?hmac=WpSUR9euCQSCs6Xx1Un4lEzpnCWEWM_Km4G0fp7zIGY",
  },
  {
    id: 5,
    name: "DevOps Services",
    tagline: "Streamline Development",
    description:
      "Streamline your development and operations with our DevOps solutions. We help you build, test, and deploy faster and more efficiently.",
    image:
      "https://fastly.picsum.photos/id/11/1920/500.jpg?hmac=WpSUR9euCQSCs6Xx1Un4lEzpnCWEWM_Km4G0fp7zIGY",
  },
];

const ServicesTimeline = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (swiper && activeIndex < services.length - 1) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper && activeIndex > 0) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Right Navigation Section */}
      <div className="absolute bottom-0 right-[10%] top-0 z-20 flex flex-col items-center justify-center">
        <div className="absolute left-0 h-full w-px bg-white/30" />
        <button
          onClick={goPrev}
          className={`absolute top-8 rounded-full p-2 transition-all duration-300 hover:bg-white/10 ${
            activeIndex === 0 ? "text-gray-500" : "text-white"
          }`}
          disabled={activeIndex === 0}
        >
          <ChevronUp size={24} />
        </button>

        <div className="flex flex-col items-center gap-14 py-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative cursor-pointer"
              onClick={() => swiper?.slideTo(index)}
            >
              <div
                className={`absolute -left-[8px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-125 bg-yellow-400"
                    : "bg-white/50 group-hover:bg-white"
                } ${index < activeIndex ? "bg-white" : ""}`}
              />
              <div
                className={`pl-8 text-lg font-bold transition-all duration-300 ${
                  index === activeIndex
                    ? "translate-x-2 text-yellow-400"
                    : "text-white/70 group-hover:text-white"
                }`}
              >
                {service.name}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goNext}
          className={`absolute bottom-8 rounded-full p-2 transition-all duration-300 hover:bg-white/10 ${
            activeIndex === services.length - 1 ? "text-gray-500" : "text-white"
          }`}
          disabled={activeIndex === services.length - 1}
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Main Content Section */}
      <Swiper
        direction="vertical"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
        slidesPerView={1}
        speed={800}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 z-20 flex items-center">
                <div className="w-[50%] pl-[10%] pr-8">
                  <div className="space-y-6">
                    <div className="inline-block rounded-lg bg-yellow-400/20 px-4 py-2 backdrop-blur-sm">
                      <span className="font-semibold text-yellow-400">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-6xl font-bold leading-tight text-white">
                      {service.name}
                    </h2>

                    <div className="h-px w-24 bg-yellow-400" />

                    <p className="max-w-2xl text-xl leading-relaxed text-gray-200">
                      {service.description}
                    </p>

                    <button className="mt-8 rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesTimeline;
