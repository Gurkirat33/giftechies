import React from "react";
import { stats } from "../data/StatsHomePage";

const StatsDivider = () => {
  return (
    <section className="relative w-full pt-12 pb-6 bg-white dark:bg-black overflow-hidden">
      <div className="relative section-container py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative group px-8 py-12">
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary-700 dark:via-gray-700 to-transparent" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-black" />
                </div>
              )}

              <div className="relative flex flex-col items-center text-center ">
                <div className="relative bg-white dark:bg-primary-900">
                  <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-primary-900">
                  {stat.label}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-primary-900">
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
