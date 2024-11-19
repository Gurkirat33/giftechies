"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Star, Shield } from "lucide-react";
import { projectData, projectData2 } from "../data/BrowserMockupData/HeroSectionProjects";
import BrowserForImages from "./Browsers/BrowserForImages";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative flex min-h-screen w-full items-center">
      <div className="section-container w-full relative pb-20 pt-28 md:pt-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div className="relative w-full min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <span className="gradient-color-text block mb-5 mt-2 font-medium 2xl:block">
                  {projectData2[currentIndex].subHeading}
                </span>
                <h1 className="mb-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  {projectData2[currentIndex].heading}
                </h1>
                <p className="mb-8 text-base text-secondary-light sm:text-xl">
                  {projectData2[currentIndex].description}
                </p>
                <div className="mb-12 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <button className="gradient-color w-full rounded px-4 py-3 md:px-8 md:py-4 font-bold text-tertiary-text sm:w-auto">
                    Get Free Consultation
                  </button>
                  <button className="w-full rounded border border-border px-4 py-3 md:px-8 md:py-4 font-semibold sm:w-auto">
                    View All Services
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center">
                    <Shield className="mr-2 h-6 w-6 text-green-400" />
                    <p className="text-secondary">
                      100% Satisfaction Guaranteed
                    </p>
                  </span>
                  <span className="flex items-center">
                    <Star className="mr-2 h-6 w-6 text-yellow-400" />
                    <p className="text-secondary">
                      5-Star Rated Agency{" "}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <Zap className="mr-2 h-6 w-6 text-blue-400" />
                    <p className="text-secondary">
                      Lightning Fast Delivery
                    </p>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <BrowserForImages projectData={projectData} />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
