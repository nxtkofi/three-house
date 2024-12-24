import { Environment, OrbitControls } from "@react-three/drei";
import { type ReactElement, type ReactNode } from "react";
import { Box } from "./Box";

export interface BasicEnvironmentProps {
  children: ReactNode;
}

export function BasicEnvironment(props: BasicEnvironmentProps): ReactElement {
  return (
    <>
      <color attach="background" args={["#000c10"]} />
      <ambientLight position={[5, 5, 0]} />
      <spotLight
        castShadow
        intensity={100}
        decay={1.5}
        position={[5, 5, 0]}
        angle={0.59244}
        penumbra={1.1}
        color="#fcf6ff"
      />
      {/* TODO: remove below box as it's representation of light's placement */}
      <Box position={[5, 5, 0]} color="#ffffff" />
      <OrbitControls makeDefault />
      {props.children}
    </>
  );
}
