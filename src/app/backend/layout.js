import { Menu, Bell, Search, User } from "lucide-react";
import Sidebar from "@/components/UI/dashboard/Sidebar";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed left-0 right-0 top-0 z-10 h-16 border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <Link
            href="/"
            target="_blank"
            className="gradient-color rounded-lg px-4 py-2 text-white"
          >
            Go to Frontend
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />

      <div className={`pl-64 pt-16 transition-all duration-200`}>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
