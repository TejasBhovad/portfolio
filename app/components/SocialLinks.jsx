"use client";
import { Button } from "@/components/ui/button";
import Twitter from "./logos/Twitter";
import GitHub from "./logos/GitHub";
import YouTube from "./logos/YouTube";
import { motion } from "framer-motion";
import Resume from "./logos/Resume";
import SlideButton from "./slide-button";
const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Resume",
      text: "View",
      url: "/resume.pdf",
      logo: <Resume />,
    },
    {
      name: "GitHub",
      text: "Follow",
      url: "https://github.com/TejasBhovad",
      logo: <GitHub />,
    },
    {
      name: "YouTube",
      text: "Subscribe",
      url: "https://www.youtube.com/@tejasbhovad",
      logo: <YouTube />,
    },
  ];
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full hidden sm:flex justify-center gap-3">
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            className=""
            variants={{
              hidden: { opacity: 0, y: 0, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SlideButton
              text={link.text}
              variant="default"
              key={index}
              onClick={() => handleClick(link.url)}
              className={`w-32 h-10 rounded-sm text-lg gap-2 text-muted ${link.background} ${link.text} ${link.hover}`}
            >
              {link.logo}
              {link.name}
            </SlideButton>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex sm:hidden justify-center gap-3">
        {/* map only first two element */}
        {socialLinks.slice(0, 2).map((link, index) => (
          <motion.div
            key={index}
            className=""
            variants={{
              hidden: { opacity: 0, y: 0, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SlideButton
              text={link.text}
              variant="default"
              key={index}
              onClick={() => handleClick(link.url)}
              className={`w-32 h-10 rounded-sm text-lg gap-2 text-muted ${link.background} ${link.text} ${link.hover}`}
            >
              {link.logo}
              {link.name}
            </SlideButton>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex sm:hidden justify-center gap-3">
        {/* map only first two element */}
        {socialLinks.slice(2, 3).map((link, index) => (
          <motion.div
            key={index}
            className=""
            variants={{
              hidden: { opacity: 0, y: 0, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SlideButton
              text={link.text}
              variant="default"
              key={index}
              onClick={() => handleClick(link.url)}
              className={`w-32 h-10 rounded-sm text-lg gap-2 text-muted ${link.background} ${link.text} ${link.hover}`}
            >
              {link.logo}
              {link.name}
            </SlideButton>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
