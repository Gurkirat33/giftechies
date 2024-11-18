export async function uploadToCloudinary(file) {
  try {
    // First, create a separate formData for the initial upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    );

    // Initial upload without transformations
    const uploadUrl = `https://api.cloudinary.com/v1_1/${
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }/image/upload`;

    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Upload failed");
    }

    // Now create a transformed version with compression
    const transformations = [
      "w_1600", // max width of 1600px
      "h_1600", // max height of 1600px
      "c_limit", // maintain aspect ratio
      "q_auto:low", // low quality
      "f_auto", // automatic format selection
    ].join(",");

    // Construct the compressed URL
    const baseUrl = data.secure_url.split("/upload/")[0];
    const publicId = data.secure_url.split("/upload/")[1];
    const compressedUrl = `${baseUrl}/upload/${transformations}/${publicId}`;

    // Fetch the transformed version to get its size
    const transformedResponse = await fetch(compressedUrl);
    const transformedBlob = await transformedResponse.blob();

    // Calculate sizes
    const originalSize = (file.size / (1024 * 1024)).toFixed(2);
    const compressedSize = (transformedBlob.size / (1024 * 1024)).toFixed(2);
    const compressionRatio = (
      (1 - transformedBlob.size / file.size) *
      100
    ).toFixed(1);

    const compressionReport = {
      originalSize: `${originalSize}MB`,
      compressedSize: `${compressedSize}MB`,
      compressionRatio: `${compressionRatio}%`,
      targetReduction: "70%",
      dimensions: `${data.width}x${data.height}`,
      format: data.format,
      transformedUrl: compressedUrl,
    };

    console.log("Upload and Compression Report:", compressionReport);

    const compressionStatus =
      parseFloat(compressionRatio) >= 70
        ? "Target reduction achieved"
        : "Compression below target";

    return {
      public_id: data.public_id,
      url: compressedUrl, // Using the transformed URL
      compressedSize,
      originalSize,
      compressionRatio,
      compressionStatus,
      report: compressionReport,
    };
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
}
