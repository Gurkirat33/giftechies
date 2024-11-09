"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BrowserForContent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
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
            www.yourwebagency.com
          </div>
        </div>

        <div className="relative h-[400px] bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {data[currentIndex].title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {data[currentIndex].description}
                    </p>
                  </div>

                  <div
                    className={`rounded-full ${data[currentIndex].color} p-2 text-white`}
                  >
                    {React.createElement(data[currentIndex].icon, {
                      className: "h-5 w-5",
                    })}
                  </div>
                </div>

                <div className="grid flex-grow grid-cols-2 gap-3">
                  {data[currentIndex].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center rounded-lg ${
                        index === 0 ? "bg-sky-500" : ""
                      } ${index === 1 ? "bg-emerald-500" : ""} ${
                        index === 2 ? "bg-amber-500" : ""
                      } ${index === 3 ? "bg-fuchsia-500" : ""} p-3 shadow-md`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`mr-3 rounded-full ${feature.color} p-2`}>
                        {React.createElement(data[currentIndex].icon, {
                          className: "h-4 w-4 text-white",
                        })}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">
                          {feature.title}
                        </span>
                        <span className="text-sm text-slate-100">
                          {feature.content}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? `w-4 ${data[index].color}`
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserForContent;
