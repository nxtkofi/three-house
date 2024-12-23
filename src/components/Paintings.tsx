import { type ReactElement } from "react";
import { Box } from "./Box";
import { Edges } from "@react-three/drei";

export function Paintings(): ReactElement {
  return (
    <>
      <Box position={[1.9, 1.1, -2]} form={[0.05, 0.7, 1]} color={"#417045"}>
        <Edges lineWidth={1} color="black" />
      </Box>
      <Box
        position={[1.9, 1.7, -2.25]}
        form={[0.05, 0.2, 0.5]}
        color={"#417045"}
      >
        <Edges lineWidth={1} color="black" />
      </Box>
      <Box
        position={[1.9, 1.7, -1.7]}
        form={[0.05, 0.2, 0.3]}
        color={"#417045"}
      >
        <Edges lineWidth={1} color="black" />
      </Box>
    </>
  );
}
