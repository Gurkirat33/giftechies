"use client";

import Link from "next/link";
import { Tabs } from "./TabsForNavbar";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../DarkModeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 ${
        isScrolled
          ? "border-b-[0.5px] border-slate-300 dark:border-border bg-white dark:bg-primary-900"
          : "bg-transparent"
      } text-white`}
    >
      <div className="section-container flex items-center justify-between py-3 sm:py-2">
        <Link href={"/"} className="text-xl text-black dark:text-white">
          Logo
        </Link>
        <div className="flex items-center">
          <div className="hidden md:block">
            <Tabs />
          </div>
          <DarkModeToggle />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`fixed right-0 top-0 h-full w-64 transform bg-primary-900 p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="mt-16">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-lg hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
