import { getPortfolioItems } from "./actions";
import PortfolioClient from "./portfolio-client";

export const dynamic = "force-dynamic";

export default async function Page() {
  const portfolioData = await getPortfolioItems();
  return <PortfolioClient portfolioData={portfolioData} />;
}