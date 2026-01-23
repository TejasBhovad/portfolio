import { readFileSync } from "fs";
import { Link } from "waku";
import { Footer } from "../../components/footer";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-[calc(100vh-9rem)] flex flex-col bg-background border-2 border-muted">
      {/* Header */}
      <section className="w-full border-b-2 border-muted p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 animate-fade-in">
          <Link
            to="/"
            className="text-sm text-primary/50 hover:text-primary transition-colors"
          >
            ← home
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-slide-up-1">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-primary/70 animate-slide-up-1">
          Things I've built and shipped
        </p>
      </section>

      {/* Projects Grid */}
      <section className="flex-1 p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group border-2 border-muted hover:bg-muted/30 transition-all p-4 sm:p-5 flex items-center gap-4 animate-slide-up-item"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {/* Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 border-0 border-muted overflow-hidden bg-background">
                <img
                  src={`/images/${project.logo}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-primary/70 line-clamp-1 sm:line-clamp-none">
                  {project.tagline.replace("<project>", project.title)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const getProjects = async () => {
  const file = readFileSync("./private/projects.json", "utf8");
  return JSON.parse(file);
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
