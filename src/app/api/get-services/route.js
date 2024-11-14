import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    getDbConnection();
    const service = await serviceModel.find({});
    if (!service) {
      return NextResponse.json({ error: "true" }, { status: 404 });
    }
    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
  }
}
