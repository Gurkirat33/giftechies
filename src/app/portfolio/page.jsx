import { getPortfolioItems } from "./actions";
import PortfolioClient from "./portfolio-client";

// Use ISR with 1 hour revalidation instead of force-dynamic
export const revalidate = 3600;

export default async function Page() {
  const portfolioData = await getPortfolioItems();
  return <PortfolioClient portfolioData={portfolioData} />;
}