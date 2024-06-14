import React from "react";
import Image from "next/image";
import Link from "next/link";
import Web from "./logos/Web";
import Document from "./logos/Document";
import GitHubLogo from "./logos/GitHubLogo";
import { motion } from "framer-motion";

const ProjectCard = ({
  imageName,
  projectName,
  projectDescription,
  documentationLink,
  liveLink,
  githubLink,
}) => {
  return (
    <motion.div
      className="cursor-pointer w-full sm:w-1/2 h-auto border-[1.5px] border-muted/20 rounded-lg p-2 bg-foreground flex flex-col gap-1"
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
    >
      <div className="rounded-xl">
        <Image
          src={`/images/${imageName}`}
          alt={imageName}
          width={200}
          height={200}
          className="rounded-md rounded-b-none object-cover w-full h-full"
        />
      </div>

      <h2 className="text-xl text-base font-semibold px-2 pt-1">
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

export default ProjectCard;
