import { Link } from "waku";

export default function ProjectLayout({ children, metadata }) {
  return (
    <div className="min-h-[calc(100vh-9rem)] flex flex-col bg-background border-2 border-muted">
      {/* Header */}
      <header className="w-full border-b-2 border-muted p-4 sm:p-6 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Link
            to="/projects"
            className="text-sm text-primary/50 hover:text-primary transition-colors"
          >
            ← projects
          </Link>
        </div>
        {metadata && (
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{metadata.title}</h1>
            {metadata.description && (
              <p className="text-sm sm:text-base text-primary/70">
                {metadata.description}
              </p>
            )}
            {metadata.tech && (
              <div className="flex flex-wrap gap-2 mt-2">
                {metadata.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-2 py-1 bg-muted border border-muted rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Content */}
      <article className="flex-1 max-w-none animate-slide-up-1 text-left w-full">
        {metadata?.coverImage && (
          <div className="w-full border-b-2 border-muted">
            <img
              src={metadata.coverImage}
              alt={`${metadata.title} cover`}
              className="w-full h-auto block object-cover"
            />
          </div>
        )}
        <div className="p-4 sm:p-6 flex flex-col items-start w-full">
          {children}
        </div>
      </article>

      {/* Footer Navigation */}
      <footer className="w-full border-t-2 border-muted p-4 sm:p-6 animate-fade-in-2">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-primary/70 transition-colors"
        >
          ← Back to all projects
        </Link>
      </footer>
    </div>
  );
}
