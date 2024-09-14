"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-full">
      <motion.div
        className="container mx-auto h-full"
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
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-4xl xl:text-6xl leading-[1.1] font-semibold mb-6">
              Hello I'm <br />
              <span className="text-accent">Przemyslaw Waliszka</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Driven by curiosity and a passion for technology, I focus on
              developing clean, efficient code that powers seamless digital
              experiences. Always learning, always improving.
            </p>

            {/*  btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>View my Resume</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex  gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transation-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </motion.div>
      <Stats />
    </section>
  );
};

export default Home;
