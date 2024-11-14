"use client";

import axios from "axios";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchServices() {
      try {
        console.time("service");
        const response = await axios.get("/api/get-services");
        console.log(response.data.service);
        console.timeEnd("service");
        setServices(response?.data.service);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  const handleEditService = (_id) => {
    router.push(`/backend/services/${_id}`);
  };

  const handleDeleteService = async (_id) => {
    try {
      await axios.delete(`/api/get-services/${_id}`);
      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== _id),
      );
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Services</h2>
        <button
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
          onClick={() => router.push("/backend/services/new")}
        >
          Add New Service
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            className="rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            key={service._id}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.heading}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center">
                  <div className="rounded-lg bg-white/90 p-2"></div>
                  <h3 className="ml-3 text-xl font-semibold text-white">
                    {service.heading}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="mb-4 text-gray-600">{service.description}</p>

              <ul className="space-y-2">
                {service.keyPoints.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <button
                  className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
                  onClick={() => handleEditService(service._id)}
                >
                  Edit Service
                </button>
                <button
                  className="inline-flex items-center rounded-md text-sm font-medium text-red-400"
                  onClick={() => handleDeleteService(service._id)}
                >
                  Delete Service
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
