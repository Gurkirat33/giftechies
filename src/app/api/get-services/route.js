import connectDb from "@/lib/connectDb";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;
  try {
    connectDb();
    const service = await serviceModel.findOne({ slug });
    if (!service) {
      return NextResponse.json({ error: "true" }, { status: 404 });
    }
    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
  }
}
