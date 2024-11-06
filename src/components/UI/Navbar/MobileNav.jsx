import { X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({
  navData,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-primary-900 z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out  ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full justify-between p-6">
        <div>
          <div className="flex justify-between items-center mb-8">
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
                  className="text-lg dark:text-gray-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="dark:text-gray-400 block"
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
          className="block w-full text-center text-white bg-tertiary-600 px-6 py-3 rounded-full"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Start a project →
        </Link>
      </div>
    </div>
  );
}
