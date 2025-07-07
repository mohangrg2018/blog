import Sidebar from "@/components/AdminComponents/sidebar";

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      {children}
    </>
  );
}
