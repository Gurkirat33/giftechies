"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createHeroSection } from "../actions";
import { Upload } from "lucide-react";

export default function NewHeroSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can only upload up to 4 images");
      return;
    }
    setImages(files);
    
    // Create preview URLs
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length !== 4) {
      alert("Please select exactly 4 images");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      
      // Upload images first
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await createHeroSection(formData);
      router.push("/backend/hero-section");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to create hero section");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h2 className="text-3xl font-semibold mb-6">Create New Hero Section</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Sub Heading</label>
          <input
            type="text"
            name="subHeading"
            required
            className="w-full rounded-lg border p-2"
            placeholder="Enter sub heading"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Heading</label>
          <input
            type="text"
            name="heading"
            required
            className="w-full rounded-lg border p-2"
            placeholder="Enter heading"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            required
            rows={4}
            className="w-full rounded-lg border p-2"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Button URL</label>
          <input
            type="url"
            name="buttonUrl"
            required
            className="w-full rounded-lg border p-2"
            placeholder="Enter button URL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Outcome</label>
          <input
            type="text"
            name="outcome"
            required
            defaultValue="Pending"
            className="w-full rounded-lg border p-2"
            placeholder="Enter outcome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Images (exactly 4 required)</label>
          <div className="mt-2">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="size-8 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Click to upload images</p>
              </div>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </label>
          </div>
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative aspect-[4/3]">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="gradient-color px-4 py-2 text-sm text-white rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Hero Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
