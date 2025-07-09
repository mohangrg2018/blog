"use client";

import BlogTableData from "@/components/AdminComponents/BlogTableData";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: { id: mongoId },
    });
    toast.success(response.data.msg);
    fetchBlogData();
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <div className="w-[90%] relative h-[80vh]">
      <h1 className="text-2xl font-semibold">All Blogs</h1>
      <div className="mt-4 h-[60vh] overflow-y-auto scrollbar-hidden">
        <table className="w-full border border-black">
          <thead className="uppercase font-semibold bg-gray-200">
            <tr>
              <th className="text-start px-6 py-2">AUTHOR NAME</th>
              <th className="text-start px-6 py-2">blog title</th>
              <th className="text-start px-6 py-2">date</th>
              <th className="text-start px-6 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableData
                  key={index}
                  mongoId={blog._id}
                  title={blog.title}
                  authorImg={blog.authorImg}
                  author={blog.author}
                  date={blog.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
