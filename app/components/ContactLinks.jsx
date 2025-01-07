import React from "react";
import Link from "next/link";
import { FileText, Mail, Github, Linkedin } from "lucide-react";

const ContactLinks = () => {
  const links = [
    {
      name: "Email",
      url: "mailto:tejasbhovad@gmail.com",
      logo: <Mail size={24} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/tejasbhovad",
      logo: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejasbhovad",
      logo: <Linkedin size={24} />,
    },
    {
      name: "Resume",
      url: "https://www.tejasbhovad.com/resume.pdf",
      logo: <FileText size={24} />,
    },
  ];

  return (
    <div className="flex gap-1 px-4 items-center justify-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className="hover:bg-muted/20 p-2 rounded-full transition-colors text-muted duration-200 ease-in-out"
          aria-label={`Link to ${link.name}`}
        >
          {link.logo}
        </Link>
      ))}
    </div>
  );
};

export default ContactLinks;
