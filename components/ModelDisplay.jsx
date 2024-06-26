"use client";
import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Loader } from "@react-three/drei";
import Sphere from "@/components/Sphere";
import { Canvas } from "@react-three/fiber";
import RingSpheres from "@/components/RingSpheres";
import { Suspense } from "react";
import { EffectComposer } from "@react-three/postprocessing";

const MemoizedSphere = memo(Sphere);
const MemoizedRingSpheres = memo(RingSpheres);

const ModelDisplay = memo(() => {
  // State to store window size
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  // Effect to update state on window resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      variants={{ hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.25, ease: "easeInOut" }}
    >
      <section className="w-full h-full flex items-center justify-center">
        <motion.h1
          className="transition-all absolute z-10 font-black text-white text-7xl sm:text-8xl select-none"
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.75, ease: "easeInOut" }}
        >
          {"<T>"}
        </motion.h1>
        <Canvas
          camera={{ zoom: 2 }}
          gl={{
            antialias: true,
            alpha: true,
            pixelRatio:
              typeof window !== "undefined"
                ? isMobile
                  ? window.devicePixelRatio * 0.5
                  : window.devicePixelRatio
                : 1, // Default pixel ratio when window is not available
          }}
        >
          <EffectComposer>
            {/* Effects can be conditionally applied here */}
          </EffectComposer>
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={2}
            intensity={1}
          />
          <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
          <pointLight position={[0, -2, 4]} intensity={10} size={3} />
          <Suspense fallback={null}>
            <MemoizedSphere
              position={[2, 0, 0]}
              size={[1.25, 32, 32]}
              color="#44B1FF"
            />
            <MemoizedRingSpheres
              position={[2, -0.75, 0]}
              size={[1.5, 0.1, 1, 50]}
              color="blue"
            />
          </Suspense>
        </Canvas>
        <Loader />
      </section>
    </motion.div>
  );
});

export default ModelDisplay;
