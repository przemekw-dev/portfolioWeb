"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack Website",
    title: "Company Website",
    description:
      "A full stack company website with a landing page, about page, and contact form.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "HTML 5" },
      { name: "CSS 3" },
    ],
    image: "/assets/bluwbee-web.jpg",
    live: "https://bluwbee.com",
    github: "https://github.com/user/portfolio",
  },
  {
    num: "02",
    category: "Full Stack Mobile App",
    title: "Exercise App",
    description:
      "A full-stack exercise app where users can track their workouts and progress.",
    stack: [
      { name: "React-Native" },
      { name: "AWS" },
      { name: "TypeScript" },
      { name: "Bluetooth Connectivity" },
    ],
    image: "/assets/boxing_app_canva.png",
    live: "https://ecommerce.com",
    github: "https://github.com/user/ecommerce",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Blog Platform",
    description:
      "A full-stack blog platform where users can write, edit, and delete posts.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React" },
    ],
    image: "/assets/work/blog.jpg",
    live: "https://myblog.com",
    github: "https://github.com/user/blog-platform",
  },
  {
    num: "04",
    category: "frontend",
    title: "Landing Page",
    description:
      "A responsive landing page for a product launch, featuring a signup form and animations.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/landing-page.jpg",
    live: "https://landingpage.com",
    github: "https://github.com/user/landing-page",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: any) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Text content comes first in all views, and is to the left on larger screens */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between mb-8 xl:mb-0">
            <div className="flex flex-col gap-[30px]">
              {/* project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* action buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Visit website</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider on top for mobile, to the right for large screens */}
          <div className="w-full xl:w-[50%] xl:order-2 order-1">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover rounded-lg text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
                iconsStyles="text-[22px]"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
