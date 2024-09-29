import React, { useState, useEffect } from "react";
import Link from "next/link";

import Document from "./logos/Document";
import Web from "./logos/Web";
import GitHubLogo from "./logos/GitHubLogo";

const ProjectCardSmall = ({
  projectName,
  projectDescription,
  documentationLink,
  liveLink,
  githubLink,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const primaryLink = liveLink || githubLink || documentationLink;

  return (
    <Link
      className="cursor-pointer w-full h-1/2 border-[1.5px] border-muted/20 rounded-lg p-2 bg-foreground flex flex-col gap-1"
      href={primaryLink}
    >
      <div>
        <h2 className="text-xl text-baseColor font-semibold px-2 pt-1">
          {projectName}
        </h2>
        <p className="text-md font-medium px-2 text-muted">
          {projectDescription}
        </p>
        <div className="w-full flex px-2 gap-2 py-1">
          {documentationLink && (
            <Link
              href={documentationLink}
              className="hover:bg-muted/30 p-1 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Document />
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              className="hover:bg-muted/30 p-1 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Web />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              className="hover:bg-muted/30 p-1 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubLogo />
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardSmall;
