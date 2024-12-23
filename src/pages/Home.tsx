import { Canvas } from "@react-three/fiber";
import { type ReactElement, type ReactNode } from "react";
import { BasicEnvironment } from "../components/BasicEnvironment";
import { House } from "../components/House";

export interface HomeProps {
  children: ReactNode;
}

export function Home(props: HomeProps): ReactElement {
  return (
    <Canvas shadows camera={{ position: [-2.5, 1, 10], fov: 17 }}>
      <BasicEnvironment>
        <House />
      </BasicEnvironment>
    </Canvas>
  );
}
