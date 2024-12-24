import { type ReactElement, type ReactNode } from "react";
import { Box } from "./Box";

export interface DeskProps {
  children: ReactNode;
}

export function Desk(): ReactElement {
  return (
    <>
      <Box
        castShadow={true}
        position={[1, 0.36, 2.2]}
        form={[0.05, 0.5, 0.05]}
        color="#191929"
      />
      <Box
        castShadow={true}
        position={[-1, 0.36, 2.2]}
        form={[0.05, 0.5, 0.05]}
        color="#191929"
      />

      <Box
        castShadow={true}
        position={[1, 0.36, 2.8]}
        form={[0.05, 0.5, 0.05]}
        color="#191929"
      />

      <Box
        castShadow={true}
        position={[-1, 0.36, 2.8]}
        form={[0.05, 0.5, 0.05]}
        color="#191929"
      />
      <Box
        castShadow
        position={[0, 0.6, 2.5]}
        form={[2.5, 0.05, 0.8]}
        color={"#191929"}
      />
    </>
  );
}
