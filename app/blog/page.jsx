"use client";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-center">
      <motion.span
        className="text-4xl font-semibold"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        🏗️ Blog is under construction
      </motion.span>
    </div>
  );
};

export default page;
