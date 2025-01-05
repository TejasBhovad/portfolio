"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

function GradientCard({
  title,
  imageTitle,
  projectImage,
  techUsed,
  gradient = {
    from: "from-soundxlr-from  ",
    to: "to-soundxlr-to",
  },
}) {
  return (
    <motion.div className="h-fit w-full" transition={{ duration: 0.2 }}>
      <div
        className={`flex shadow-md flex-col h-full bg-gradient-to-bl ${gradient.from} ${gradient.to} dark:bg-gradient-to-bl backdrop-blur-sm rounded-[11px] p-3`}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <img
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
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-base dark:bg-gray-800 backdrop-blur-sm px-3 py-1 text-sm"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GradientCard;
