import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <motion.div
      className="cursor-pointer w-full h-1/2 border-[1.5px] border-muted/20 rounded-lg p-2 bg-foreground flex flex-col gap-1"
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-xl text-baseColor font-semibold px-2 pt-1">
        {projectName}
      </h2>
      <p className="text-md font-medium px-2 text-muted">
        {projectDescription}
      </p>
      <div className="w-full flex px-2 gap-2 py-1">
        <Link
          href={documentationLink}
          className="hover:bg-muted/30 p-1 rounded-full"
        >
          <Document />
        </Link>
        <Link href={liveLink} className="hover:bg-muted/30 p-1 rounded-full">
          <Web />
        </Link>
        <Link href={githubLink} className="hover:bg-muted/30 p-1 rounded-full">
          <GitHubLogo />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCardSmall;
