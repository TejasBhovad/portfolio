"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
function GradientCard({
  title,
  imageTitle,
  projectImage,
  techUsed,
  gradient = {
    from: "from-soundxlr-from",
    to: "to-soundxlr-to",
  },
  url,
}) {
  return (
    <motion.div className="h-fit w-full">
      <Link
        href={url}
        referrerPolicy="no-referrer"
        target="_blank"
        className={`flex shadow-md flex-col h-full bg-gradient-to-bl ${gradient.from} ${gradient.to} dark:bg-gradient-to-bl backdrop-blur-sm rounded-lg p-3`}
      >
        <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
          <motion.img
            src={projectImage}
            alt={imageTitle}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Project title and tech stack */}
        <div className="flex flex-col flex-grow justify-between mt-4">
          <h3 className="text-xl font-bold mb-4 text-text dark:text-white">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {techUsed.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center select-none gap-1.5 rounded-full bg-background backdrop-blur-sm px-3 py-1 text-sm"
                // whileHover={{ scale: 1.025 }}
                // transition={{ duration: 0.2 }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default GradientCard;
