import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Section, { PageHeader } from "@/components/site/section";
import { ProjectTile } from "@/components/site/project-card";
import projects from "@/public/data/projects.json";

export const metadata = {
  title: "Projects",
  description:
    "Everything Tejas Bhovad has shipped — web apps, 3D tools, desktop utilities and games. Most of it is open source.",
  alternates: { canonical: "/projects" },
};

const groups = [
  { key: "web", label: "Web", blurb: "Things that live at a URL." },
  {
    key: "other",
    label: "Desktop & experiments",
    blurb: "Native apps, tooling, and things built to learn something.",
  },
];

const Page = () => (
  <>
    <Nav />
    <main id="main">
      <PageHeader eyebrow="Index" title="Projects">
        {projects.length} things I&apos;ve built over the years, from a
        browser-based 3D renderer with six figures of traffic down to a weekend
        Rust experiment. Most are open source — if one catches your eye, pull
        requests are welcome.
      </PageHeader>

      {groups.map((group, i) => {
        const items = projects.filter((p) =>
          group.key === "web" ? p.type === "web" : p.type !== "web"
        );
        if (items.length === 0) return null;

        return (
          <Section
            key={group.key}
            index={String(i + 1).padStart(2, "0")}
            title={group.label}
            aside={String(items.length)}
            blurb={group.blurb}
            className={i === groups.length - 1 ? "pb-section" : ""}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => (
                <ProjectTile key={project.id} project={project} />
              ))}
            </div>
          </Section>
        );
      })}
    </main>
    <Footer />
  </>
);

export default Page;
