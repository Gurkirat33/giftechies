import connectDb from "@/lib/connectDb";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { imageUrl, heading, description, keyPoints, slug } =
    await request.json();
  // Todo
  console.log("Service working ?");
  try {
    connectDb();
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
