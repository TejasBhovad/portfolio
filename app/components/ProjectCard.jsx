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
  projectPage = false,
}) => {
  return (
    <motion.div
      className={`cursor-pointer w-full sm:w-1/2 h-auto border-[1.5px] border-muted/20 rounded-lg p-2 bg-foreground flex flex-col gap-1 ${
        projectPage ? "max-w-60" : ""
      }`}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative rounded-md rounded-b-none overflow-hidden w-full h-full">
        <Image
          src={`/images/${imageName}`}
          alt={imageName}
          width={200}
          height={200}
          className="rounded-md rounded-b-none object-cover w-full h-full"
        />
        <div className="absolute rounded-md top-0 left-0 right-0 bottom-0 bg-foreground bg-opacity-10 duration-500 transition-all hover:opacity-0 rounded-b-none"></div>
      </div>

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
          >
            <Document />
          </Link>
        )}
        {liveLink && (
          <Link href={liveLink} className="hover:bg-muted/30 p-1 rounded-full">
            <Web />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            className="hover:bg-muted/30 p-1 rounded-full"
          >
            <GitHubLogo />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
