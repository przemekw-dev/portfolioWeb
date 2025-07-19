"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Stairs from "./Stairs";

import { ReactNode } from "react";

interface StairTransitionProps {
  children: ReactNode;
}

const StairTransition: React.FC<StairTransitionProps> = ({ children }) => {
  const pathName = usePathname();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animation complete after a timeout that matches the animation duration
    const timer = setTimeout(() => setIsAnimationComplete(true), 1400); // 1000ms for delay + 400ms for duration
    return () => clearTimeout(timer);
  }, [pathName]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathName}
          className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Stairs />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="h-screen w-screen bg-accent fixed top-0 pointer-events-none z-30"
        key={pathName}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
      />

      {isAnimationComplete && children}
    </>
  );
};

export default StairTransition;
