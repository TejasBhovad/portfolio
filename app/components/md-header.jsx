import React from "react";
import Link from "next/link";
import { ExternalLink, GithubIcon } from "lucide-react";
const MDHeader = ({ title, githubLink = null, liveLink = null }) => {
  return (
    <section className="flex w-full h-auto justify-between flex-col sm:flex-row gap-2">
      <h1 className="text-3xl w-auto sm:text-4xl lg:text-5xl font-bold text-baseColor">
        {title}
      </h1>
      <div className="w-auto h-fit flex gap-2">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 gap-2 py-1 flex items-center rounded-md justify-center font-semibold h-auto bg-transparent border border-muted/25 hover:bg-toggle/5 text-baseColor"
          >
            <GithubIcon size={16} />
            Github
          </Link>
        )}
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 gap-2 flex items-center rounded-md justify-center font-semibold h-auto bg-transparent border py-0 border-muted/25 hover:bg-toggle/5 text-baseColor"
          >
            <ExternalLink size={16} />
            Live URL
          </Link>
        )}
      </div>
    </section>
  );
};

export default MDHeader;