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
      "https://fastly.picsum.photos/id/11/1920/500.jpg?hmac=WpSUR9euCQSCs6Xx1Un4lEzpnCWEWM_Km4G0fp7zIGY",
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
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Right Navigation Section */}
      <div className="absolute right-[10%] top-0 bottom-0 z-20 flex flex-col justify-center items-center">
        <div className="absolute left-0 h-full w-px bg-white/30" />
        <button
          onClick={goPrev}
          className={`absolute top-8 p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
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
              className="relative group cursor-pointer"
              onClick={() => swiper?.slideTo(index)}
            >
              <div
                className={`absolute -left-[8px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 
                ${
                  index === activeIndex
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/50 group-hover:bg-white"
                }
                ${index < activeIndex ? "bg-white" : ""}`}
              />
              <div
                className={`font-bold text-lg pl-8 transition-all duration-300 
                ${
                  index === activeIndex
                    ? "text-yellow-400 translate-x-2"
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
          className={`absolute bottom-8 p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
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
        className="w-full h-full"
        slidesPerView={1}
        speed={800}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />

              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center z-20">
                <div className="w-[50%] pl-[10%] pr-8">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-lg">
                      <span className="text-yellow-400 font-semibold">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-6xl font-bold text-white leading-tight">
                      {service.name}
                    </h2>

                    <div className="h-px w-24 bg-yellow-400" />

                    <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                    <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-300">
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
