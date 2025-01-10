"use client";

import NavbarWrapper from "../components/NavbarWrapper";
import projects from "@/public/data/projects.json";
import { ProjectCard } from "@/components/project-card";

const Page = () => {
  const webProjects = projects.filter((project) => project.type === "web");
  const otherProjects = projects.filter((project) => project.type !== "web");

  return (
    <NavbarWrapper type="top">
      <div className="w-full gradient-project h-auto sm:h-full pt-16">
        <div className="max-w-7xl  mx-auto sm:h-full w-full px-9 py-2  flex flex-col gap-8">
          <section className="flex flex-col  gap-2 w-full sm:h-auto justify-start">
            <span className="w-full h-auto justify-start text-2xl sm:text-3xl lg:text-4xl font-bold">
              Projects
            </span>
            <span className="w-full h-fit justify-start text-muted-foreground text-sm sm:text-md lg:text-lg">
              I worked on several projects over the years, here are the ones I
              am proud of.
              <span className="hidden sm:inline">
                {" "}
                Many of the projects are Open Source, if any of the project
                piques your interest feel free to contribute to them.
              </span>
            </span>
          </section>

          {webProjects.length > 0 && (
            <section className="flex flex-col gap-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.projectName}
                    description={project.projectDescription}
                    image={project.imageName}
                    link={project.liveLink || project.githubLink}
                  />
                ))}
              </div>
            </section>
          )}

          {otherProjects.length > 0 && (
            <section className="flex flex-col gap-4 pb-4">
              <h2 className="text-xl font-semibold">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.projectName}
                    description={project.projectDescription}
                    image={project.imageName}
                    link={project.liveLink || project.githubLink}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Page;
