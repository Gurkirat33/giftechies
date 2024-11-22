import Breadcrumb from "@/components/UI/Breadcrumb";
import ServiceForm from "@/components/UI/ServiceForm";
import { Check } from "lucide-react";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import { unstable_cache } from 'next/cache';
import Image from "next/image";

export const revalidate = 3600;

const getServiceBySlug = unstable_cache(
  async (slug) => {
    try {
      await getDbConnection();
      const service = await serviceModel.findOne({ slug }).lean();
      if (!service) return null;
      
      return {
        id: service._id.toString(),
        longDescription: service.longDescription || "",
        imageUrl: service.imageUrl || "",
      };
    } catch (error) {
      console.error("Error fetching service:", error);
      return null;
    }
  },
  ['service-detail'],
  {
    revalidate: 3600,
    tags: ['service-detail']
  }
);

export default async function ServicePage({ params }) {
  const { slug } = params;
  
  const serviceData = servicesData.find(service => service.slug === slug);
  
  const dbService = await getServiceBySlug(slug);
  
  if (!serviceData) {
    notFound();
  }

  return (
    <div className="pt-20">
      <Breadcrumb/>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-6">{serviceData.title}</h1>
            <p className="description-text mb-8 text-lg">
              {serviceData.description}
            </p>
            <div className="space-y-4">
              {serviceData.points.map((point, index) => (
                <div key={index} className="flex text-secondary-light items-center gap-3">
                  <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ServiceForm />
          </div>
        </div>

        {dbService?.longDescription && (
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-12">
              {dbService.imageUrl && (
                <div className="w-full md:w-1/3">
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '280px' }}>
                    <Image
                      src={dbService.imageUrl}
                      alt={`${serviceData.title} illustration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center w-full md:w-2/3">
                <div 
                  className="prose prose-lg max-w-none description-text"
                  dangerouslySetInnerHTML={{ __html: dbService.longDescription }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
