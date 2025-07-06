import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 lg:mt-26 py-8 lg:py-12">
      <div className="container__width flex flex-col gap-6 lg:flex-row justify-between items-center">
        <Link href="/">
          <Image src={assets.logo_light} alt="logo" width={120} height={120} />
        </Link>
        <p>Copyright &copy; 2025</p>
        <div className="flex gap-4">
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
    </footer>
  );
};

export default Footer;
