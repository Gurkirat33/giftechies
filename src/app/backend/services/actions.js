'use server';

import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import { revalidatePath } from "next/cache";

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

export async function getService(id) {
  try {
    await getDbConnection();
    const service = await serviceModel.findById(id).lean();
    if (!service) return null;
    return serializeService(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    throw new Error("Failed to fetch service");
  }
}

export async function deleteService(id) {
  try {
    await getDbConnection();
    await serviceModel.findByIdAndDelete(id);
    revalidatePath('/backend/services');
    revalidatePath('/services');
    return { success: true };
  } catch (error) {
    console.error("Error deleting service:", error);
    throw new Error("Failed to delete service");
  }
}

export async function updateService(id, data) {
  try {
    await getDbConnection();
    const service = await serviceModel.findByIdAndUpdate(
      id,
      { ...data },
      { new: true, runValidators: true }
    ).lean();
    
    revalidatePath('/backend/services');
    revalidatePath('/services');
    return serializeService(service);
  } catch (error) {
    console.error("Error updating service:", error);
    throw new Error("Failed to update service");
  }
}

export async function createService(data) {
  try {
    await getDbConnection();
    const service = await serviceModel.create(data);
    revalidatePath('/backend/services');
    revalidatePath('/services');
    return serializeService(service.toObject());
  } catch (error) {
    console.error("Error creating service:", error);
    throw new Error("Failed to create service");
  }
}
