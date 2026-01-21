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
        <div className="sm:h-full w-full sm:w-auto aspect-square sm:border-r-2 sm:border-b-0 border-b-2 border-muted">
          <Sphere />
        </div>
        <div className="flex-1 flex flex-col justify-between w-full h-full items-start">
          <div className="flex gap-2 flex-col p-5">
            <span className="text-3xl font-semibold">I'm Tejas Bhovad</span>
            <span className="text-primary/50">Mumbai, India</span>
            <span className="">
              Full stack developer who builds stuff that has real impact, mainly
              with nextjs. I love to live on the cutting edge and try new
              things.
            </span>
          </div>

          <div className="w-full flex h-12 border-t-2 border-muted">
            <div className="w-1/3 h-full border-r-2 border-muted">
              <Link
                to="/"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted"
              >
                resume
              </Link>
            </div>
            <div className="w-1/3 h-full border-r-2 border-muted">
              <Link
                to="/"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted"
              >
                github
              </Link>
            </div>
            <div className="w-1/3 h-full">
              <Link
                to="/"
                className="w-full flex items-center justify-center font-semibold h-full hover:bg-muted"
              >
                linkedin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-6 flex flex-col gap-4 border-b-2 border-muted  ">
        <span className="flex text-md items-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-primary rounded-[2px] rotate-45"></div>
          Experience
        </span>
        <ul className="w-full h-fit flex flex-col gap-3">
          {experience.map((exp) => (
            <li key={exp.title} className="w-full flex sm:flex-row flex-col">
              <div className="w-full flex justify-start items-center gap-1 sm:gap-1 sm:flex-row">
                <span>{exp.title}</span> at
                <LinkContainer
                  logo={`/images/${exp.logo}`}
                  label={exp.company}
                  link={exp.link}
                  title={exp.title}
                />
              </div>
              <div className="w-96 text-primary/50">
                {exp.startDate} - {exp.endDate}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="p-6 flex flex-col gap-4 border-b-2 border-muted flex-1">
        <span className="flex text-md items-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-primary rounded-[2px] rotate-45"></div>
          What I have been building
        </span>
        <ul className="w-full h-fit flex flex-col">
          {projects.map((project) => {
            const taglineParts = project.tagline.split("<project>");
            return (
              <li key={project.title} className="w-fit flex flex-col">
                <span className="flex items-center justify-start">
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
                <span className="-translate-y-6.75">
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
