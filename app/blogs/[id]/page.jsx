"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id == params.id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className=" bg-gray-200 pb-30">
        <div className="container__width flex justify-between items-center py-4">
          <Link href="/">
            <Image src={assets.logo} alt="logo" width={150} height={150} />
          </Link>
          <button className="flex items-center gap-2 border-2 border-black py-2 px-4 shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]">
            Get Started
            <Image src={assets.arrow} alt="arrow" width={15} height={15} />
          </button>
        </div>
        <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center gap-8">
          <h1 className="text-2xl md:text-5xl font-semibold text-center">
            {data.title}
          </h1>
          <div className="flex flex-col items-center">
            <Image src={data.author_img} alt="author" width={50} height={50} />
            <p>{data.author}</p>
          </div>
        </div>
      </div>
      <div className="container__width flex flex-col items-center">
        <div className="-mt-20">
          <Image
            src={data.image}
            alt="blog"
            width={800}
            height={800}
            className="border-6 border-white"
          />
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div className="flex flex-col items-center mt-16">
          <p className="font-semibold">Share this article on social media</p>
          <div className="flex items-center gap-4">
            <Image
              src={assets.facebook_icon}
              alt="facebook"
              width={30}
              height={30}
            />
            <Image
              src={assets.googleplus_icon}
              alt="googleplus"
              width={30}
              height={30}
            />
            <Image
              src={assets.twitter_icon}
              alt="twitter"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
