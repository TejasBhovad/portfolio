"use client";
import { useState, useEffect, memo, Suspense, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader } from "@react-three/drei";
import Sphere from "@/components/Sphere";
import { Canvas } from "@react-three/fiber";
import RingSpheres from "@/components/RingSpheres";

const MemoizedSphere = memo(Sphere);
const MemoizedRingSpheres = memo(RingSpheres);

const Title = memo(() => (
  <motion.h1
    className="transition-all absolute z-10 font-black text-white text-4xl sm:text-7xl select-none"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.75, ease: "easeInOut" }}
  >
    {"<T>"}
  </motion.h1>
));

const Scene = memo(() => (
  <>
    <directionalLight position={[0, 10, 5]} intensity={1} />
    <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      decay={2}
      intensity={1}
    />
    <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
    <pointLight position={[0, -2, 4]} intensity={10} />
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
  </>
));

const ModelDisplay = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    setIsClient(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const canvasProps = {
    style: { background: "transparent" },
    camera: { zoom: 2 },
    gl: {
      antialias: true,
      alpha: true,
      pixelRatio: isClient
        ? isMobile
          ? window.devicePixelRatio * 0.5
          : window.devicePixelRatio
        : 1,
    },
  };

  return (
    <motion.div
      className="bg-foreground w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25, ease: "easeInOut" }}
    >
      <section className="w-full h-full flex items-center justify-center">
        {<Title />}
        {
          <Canvas {...canvasProps}>
            <Scene />
          </Canvas>
        }
        <Loader />
      </section>
    </motion.div>
  );
};

export default memo(ModelDisplay);
