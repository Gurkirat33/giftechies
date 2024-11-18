"use server";

import { writeFile } from "fs/promises";
import { join } from "path";

export async function uploadImage(formData) {
  try {
    const file = formData.get("file");
    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const filename = `portfolio-${uniqueSuffix}.${file.type.split("/")[1]}`;
    
    const path = join(process.cwd(), "public", "uploads", filename);
    await writeFile(path, buffer);
    
    return { success: true, filename: `/uploads/${filename}` };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, error: error.message };
  }
}
