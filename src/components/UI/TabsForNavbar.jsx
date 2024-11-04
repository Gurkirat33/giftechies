"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Tabs = ({ tabs }) => {
  return (
    <div>
      <SlideTabs tabs={tabs} />
    </div>
  );
};

const SlideTabs = ({ tabs }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`${
        isScrolled ? "bg-white dark:bg-primary-900" : "bg-transparent"
      } relative mx-auto flex w-fit p-1`}
    >
      <Tab setPosition={setPosition} link="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} link="/services">
        Services
      </Tab>
      <Tab setPosition={setPosition} link="/portfolio">
        Portfolio
      </Tab>
      <Tab setPosition={setPosition} link="/about">
        About Us
      </Tab>
      <Tab setPosition={setPosition} link="/contact">
        Contact Us
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, link }) => {
  const ref = useRef(null);
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 font-semibold block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-4 md:py-2 md:text-base ${
        isActive
          ? "rounded-full bg-black font-semibold text-white dark:bg-white dark:text-black"
          : "text-gray-800 hover:text-white group dark:text-white dark:mix-blend-difference"
      } `}
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-10"
    />
  );
};
