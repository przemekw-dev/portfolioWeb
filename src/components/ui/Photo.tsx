"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProfilePic from "../../../public/assets/profile-pic.png";

const Photo = () => {
  return (
    <div className="w-full h-full ">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div
          className="w-[120px] h-[120px] xl:w-[260px] xl:h-[260px]  absolute
      "
          style={{
            maskImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 1) 80%)",
          }}
        >
          <Image
            src={ProfilePic}
            alt="Profile Picture"
            priority
            quality={100}
            fill
            className="object-contain rounded-full "
          />
        </div>
      </motion.div>

      {/* circle */}
      <motion.svg
        className="w-[120px] xl:w-[260px] h-[120px] xl:h-[260px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#93c5fd"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
