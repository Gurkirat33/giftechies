import React from "react";

const SectionHeader = ({ heading, description, className }) => {
  return (
    <div className={`relative w-full py-8 ${className}`}>
      <h2 className="hidden absolute inset-0 md:flex justify-center items-center text-4xl md:text-6xl font-bold text-gray-800/10 dark:text-gray-700/25 transform -translate-y-8 pointer-events-none">
        {heading}
      </h2>

      <div className="relative text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {heading}
        </h2>
        <p className="max-w-2xl mx-auto mt-4 md:text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
