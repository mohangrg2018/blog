import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ title, description, category, image }) => {
  return (
    <section className="max-w-[300px] flex flex-col gap-4 border pb-6 hover:shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]">
      <Image src={image} alt="blog" width={500} height={500} />
      <div className="flex flex-col gap-4 pl-4">
        <p className="bg-black text-white w-fit px-4">{category}</p>
        <h5 className="text-lg font-medium">{title}</h5>
        <p>{description}</p>
        <div className="flex items-center gap-2 font-medium cursor-pointer">
          Read More
          <Image src={assets.arrow} alt="arrow" width={15} height={15} />
        </div>
      </div>
    </section>
  );
};

export default BlogItem;
