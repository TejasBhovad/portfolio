"use client";

import { useRef, useEffect, useMemo } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const Sphere = ({ position, size, textureUrl }) => {
  const texture = useLoader(TextureLoader, textureUrl);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && !isMobile()) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh position={position} rotation={[1.5, -0.2, Math.PI]} ref={meshRef}>
      <sphereGeometry args={size} />
      <meshStandardMaterial
        map={texture}
        metalness={0.75}
        roughness={0.85}
        clearcoat={1.0}
      />
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
  const speedRef = useRef(2);

  useFrame((state, delta) => {
    if (meshRef.current && !isMobile()) {
      meshRef.current.rotation.z += delta * -1 * speedRef.current;
      speedRef.current = Math.max(speedRef.current - 0.0002, 0.1);
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
    }
  }, []);

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
      <meshStandardMaterial color={color} />
      {spherePositions.map((pos, index) => (
        <group position={pos} key={index}>
          <Sphere size={[0.3, 32, 32]} textureUrl={textureUrls[index]} />
          <pointLight position={[0, 0, 0]} intensity={0.55} distance={5} />
        </group>
      ))}
      <pointLight position={[0, 3, 1]} intensity={10} color="white" />
      <pointLight position={[0, -3, 1]} intensity={10} color="white" />
      <pointLight position={[3, 0, 1]} intensity={10} color="white" />
      <pointLight position={[-4, 0, 1]} intensity={10} color="white" />
      <Controls />
    </mesh>
  );
};

const Controls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();
  const torusPosition = [2, 0, 0];

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(...torusPosition);
    }
  }, [controls, torusPosition]);

  return (
    <OrbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enablePan={false}
      enableZoom={false}
      enableRotate={!isMobile()}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableDamping
    />
  );
};

export default RingSpheres;
