import React from "react";

interface RevealEmailProps {
  hiddenText: string;
  promptText: string;
}

const RevealEmail: React.FC<RevealEmailProps> = ({
  hiddenText,
  promptText,
}) => {
  const decodedEmail = atob(hiddenText);

  return (
    <h3 className="text-xl">
      <a
        href={`mailto:${decodedEmail}`}
        className="hover:text-accent transition-all duration-300"
      >
        {promptText}
      </a>
    </h3>
  );
};

export default RevealEmail;
