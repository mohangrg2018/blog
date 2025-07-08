import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <ToastContainer theme="dark" />
      <div className="w-[200px] lg:w-[300px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between h-[60px] px-4 py-2 border-b-2 border-black">
          <h2>Admin Panel</h2>
          <Image
            src={assets.profile_icon}
            alt="profile"
            width={30}
            height={30}
          />
        </div>
        <div className="mt-8 ml-8">{children}</div>
      </div>
    </div>
  );
}
