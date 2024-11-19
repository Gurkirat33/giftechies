"use client";

import { SectionHeading } from "@/components/UI/SectionHeading";
import { MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";

function PortfolioCard({ item, onClick }) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-3xl"
      onClick={() => onClick(item)}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      <img src={item.imageUrl} alt="" className="w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        <h3 className="text-2xl font-medium text-tertiary-text">
          {item.title}
        </h3>
        <MoveRight
          size={32}
          className="group-hover:gradient-color-text -rotate-45 transform text-tertiary-text transition-transform duration-300"
        />
      </div>
      <ul className="absolute right-6 top-6 z-20 flex flex-wrap gap-3">
        {item?.tags?.map((tag, index) => (
          <li
            key={index}
            className="rounded-full border border-border/50 px-3 py-1.5 text-sm text-tertiary-text"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ isOpen, onClose, item }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="animate-fadeIn absolute inset-0 bg-primary/60 backdrop-blur-sm" />
      <div
        className="animate-scaleIn relative z-10 mx-4 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-20 rounded-full bg-primary p-2 text-secondary transition-colors hover:bg-primary-light"
        >
          <X size={24} />
        </button>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-[90vh] w-full rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/90 to-transparent p-6">
          <h3 className="text-2xl font-medium text-tertiary-text">
            {item.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {item?.tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-border/50 px-3 py-1.5 text-sm text-tertiary-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioClient({ portfolioData }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="bg-primary py-28">
        <div className="section-container px-4">
          <SectionHeading title={"Where Creativity Meets Results"} description={"Discover how we turn ideas into impactful digital solutions with innovation and quality."}/>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 0)
                .map((item) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onClick={setSelectedItem}
                  />
                ))}
            </div>

            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 1)
                .map((item) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onClick={setSelectedItem}
                  />
                ))}
            </div>

            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 2)
                .map((item) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onClick={setSelectedItem}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem || {}}
      />
    </>
  );
}
