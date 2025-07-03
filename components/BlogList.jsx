"use client";

import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div className="container__width flex flex-col gap-4 items-center mt-16">
      <div className="flex items-center gap-10 mb-6">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu === "All"
              ? "bg-black text-white px-4 py-1 rounded-sm transition-all"
              : ""
          } cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`${
            menu === "Technology"
              ? "bg-black text-white px-4 py-1 rounded-sm transition-all"
              : ""
          } cursor-pointer`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`${
            menu === "Startup"
              ? "bg-black text-white px-4 py-1 rounded-sm transition-all"
              : ""
          } cursor-pointer`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`${
            menu === "Lifestyle"
              ? "bg-black text-white px-4 py-1 rounded-sm transition-all"
              : ""
          } cursor-pointer`}
        >
          Lifestyle
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blog_data
          .filter((item) => (menu === "All" ? item : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
