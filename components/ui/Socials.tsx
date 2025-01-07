import React from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "aHR0cHM6Ly9naXRodWIuY29tL3ByemVtZWt3LWRldg==",
  },
  {
    icon: <FaLinkedin />,
    path: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ByemVtd2FsaXN6a2Ev",
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            legacyBehavior
            key={index}
            href={atob(social.path)}
            className={iconStyles}
          >
            <a href="noreferrer" target="_blank" className={iconStyles}>
              {social.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
