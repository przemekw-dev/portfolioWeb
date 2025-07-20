import Link from "next/link";
import React from "react";
import Socials from "../ui/Socials";
import { TypeAnimation } from "react-type-animation";

const HeroHeader = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center text-center "
      style={{}}
    >
      <span className="text-xl font-thin text-subtitle">
        <TypeAnimation
          sequence={["", 2000, "Full-Stack Development Services", 2000]}
          wrapper="span"
          speed={60}
          style={{ fontSize: "1.2em", display: "inline-block" }}
          repeat={0}
          deletionSpeed={20}
          cursor={false}
        />
      </span>
      <h1 className="text-4xl xl:text-6xl leading-[1.1] font-semibold mb-6 text-text">
        <TypeAnimation
          sequence={["", 1000, "Mobile & Web Systems", 2000]}
          wrapper="span"
          speed={60}
          style={{ fontSize: "4rem", display: "inline-block" }}
          repeat={0}
          deletionSpeed={20}
          cursor={false}
        />
        <br />
        <span className="text-text">
          <TypeAnimation
            sequence={["", 1100, "With Scalable Cloud Backends", 2000]}
            wrapper="span"
            speed={60}
            style={{ fontSize: "4rem", display: "inline-block" }}
            repeat={0}
            deletionSpeed={20}
            cursor={false}
          />
        </span>
      </h1>
      <p className="max-w-3xl mb-9 text-subtitle ">
        Delivering Full-Stack Systems from frontend apps to cloud services and
        backends
      </p>

      {/*  btn and socials */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Link
          href="/resume"
          className="uppercase flex items-center border-2 py-2 px-5 rounded-full bg-accent-dark border-accent-dark text-white hover:bg-transparent hover:text-accent-dark hover:transation-all duration-500"
        >
          <span>Explore my competency</span>
        </Link>
        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex  gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transation-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
