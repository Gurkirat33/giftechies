import { Home, Users, Settings, BarChart2 } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../LogoutButton";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/backend" },
    { name: "Services", icon: BarChart2, path: "/backend/services" },
    { name: "Users", icon: Users, path: "/backend/users" },
    { name: "Settings", icon: Settings, path: "/backend/settings" },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 top-16 w-64 border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out`}
    >
      <nav className="flex h-full flex-col justify-between p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 rounded-lg px-4 py-3 transition-colors ${"text-gray-700 hover:bg-gray-50"}`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <LogoutButton />
      </nav>
    </div>
  );
}
