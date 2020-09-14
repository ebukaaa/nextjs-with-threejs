import { createRef, Suspense } from "react";
import { useFrame, Canvas } from "react-three-fiber";
import { string, arrayOf, oneOfType, number } from "prop-types";
import { MeshWobbleMaterial, softShadows, OrbitControls } from "drei";
import styles from "./style.module.scss";

softShadows();

function Boxes() {
  return (
    <>
      <Box position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" speed={2} />
      <Box position={[-2, 1, -5]} color="pink" speed={6} />
      <Box position={[5, 1, -2]} color="pink" speed={6} />
    </>
  );
}
function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  );
}
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={50}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-left={-10}
        shadow-camera-bottom={-10}
        position={[0, 10, 0]}
        intensity={1.5}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </>
  );
}
function Box({ position, args, color, speed }) {
  const mesh = createRef();
  const spin = () => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x = mesh.current.rotation.y;
  };
  useFrame(spin);

  return (
    <mesh castShadow ref={mesh} position={position}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </mesh>
  );
}
Box.propTypes = {
  position: arrayOf(oneOfType([number])).isRequired,
  args: arrayOf(oneOfType([number])),
  color: string.isRequired,
  speed: number.isRequired,
};
Box.defaultProps = {
  args: [1, 1, 1],
};

export const use3DStore = () => {
  return {
    Boxes,
    Lights,
    Floor,
    OrbitControls,
    Suspense,
    Canvas,
    styles,
  };
};
