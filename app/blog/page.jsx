"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full h-full flex gap-3 flex-col items-center justify-center text-center">
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
      <Link href="https://tejasbhovad.github.io/docs/blog">
        <motion.span
          className="text-md font-mediun hover:underline text-primary/50"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          https://tejasbhovad.github.io/docs/blog
        </motion.span>
      </Link>
    </div>
  );
};

export default page;
