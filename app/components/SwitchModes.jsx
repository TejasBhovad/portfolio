"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { moon, sun } from "./Logos";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./useFlubber";

const paths = [moon, sun];
const colors = ["#000", "#fff"];

const SwitchModes = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //  flubber content
  const initialPathIndex = theme === "light" ? 0 : 1;
  const [pathIndex, setPathIndex] = useState(initialPathIndex);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initialPathIndex = theme === "light" ? 0 : 1;
    setPathIndex(initialPathIndex);
    setLoading(false);
  }, [isMounted]);

  // loading state
  if (loading) {
    return (
      <div>
        <button className="flex bg-toggleMuted p-2 rounded-full items-center justify-center text-toggle hover:bg-toggleHover transition-colors duration-300 ease-in-out">
          <svg
            width="24"
            height="24"
            className="w-full h-full flex items-center justify-center"
          >
            <g transform="translate(0 0) scale(1 1)">
              <path
                fill={colors[0]}
                d={`M12,21V18m-6.36.36,2.12-2.12M3,12H6M5.64,5.64,7.76,7.76M12,3V6m6.36-.36L16.24,7.76M20,12H18M17,17l-.71-.71`}
              />
            </g>
          </svg>
        </button>
      </div>
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // If the new theme is light, set path to heart (0), else set to star (1)
    const newPathIndex = newTheme === "light" ? 0 : 1;
    setPathIndex(newPathIndex);

    // transition to the other path
    const animation = animate(progress, newPathIndex, {
      duration: 0.5,
      ease: "easeInOut",
    });

    return () => animation.stop();
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex bg-toggleMuted p-2 rounded-full items-center justify-center text-toggle hover:bg-toggleHover transition-colors duration-300 ease-in-out"
      >
        <motion.svg
          variants={{
            hidden: { opacity: 0, scale: 0.75 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          width="24"
          height="24"
          className="w-full h-full flex items-center justify-center"
        >
          {theme == "light" ? (
            <g transform="translate(0 0) scale(1 1)">
              <motion.path fill={fill} d={path} />
            </g>
          ) : (
            <g transform="translate(0 0) scale(1 1 )">
              <motion.path fill={fill} d={path} />
            </g>
          )}
        </motion.svg>
      </button>
    </div>
  );
};

export default SwitchModes;
