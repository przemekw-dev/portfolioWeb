"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I can build a website for you or help you with your current one. I use React, Next.js, and Tailwind CSS to make your site look great and work well.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Need a mobile app? I can create one from scratch or improve your existing app using React Native and Expo.",
    href: "/services/mobile-app-development",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I design user-friendly and stylish websites and apps using Figma. Let’s make something that looks good and is easy to use!",
    href: "/services/ui-ux-design",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "I’ll help your website show up higher in search results so more people can find you. Get more traffic and attract more customers with better SEO.",
    href: "/services/seo-optimization",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-thin  border-b-[2px] border-b-transparent pb-1  group-hover:border-b-[#00ff99] group-hover:border-b-[2px] transition-all duration-500">
                    {services.num}
                  </div>

                  <Link
                    href={services.href}
                    className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    legacyBehavior>
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* description */}
                <p>{services.description}</p>
                {/* border */}
                <div className="border-6 border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
