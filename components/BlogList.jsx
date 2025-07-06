"use client";

import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <section className="container__width mt-14 lg:mt-24 ">
      <div className="flex items-center justify-center gap-10 mb-10">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          } cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`${
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          } cursor-pointer`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`${
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          } cursor-pointer`}
        >
          Lifestyle
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`${
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          } cursor-pointer`}
        >
          Startup
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blog_data
          .filter((item) => (menu === "All" ? true : menu === item.category))
          .map((item, id) => {
            return (
              <BlogItem
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
              />
            );
          })}
      </div>
    </section>
  );
};

export default BlogList;
