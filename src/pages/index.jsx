import { readFileSync } from "fs";
import { Link } from "waku";

import Sphere from "../components/sphere";
import { Footer } from "../components/footer";
import LinkContainer from "../components/link-container";

export default async function HomePage() {
  const data = await getData();
  const experience = await getExperience();
  const projects = await getProjects();

  return (
    <div className="min-h-[calc(100vh-9rem)] flex flex-col bg-background border-2 border-muted">
      {/* Hero Section */}
      <section className="w-full flex flex-col sm:flex-row sm:h-56 border-b-2 border-muted">
        <div className="h-40 sm:h-full flex w-full sm:w-auto sm:aspect-square sm:border-r-2 border-b-2 border-muted animate-fade-in justify-center items-center">
          <div className="block sm:hidden w-full">
            <Sphere
              width="100%"
              height={160}
              size={2.8}
              shape="swirl"
              type="4x4"
              speed={0.92}
              scale={3.12}
              rotation={136}
              offsetX={0.1}
              offsetY={-1}
            />
          </div>
          <div className="hidden sm:block">
            <Sphere width={220} height={220} size={1.75} />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between w-full h-full items-start">
          <div className="flex gap-2 flex-col p-4 sm:p-5 py-6 sm:py-5 animate-slide-up-1">
            <span className="text-xl sm:text-3xl font-semibold">
              I'm Tejas Bhovad
            </span>
            <span className="text-sm sm:text-base text-primary/50">
              Mumbai, India
            </span>
            <span className="text-sm sm:text-base leading-relaxed">
              Full stack developer who builds stuff that has real impact, mainly
              with nextjs. I love to live on the cutting edge and try new
              things.
            </span>
          </div>

          <div className="w-full flex h-12 border-t-2 border-muted animate-fade-in-2">
            <div className="w-1/3 h-full border-r-2 border-muted">
              <a
                href="/RESUME_PUBLIC.pdf"
                download="Tejas_Bhovad_Resume.pdf"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted text-sm sm:text-base"
              >
                resume
              </a>
            </div>
            <div className="w-1/3 h-full border-r-2 border-muted">
              <a
                href="https://github.com/TejasBhovad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted text-sm sm:text-base"
              >
                github
              </a>
            </div>
            <div className="w-1/3 h-full">
              <a
                href="https://www.linkedin.com/in/tejas-bhovad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted text-sm sm:text-base"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 border-b-2 border-muted">
        <span className="flex text-sm sm:text-base items-center gap-2 font-semibold animate-slide-up-3">
          <div className="w-2 h-2 bg-primary rounded-[2px] rotate-45"></div>
          Experience
        </span>
        <ul className="w-full h-fit flex flex-col gap-3 sm:gap-3">
          {experience.map((exp, index) => (
            <li
              key={exp.title}
              className="w-full flex sm:flex-row flex-col gap-1 sm:gap-0 animate-slide-up-item"
              style={{ animationDelay: `${350 + index * 50}ms` }}
            >
              <div className="w-full sm:flex-1 flex justify-start items-center gap-1 sm:gap-1 flex-wrap text-sm sm:text-base">
                <span>{exp.title}</span> <span>at</span>
                <LinkContainer
                  logo={`/images/${exp.logo}`}
                  label={exp.company}
                  link={exp.link}
                  title={exp.title}
                />
              </div>
              <div className="w-full sm:w-auto sm:min-w-[240px] text-sm sm:text-base text-primary/50 sm:text-right">
                {exp.startDate} - {exp.endDate}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 border-b-2 border-muted flex-1">
        <span className="flex text-sm sm:text-base items-center gap-2 font-semibold animate-slide-up-4">
          <div className="w-2 h-2 bg-primary rounded-[2px] rotate-45"></div>
          What I have been building
        </span>
        <ul className="w-full h-fit flex flex-col gap-1">
          {projects.map((project, index) => {
            const taglineParts = project.tagline.split("<project>");
            return (
              <li
                key={project.title}
                className="w-full flex flex-col animate-slide-up-item"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                <span className="flex items-center justify-start flex-wrap text-sm sm:text-base">
                  {taglineParts[0]}
                  <div className="mx-1 z-30">
                    <LinkContainer
                      logo={`/images/${project.logo}`}
                      label={project.title}
                      link={project.url}
                      title={project.title}
                    />
                  </div>
                </span>
                <span className="sm:-translate-y-6.75 translate-x-0.5 sm:translate-x-0 -translate-y-5.75 text-sm sm:text-base">
                  <span className="text-primary/0">
                    {taglineParts[0]} log ,{project.title}
                  </span>
                  {taglineParts[1]}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Footer - Pinned to bottom */}
      <Footer />
    </div>
  );
}

const getData = async () => {
  const file = readFileSync("./private/map.json", "utf8");
  return JSON.parse(file);
};

const getExperience = async () => {
  const file = readFileSync("./private/experience.json", "utf8");
  return JSON.parse(file);
};

const getProjects = async () => {
  const file = readFileSync("./private/projects.json", "utf8");
  return JSON.parse(file);
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
