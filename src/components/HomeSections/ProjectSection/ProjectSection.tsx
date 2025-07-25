"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TbBrandReactNative, TbCloudCode } from "react-icons/tb";
import { ProjectsType } from "types/home";
import { RiNextjsFill } from "react-icons/ri";
import { FiCpu } from "react-icons/fi";
// import { FaAws } from "react-icons/fa";

export const ProjectSection = ({
  project,
  index,
}: {
  project: ProjectsType;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]); // Reduced parallax range
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]); // Less pronounced fade

  const isEven = index % 2 === 0;
  const isVideo = !!project.content.video;

  const icon = (iconName: string) => {
    switch (iconName) {
      case "TbBrandReactNative":
        return <TbBrandReactNative size={28} className="text-gray-600" />; // Slightly smaller icons
      case "RiNextjsFill":
        return <RiNextjsFill size={28} className="text-gray-600" />;
      case "FiCpu":
        return <FiCpu size={28} className="text-gray-600" />;
      case "FaAws":
        return <TbCloudCode size={28} className="text-gray-600" />;
      default:
        return <div className="w-7 h-7 bg-gray-200 rounded" />;
    }
  };

  return (
    <section
      ref={ref}
      className="h-auto min-h-[70vh] w-full flex items-center justify-center relative overflow-hidden py-12" // Changed to py-12
    >
      <div
        className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          // Reduced gap
          isEven ? "" : "lg:grid-flow-col-dense"
        }`}
      >
        {/* Media Column */}
        <motion.div
          className={`relative h-[45vh] sm:h-[55vh] lg:h-[70vh] rounded-xl overflow-hidden shadow-xl ${
            // Reduced heights
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
          style={{ y, opacity }}
        >
          {isVideo ? (
            <video
              src={project.content.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          ) : (
            <Image
              src={project.content.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
              priority={index < 2} // Only prioritize first few images
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl" />{" "}
          {/* Lighter gradient */}
        </motion.div>

        {/* Content Column */}
        <motion.div
          className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isEven ? 30 : -30 }} // Reduced initial offset
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6, // Faster animation
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          viewport={{
            once: true,
            margin: "-150px", // Smaller trigger margin
            amount: 0.2, // Less visibility needed to trigger
          }}
        >
          <h3 className="text-xl md:text-3xl font-bold text-text mb-2 md:mb-4">
            {" "}
            {/* Smaller text */}
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-subtitle/80 mb-3 md:mb-6 leading-relaxed">
            {" "}
            {/* Smaller text */}
            {project.description}
          </p>

          {project.features && (
            <div className="flex flex-col ite">
              {/* Reduced spacing */}
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-2 my-1 md:my-2" // Tighter spacing
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-accent/20">
                    {" "}
                    {/* Smaller icon container */}
                    {feature.icon && icon(feature.icon)}
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-xs md:text-sm text-subtitle font-medium">
                      {" "}
                      {/* Smaller text */}
                      {feature.tech}
                    </p>
                    <p className="text-xs xl:text-sm text-subtitle/90">
                      {" "}
                      {/* Smaller text */}
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-4 ">
            {" "}
            {/* Tighter spacing */}
            {project.stack?.map((stack: string, i: number) => (
              <span
                key={i}
                className="text-xs font-medium bg-accent/10 text-accent-dark px-3 py-1.5 rounded-full" // Smaller tags
              >
                {stack}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {" "}
        {/* More subtle */}
        <div
          className={`absolute top-1/4 ${
            isEven ? "left-1/4" : "right-1/4"
          } w-56 h-56 rounded-full bg-accent blur-[80px]`} // Smaller blur
        ></div>
      </div>
    </section>
  );
};
