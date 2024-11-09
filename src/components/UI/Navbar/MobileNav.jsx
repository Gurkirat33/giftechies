import { X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({
  navData,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out dark:bg-primary-900 ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold dark:text-gray-200">
              Giftechies
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="dark:text-gray-200"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-3">
            {navData.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link
                  href={item.href}
                  className="text-lg font-medium dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {item.submenu && (
                  <div className="space-y-2 pl-4">
                    {item.submenu.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block dark:text-gray-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/start-project"
          className="block w-full rounded-full bg-tertiary-600 px-6 py-3 text-center text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Start a project →
        </Link>
      </div>
    </div>
  );
}
