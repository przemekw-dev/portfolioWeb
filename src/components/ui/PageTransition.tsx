"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
  header: React.ReactNode; // Accepts header as a prop
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Header remains fixed */}
      {/* <header>{header}</header> */}

      {/* Animated content */}
      <AnimatePresence
        mode="wait" // Ensure that exiting content is finished animating before the new content mounts
      >
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative" // Ensure the content is positioned relative to its container
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
