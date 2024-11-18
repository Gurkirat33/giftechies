"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";
import { uploadToCloudinary } from "@/utils/uploadImage";

export default function ServiceForm({ initialData, id }) {
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [uploadStats, setUploadStats] = useState(null);
  const [formData, setFormData] = useState({
    id,
    title: initialData?.title || "",
    description: initialData?.description || "",
    imageUrl: initialData?.image?.url || "",
    imagePublicId: initialData?.image?.public_id || "",
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Add file validation
    if (!file.type.startsWith("image/")) {
      setImageError("Please upload an image file");
      return;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 10) {
      setImageError("File size must be less than 10MB");
      return;
    }

    try {
      setLoading(true);
      setImageError("");

      // Log original file details
      console.log("Original file details:", {
        name: file.name,
        type: file.type,
        size: `${(file.size / (1024 * 1024)).toFixed(2)}MB`,
      });

      const result = await uploadToCloudinary(file);

      // Log compression results
      console.log("Compression results:", {
        originalSize: result.originalSize,
        compressedSize: result.compressedSize,
        reduction: result.compressionRatio,
      });

      setFormData((prev) => ({
        ...prev,
        imageUrl: result.url,
        imagePublicId: result.public_id,
      }));

      setUploadStats({
        originalSize: result.originalSize,
        compressedSize: result.compressedSize,
        compressionRatio: result.compressionRatio,
        status: result.compressionStatus,
        dimensions: result.report?.dimensions,
      });
    } catch (error) {
      console.error("Upload error:", error);
      setImageError("Failed to upload and compress image");
      setUploadStats(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      imageUrl: "",
      imagePublicId: "",
    }));
    setUploadStats(null);
    setImageError("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-secondary">
          Service Image
        </label>

        <div className="flex items-start space-x-4">
          <div className="relative h-40 w-40 flex-shrink-0">
            {formData.imageUrl ? (
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-border">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute right-1 top-1 rounded-full bg-primary/80 p-1"
                >
                  <X className="h-4 w-4 text-secondary" />
                </button>
              </div>
            ) : (
              <label className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-primary-light">
                <div className="text-center">
                  <Upload className="mx-auto h-6 w-6 text-secondary-light" />
                  <span className="mt-1 block text-xs text-secondary-light">
                    {loading ? "Uploading..." : "Upload Image"}
                  </span>
                </div>
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                  disabled={loading}
                />
              </label>
            )}
          </div>

          <div className="flex-grow">
            {uploadStats && (
              <div className="space-y-1 text-sm">
                <p className="text-secondary-light">
                  Original: {uploadStats.originalSize} MB
                </p>
                <p className="text-secondary-light">
                  Compressed: {uploadStats.compressedSize} MB
                </p>
                <p
                  className={`font-medium ${
                    parseFloat(uploadStats.compressionRatio) >= 70
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  Reduced by: {uploadStats.compressionRatio}%
                </p>
                {uploadStats.status && (
                  <p className="text-secondary-light">
                    Status: {uploadStats.status}
                  </p>
                )}
                {uploadStats.dimensions && (
                  <p className="text-secondary-light">
                    Size: {uploadStats.dimensions}
                  </p>
                )}
              </div>
            )}
            {imageError && (
              <p className="mt-2 text-sm text-red-500">{imageError}</p>
            )}
          </div>
        </div>
      </div>

      {/* Rest of your form */}
    </div>
  );
}
