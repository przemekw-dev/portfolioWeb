"use client";

import Link from "next/link";
import { Button } from "./button";
// import MobileNav from "./MobileNav";
// import Nav from "./Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], [96, 72]);
  const opacity = useTransform(scrollY, [0, 50], [1, 0.9]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 10);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
        scrolled ? "bg-slate-900/80" : "bg-slate-900/20"
      }`}
      style={{ height: headerHeight, opacity }}
    >
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Holographic Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative"
        >
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              Przemek Waliszka{" "}
            </span>
            <motion.span
              className="text-blue-400 text-3xl font-light"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              .
            </motion.span>
            {scrolled && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          {/* <Nav /> */}

          <motion.div
            whileHover={{ y: -2, cursor: "pointer" }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Link href="/contact" className="">
              <Button className="relative overflow-hidden group group-hover:cursor-pointer bg-transparent border-1 border-surface">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-gray-50">Contact Me</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="hidden">{/* <MobileNav /> */}</div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMjAsMjMwLDI1MCwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20" />
      </div>
    </motion.header>
  );
};

export default Header;
