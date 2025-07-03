import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-black text-white py-10">
      <div className="container__width flex flex-col gap-10 md:flex-row justify-between items-center">
        <Image src={assets.logo_light} alt="logo" width={150} height={150} />
        <p>All Rights Reserved. Copyright @blogger</p>
        <div className="flex items-center gap-2">
          <Image
            src={assets.facebook_icon}
            alt="facebook"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src={assets.googleplus_icon}
            alt="googleplus"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src={assets.twitter_icon}
            alt="twitter"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
