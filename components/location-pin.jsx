import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationPin = () => {
  return (
    <motion.span
      whileHover="hover"
      initial="initial"
      className="flex items-center gap-1 cursor-pointer group "
    >
      <motion.div
        variants={{
          initial: {
            scale: 1,
            y: 0,
          },
          hover: {
            scale: [1, 1.2, 1.1],
            y: [0, -6, -4],
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        <motion.div
          variants={{
            initial: {
              rotate: 0,
            },
            hover: {
              rotate: [0, -15, 15, 0],
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.3, 0.6, 1],
              },
            },
          }}
        >
          <MapPin className="text-text w-4 h-4 sm:w-6 sm:h-6" />
        </motion.div>
        <motion.div
          variants={{
            initial: {
              scale: 1,
              opacity: 0,
            },
            hover: {
              scale: [1, 1.5, 1],
              opacity: [0, 0.2, 0],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
                repeat: 1,
              },
            },
          }}
          className="absolute inset-0 bg-muted rounded-full -z-10"
        />
      </motion.div>
      <motion.span
        variants={{
          initial: {
            x: 0,
          },
          hover: {
            x: 2,
            transition: {
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        India
      </motion.span>
    </motion.span>
  );
};

export default LocationPin;
