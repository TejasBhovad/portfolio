import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TabCard = ({ image, name, desc, fromData, toDate, type }) => {
  const baseClass =
    "flex gap-4 bg-foreground overflow-hidden shadow-md p-4 rounded-xl";

  const widthClass =
    type === "education" ? "w-full" : "md:w-1/2 w-full md:h-full h-24";

  const className = `${baseClass} ${widthClass}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Smooth bezier curve
      }}
      className={className}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0,
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="aspect-square md:h-24 h-16"
      >
        <Image
          width={512}
          quality={90}
          height={512}
          src={image}
          alt={name}
          className="w-full object-cover h-full rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col justify-start flex-grow md:py-2"
      >
        <h1 className="text-lg md:text-xl font-bold text-text">{name}</h1>
        <p className="text-sm md:text-lg text-muted line-clamp-2 truncate">
          {desc}
        </p>
        <p className="text-xs md:text-sm text-muted mt-1 truncate">
          {fromData} - {toDate}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TabCard;
