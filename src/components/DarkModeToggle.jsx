"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200  dark:bg-primary-500 focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-slate-500 transition-all duration-200 dark:-rotate-90 dark:scale-0 dark:text-slate-400" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-slate-500 transition-all duration-200 dark:rotate-0 dark:scale-100 dark:text-slate-400" />
    </button>
  );
};

export default DarkModeToggle;
