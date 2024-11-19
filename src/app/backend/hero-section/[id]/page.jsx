"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getHeroSection, updateHeroSection } from "../actions";
import { Upload } from "lucide-react";

export default function EditHeroSection({ params }) {
  const router = useRouter();
  const { id } = params;
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [heroData, setHeroData] = useState(null);
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const data = await getHeroSection();
        const hero = data.find(h => h._id === id);
        if (hero) {
          setHeroData(hero);
          setPreviewUrls(hero.images);
        } else {
          alert("Hero section not found");
          router.push("/backend/hero-section");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to fetch hero section");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroSection();
  }, [id, router]);

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
    if (images.length > 0 && images.length !== 4) {
      alert("Please select exactly 4 images");
      return;
    }

    try {
      setSubmitting(true);
      const formData = new FormData(e.target);
      
      // Only append images if new ones were selected
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      } else {
        // Use existing images
        heroData.images.forEach(image => {
          formData.append("images", image);
        });
      }

      await updateHeroSection(id, formData);
      router.push("/backend/hero-section");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update hero section");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (!heroData) {
    return <div className="text-center py-4">Hero section not found</div>;
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h2 className="text-3xl font-semibold mb-6">Edit Hero Section</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Sub Heading</label>
          <input
            type="text"
            name="subHeading"
            required
            defaultValue={heroData.subHeading}
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
            defaultValue={heroData.heading}
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
            defaultValue={heroData.description}
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
            defaultValue={heroData.buttonUrl}
            className="w-full rounded-lg border p-2"
            placeholder="Enter button URL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Images (exactly 4 required)</label>
          <div className="mt-2">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="size-8 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Click to upload new images</p>
                <p className="text-xs text-gray-500">(Leave empty to keep existing images)</p>
              </div>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleImageChange}
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
            disabled={submitting}
            className="gradient-color px-4 py-2 text-sm text-white rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? "Updating..." : "Update Hero Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
