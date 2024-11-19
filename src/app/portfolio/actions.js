'use server';

import { getDbConnection } from "@/lib/auth";
import portfolioModel from "@/models/portfolio.model";
import { revalidatePath } from "next/cache";
import { unstable_cache } from 'next/cache';

const serializePortfolio = (item) => {
  return {
    id: item._id.toString(),
    imageUrl: item.imageUrl || '',
    title: item.title || '',
    tags: Array.isArray(item.tags) ? item.tags : [],
    description: item.description || '',
  };
};

// Cache the portfolio items for 1 hour
export const getPortfolioItems = unstable_cache(
  async () => {
    try {
      await getDbConnection();
      const items = await portfolioModel.find({}).lean();
      return items.map(serializePortfolio);
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
      return [];
    }
  },
  ['portfolio-items'],
  { revalidate: 3600 }
);
