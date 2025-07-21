"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  // useScroll, useTransform
} from "framer-motion";
import HeroHeader from "@components/HeroHeader/HeroHeader";
import Stats from "@components/ui/Stats";
import {
  // LucideArrowRight,
  LucideCloud,
  LucideServer,
  LucideSmartphone,
} from "lucide-react";
import { projects, services } from "lib/constants";
// import { ProjectCard } from "@components/ProjectCard/ProjectCard";
// import Image from "next/image";
// import Link from "next/link";
import { ProjectSection } from "@components/ProjectSection/ProjectSection";

const professionalServices = services;
const professionalProjects = projects;

const Home = () => {
  // const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" });

  return (
    <main className="flex flex-col mx-auto h-full max-w-7xl xl:mt-12">
      {/* Hero Section (unchanged) */}
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
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="flex flex-col text-center order-2 xl:order-none justify-center items-center">
            <HeroHeader />
          </div>
        </div>
      </motion.section>

      {/* Services Section - Improved */}
      <motion.section
        className="mt-32 container mx-auto px-6 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 relative"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <motion.span
            className="text-sm font-medium text-accent-dark uppercase tracking-wider inline-block"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.6 },
            }}
          >
            What I Offer
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text mt-4 mb-6"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              transition: {
                delay: 0.6,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            Professional Development Services
          </motion.h2>

          <motion.p
            className="text-lg text-subtitle max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.6 },
            }}
          >
            Full-stack development from concept to deployment.
          </motion.p>

          {/* Decorative accent */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-accent/10 blur-3xl -z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.2, duration: 1 },
            }}
          />
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {professionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1 + 0.4,
                  },
                },
              }}
              whileHover="hover"
            >
              <motion.div
                className="relative h-full rounded-xl bg-surface border border-border p-8 overflow-hidden shadow-sm hover:shadow-md transition-all"
                variants={{
                  hover: { y: -8 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* Icon Container */}
                <motion.div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 border border-accent/20 rounded-lg" />
                  {index === 0 && (
                    <LucideSmartphone size={28} className="text-accent-dark" />
                  )}
                  {index === 1 && (
                    <LucideCloud size={28} className="text-accent-dark" />
                  )}
                  {index === 2 && (
                    <LucideServer size={28} className="text-accent-dark" />
                  )}
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-semibold text-text mb-4"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-subtitle/90 mb-6 leading-relaxed"
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                >
                  {service.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.stack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs font-medium bg-background border border-border rounded-full px-3 py-1 text-muted hover:bg-accent/10 hover:border-accent/30 hover:text-accent-dark transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-dark/5" />
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-accent/10 blur-xl" />
                </motion.div>

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 rounded-xl border-2 border-accent/20" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Animation */}
        <motion.div
          className="hidden md:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent top-1/2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.section>

      {/* Projects Section (to be improved next) */}

      <motion.section
        ref={projectsRef}
        className="w-full"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="text-center mb-16 pt-16">
          <span className="text-sm font-medium text-accent-dark uppercase tracking-wider">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-4 mb-6">
            Professional Services I Provide
          </h2>
          <p className="text-lg text-subtitle/80 max-w-2xl mx-auto">
            Scroll through my featured projects with interactive previews
          </p>
        </div>

        <div className="space-y-0">
          {professionalProjects.map((project, index) => (
            <ProjectSection key={index} project={project} index={index} />
          ))}
        </div>
      </motion.section>

      <div className="mt-12">
        <Stats />
      </div>
    </main>
  );
};

export default Home;
