"use client";
import { SiNextdotjs, SiHuggingface } from "react-icons/si";
import TabCard from "@/components/tab-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer";
import GradientCard from "@/components/gradient-card";
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
import LocationPin from "@/components/location-pin";
import NavbarWrapper from "./components/NavbarWrapper";
const TextBox = memo(() => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <motion.span
        className="text-baseColor h-16 text-3xl sm:text-4xl md:text-5xl font-bold w-full text-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        Hey, I'm Tejas!
      </motion.span>
      <motion.span
        className="text-muted flex-col sm:flex-row text-md sm:text-xl text-center w-full items-center justify-center flex sm:gap-2 gap-1"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, ease: "easeInOut" }} // Reduced duration
      >
        Full Stack web developer based in
        {/* <span className="flex items-center gap-1">
          <Pin />
          India
        </span> */}
        <LocationPin />
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
        className="w-full aspect-auto sm:aspect-[3/4] gradient-div "
        style={{
          maxHeight: "1080px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center h-full ">
          <div className="w-full h-2/3 md:h-4/5 p-8 bg-green-400/0">
            <div className="w-full h-full bg-base rounded-xl">
              <NavbarWrapper>
                <div className="w-full h-auto flex items-center justify-center">
                  <div className="aspect-square bg-red-300 w-48 sm:w-60 md:w-96"></div>
                </div>

                {/* <ModelDisplay /> */}
                <div className="w-full gap-8 flex flex-col py-4 px-4">
                  <TextBox />
                  <SocialLinks />
                </div>
              </NavbarWrapper>
            </div>
          </div>

          <Tabs
            defaultValue="work"
            className="w-full h-3/5 md:h-1/4 py-8  px-8 flex flex-col gap-2"
          >
            <TabsList className="w-fit bg-base/50 flex justify-start h-auto p-0 rounded-md">
              <TabsTrigger
                value="work"
                className="px-4 py-2   text-lg data-[state=active]:bg-base data-[state=active]:text-text flex items-center justify-start gap-2"
              >
                <BriefcaseBusiness strokeWidth="2.25" />
                Work
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="px-4 py-2 text-lg data-[state=active]:bg-base data-[state=active]:text-text flex items-center justify-start gap-2"
              >
                <GraduationCap strokeWidth="2.25" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="work"
              className="w-full h-full flex flex-col md:flex-row gap-4 items-start justify-start py-2 data-[state=inactive]:hidden"
            >
              <TabCard
                image="/logos/podium.jpg"
                name="Podium"
                desc="Full Stack Developer"
                fromData="July 2024"
                toDate="August 2024"
              />
              <TabCard
                image="/logos/minecraft.jpg"
                name="Minecraft Modding"
                desc="Freelance"
                fromData="May 2021"
                toDate="May 2022"
              />
            </TabsContent>
            <TabsContent
              value="education"
              className="w-full h-full flex flex-col md:flex-row gap-4 items-start justify-start py-2"
            >
              <TabCard
                image="/logos/podium.jpg"
                name="B.Tech in AI-DS"
                desc="Ramrao Adik Institute of Technology"
                fromData="June 2022"
                toDate="June 2026"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div
        className="w-full  bg-base   h-auto"
        style={
          {
            // maxHeight: "480px",
          }
        }
      >
        <div className="max-w-7xl  mx-auto w-full flex flex-col gap-4 items-start justify-start h-auto px-8 py-4">
          <section className="w-full h-fit flex flex-col gap-1 sm:gap-2  ">
            <span className="w-full h-auto justify-start text-xl sm:text-2xl lg:text-4xl font-bold">
              Projects
            </span>
            <span className="w-full h-auto justify-start text-muted text-md sm:text-lg font-regular">
              Things I have worked on
            </span>
          </section>
          <div className="w-full h-auto flex-col md:flex-row flex gap-4 ">
            <GradientCard
              title="SoundXLR Soundboard"
              imageTitle="SoundXLR Screenshot"
              projectImage="/images/soundxlr.jpeg"
              techUsed={[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="h-4 w-4" />,
                },
                {
                  name: "Hugging Face",
                  icon: <SiHuggingface className="h-4 w-4" />,
                },
              ]}
            />
            <GradientCard
              title="SoundXLR Soundboard"
              imageTitle="SoundXLR Screenshot"
              projectImage="/images/soundxlr.jpeg"
              techUsed={[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="h-4 w-4" />,
                },
                {
                  name: "Hugging Face",
                  icon: <SiHuggingface className="h-4 w-4" />,
                },
              ]}
            />
          </div>
        </div>
      </div>
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
