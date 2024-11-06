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
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out
        ${atTop ? "w-full" : "mt-4"}`}
    >
      <nav
        className={`transition-all duration-300 ease-in-out
        ${
          atTop
            ? "w-full bg-white dark:bg-primary-900"
            : "w-[90%]  xl:w-[80%] rounded-full bg-white/90 dark:bg-[#212326] shadow-lg"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ease-in-out px-8
          `}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-medium dark:text-gray-200 py-4 lg:py-0"
            >
              Giftechies
            </Link>

            <div className="hidden lg:flex items-center ">
              {navData.map((item) => (
                <div
                  key={item.name}
                  className={`group relative pr-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ${
                    atTop ? "py-6" : "py-4"
                  }`}
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                    {item.submenu && (
                      <svg
                        className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform"
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
                    <div className="absolute top-3/4 left-0 mt-2 w-[600px] bg-white dark:bg-primary-900  rounded-2xl shadow-lg group-hover:block hidden p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {item.submenu.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block group/item"
                            >
                              <h3 className="text-xl dark:text-white font-medium mb-1">
                                {subItem.title}
                              </h3>
                              <p className="text-slate-800 dark:text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl dark:text-white font-medium">
                            {item.submenu.preview.title}
                          </h3>
                          <p className="text-slate-800 dark:text-gray-400">
                            {item.submenu.preview.description}
                          </p>
                          <div className="mt-4 rounded-xl overflow-hidden">
                            <img
                              src={item.submenu.preview.image}
                              alt={item.submenu.preview.title}
                              className="w-full h-48 object-cover"
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
                className="hidden lg:block w-full text-center text-white bg-tertiary-600 px-6 py-3 rounded-full"
              >
                Start a project →
              </Link>
              <button
                className="lg:hidden p-2 rounded-full"
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
