"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const ServiceForm = ({ initialData, id }) => {
  const router = useRouter();
  const isNewService = id === "new";

  const [formData, setFormData] = useState({
    imageUrl: initialData?.imageUrl || "",
    heading: initialData?.heading || "",
    description: initialData?.description || "",
    keyPoints: isNewService ? "" : initialData?.keyPoints?.join("\n") || "",
    slug: initialData?.slug || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...formData,
        keyPoints: formData.keyPoints
          .split("\n")
          .filter((point) => point.trim()),
      };

      let response;

      if (isNewService) {
        response = await axios.post("/api/add-services", payload);
        if (response?.data?.data) {
          router.push(`/backend/services`);
        }
      } else {
        response = await axios.post(`/api/get-services/${id}`, payload);
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save service");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {isNewService ? "Add New Service" : "Edit Service"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-red-600">{error}</div>
        )}

        {success && (
          <div className="rounded-md bg-green-50 p-3 text-green-600">
            {isNewService
              ? "Service created successfully!"
              : "Changes saved successfully!"}
          </div>
        )}

        <div className="grid gap-6">
          <div>
            <label className="mb-1 block text-sm font-medium">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Heading</label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border p-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Key Points (one per line)
            </label>
            <textarea
              name="keyPoints"
              value={formData.keyPoints}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border p-2 font-mono"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
              required
              pattern="[a-z0-9-]+"
              title="Only lowercase letters, numbers, and hyphens allowed"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`rounded-md px-4 py-2 text-white ${
              isLoading
                ? "cursor-not-allowed bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading
              ? "Saving..."
              : isNewService
                ? "Create Service"
                : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => {
              const previewWindow = window.open("", "_blank");
              previewWindow.document.write(`
                <html>
                  <head>
                    <title>Service Preview</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                  </head>
                  <body class="max-w-7xl mx-auto grid grid-cols-3 p-8">
                    <div class="">
                      <img src="${formData.imageUrl}" alt="" class="w-full aspect-[4/3] object-cover rounded-lg mb-4"/>
                      <h2 class="text-2xl font-bold mb-2">${formData.heading}</h2>
                      <p class="text-gray-600 mb-4">${formData.description}</p>
                      <ul class="list-disc pl-5 space-y-2">
                        ${formData.keyPoints
                          .split("\n")
                          .filter((point) => point.trim())
                          .map((point) => `<li>${point}</li>`)
                          .join("")}
                      </ul>
                    </div>
                  </body>
                </html>
              `);
            }}
            className="rounded-md bg-gray-100 px-4 py-2 hover:bg-gray-200"
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};
