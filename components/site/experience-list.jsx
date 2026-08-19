import CompanyMark from "./company-mark";
import { experience, earlier } from "@/lib/content";

/**
 * A list, not a card grid. Roles have depth (two bullets each) and
 * cards force that into a truncated one-liner — the resume's actual
 * content only reads at full width.
 */
const ExperienceList = () => (
  <div>
    <ol className="flex flex-col">
      {experience.map((job, i) => (
        <li
          key={job.company}
          className={`grid grid-cols-1 gap-y-5 py-9 sm:grid-cols-12 sm:gap-x-8 ${
            i > 0 ? "border-t border-line" : "pt-0"
          }`}
        >
          <div className="sm:col-span-4 lg:col-span-3">
            <p className="text-meta text-faint">
              {job.from} — {job.to}
            </p>
            <p className="mt-1 text-meta text-faint">{job.location}</p>
            {job.current && (
              <p className="mt-3 inline-flex items-center gap-2 text-meta text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                Current
              </p>
            )}
          </div>

          <div className="sm:col-span-8 lg:col-span-9">
            <div className="flex items-center gap-3">
              <CompanyMark name={job.company} logo={job.logo} />
              <div>
                <h3 className="text-h3 text-baseColor">{job.company}</h3>
                <p className="text-sm text-muted">
                  {job.role}
                  {job.kind && <span className="text-faint"> · {job.kind}</span>}
                </p>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-4">
              {job.points.map((point) => (
                <li key={point.title} className="measure text-body text-muted">
                  <span className="font-medium text-baseColor">{point.title}. </span>
                  {point.body}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 text-meta text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>

    <div className="border-t border-line pt-9">
      <h3 className="text-label text-faint">Earlier</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {earlier.map((job) => (
          <li
            key={job.company}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
          >
            <p className="text-sm text-baseColor">
              {job.company}
              <span className="text-muted">
                {" "}
                — {job.role}
                {job.kind && ` · ${job.kind}`}
              </span>
            </p>
            <p className="text-meta text-faint">
              {job.from} — {job.to}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceList;
