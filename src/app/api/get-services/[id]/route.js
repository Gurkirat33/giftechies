import { getDbConnection } from "@/lib/auth";
import serviceModel from "@/models/service.model";
import { NextResponse } from "next/server";

await getDbConnection();

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log("Service ID:", id);

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 404 });
    }

    const service = await serviceModel.findById(id);

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    console.log("Found service:", service);
    return NextResponse.json({ service });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 404 });
    }

    const body = await request.json();

    const requiredFields = [
      "imageUrl",
      "heading",
      "description",
      "keyPoints",
      "slug",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 },
        );
      }
    }

    const existingService = await serviceModel.findOne({
      slug: body.slug,
      _id: { $ne: id },
    });

    if (existingService) {
      return NextResponse.json(
        { error: "Slug must be unique" },
        { status: 400 },
      );
    }

    const updatedService = await serviceModel.findByIdAndUpdate(
      id,
      {
        $set: {
          imageUrl: body.imageUrl,
          heading: body.heading,
          description: body.description,
          keyPoints: body.keyPoints,
          slug: body.slug,
        },
      },
      { new: true, runValidators: true },
    );

    if (!updatedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ service: updatedService });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 404 });
    }

    const deletedService = await serviceModel.findByIdAndDelete(id);

    if (!deletedService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
