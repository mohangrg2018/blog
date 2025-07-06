"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ title, description, image, category }) => {
  return (
    <Link
      href={`/blog/:id`}
      className="flex flex-col gap-2 lg:gap-4 border border-black hover:shadow-[-5px_5px_0px_0px_#000]"
    >
      <Image src={image} width={400} height={400} alt="thumbnail image" />
      <div className="p-4 flex flex-col gap-2 lg:gap-4">
        <p className="bg-black text-white p-2 w-fit">{category}</p>
        <p className="font-medium">{title}</p>
        <p>{description}</p>
        <p className="flex items-center gap-3">
          Read More
          <Image src={assets.arrow} alt="arrow" width={15} height={15} />
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
