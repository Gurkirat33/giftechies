import { ServiceCard } from "@/components/ServiceCard";
import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const serializeService = (service) => {
  return {
    id: service._id.toString(),
    imageUrl: service.imageUrl || "",
    heading: service.heading || "",
    description: service.description || "",
    keyPoints: Array.isArray(service.keyPoints) ? service.keyPoints : [],
    slug: service.slug || "",
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
    <div className="relative min-h-screen bg-primary px-4 py-32">
      <div className="section-container">
        <div className="mb-20 text-center">
          <h2 className="text-[84px] font-medium leading-[1.1] tracking-tight text-secondary">
            Services That <br /> Drive Growth
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl text-secondary-light">
            We deliver cutting-edge solutions that transform businesses. Our
            expertise spans across digital landscapes, ensuring your success in
            the modern market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
