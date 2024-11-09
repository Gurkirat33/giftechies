import React from "react";
import { stats } from "../data/StatsHomePage";

const StatsDivider = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-6 pt-12 dark:bg-black">
      <div className="section-container relative py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="group relative px-8 py-12">
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="h-24 w-px bg-gradient-to-b from-transparent via-primary-700 to-transparent dark:via-gray-700" />
                  <div className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 ring-4 ring-white dark:bg-blue-400 dark:ring-black" />
                </div>
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative bg-white dark:bg-primary-900">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:via-gray-100 dark:to-white">
                    {stat.value}
                  </span>
                </div>

                <h3 className="mt-4 bg-white text-lg font-semibold text-gray-900 dark:bg-primary-900 dark:text-white">
                  {stat.label}
                </h3>

                <p className="mt-2 bg-white text-sm text-gray-600 dark:bg-primary-900 dark:text-gray-400">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDivider;
