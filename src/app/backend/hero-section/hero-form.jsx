"use client";

import { useState } from "react";
import { createHeroSection, updateHeroSection } from "./actions";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { uploadToCloudinary } from "@/utils/uploadImage";
import Image from "next/image";

export default function HeroForm({ hero }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState(hero?.images || []);
  const [files, setFiles] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 4) {
      setError("You can only upload up to 4 images");
      return;
    }
    setFiles(selectedFiles);
    
    // Create preview URLs
    const urls = selectedFiles.map(file => URL.createObjectURL(file));
    setImages(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (files.length === 0 && !hero) {
        throw new Error("Please select exactly 4 images");
      }

      if (files.length > 0 && files.length !== 4) {
        throw new Error("Please select exactly 4 images");
      }

      const formData = new FormData(e.target);
      formData.delete("images");

      // If new files are selected, upload them to Cloudinary
      if (files.length > 0) {
        const uploadPromises = files.map(file => uploadToCloudinary(file));
        const uploadResults = await Promise.all(uploadPromises);
        const imageUrls = uploadResults.map(result => result.url);
        imageUrls.forEach(url => formData.append("images", url));
      } else {
        // Use existing images from hero
        hero.images.forEach(img => formData.append("images", img));
      }

      if (hero) {
        await updateHeroSection(hero._id, formData);
      } else {
        await createHeroSection(formData);
      }
      
      router.push("/backend/hero-section");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md">{error}</div>
      )}

      <div>
        <label htmlFor="subHeading" className="block text-sm font-medium text-gray-700">
          Sub Heading
        </label>
        <input
          type="text"
          name="subHeading"
          id="subHeading"
          defaultValue={hero?.subHeading}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
          Heading
        </label>
        <input
          type="text"
          name="heading"
          id="heading"
          defaultValue={hero?.heading}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          defaultValue={hero?.description}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="buttonUrl" className="block text-sm font-medium text-gray-700">
          Button URL
        </label>
        <input
          type="url"
          name="buttonUrl"
          id="buttonUrl"
          defaultValue={hero?.buttonUrl}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="outcome" className="block text-sm font-medium text-gray-700">
          Outcome
        </label>
        <input
          type="text"
          name="outcome"
          id="outcome"
          defaultValue={hero?.outcome || "Pending"}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Images ({images.length}/4)
        </label>
        <div className="mt-2">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="size-8 mb-2 text-gray-500" />
              <p className="text-sm text-gray-500">Click to upload images</p>
              {hero && <p className="text-xs text-gray-500">(Leave empty to keep existing images)</p>}
            </div>
            <input
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              required={!hero}
            />
          </label>
        </div>
        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {images.map((url, index) => (
              <div key={index} className="relative aspect-[4/3]">
                <Image
                  src={url}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading || (!hero && files.length !== 4)}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          loading || (!hero && files.length !== 4)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : hero ? "Update Hero Section" : "Create Hero Section"}
      </button>
    </form>
  );
}
