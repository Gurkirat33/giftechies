"use client";

import axios from "axios";
import { MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";

function PortfolioCard({ item, index, onClick }) {
  return (
    <div
      key={index}
      className="group relative cursor-pointer overflow-hidden rounded-3xl"
      onClick={() => onClick(item)}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      <img src={item.imageUrl} alt="" className="w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        <h3 className="text-2xl font-medium text-white">{item.title}</h3>
        <MoveRight
          size={32}
          className="-rotate-45 transform text-white transition-transform duration-300 group-hover:text-red-300"
        />
      </div>
      <ul className="absolute right-6 top-6 z-20 flex flex-wrap gap-3">
        {item?.tags?.map((tag, index) => (
          <li
            key={index}
            className="rounded-full border border-white/50 px-3 py-1.5 text-sm text-white"
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
      <div className="animate-fadeIn absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="animate-scaleIn relative z-10 mx-4 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-20 rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-100"
        >
          <X size={24} />
        </button>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-[90vh] w-full rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/90 to-transparent p-6">
          <h3 className="text-2xl font-medium text-white">{item.title}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {item?.tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-white/50 px-3 py-1.5 text-sm text-white"
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

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get("/api/portfolio");
        setPortfolioData(response.data.portfolio);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  // const portfolioData = [
  //   {
  //     imageUrl:
  //       "https://framerusercontent.com/images/BonUiF59zLLLFEuzlHA3IHP4W10.png?scale-down-to=512",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://imgs.search.brave.com/7UYzVlU1IJMofGNUAW_0sfGnRM__6QkLC6n4ACnphIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ni8wMS8wOS8wNC9i/bG9nLTc5MzA0N182/NDAuanBn",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://framerusercontent.com/images/BonUiF59zLLLFEuzlHA3IHP4W10.png?scale-down-to=512",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://imgs.search.brave.com/7UYzVlU1IJMofGNUAW_0sfGnRM__6QkLC6n4ACnphIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ni8wMS8wOS8wNC9i/bG9nLTc5MzA0N182/NDAuanBn",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://framerusercontent.com/images/BonUiF59zLLLFEuzlHA3IHP4W10.png?scale-down-to=512",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://framerusercontent.com/images/BonUiF59zLLLFEuzlHA3IHP4W10.png?scale-down-to=512",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  //   {
  //     imageUrl:
  //       "https://framerusercontent.com/images/BonUiF59zLLLFEuzlHA3IHP4W10.png?scale-down-to=512",
  //     title: "Web Development",
  //     tags: ["Tag 1", "Tag 2", "Tag 3"],
  //   },
  // ];

  return (
    <>
      <div className="bg-white py-32 text-black dark:bg-primary-900 dark:text-white">
        <div className="section-container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-6xl font-medium leading-[1.03] tracking-wide text-white md:text-[84px]">
              Where Creativity <br /> Meets Results
            </h2>
            <p className="mt-6 text-xl text-[#a6abb4]">
              Discover how we turn ideas into impactful digital solutions with
              innovation and quality
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 0)
                .map((item, index) => (
                  <PortfolioCard
                    key={index}
                    item={item}
                    index={index}
                    onClick={setSelectedItem}
                  />
                ))}
            </div>

            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 1)
                .map((item, index) => (
                  <PortfolioCard
                    key={index}
                    item={item}
                    index={index}
                    onClick={setSelectedItem}
                  />
                ))}
            </div>

            <div className="flex flex-col gap-8 md:w-1/3">
              {portfolioData
                .filter((_, i) => i % 3 === 2)
                .map((item, index) => (
                  <PortfolioCard
                    key={index}
                    item={item}
                    index={index}
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
        item={selectedItem}
      />
    </>
  );
}
