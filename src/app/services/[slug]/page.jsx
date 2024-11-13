import connectDb from "@/lib/connectDb";
import serviceModel from "@/models/service.model";

export async function generateStaticParams() {
  try {
    await connectDb();
    const services = await serviceModel.find({}, { slug: 1 });

    return services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export const revalidate = 7 * 24 * 60 * 60;

async function getService(slug) {
  try {
    const response = await fetch(`/api/services/${slug}`, {
      next: { revalidate: 7 * 24 * 60 * 60 },
    });

    if (!response.ok) throw new Error("Failed to fetch service");

    const data = await response.json();
    return data.service;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServicePage({ params }) {
  const { slug } = params;
  const service = await getService(slug);

  return (
    <div>
      <h1>{service.title}</h1>
      <div>{service.description}</div>
      {/* Add more service details here */}
    </div>
  );
}
