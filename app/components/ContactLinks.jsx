import React from "react";
import Link from "next/link";
import LinkedIn from "./logos/LinkedIn";
import Mail from "./logos/Mail";
import Resume from "./logos/Resume";
const ContactLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejas-bhovad/",
      logo: <LinkedIn />,
    },
    {
      name: "Email",
      url: "mailto:code.tejas@gmail.com",
      logo: <Mail />,
    },
    {
      name: "Resume",
      url: "https://www.tejasbhovad.com/resume.pdf",
      logo: <Resume />,
    },
  ];
  return (
    <div className="flex gap-1 px-4 items-center justify-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="hover:bg-muted/30 p-2 rounded-full transition-colors duration-200 ease-in-out"
        >
          {link.logo}
        </Link>
      ))}
    </div>
  );
};

export default ContactLinks;
