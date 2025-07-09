import connectDB from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

export async function POST(request) {
  await LoadDB();

  try {
    const formData = await request.formData();
    const email = formData.get("email");

    // Check for duplicate email
    const existingEmail = await EmailModel.findOne({ email: email });
    if (existingEmail) {
      return NextResponse.json({
        success: false,
        msg: "Email already subscribed",
      });
    }

    // Save new email
    await EmailModel.create({ email, date: Date.now() });

    return NextResponse.json({ success: true, msg: "Email subscribed" });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ success: false, msg: "Error saving email" });
  }
}

export async function GET(request) {
  await LoadDB();
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

export async function DELETE(request) {
  await LoadDB();
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email deleted" });
}
