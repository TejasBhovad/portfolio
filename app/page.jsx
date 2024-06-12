"use client";
import SocialLinks from "@/app/components/SocialLinks";
import ModelDisplay from "@/components/ModelDisplay";

import { motion } from "framer-motion";
const page = () => {
  function TextBox() {
    return (
      <div className="w-full flex flex-col gap-8">
        <motion.span
          className="text-base text-5xl sm:text-6xl font-bold w-full text-center"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.25, ease: "easeInOut" }}
        >
          Hey, I'm Tejas!
        </motion.span>
        <motion.span
          className="text-muted text-xl text-center w-full items-center justify-center flex"
          variants={{
            hidden: { opacity: 0, y: 7.5 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          I design and build apps, and everything that comes with it.
        </motion.span>
      </div>
    );
  }
  return (
    <div className="w-full h-full max-w-7xl mx-auto">
      <div className="h-screen flex flex-col items-center">
        <div
          className="transition-all max-w-screen-sm w-full h-1/3 sm:h-1/2 flex items-center justify-center"
          style={{ minHeight: "400px" }}
        >
          <ModelDisplay />
        </div>
        <div className="w-full flex-grow gap-8 flex flex-col py-4 px-4">
          <TextBox />
          <SocialLinks />
        </div>
      </div>
      <div className="w-32 h-32 bg-primary">Primary</div>
      <div className="w-32 h-32 bg-foreground">Foreground</div>
    </div>
  );
};

export default page;
