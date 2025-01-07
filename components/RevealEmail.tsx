"use client";

import React, { useState } from "react";

interface RevealEmailProps {
  hiddenText: string;
  promptText: string;
}

const RevealEmail: React.FC<RevealEmailProps> = ({
  hiddenText,
  promptText,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const decodedEmail = atob(hiddenText);

  const handleClick = () => {
    window.location.href = `mailto:${decodedEmail}`;
    setIsClicked(true);
  };

  return (
    <h3 className="text-xl">
      <button
        onClick={handleClick}
        className="hover:text-accent transition-all duration-300"
        disabled={isClicked}
      >
        {promptText}
      </button>
    </h3>
  );
};

export default RevealEmail;
