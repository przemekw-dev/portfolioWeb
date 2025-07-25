"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  // useScroll, useTransform
} from "framer-motion";
import HeroHeader from "@components/HomeSections/HeroHeader/HeroHeader";
import Stats from "@components/ui/Stats";

import { projects } from "lib/constants";
import { ProjectSection } from "@components/HomeSections/ProjectSection/ProjectSection";
import ServicesSection from "@components/HomeSections/ServicesSection/ServicesSection";
import OtherTechnologies from "@components/HomeSections/OtherTechnologies/OtherTechnologies";
import ContactSection from "@components/HomeSections/ContactSection/ContactSection";
import Header from "@components/ui/Header";

const professionalProjects = projects;

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  // const otherRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: "-200px" });
  // const isInViewOther = useInView(otherRef, { once: true, margin: "-200px" });

  return (
    <>
      <Header contactRef={contactRef} />

      <article className="flex flex-col mx-auto h-full max-w-7xl xl:mt-12">
        {/* Hero Section */}
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
              <HeroHeader servicesRef={servicesRef} />
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
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
          ref={servicesRef}
        >
          <ServicesSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          className="w-full h-full mt-24"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <div className="text-center mb-16 pt-16">
            <span className="text-sm font-medium text-accent-dark uppercase tracking-wider">
              What I Built & Deployed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-subtitle/80 max-w-2xl mx-auto">
              Code, design, and infrastructure contributions across platforms
            </p>
          </div>

          <div className="space-y-28 md:space-y-16  h-full">
            {professionalProjects.map((project, index) => (
              <ProjectSection key={index} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* <motion.section
        ref={projectsRef}
        className="w-full h-full mt-24"
        initial="hidden"
        animate={isInViewOther ? "show" : "hidden"}
        >
        <div className="text-center mb-16 pt-16">
        <span className="text-sm font-medium text-accent-dark uppercase tracking-wider">
        Additional
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text mt-4 mb-6">
        Service Integrations
        </h2>
        <p className="text-lg text-subtitle/80 max-w-2xl mx-auto">
        Integrations with services like Twilio, Stripe, OpenAI, and others.
        </p>
        </div>
        </motion.section> */}

        <motion.section className="w-full mt-12 xl:mt-36">
          <OtherTechnologies />
        </motion.section>

        <motion.section
          className="flex flex-col  justify-center gap-8  mx-auto"
          ref={contactRef}
        >
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-dark to-accent text-center text-5xl  leading-loose tracking-tight font-semibold">
          Want to hire me?
          </span> */}

          <ContactSection />
        </motion.section>

        {/* Stats Section */}
        <div className="mt-24 xl:mt-36">
          <Stats />
        </div>
      </article>
    </>
  );
};

export default Home;
