"use client";

import React, { useRef } from "react";
// import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
// import Link from "next/link";
import HeroHeader from "@components/HeroHeader/HeroHeader";
import Stats from "@components/ui/Stats";
import Photo from "@components/ui/Photo";
import { LucideCloud, LucideServer, LucideSmartphone } from "lucide-react";
import { projects, services } from "lib/constants";
import Image from "next/image";
// import Socials from "@components/ui/Socials";
// import { Button } from "@components/ui/button";

const professionalServices = services;
const professionalProjects = projects;

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex flex-col mx-auto h-full max-w-6xl ">
      <motion.section
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
        <div className="flex flex-col items-center justify-between xl:pt-14  gap-8">
          <div className="flex flex-col text-center order-2 xl:order-none justify-center items-center ">
            <HeroHeader />
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-44 container mx-auto"
        animate={{
          opacity: 100,
          transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        initial={{
          opacity: 0,
        }}
      >
        <div ref={servicesRef}>
          <h3 className="text-3xl text-text font-medium tracking-tight text-center">
            Professional Development Services
          </h3>

          <div className="w-full flex flex-row items-center justify-center gap-8 mt-12">
            {professionalServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="w-72 h-100 xl:w-78 xl:h-108 p-4 flex flex-col gap-4 items-start justify-between border-1 rounded-sm border-border bg-surface shadow-sm"
                >
                  {index === 0 && (
                    <LucideSmartphone size={74} className=" text-accent-dark" />
                  )}
                  {index === 1 && (
                    <LucideCloud size={74} className=" text-accent-dark" />
                  )}
                  {index === 2 && (
                    <LucideServer size={74} className=" text-accent-dark" />
                  )}
                  <div className="flex-1 mt-4 flex flex-col gap-4">
                    <p className="text-lg xl:text-xl font-bold text-text">
                      {service.title}
                    </p>
                    <p className="flex-1 text-sm xl:text-md font-light text-subtitle">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flew-row items-center justify-start flex-wrap gap-1.5 space-y-0.5">
                    {service.stack.map((el, index) => {
                      return (
                        <span
                          key={index}
                          className="text-xs xl:text-sm text-gray-700 min-w-fit border-1 border-accent-dark  rounded-full px-3 py-1  "
                        >
                          {el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="mt-44 mx-auto container w-full">
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="text-3xl text-text font-medium tracking-tight text-center">
            Past Projects
          </h3>
          <div className="mt-12 flex flex-row gap-4 items-center justify-center">
            {professionalProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="border-1 rounded-md w-sm border-border bg-surface p-4"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-84 h-84 object-contain aspect-auto"
                  />
                  <p className="text-md font-semibold text-text text-left">
                    {project.title}
                  </p>
                  <p className="text-sm font-normal text-subtitle text-left">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <div className="mt-12">
        <Stats />
      </div>
    </main>
  );
};

export default Home;
