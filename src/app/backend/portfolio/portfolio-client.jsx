"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";
import { deletePortfolio } from "./actions";
import Image from "next/image";
import { SectionHeading } from "@/components/UI/SectionHeading";

export default function PortfolioClient({ initialPortfolio }) {
  const [portfolios, setPortfolios] = useState(initialPortfolio);
  const [deletingId, setDeletingId] = useState(null);
  const router = useRouter();

  const handleEditPortfolio = (id) => {
    router.push(`/backend/portfolio/${id}`);
  };

  const handleDeletePortfolio = async (id) => {
    if (!confirm("Are you sure you want to delete this portfolio item?")) return;
    
    try {
      setDeletingId(id);
      const result = await deletePortfolio(id);
      if (result.success) {
        setPortfolios((prev) =>
          prev.filter((portfolio) => portfolio.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto min-h-screen space-y-8 px-4 py-10">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold">Portfolio Section</p>
        <button
          onClick={() => router.push("/backend/portfolio/new")}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className="group flex items-center gap-6 rounded-xl border border-border bg-primary p-4 transition-all hover:border-blue-500/50 hover:shadow-lg"
          >
            {/* Image Container - Left Side */}
            <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={portfolio.imageUrl}
                alt={portfolio.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content - Middle */}
            <div className="flex-grow space-y-3">
              <h3 className="text-lg font-medium text-secondary">
                {portfolio.title}
              </h3>
              {portfolio.description && (
                <p className="text-sm text-secondary-light">
                  {portfolio.description}
                </p>
              )}
              {portfolio.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {portfolio.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Actions - Right Side */}
            <div className="flex flex-shrink-0 items-center gap-3">
              <button
                onClick={() => handleEditPortfolio(portfolio.id)}
                className="rounded-lg bg-secondary/10 p-2 text-secondary transition-colors hover:bg-secondary/20"
                title="Edit Project"
              >
                <Pencil className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDeletePortfolio(portfolio.id)}
                disabled={deletingId === portfolio.id}
                className="rounded-lg bg-red-500/10 p-2 text-red-500 transition-colors hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                title="Delete Project"
              >
                {deletingId === portfolio.id ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Trash2 className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
