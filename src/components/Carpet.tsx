import {} from "@react-three/drei";
import { type ReactElement, type ReactNode } from "react";
import { Box } from "./Box";

export function Carpet(): ReactElement {
  return (
    <>
      <Box position={[0, 0.155, 0]} form={[3, 0.05, 3]} color={"#474463"} />
      <Box
        castShadow
        position={[0, 0.155, 0]}
        form={[3.1, 0.05, 3]}
        color={"#474463"}
      />
      <Box position={[0, 0.155, 0]} form={[3, 0.05, 3.1]} color={"#474463"} />
    </>
  );
}
