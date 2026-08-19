"use client";

import { useRef, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SphereGeometry, TextureLoader } from "three";
import { heroFraming, HERO_CENTER_X } from "@/lib/hero-framing";
import { isLiteDevice } from "@/lib/device";

const Sphere = ({ position, geometry, textureUrl, spin }) => {
  const texture = useLoader(TextureLoader, textureUrl);
  const meshRef = useRef();
  const lite = isLiteDevice();

  useFrame((state, delta) => {
    if (meshRef.current && spin) {
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <mesh
      position={position}
      rotation={[1.5, 0.5, Math.PI]}
      ref={meshRef}
      geometry={geometry}
    >
      {lite ? (
        <meshBasicMaterial map={texture} />
      ) : (
        <meshStandardMaterial
          map={texture}
          metalness={0.75}
          roughness={0.85}
          clearcoat={1.0}
        />
      )}
    </mesh>
  );
};

const RingSpheres = ({ position, size, color }) => {
  const textureUrls = [
    "/sphere/nextjs.png",
    "/sphere/react.png",
    "/sphere/three.png",
    "/sphere/astro.png",
    "/sphere/svelte.png",
    "/sphere/tailwind.png",
    "/sphere/figma.png",
    "/sphere/github.png",
    "/sphere/drizzle.png",
    "/sphere/docker.png",
    "/sphere/postgres.png",
  ];

  const meshRef = useRef();
  const speedRef = useRef(0.5);
  const lite = isLiteDevice();

  useFrame((state, delta) => {
    if (meshRef.current && !lite) {
      meshRef.current.rotation.z += delta * -0.75 * speedRef.current;
      speedRef.current = Math.max(speedRef.current - 0.0002, 0.05);
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
    }
  }, []);

  // One geometry for all eleven — they were each allocating and uploading
  // their own 32x32 sphere for something that draws about 40px wide.
  const orbGeometry = useMemo(() => new SphereGeometry(0.3, 18, 12), []);
  useEffect(() => () => orbGeometry.dispose(), [orbGeometry]);

  const numSpheres = textureUrls.length;
  const spherePositions = useMemo(() => {
    return Array.from({ length: numSpheres }, (_, i) => {
      const angle = (i / numSpheres) * 2 * Math.PI;
      return [1.5 * Math.cos(angle), 1.5 * Math.sin(angle), 0];
    });
  }, [numSpheres]);

  return (
    <mesh position={position} ref={meshRef}>
      <torusGeometry args={size} />
      {lite ? (
        <meshBasicMaterial color={color} />
      ) : (
        <meshStandardMaterial color={color} />
      )}
      {spherePositions.map((pos, index) => (
        <group position={pos} key={index}>
          <Sphere
            geometry={orbGeometry}
            textureUrl={textureUrls[index]}
            spin={!lite}
          />
          {!lite && (
            <pointLight position={[0, 0, 0]} intensity={0.55} distance={5} />
          )}
        </group>
      ))}
      {!lite && (
        <>
          <pointLight position={[0, 3, 1]} intensity={10} color="white" />
          <pointLight position={[0, -3, 1]} intensity={10} color="white" />
          <pointLight position={[3, 0, 1]} intensity={10} color="white" />
          <pointLight position={[-4, 0, 1]} intensity={10} color="white" />
        </>
      )}
      <Controls />
    </mesh>
  );
};

const Controls = () => {
  const controls = useRef();
  const { camera, gl, size } = useThree();
  const [allowOrbit, setAllowOrbit] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const sync = () => setAllowOrbit(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Re-solve whenever the stage box changes: the same object has to sit in a
  // 320x296 full-bleed strip and in a 500x800 desktop panel.
  useLayoutEffect(() => {
    const { fov, distance, focusY } = heroFraming(size.width, size.height);

    camera.fov = fov;
    // Polar angle is locked to the horizon, so the eye stays level with the
    // target — anything else gets snapped back by OrbitControls anyway.
    camera.position.set(HERO_CENTER_X, focusY, distance);
    camera.updateProjectionMatrix();

    if (controls.current) {
      controls.current.target.set(HERO_CENTER_X, focusY, 0);
      controls.current.update();
    }
  }, [camera, size.width, size.height]);

  return (
    <OrbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      makeDefault
      enablePan={false}
      enableZoom={false}
      enabled={allowOrbit}
      enableRotate={allowOrbit}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableDamping
      dampingFactor={0.08}
    />
  );
};

export default RingSpheres;
