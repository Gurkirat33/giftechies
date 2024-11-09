import React from "react";
import SectionHeading from "./SectionHeading";
import { features } from "../data/features";

function StaticGridPattern({ className }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 20V.5H20" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#grid-pattern)"
      />
      <svg x="-12" y="4" className="overflow-visible">
        <rect strokeWidth="0" width="21" height="21" x="160" y="80" />
        <rect strokeWidth="0" width="21" height="21" x="180" y="40" />
        <rect strokeWidth="0" width="21" height="21" x="140" y="100" />
        <rect strokeWidth="0" width="21" height="21" x="200" y="60" />
        <rect strokeWidth="0" width="21" height="21" x="160" y="120" />
      </svg>
    </svg>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary-600 p-6">
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <StaticGridPattern />
        </div>
      </div>
      <p className="relative z-20 text-base font-bold text-white">{title}</p>
      <p className="relative z-20 mt-4 text-base font-normal text-neutral-400">
        {description}
      </p>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <div className="bg-primary-900 py-8 md:py-12">
      <div className="section-container">
        <SectionHeading
          heading="Our Capabilities"
          description="Discover the powerful features that set our web development services apart and drive your online presence to new heights."
          className="pt-0"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={`feature-${index}`}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
