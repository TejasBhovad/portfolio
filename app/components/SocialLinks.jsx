"use client";
import { Button } from "@/components/ui/button";
import Twitter from "./logos/Twitter";
import GitHub from "./logos/GitHub";
import YouTube from "./logos/YouTube";
import { motion } from "framer-motion";
const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Twitter",
      background: "bg-twitter-muted",
      text: "text-twitter-base",
      url: "https://x.com/tejas_bhovad",
      hover: "hover:bg-twitter-muted/80",
      logo: <Twitter color="fill-red-700" />,
    },
    {
      name: "GitHub",
      background: "bg-github-muted",
      hover: "hover:bg-github-muted/80",
      text: "text-github-base",
      url: "https://github.com/TejasBhovad",
      logo: <GitHub />,
    },
    {
      name: "YouTube",
      background: "bg-youtube-muted",
      hover: "hover:bg-youtube-muted/80",
      text: "text-youtube-base",
      url: "https://www.youtube.com/@tejasbhovad",
      logo: <YouTube />,
    },
  ];
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="w-full">
      <div className="w-full flex justify-center gap-3">
        {socialLinks.map((link, index) => (
          <motion.div
            className=""
            variants={{
              hidden: { opacity: 0, y: 0, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Button
              key={index}
              onClick={() => handleClick(link.url)}
              className={`rounded-sm text-lg gap-2 ${link.background} ${link.text} ${link.hover}`}
            >
              {link.logo}
              {link.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
