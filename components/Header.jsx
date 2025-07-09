"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
    } else {
      toast.error(response.data.msg);
    }
    setEmail("");
  };
  return (
    <header className="pt-4">
      <div className="container__width">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={assets.logo} alt="logo" width={120} height={120} />
          </Link>
          <button className="border border-black py-2 px-4 shadow-[-5px_5px_0px_0px_#000] cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="max-w-[600px] mx-auto mt-10 md:mt-20 flex flex-col gap-8 items-center">
          <h1 className="font-bold text-4xl">Latest Blogs</h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            unde suscipit nostrum omnis aliquam molestias dolore molestiae
          </p>
          <form
            onSubmit={onSubmitHandler}
            className="border-2 border-black shadow-[-5px_5px_0px_0px_#000] flex items-center"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none pl-4 w-[200px] lg:w-[300px]"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="border-l-2 py-2 px-6 hover:bg-black hover:text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
