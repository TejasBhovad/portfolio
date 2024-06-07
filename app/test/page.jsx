"use client";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
const page = () => {
  const Sphere = ({ position, size, color }) => {
    return (
      <mesh position={position}>
        <sphereGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

  const Torus = ({ position, size, color }, props) => {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.z += delta * -0.5));
    useEffect(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x = Math.PI / 2;
      }
    }, []);
    return (
      <mesh position={position} {...props} ref={meshRef}>
        <torusGeometry args={size} />
        <meshStandardMaterial color={color} />
        <Sphere position={[-1, 0, 0]} size={[0.5, 32, 32]} color="green" />
        <Sphere position={[1, 0, 0]} size={[0.5, 32, 32]} color="red" />
        <Sphere position={[0, -1, 0]} size={[0.5, 32, 32]} color="yellow" />
        <Sphere position={[0, 1, 0]} size={[0.5, 32, 32]} color="purple" />
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

  return (
    <div className="w-full h-full bg-white">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Controls />
        <Torus position={[2, 0, 0]} size={[1, 0.2, 16, 100]} color="blue" />
      </Canvas>
    </div>
  );
};

export default page;
