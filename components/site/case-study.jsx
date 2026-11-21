import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/**
 * Inline GitHub mark. lucide-react removed brand icons in v1, so the icon is
 * kept locally to avoid adding a new dependency.
 */
const GithubMark = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

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
            <GithubMark className="h-4 w-4" aria-hidden="true" />
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
