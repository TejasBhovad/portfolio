import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Spotlight from "./spotlight";

/**
 * Not every project has a screenshot — some only ever had a logo. Rather
 * than stretch a 296px icon across a wide crop, logo-only projects get a
 * contained mark on a tinted panel, which reads as deliberate.
 */
const Media = ({ cover, icon, alt, ratio, priority = false, sizes, label }) => (
  <div
    className={`card-media relative ${ratio} overflow-hidden ${
      cover ? "bg-base" : "grid place-items-center bg-soft"
    }`}
  >
    {cover ? (
      <Image
        src={`/images/${cover}`}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    ) : icon ? (
      <Image
        src={`/images/${icon}`}
        alt={alt}
        width={192}
        height={192}
        className="h-20 w-20 rounded-2xl object-contain shadow-lg shadow-black/10 sm:h-28 sm:w-28"
      />
    ) : null}

    {label && (
      <div className="card-reveal absolute inset-x-0 bottom-0 flex justify-end p-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-inverted px-3 py-1.5 text-meta font-medium text-inverted">
          {label}
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
        </span>
      </div>
    )}
  </div>
);

const Stack = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((tech) => (
      <li
        key={tech}
        className="rounded-full border border-line px-2.5 py-1 text-meta text-muted"
      >
        {tech}
      </li>
    ))}
  </ul>
);

/**
 * The flagship. Side by side, with the media column locked to the artwork's
 * own ratio — stretching it to fill a taller box is what cropped a quarter
 * off the wordmark last time.
 */
export const FlagshipProject = ({ project }) => (
  <Spotlight
    as={Link}
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group grid grid-cols-1 overflow-hidden rounded-lg border border-line bg-surface hover:border-primary/50 lg:grid-cols-12"
  >
    <Media
      cover={project.cover}
      icon={project.icon}
      alt={`${project.name} — ${project.tag}`}
      ratio="aspect-[19/10] lg:col-span-7"
      priority
      sizes="(max-width: 1024px) 100vw, 60vw"
      label="Visit site"
    />

    <div className="flex flex-col justify-center gap-4 p-6 sm:p-7 lg:col-span-5">
      <div>
        <p className="text-label text-accent">Flagship</p>
        <h3 className="mt-2.5 text-h3 text-baseColor">{project.name}</h3>
        <p className="mt-1 text-meta text-faint">{project.tag}</p>
      </div>

      <p className="text-body text-muted">{project.blurb}</p>

      <dl className="grid grid-cols-3 gap-3 border-t border-line pt-4">
        {project.metrics.map((metric) => {
          const [value, ...rest] = metric.split(" ");
          return (
            <div key={metric}>
              <dt className="sr-only">{rest.join(" ")}</dt>
              <dd>
                <span className="block font-mono text-lg font-medium text-baseColor">
                  {value}
                </span>
                <span className="mt-0.5 block text-meta text-faint">
                  {rest.join(" ")}
                </span>
              </dd>
            </div>
          );
        })}
      </dl>

      <Stack items={project.stack} />
    </div>
  </Spotlight>
);

/** Compact variant for the full index. */
export const ProjectTile = ({ project }) => {
  // Always the project itself — live if it is up, source otherwise.
  const link =
    project.liveLink || project.githubLink || project.documentationLink;
  const label = project.liveLink
    ? "Visit site"
    : project.githubLink
      ? "View source"
      : "Read docs";

  return (
    <Spotlight
      as={Link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface hover:border-primary/50"
    >
      <Media
        cover={project.cover}
        icon={project.icon}
        alt={`${project.projectName} — ${project.projectDescription}`}
        ratio="aspect-[16/9]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        label={label}
      />
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium text-baseColor">{project.projectName}</h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-muted">{project.projectDescription}</p>
        {project.tags?.length > 0 && (
          <p className="mt-auto pt-3 text-meta text-faint">
            {project.tags.join(" · ")}
          </p>
        )}
      </div>
    </Spotlight>
  );
};
