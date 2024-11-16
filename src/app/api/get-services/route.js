import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await getDbConnection();
    const services = await serviceModel.find({}).lean();
    
    if (!services || services.length === 0) {
      return NextResponse.json(
        { error: "No services found" },
        { 
          status: 404,
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          }
        }
      );
    }

    return NextResponse.json(
      { services },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        }
      }
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
