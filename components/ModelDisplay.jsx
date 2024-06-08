"use client";
import { Loader } from "@react-three/drei";
import Sphere from "@/components/Sphere";
import { Canvas } from "@react-three/fiber";
import RingSpheres from "@/components/RingSpheres";
import { Suspense, memo } from "react";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const MemoizedSphere = memo(Sphere);
const MemoizedRingSpheres = memo(RingSpheres);

const ModelDisplay = memo(() => {
  return (
    <div className="w-full h-full bg-gray-400">
      <section className="w-96 h-96 bg-gray-500 flex items-center justify-center">
        <h1 className="absolute z-20 font-black text-white text-7xl select-none">
          {"<T>"}
        </h1>
        <Canvas camera={{ zoom: 2 }} gl={{ antialias: true }}>
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.1}
              luminanceSmoothing={0.2}
              height={600}
            />

            <Vignette eskil={false} offset={0.1} darkness={1} />
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
    </div>
  );
});

export default ModelDisplay;
