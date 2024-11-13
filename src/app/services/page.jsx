import { services } from "@/components/data/ServicesData";
import { ServiceCard } from "@/components/ServiceCard";

const ServicesGrid = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-32 dark:bg-primary-900">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
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
