"use client";

import React from "react";

import {
  // FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import RevealEmail from "@components/RevealEmail";
// import { Button } from "@components/ui/button";
// import { Input } from "@components/ui/input";
// import { Textarea } from "@components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@components/ui/select";

const info = [
  // {
  //   icon: <FaPhoneAlt />,
  //   title: "Phone",
  //   description: "+1 (123) 456-7890",
  // },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cHJ6ZW13YWxpc3prYUBnbWFpbC5jb20=",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Click to visit my LinkedIn",
    link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ByemVtd2FsaXN6a2Ev",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "UK, Leicester, Willing to relocate",
  },
];

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {/* form */}
          <div className="order-2 xl:order-0">
            <h3 className="text-4xl text-accent pb-4">Let$#39;s connect!</h3>
            <p className="text-white/60">
              I$#39;m open to employment opportunities, collaborations, and new
              projects. Feel free to reach out! I$#39;ll get back to you as soon
              as possible. It$#39;s best to contact me via LinkedIn or email.
            </p>

            {/* <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let$#39;s connect!</h3>
              <p className="text-white/60">
                I$#39;m open to employment opportunities, collaborations, and new
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
          <div className="flex-1 flex items-center order-1 xl:order-0 mb-8 xl:mb-0">
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
                          href={item.link ? atob(item.link) : "#"}
                          target="_blank"
                          className="hover:text-accent transition-all duration-300"
                        >
                          <h3 className="text-xl">{item.description}</h3>
                        </Link>
                      ) : (
                        <>
                          <RevealEmail
                            hiddenText={item.description}
                            promptText="Click to send email"
                          />
                          <div style={{ display: "none" }}>
                            <p>przemekOfficialEmailForBusiness@gmail.com</p>
                          </div>
                        </>
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
