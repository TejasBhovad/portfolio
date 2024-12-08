"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer";
import projects from "@/public/data/projects.json";
import SocialLinks from "@/app/components/SocialLinks";
import ModelDisplay from "@/components/ModelDisplay";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCardSmall from "./components/ProjectCardSmall";
import ContactLinks from "./components/ContactLinks";
import { motion } from "framer-motion";
import Image from "next/image";
import Pin from "./components/logos/Pin";
import { useState, useEffect, memo, Suspense } from "react";
import ContactForm from "./components/ContactForm";

const TextBox = memo(() => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <motion.span
        className="text-baseColor h-16 text-3xl sm:text-6xl font-bold w-full text-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.1, ease: "easeInOut" }} // Reduced duration
      >
        Hey, I'm Tejas!
      </motion.span>
      <motion.span
        className="text-muted text-xl text-center w-full items-center justify-center flex gap-2"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, ease: "easeInOut" }} // Reduced duration
      >
        Full Stack web developer based in
        <span className="flex items-center gap-1">
          <Pin />
          India
        </span>
      </motion.span>
    </div>
  );
});

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div className="w-full h-auto mx-auto scroll-smooth">
      {/* <div
          className="transition-all max-w-screen-sm w-full h-1/3 sm:h-1/2 flex items-center justify-center"
          style={{ minHeight: "400px" }}
        >
          <ModelDisplay />
        </div>

        <div className="w-full gap-8 flex flex-col py-4 px-4">
          <TextBox />
          <SocialLinks />
        </div>
      </div>

      <div className="h-auto flex flex-col items-center p-8 bg-foreground">
        <div className="flex flex-col w-full gap-6 max-w-7xl">
          <div className="flex flex-col gap-2">
            <span className="w-full justify-start text-4xl font-bold">
              Projects
            </span>
            <span className="w-full justify-start text-muted text-xl font-regular">
              Things I have worked on
            </span>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-4">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {projects.slice(2, 4).map((project) => (
                <ProjectCardSmall key={project.id} {...project} />
              ))}
            </div>
          </div>
          <div className="w-full gap-2 p-2 flex flex-col items-center justify-center">
            <span className="select-none text-xs text-muted">
              Looking for more?
            </span>
            <Button
              variant="primary"
              size="large"
              className="bg-inverted text-inverted px-6 rounded-md text-xl font-semibold py-1 transition-all duration-300 hover:scale-[99.05%] active:scale-100"
              onClick={handleClick}
            >
              Explore projects
            </Button>
          </div>
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="h-auto w-full bg-gradient-to-br to-bg from-primary/50 p-8 flex items-center justify-center">
          <div className="flex flex-col w-full gap-6 max-w-7xl">
            <div className="w-full h-full bg-foreground rounded-2xl border-[1.5px] border-muted/30 shadow-md p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold text-center sm:text-left">
                  Want to work together?
                </span>
                <span className="text-muted text-center sm:text-left">
                  Feel free to reach out for collaborations or just a friendly
                  hello
                </span>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-0 gap-4">
                <ContactForm />
                <ContactLinks />
              </div>
            </div>
          </div>
        </div> */}
      <div
        className="w-full aspect-[3/4] gradient-div "
        style={{
          maxHeight: "1080px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center h-full ">
          <div className="w-full h-2/3 md:h-4/5 p-8 bg-green-400/0">
            <div className="w-full h-full bg-background rounded-xl"></div>
          </div>
          <div className="w-full h-1/3 md:h-1/5 bg-blue-300/50"></div>
        </div>
      </div>
      <div
        className="w-full aspect-[3/2] bg-purple-300"
        style={{
          maxHeight: "480px",
        }}
      ></div>
      <div
        className="w-full aspect-[2/1] bg-orange-300"
        style={{
          maxHeight: "240px",
        }}
      ></div>

      <Footer />
    </div>
  );
};

export default Page;
