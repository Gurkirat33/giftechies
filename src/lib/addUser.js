import connectDb from "@/lib/connectDb";
import Admin from "@/models/admin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function addAdminUser(username, password) {
  connectDb();
  try {
    const newAdmin = new Admin({
      username,
      password,
    });

    await newAdmin.save();
    console.log("Admin user added successfully:", newAdmin);
    return NextResponse.json({ data: "Done" });
  } catch (error) {
    console.error("Error adding admin user:", error);
  } finally {
    mongoose.connection.close();
  }
}
