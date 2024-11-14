import { getDbConnection } from "@/lib/auth";
import connectDb from "@/lib/connectDb";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { imageUrl, heading, description, keyPoints, slug } =
    await request.json();
  if (!imageUrl || !heading || !description || !keyPoints || !slug)
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );

  try {
    await getDbConnection();
    await serviceModel.create({
      imageUrl,
      heading,
      description,
      keyPoints,
      slug,
    });
    return NextResponse.json({ data: "ok" });
  } catch (error) {
    console.log(error);
  }
}
