"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id == params.id) {
        setData(blog_data[i]);
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <section>
      <div className="bg-gray-100">
        <div className="container__width">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <Image src={assets.logo} alt="logo" width={120} height={120} />
            </Link>
            <button className="border border-black py-2 px-4 shadow-[-5px_5px_0px_0px_#000] cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="flex flex-col items-center mt-16 lg:mt-24 pb-36">
            {data ? (
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-xl text-center">{data.title}</h1>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={assets.profile_icon}
                    alt="profile"
                    width={30}
                    height={30}
                  />
                  <p>{data.author}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        {data ? (
          <div className="container__width flex flex-col items-center">
            <Image
              src={data.image}
              className="border-4 border-white -mt-24"
              width={600}
              height={600}
              alt="thumbnail"
            />
            <div className="mt-10">
              <p>{data.description}</p>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </section>
  );
};

export default page;
