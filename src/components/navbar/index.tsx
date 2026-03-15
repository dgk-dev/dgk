"use client";
import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ModeToggle } from "../mode-toggle";
import { siteConfig } from "@/constants/site";

export const Navbar = () => {
  const navItems = siteConfig.navItems;

  return (
    <Container>
      <DesktopNavbar navItems={navItems} />
      <MobileNavbar navItems={navItems} />
    </Container>
  );
};

const MobileNavbar = ({
  navItems,
}: {
  navItems: { title: string; href: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav className="fixed top-0 left-0 z-50 block w-full border-b border-neutral-100 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-900">
      <>
        <div className="flex w-full items-center justify-between px-4 py-3">
          <Link href="/">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                className="object-cover object-[center_18%]"
                src={siteConfig.avatar}
                fill
                sizes="32px"
                alt="Avatar"
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
          >
            <List className="h-6 w-6" />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-neutral-900"
            >
              <div className="flex w-full items-center justify-end p-4">
                <button
                  onClick={toggleMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <ModeToggle />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </motion.nav>
  );
};

const DesktopNavbar = ({
  navItems,
}: {
  navItems: { title: string; href: string }[];
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["92%", "85%"]);
  const radius = useTransform(scrollY, [0, 100], ["0rem", "4rem"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          borderRadius: radius,
          width,
          y,
          maxWidth: "56rem",
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50"
      >
        <motion.div whileHover="animate" initial="initial">
          <Link href="/">
            <div className="relative overflow-hidden rounded-full">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  className="object-cover object-[center_18%]"
                  src={siteConfig.avatar}
                  fill
                  sizes="40px"
                  alt="Avatar"
                />
              </div>
              <motion.div
                variants={{
                  initial: {
                    x: -50,
                    opacity: 0,
                  },
                  animate: {
                    x: 100,
                    opacity: 0.7,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{
                  rotate: "15deg",
                }}
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent blur-sm"
              ></motion.div>
            </div>
          </Link>
        </motion.div>

        <div className="flex items-center">
          <ModeToggle />
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 0.2,
                  }}
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
