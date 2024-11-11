"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import DarkModeToggle from "../../DarkModeToggle";
import { navData, navVariants } from "../../data/NavbarData";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest < 10);

    if (latest > lastScrollY && latest > 350) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(latest);
  });

  // To remove scrollbar when nav is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-300 ease-in-out ${atTop ? "w-full" : "mt-4"}`}
    >
      <nav
        className={`transition-all duration-300 ease-in-out ${
          atTop
            ? "w-full bg-white dark:bg-primary-900"
            : "w-[90%] rounded-full bg-white/90 shadow-lg dark:bg-[#212326] xl:w-[80%]"
        }`}
      >
        <div className={`mx-auto px-8 transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="py-4 text-lg font-medium dark:text-gray-200 lg:py-0"
            >
              Giftechies
            </Link>

            <div className="hidden items-center lg:flex">
              {navData.map((item) => (
                <div
                  key={item.name}
                  className={`group relative pr-6 text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${
                    atTop ? "py-6" : "py-4"
                  }`}
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                    {item.submenu && (
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {item.submenu && (
                    <div className="absolute left-0 top-3/4 mt-2 hidden w-[600px] rounded-2xl bg-white p-8 shadow-lg group-hover:block dark:bg-primary-900">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {item.submenu.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="group/item block"
                            >
                              <h3 className="mb-1 text-xl font-medium dark:text-white">
                                {subItem.title}
                              </h3>
                              <p className="text-sm text-slate-800 transition-colors group-hover/item:text-gray-300 dark:text-gray-400">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium dark:text-white">
                            {item.submenu.preview.title}
                          </h3>
                          <p className="text-slate-800 dark:text-gray-400">
                            {item.submenu.preview.description}
                          </p>
                          <div className="mt-4 overflow-hidden rounded-xl">
                            <img
                              src={item.submenu.preview.image}
                              alt={item.submenu.preview.title}
                              className="h-48 w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Link
                href="/start-project"
                className="gradient-color hidden w-full rounded-full px-6 py-3 text-center text-white lg:block"
              >
                Start a project →
              </Link>
              <button
                className="rounded-full p-2 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu size={20} className="dark:text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileNav
        navData={navData}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </motion.header>
  );
};

export default Navbar;
