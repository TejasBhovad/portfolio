import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";
import Section from "@/components/site/section";
import StatRow from "@/components/site/stat-row";
import ExperienceList from "@/components/site/experience-list";
import SkillsGrid from "@/components/site/skills-grid";
import Contact from "@/components/site/contact";
import { FlagshipProject, ProjectTile } from "@/components/site/project-card";
import { education, featured, recognition } from "@/lib/content";
import projects from "@/public/data/projects.json";

// MC Render leads as the flagship; the rest of the row is a straight 3-up.
const alsoBuilt = projects
  .filter((p) => p.projectName !== "MC Render")
  .slice(0, 3);

const Page = () => (
  <>
    <Nav />
    <main id="main">
      <Hero />
      <StatRow />

      <Section index="01" title="Selected work" id="work">
        <FlagshipProject project={featured[0]} />

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alsoBuilt.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-baseColor"
          >
            <span className="link-underline">All {projects.length} projects</span>
            <ArrowRight
              className="h-4 w-4 text-faint transition-transform group-hover:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      <Section index="02" title="Experience" id="experience">
        <ExperienceList />
      </Section>

      <Section index="03" title="Toolkit" id="skills">
        <SkillsGrid />
      </Section>

      <Section index="04" title="Recognition & education" id="about">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <ul className="flex flex-col lg:col-span-7">
            {recognition.map((item, i) => (
              <li
                key={item.title}
                className={`flex flex-col gap-1 ${
                  i === 0 ? "pb-5" : "border-t border-line py-5"
                }`}
              >
                <h3 className="text-h3 text-baseColor">{item.title}</h3>
                <p className="measure text-body text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-line bg-surface p-6">
              <GraduationCap
                className="h-5 w-5 text-faint"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-h3 text-baseColor">{education.degree}</h3>
              <p className="mt-1.5 text-body text-muted">{education.school}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-meta text-faint">
                <span>
                  {education.from} — {education.to}
                </span>
                <span aria-hidden="true">/</span>
                <span>{education.location}</span>
              </div>
              <p className="mt-4 inline-flex rounded-md border border-line bg-base px-2.5 py-1 text-meta text-accent">
                {education.detail}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section index="05" title="Contact" id="contact" className="pb-section">
        <Contact />
      </Section>
    </main>
    <Footer />
  </>
);

export default Page;
