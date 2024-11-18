"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { deletePortfolio } from "./actions";

export default function PortfolioClient({ initialPortfolio }) {
  const [portfolios, setPortfolios] = useState(initialPortfolio);
  const router = useRouter();

  const handleEditPortfolio = (id) => {
    router.push(`/backend/portfolio/${id}`);
  };

  const handleDeletePortfolio = async (id) => {
    if (!confirm("Are you sure you want to delete this portfolio item?")) return;
    
    try {
      const result = await deletePortfolio(id);
      if (result.success) {
        setPortfolios((prev) =>
          prev.filter((portfolio) => portfolio.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Portfolio</h2>
            <p className="mt-1 text-sm text-gray-500">Manage your portfolio projects and case studies</p>
          </div>
          <button
            onClick={() => router.push("/backend/portfolio/new")}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="divide-y divide-gray-200">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="flex items-center gap-6 p-6 transition-colors hover:bg-gray-50"
              >
                {/* Image */}
                <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {portfolio.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    {portfolio.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 transition-opacity">
                  <button
                    onClick={() => handleEditPortfolio(portfolio.id)}
                    className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    title="Edit Project"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeletePortfolio(portfolio.id)}
                    className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
                    title="Delete Project"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
