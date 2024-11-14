"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { logoutAction } from "@/actions/logout";

export default function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      const result = await logoutAction();
      if (result.success) {
        router.push("/signin");
      }
    });
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isPending}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-600`}
    >
      <LogOut className="h-4 w-4" />
      <span>{isPending ? "Logging out..." : "Logout"}</span>
    </button>
  );
}
