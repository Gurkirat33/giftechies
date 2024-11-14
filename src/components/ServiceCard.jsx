"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Globe,
  Search,
  Smartphone,
  Database,
  LineChart,
  ShoppingBag,
  Shield,
  Code,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

const IconMap = {
  Globe,
  Search,
  Smartphone,
  Database,
  LineChart,
  ShoppingBag,
  Shield,
  Code,
  Megaphone,
};

export const ServiceCard = ({
  heading,
  icon,
  description,
  keyPoints,
  imageUrl,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const IconComponent = IconMap[icon];

  return (
    <div
      className="group relative cursor-none overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-primary-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute z-50 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/20 text-sm font-medium text-white backdrop-blur-sm transition-all duration-100"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="rounded-full bg-blue-500 p-2">Know More</div>
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={imageUrl} alt={heading} className="h-full w-full" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center">
            <div className="rounded-lg bg-white/90 p-2 dark:bg-gray-800/90">
              {/* <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" /> */}
            </div>
            <h3 className="ml-3 text-xl font-semibold text-white">{heading}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>

        <ul className="space-y-2">
          {keyPoints.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={""}
          className="gradient-color-text mt-6 flex items-center text-sm font-semibold dark:text-red-400"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
