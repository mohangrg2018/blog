"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/profile_icon.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
    } else {
      toast.error(response.data.msg);
    }

    setData({
      title: "",
      description: "",
      category: "Startup",
      author: "Alex Bennett",
      authorImg: "/profile_icon.png",
    });
    setImage(null);
  };
  return (
    <div className="w-[50%]">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xl">Upload Thumbnail</p>
          <label htmlFor="thumbnail" className="inline-block">
            <Image
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              className="cursor-pointer"
              alt="upload"
              width={120}
              height={100}
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            id="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Blog title</p>
          <input
            name="title"
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            className="border border-gray-200 p-2 rounded-sm"
            placeholder="Enter Blog Title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Blog Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            className="border border-gray-200 p-2 rounded-sm"
            placeholder="Enter Blog Description"
            rows={5}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Category</p>
          <select
            name="category"
            onChange={onChangeHandler}
            value={data.category}
            className="border border-gray-200 p-2 rounded-sm"
          >
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded-sm w-fit cursor-pointer"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default page;
