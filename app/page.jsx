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
import ContactForm from "./components/ContactForm";
const page = () => {
  function TextBox() {
    return (
      <div className="w-full flex flex-col gap-8">
        <motion.span
          className="text-baseColor h-16 text-3xl sm:text-6xl font-bold w-full text-center"
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
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };
  return (
    <div className="w-full h-full mx-auto">
      <div className="max-w-7xl mx-auto h-screen flex flex-col items-center justify-center -translate-y-24">
        <div
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
        <div className="flex flex-col w-full gap-6  max-w-7xl">
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
              looking for more?
            </span>
            <Button
              variant="primary"
              size="large"
              className="bg-inverted text-inverted px-6 rounded-md text-xl font-semibold py-1 transition-all hover:scale-95 active:scale-105"
              onClick={() => handleClick()}
            >
              Explore projects
            </Button>
          </div>
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="h-auto w-full bg-gradient-to-br to-bg from-primary/50 p-8">
          <div className="w-full h-full bg-foreground rounded-2xl border-[1.5px] border-muted/30 shadow-md p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-center sm:text-left">
                Want to work together?
              </span>
              <span className="text-muted  text-center sm:text-left">
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
