"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteService } from "./actions";

export default function ServicesClient({ initialServices }) {
  const [services, setServices] = useState(initialServices);
  const router = useRouter();

  const handleEditService = (id) => {
    router.push(`/backend/services/${id}`);
  };

  const handleDeleteService = async (id) => {
    try {
      const result = await deleteService(id);
      if (result.success) {
        setServices((prevServices) =>
          prevServices.filter((service) => service.id !== id)
        );
      }
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <div
            className="rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            key={service.id}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.heading}
                className="h-full w-full object-cover"
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
                  onClick={() => handleEditService(service.id)}
                >
                  Edit Service
                </button>
                <button
                  className="inline-flex items-center rounded-md text-sm font-medium text-red-400"
                  onClick={() => handleDeleteService(service.id)}
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
