import React from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/przemekw-dev",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/przemwaliszka/",
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
            href={social.path}
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
