import React from "react";

const Sphere = ({ position, size, color }) => {
  return (
    <>
      <mesh position={position}>
        <ambientLight intensity={1.75} />
        <sphereGeometry args={size} />
        <meshStandardMaterial
          color={color}
          metalness={0.25}
          roughness={0.85}
          clearcoat={1.0}
        />
      </mesh>
    </>
  );
};

export default Sphere;
