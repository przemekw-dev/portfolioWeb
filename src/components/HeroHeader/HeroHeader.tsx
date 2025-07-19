import Link from "next/link";
import React from "react";
import Socials from "../ui/Socials";

const HeroHeader = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center text-center "
      style={{}}
    >
      <span className="text-xl font-thin text-subtitle">
        Full-Stack Development Services
      </span>
      <h1 className="text-4xl xl:text-6xl leading-[1.1] font-semibold mb-6 text-text">
        Mobile & Web Systems <br />
        <span className="text-text">With Scalable Cloud Backends</span>
      </h1>
      <p className="max-w-3xl mb-9 text-subtitle ">
        Delivering Full-Stack Systems from frontend apps to cloud services and
        backends.
      </p>

      {/*  btn and socials */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Link
          href="/resume"
          className="uppercase flex items-center border-2 py-2 px-5 rounded-full bg-accent-dark border-accent-dark text-white hover:bg-transparent hover:text-accent-dark hover:transation-all duration-500"
        >
          <span>View my Resume</span>
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
