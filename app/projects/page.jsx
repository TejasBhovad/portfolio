"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import projects from "@/public/data/projects.json";
import ProjectCard from "@/app/components/ProjectCard";
import { useToast } from "@/components/ui/use-toast";
import Footer from "../components/Footer";

const page = () => {
  const { toast } = useToast();
  const HoverHeader = ({ titleContent, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimerRef = useRef(null);

    const handleMouseEnter = () => {
      hoverTimerRef.current = setTimeout(() => {
        setIsHovered(true);
      }, 250); // Adjust 1000 to the desired hover duration in milliseconds
    };

    const handleMouseLeave = () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }
      if (isHovered) {
        setIsHovered(false);
      }
    };
    useEffect(() => {
      // Check if the URL has a hash
      const hash = window.location.hash;
      if (hash) {
        // Try to find an element with that id
        const element = document.querySelector(hash);
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: "smooth" });
        }
        // remove the hash from the URL
        history.replaceState(null, null, " ");
      }
    }, []);

    function copyToClipboard() {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url);
      toast({
        title: "Copied URL clipboard",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    return (
      <div className="w-full h-auto sm:px-6 text-center sm:text-left flex text-4xl font-bold text-white justify-center sm:justify-start">
        <div
          className="cursor-copy w-full h-auto  text-center sm:text-left flex text-4xl font-bold text-white justify-center sm:justify-start"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // on click copy the link to clipboard with the id
          onClick={copyToClipboard}
        >
          {isHovered && (
            <motion.span
              className="text-muted"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
                duration: 0.5,
              }}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            >
              #
            </motion.span>
          )}

          <motion.h1
            id={id}
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 10 : 0 }} // Adjust the x value to control the amount of space
            transition={{ type: "spring", stiffness: 300 }}
            className="w-auto text-center sm:text-left text-4xl font-bold text-baseColor"
          >
            {titleContent}
          </motion.h1>
        </div>
      </div>
    );
  };
  // sort project by type in web and other
  const webProjects = projects.filter((project) => project.type === "web");
  const otherProjects = projects.filter((project) => project.type === "other");
  return (
    <div className="flex flex-col w-full h-auto items-start justify-center">
      <div className="p-8 w-full h-auto justify-center flex">
        <div className="w-full flex flex-col items-center gap-4 max-w-7xl">
          <h1 className="w-full sm:px-6 text-center sm:text-left text-4xl font-bold text-white">
            <HoverHeader id="web-projects" titleContent="Web Projects" />
          </h1>
          <div className="w-full flex-wrap gap-2 p-2 sm:p-4 justify-center sm:justify-start flex ">
            {webProjects.map((project, index) => (
              <ProjectCard projectPage="true" key={index} {...project} />
            ))}
          </div>

          <HoverHeader id="other-projects" titleContent="Other Projects" />

          <div className="w-full flex-wrap gap-2 p-2 sm:p-4 justify-center sm:justify-start flex ">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} projectPage="true" {...project} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-12 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
