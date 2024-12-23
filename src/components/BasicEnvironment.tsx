import { Environment, OrbitControls } from "@react-three/drei";
import { type ReactElement, type ReactNode } from "react";

export interface BasicEnvironmentProps {
  children: ReactNode;
}

export function BasicEnvironment(props: BasicEnvironmentProps): ReactElement {
  return (
    <>
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight decay={2} position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight decay={0} position={[10, 8, -5]} intensity={6} />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
        background
        blur={1}
      />
      <OrbitControls makeDefault />
      {props.children}
    </>
  );
}
