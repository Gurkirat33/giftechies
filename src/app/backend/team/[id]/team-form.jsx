"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upsertTeamMember } from "./actions";

export default function TeamForm({ initialData, id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id,
    name: initialData?.name || "",
    role: initialData?.role || "",
    imageUrl: initialData?.imageUrl || "",
    order: initialData?.order || 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await upsertTeamMember(formData);
      if (result.success) {
        router.push("/backend/team");
        router.refresh();
      } else {
        alert("Failed to save team member");
      }
    } catch (error) {
      console.error("Error saving team member:", error);
      alert("Error saving team member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-secondary-light">
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-border bg-primary p-2.5 text-secondary shadow-sm focus:ring-2 focus:ring-secondary-light"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-light">
          Role
        </label>
        <input
          type="text"
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-border bg-primary p-2.5 text-secondary shadow-sm focus:ring-2 focus:ring-secondary-light"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-light">
          Image URL
        </label>
        <input
          type="url"
          required
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData({ ...formData, imageUrl: e.target.value })
          }
          className="mt-1 block w-full rounded-lg border border-border bg-primary p-2.5 text-secondary shadow-sm focus:ring-2 focus:ring-secondary-light"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary-light">
          Order
        </label>
        <input
          type="number"
          value={formData.order}
          onChange={(e) =>
            setFormData({ ...formData, order: parseInt(e.target.value) })
          }
          className="mt-1 block w-full rounded-lg border border-border bg-primary p-2.5 text-secondary shadow-sm focus:ring-2 focus:ring-secondary-light"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg border border-border px-4 py-2 text-secondary-light transition-colors hover:text-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="gradient-color rounded-lg px-4 py-2 text-tertiary-text"
        >
          {loading ? "Saving..." : "Save Member"}
        </button>
      </div>
    </form>
  );
}
