import React from "react";
import Socials from "../../ui/Socials";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@components/ui/button";
// import TechVideoBackground from "@components/VideoBackground/VideoBackground";

const HeroHeader = ({
  servicesRef,
}: {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 pt-46 pb-24 text-center">
      {/* <TechVideoBackground /> */}

      {/* Decorative elements (optional) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-dark blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Subtitle */}
        <span className="inline-block text-sm md:text-base font-medium text-accent-dark uppercase tracking-wider mb-4">
          <TypeAnimation
            sequence={["", 2000, "Full-Stack Development Services", 2000]}
            wrapper="span"
            speed={65}
            style={{ display: "inline-block" }}
            repeat={0}
            deletionSpeed={20}
            cursor={false}
          />
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-text mb-6 text-balance">
          <TypeAnimation
            sequence={["", 1000, "Mobile & Web Systems", 2000]}
            wrapper="span"
            speed={75}
            style={{ display: "inline-block" }}
            repeat={0}
            deletionSpeed={20}
            cursor={false}
          />
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent block mt-2">
            <TypeAnimation
              sequence={["", 1100, "With Scalable Cloud Backends", 2000]}
              wrapper="span"
              speed={75}
              style={{ display: "inline-block" }}
              repeat={0}
              deletionSpeed={20}
              cursor={false}
            />
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-subtitle text-lg md:text-xl mb-10 leading-relaxed">
          I build full-stack applications across frontend, backend, and cloud
          infrastructure in agile teams.
        </p>

        {/* CTA + Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            onClick={() => {
              // servicesRef?.current?.scrollIntoView({
              //   behavior: "smooth",
              //   block: "start",
              //   inline: "end",
              // });
              const offset = -80;
              const top = servicesRef.current?.getBoundingClientRect().top ?? 0;
              const scrollTop = window.pageYOffset + top + offset;
              window.scrollTo({
                top: scrollTop,
                behavior: "smooth",
              });
            }}
            className="relative uppercase font-medium tracking-wide py-3 px-8 rounded-full bg-gradient-to-r from-accent-dark to-accent text-white hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 overflow-hidden group hover:cursor-pointer "
          >
            <span className="relative z-10">Explore What I Do</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>

          <Socials
            containerStyles="flex gap-4"
            iconStyles="w-10 h-10 border border-accent/20 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm hover:shadow-accent/20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
