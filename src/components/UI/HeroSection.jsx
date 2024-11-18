import { Zap, Star, Shield } from "lucide-react";
import { projectData } from "../data/BrowserMockupData/HeroSectionProjects";
import BgGrid from "./BgGrid";
import BrowserForImages from "./Browsers/BrowserForImages";

const HeroSection = () => {
  return (
    <header className="relative flex min-h-screen items-center">
      <BgGrid />
      <div className="section-container relative py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="gradient-color-text mb-5 mt-2 font-medium 2xl:block">
              Expert Web Solutions
            </span>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Transform Your Online Presence with{" "}
            </h1>
            <p className="mb-8 text-lg text-secondary-light sm:text-xl">
              We craft stunning websites that convert visitors into customers.
              See how we can elevate your digital presence.
            </p>
            <div className="mb-12 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <button className="gradient-color w-full rounded px-8 py-4 font-bold text-tertiary-text sm:w-auto">
                Get Free Consultation
              </button>
              <button className="w-full rounded border border-border px-8 py-4 font-semibold sm:w-auto">
                View All Services
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center">
                <Shield className="mr-2 h-4 w-4 text-green-400" />
                <p className="text-secondary">
                  100% Satisfaction Guaranteed
                </p>
              </span>
              <span className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-yellow-400" />
                <p className="text-secondary">
                  5-Star Rated Agency{" "}
                </p>
              </span>
              <span className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-blue-400" />
                <p className="text-secondary">
                  Lightning Fast Delivery
                </p>
              </span>
            </div>
          </div>

          <BrowserForImages projectData={projectData} />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
