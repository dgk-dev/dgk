"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light");
        break;
      default:
        break;
    }
  };

  if (!isMounted) return null;

  return (
    <button
      className="flex items-center rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      onClick={SWITCH}
    >
      {theme === "light" ? (
        <motion.span
          key={String(theme)}
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <Moon className="dark:text-secondary h-4 w-4 text-neutral-700" />
        </motion.span>
      ) : (
        <motion.span
          key={String(theme)}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <Sun className="dark:text-secondary h-4 w-4 text-neutral-700" />
        </motion.span>
      )}
    </button>
  );
};
