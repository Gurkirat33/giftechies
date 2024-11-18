import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/UI/SectionHeading";

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
    <div className="relative min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="px-4 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <SectionHeading title="Services that drive growth" description="We deliver cutting-edge solutions that transform businesses. Our expertise spans across digital landscapes, ensuring your success in the modern market." />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative overflow-hidden ${
              index !== services.length - 1 ? "mb-32" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-4">
              <div
                className={`flex flex-col items-center gap-16 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:w-1/2">
                  <Image
                    src={service.imageUrl}
                    alt={service.heading}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <div className="max-w-xl">
                    <h3 className="mb-6 text-4xl font-medium tracking-tight text-secondary">
                      {service.heading}
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-secondary-light">
                      {service.description}
                    </p>
                    <div className="mb-8 space-y-4">
                      {service.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                          <p className="flex-1 text-secondary-light">{point}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 text-lg font-medium text-secondary"
                    >
                      Learn more
                      <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
