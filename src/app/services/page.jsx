import { ServiceCard } from "@/components/ServiceCard";
import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";

// Opt into background revalidation
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // revalidate every hour

const serializeService = (service) => {
  return {
    id: service._id.toString(),
    imageUrl: service.imageUrl || '',
    heading: service.heading || '',
    description: service.description || '',
    keyPoints: Array.isArray(service.keyPoints) ? service.keyPoints : [],
    slug: service.slug || '',
  };
};

async function getServices() {
  try {
    await getDbConnection();
    const services = await serviceModel.find({}).lean();
    return services.map(serializeService);
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export default async function ServicesGrid() {
  const services = await getServices();

  return (
    <div className="relative min-h-screen bg-white px-4 py-32 dark:bg-primary-900">
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
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
