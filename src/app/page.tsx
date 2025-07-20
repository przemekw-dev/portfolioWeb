"use client";

import React from "react";
// import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
// import Link from "next/link";
import HeroHeader from "@components/HeroHeader/HeroHeader";
import Stats from "@components/ui/Stats";
import Photo from "@components/ui/Photo";
// import Socials from "@components/ui/Socials";
// import { Button } from "@components/ui/button";

const Home = () => {
  return (
    <section className="h-full flex flex-col ">
      <motion.div
        className="container mx-auto max-w-6xl h-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <div className="flex flex-col items-center justify-between xl:pt-14  gap-8">
          <div className="flex flex-col text-center order-2 xl:order-none justify-center items-center ">
            <HeroHeader />
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </motion.div>
      <div className="mt-12">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
