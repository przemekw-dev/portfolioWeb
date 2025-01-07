"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  // {
  //   icon: <FaPhoneAlt />,
  //   title: "Phone",
  //   description: "+1 (123) 456-7890",
  // },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "przemwaliszka@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Click to visit my LinkedIn",
    link: "https://www.linkedin.com/in/przemwaliszka/",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "UK, Leicester, Willing to relocate",
  },
];

const page = () => {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <h3 className="text-4xl text-accent pb-4">Let's connect!</h3>
            <p className="text-white/60">
              I'm open to employment opportunities, collaborations, and new
              projects. Feel free to reach out! I'll get back to you as soon as
              possible. It's best to contact me via LinkedIn or email.
            </p>

            {/* <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's connect!</h3>
              <p className="text-white/60">
                I'm open to employment opportunities, collaborations, and new
                projects. Feel free to reach out! I'll get back to you as soon
                as possible. It's best to contact me via LinkedIn or email.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[140px]"
                placeholder="Hi, I would like to discuss..."
              />
              <Button size="lg" className="max-w-40">
                Send message
              </Button>
            </form> */}
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-32xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.title === "Location" ? (
                        <h3 className="text-xl">{item.description}</h3>
                      ) : item.title === "LinkedIn" ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          className="hover:text-accent transition-all duration-300"
                        >
                          <h3 className="text-xl">{item.description}</h3>
                        </Link>
                      ) : (
                        <h3 className="text-xl">
                          {isEmailRevealed ? (
                            <a
                              href={`mailto:${item.description}`}
                              className="hover:text-accent transition-all duration-300"
                            >
                              {item.description}
                            </a>
                          ) : (
                            <button
                              onClick={() => setIsEmailRevealed(true)}
                              className="hover:text-accent transition-all duration-300"
                            >
                              Click to reveal
                            </button>
                          )}
                        </h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
