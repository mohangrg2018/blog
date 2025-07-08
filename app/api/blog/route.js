import connectDB from "@/lib/config/db.js";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel.js";

const loadDB = async () => {
  await connectDB();
};

// API ENDPOINT TO GET ALL BLOGS
export async function GET(request) {
  await loadDB();

  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API ENDPOINT FOR UPLOADING BLOGS
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
