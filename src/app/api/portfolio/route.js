import connectDb from "@/lib/connectDb";
import portfolioModel from "@/models/portfolio.model";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  try {
    const portfolio = await portfolioModel.find({});
    if (!portfolio) {
      return NextResponse.json({ error: "true" }, { status: 404 });
    }
    return NextResponse.json({ portfolio });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request) {
  const { imageUrl, title, tags } = await request.json();
  try {
    await portfolioModel.create({
      imageUrl,
      title,
      tags,
    });
    return NextResponse.json({ data: "ok" });
  } catch (error) {
    console.log(error);
  }
}
