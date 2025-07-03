import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container__width">
      <div className="flex items-center justify-between py-4">
        <Link href="/">
          <Image src={assets.logo} alt="logo" width={150} height={150} />
        </Link>
        <button className="flex items-center gap-2 border-2 border-black py-2 px-4 shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]">
          Get Started
          <Image src={assets.arrow} alt="arrow" width={15} height={15} />
        </button>
      </div>
      <div className="flex flex-col gap-8 mt-8 items-center">
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          action=""
          className="border-2 border-black flex shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none px-4"
          />
          <button className="hover:bg-black hover:text-white py-2 px-4 border-l-2">
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
