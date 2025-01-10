"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SlideButton = ({ children, onClick, text, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      {...props}
      className={`relative bg-muted/10 hover:bg-muted/15 overflow-hidden p-0 ${
        props.className || ""
      }`}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-full h-full"
      >
        <motion.span
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isHovered ? "-100%" : "0%",
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.9 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier curve
            opacity: {
              duration: 0.2,
            },
            scale: {
              duration: 0.2,
            },
          }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            {children}
          </div>
        </motion.span>
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: isHovered ? "0%" : "100%",
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
            opacity: {
              duration: 0.2,
            },
            scale: {
              duration: 0.15,
            },
          }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center">
            {text}
          </div>
        </motion.span>
      </motion.div>
    </Button>
  );
};

export default SlideButton;
