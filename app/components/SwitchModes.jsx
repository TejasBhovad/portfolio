"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { moon, sun } from "./Logos";

const paths = [moon, sun];
const colors = ["#000", "#fff"];

const SwitchModes = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Loading state
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

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex bg-toggleMuted/50 p-2 rounded-full items-center justify-center text-toggle hover:bg-toggleHover transition-colors duration-300 ease-in-out"
      >
        <motion.svg
          initial={{ opacity: 0, scale: 0.75, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          width="24"
          height="24"
          className="w-full h-full flex items-center justify-center"
        >
          <g transform="translate(0 0) scale(1 1)">
            <motion.path
              fill={theme === "light" ? colors[0] : colors[1]}
              d={theme === "light" ? paths[0] : paths[1]}
            />
          </g>
        </motion.svg>
      </button>
    </div>
  );
};

export default SwitchModes;
