import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import ServicesClient from "./services-client";

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

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="bg-primary">
      <ServicesClient initialServices={services} />
    </div>
  );
}
