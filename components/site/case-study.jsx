import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

/** Header for an individual project write-up. */
export const CaseHeader = ({ title, tag, icon, githubLink, liveLink }) => (
  <header className="container pb-12 pt-14 sm:pt-20">
    <Link
      href="/projects"
      className="group mb-10 inline-flex items-center gap-2 text-meta text-muted hover:text-baseColor"
    >
      <ArrowLeft
        className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
        strokeWidth={2}
        aria-hidden="true"
      />
      All projects
    </Link>

    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-4">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={128}
            height={128}
            className="h-14 w-14 rounded-lg border border-line bg-soft object-contain p-1.5"
          />
        )}
        <div>
          <h1 className="text-h2 text-baseColor">{title}</h1>
          {tag && <p className="mt-1.5 text-meta text-faint">{tag}</p>}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-inverted px-4 py-2 text-sm font-medium text-inverted transition-opacity hover:opacity-90"
          >
            Live site
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-baseColor transition-colors hover:bg-toggleHover"
          >
            <Github className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Source
          </Link>
        )}
      </div>
    </div>
  </header>
);

/** Body wrapper — keeps prose on the same measure as the rest of the site. */
export const CaseBody = ({ children }) => (
  <div className="container flex flex-col gap-10 pb-section">{children}</div>
);

export const CaseShot = ({ src, alt }) => (
  <figure className="overflow-hidden rounded-lg border border-line bg-surface">
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={900}
      className="h-auto w-full object-cover"
    />
  </figure>
);
