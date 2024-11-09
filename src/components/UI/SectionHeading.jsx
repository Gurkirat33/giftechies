import React from "react";

const SectionHeader = ({ heading, description, className }) => {
  return (
    <div className={`relative w-full py-8 ${className}`}>
      <h2 className="pointer-events-none absolute inset-0 hidden -translate-y-8 transform items-center justify-center text-4xl font-bold text-gray-800/10 dark:text-gray-700/25 md:flex md:text-6xl">
        {heading}
      </h2>

      <div className="relative text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
