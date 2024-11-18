'use server';

import { getDbConnection } from "@/lib/auth";
import portfolioModel from "@/models/portfolio.model";
import { revalidatePath } from "next/cache";

const serializePortfolio = (item) => {
  return {
    id: item._id.toString(),
    imageUrl: item.imageUrl || '',
    title: item.title || '',
    tags: Array.isArray(item.tags) ? item.tags : [],
    description: item.description || '',
  };
};

export async function getPortfolioItems() {
  try {
    await getDbConnection();
    const items = await portfolioModel.find({}).lean();
    return items.map(serializePortfolio);
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return [];
  }
}
