import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <section className="bg-slate-100 min-h-screen border-2 border-black">
      <div className="py-3 px-4 h-[60px] border-b-2 border-black">
        <Image src={assets.logo} alt="logo" width={120} height={120} />
      </div>
      <div className="relative w-full h-full mt-8 lg:mt-12">
        <div className="absolute right-0 flex flex-col gap-4">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-4 px-4 lg:px-10 py-2 border border-black shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.add_icon} alt="logo" width={30} height={30} />
            <p>Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center gap-4 px-4 lg:px-10 py-2 border border-black shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.blog_icon} alt="logo" width={30} height={30} />
            <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscription"
            className="flex items-center gap-4 px-4 lg:px-10 py-2 border border-black shadow-[-5px_5px_0px_#000]"
          >
            <Image src={assets.email_icon} alt="logo" width={30} height={30} />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
