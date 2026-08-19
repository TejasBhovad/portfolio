/** The core sphere. Lights live in the scene, not in here. */
const Sphere = ({ position, size, color }) => (
  <mesh position={position}>
    <sphereGeometry args={size} />
    <meshStandardMaterial
      color={color}
      metalness={0.25}
      roughness={0.85}
      clearcoat={1.0}
    />
  </mesh>
);

export default Sphere;
