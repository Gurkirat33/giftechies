import { getPortfolioItems } from "./actions";
import PortfolioClient from "./portfolio-client";

// Keep ISR for general caching
export const revalidate = 3600;

// Add unstable_cache with tag for on-demand revalidation
async function getPortfolioData() {
  const data = await getPortfolioItems();
  return data;
}

export default async function Page() {
  const portfolioData = await getPortfolioData();
  return <PortfolioClient portfolioData={portfolioData} />;
}