"use client";

import { ServiceCard } from "@/components/ServiceCard";
import axios from "axios";
import { useEffect, useState } from "react";

const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900">
    <div className="relative mr-6 size-10">
      <div className="absolute h-full w-full animate-[spin_1s_linear_infinite] rounded-full border-4 border-t-primary-600"></div>
    </div>
    <p className="text-6xl font-semibold text-white">Loading</p>
  </div>
);

const ServicesGrid = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.time("start");
        setLoading(true);
        const response = await axios.get("/api/get-services");
        setServices(response?.data.service);
        console.timeEnd("start");
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="relative min-h-screen bg-white px-4 py-32 dark:bg-primary-900">
      {loading && <LoadingSpinner />}
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-[84px] font-medium leading-[1.03] tracking-wide text-gray-900 dark:text-white">
            Lets create <br /> Something Great
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-[#a6abb4]">
            Comprehensive digital solutions to power your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
