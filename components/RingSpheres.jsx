"use client";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
const Sphere = ({ position, size, color }) => {
  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={size} />
        <meshStandardMaterial
          color={color}
          metalness={0.75}
          roughness={0.85}
          clearcoat={1.0}
        />
      </mesh>
    </>
  );
};
const RingSpheres = ({ position, size, color }, props) => {
  const meshRef = useRef();
  const [speed, setSpeed] = useState(2);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * -1 * speed;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
    }

    // Decrease speed over time to a minimum of 0.1
    const intervalId = setInterval(() => {
      setSpeed((prevSpeed) => Math.max(prevSpeed - 0.02, 0.1));
    }, 100);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const numSpheres = 12; // Change this to the number of spheres you want
  const spherePositions = Array.from({ length: numSpheres }, (_, i) => {
    const angle = (i / numSpheres) * 2 * Math.PI; // Calculate the angle for each sphere
    return [1.5 * Math.cos(angle), 1.5 * Math.sin(angle), 0]; // Calculate the position for each sphere
  });

  const sphereColors = Array.from({ length: numSpheres }, () => "#fff"); // Change this to the colors you want
  return (
    <mesh position={position} {...props} ref={meshRef}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
      {spherePositions.map((pos, index) => (
        <group position={pos} key={index}>
          <Sphere size={[0.3, 32, 32]} color={sphereColors[index]} />
          <pointLight position={[0, 0, 0]} intensity={0.55} distance={5} />
        </group>
      ))}
      <Controls />
    </mesh>
  );
};
const Controls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();
  const torusPosition = [2, 0, 0]; // The position of the Torus

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
      enableRotate={true}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableDamping
    />
  );
};

export default RingSpheres;
