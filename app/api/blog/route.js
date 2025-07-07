import connectDB from "@/lib/config/db.js";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const loadDB = async () => {
  await connectDB();
};

export async function GET() {
  return NextResponse.json({ msg: "API IS WORKING" });
}

export async function POST(request) {
  await loadDB();

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `public/${timestamp}-${image.name}`;

  await writeFile(path, buffer);
  const imageUrl = `/${timestamp}-${image.name}`;

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: imageUrl,
    date: Date.now(),
    category: formData.get("category"),
    author: formData.get("author"),
    authorImg: formData.get("authorImg"),
  };

  await BlogModel.create(blogData);
  console.log("Blog saved");

  return NextResponse.json({ success: true, msg: "Blog saved" });
}
