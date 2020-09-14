import { use3DStore } from "./utils";

export const use3D = () => {
  const {
    styles,
    Boxes,
    Canvas,
    Lights,
    Floor,
    Suspense,
    OrbitControls,
  } = use3DStore();

  return (
    <main className={styles.home}>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <Lights />
        <>
          <Suspense fallback={null}>
            <group>
              <Boxes />
              <Floor />
            </group>
          </Suspense>
        </>
        <OrbitControls />
      </Canvas>
    </main>
  );
};

export default use3D;
