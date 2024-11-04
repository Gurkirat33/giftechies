"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function BrowserForImages({ projectData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="relative border-b border-gray-200 bg-gray-100 p-2">
          <div className="absolute left-2 flex space-x-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto w-4/5 max-w-md rounded-md bg-white px-4 py-1 text-center text-xs text-gray-500">
            www.amazingwebsite.com
          </div>
        </div>

        <div className="relative h-[400px] bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-full flex-col">
                {/* Project Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {projectData[currentIndex].title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {projectData[currentIndex].category}
                    </p>
                  </div>
                  <div
                    className={`rounded-full ${projectData[currentIndex].color} p-2 text-white`}
                  >
                    <Globe className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative flex-grow">
                  <div className="absolute inset-0 grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <motion.img
                        src={projectData[currentIndex].images[0]}
                        alt="Project preview 1"
                        className="h-40 w-full rounded-lg object-cover shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                      <motion.img
                        src={projectData[currentIndex].images[1]}
                        alt="Project preview 2"
                        className="h-32 w-full rounded-lg object-cover shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      />
                    </div>
                    <div className="space-y-4">
                      <motion.img
                        src={projectData[currentIndex].images[2]}
                        alt="Project preview 3"
                        className="h-32 w-full rounded-lg object-cover shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      />
                      <motion.img
                        src={projectData[currentIndex].images[3]}
                        alt="Project preview 4"
                        className="h-40 w-full rounded-lg object-cover shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 rounded-lg bg-white/80 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-800">
                        Project Outcome
                      </div>
                      <div
                        className={`rounded-full ${projectData[currentIndex].color} px-3 py-1 text-sm font-bold text-white`}
                      >
                        {projectData[currentIndex].stats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? `w-4 ${projectData[index].color}`
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
