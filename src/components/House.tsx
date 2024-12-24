import { type ReactElement, type ReactNode } from "react";
import { Box } from "./Box";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { Carpet } from "./Carpet";
import { Paintings } from "./Paintings";
import { Desk } from "./Desk";

export function House(): ReactElement {
  return (
    <group position={[0, 0, 0]}>
      <Box
        receiveShadow
        position={[0, 0.1, 0]}
        form={[4, 0.1, 6]}
        color={"#422f2d"}
      />
      <Box
        receiveShadow
        position={[0, 1, 3]}
        form={[4, 1.9, 0.1]}
        color={"#422f2d"}
      />
      <Box
        receiveShadow
        position={[2, 1, 0]}
        form={[0.1, 1.9, 6]}
        color={"#422f2d"}
      />
      <Carpet />
      <Paintings />
      <Desk />
      {/* <AccumulativeShadows */}
      {/*   frames={80} */}
      {/*   color="black" */}
      {/*   opacity={1} */}
      {/*   scale={12} */}
      {/*   position={[0, 0.04, 0]} */}
      {/* > */}
      {/*   <RandomizedLight */}
      {/*     amount={8} */}
      {/*     radius={5} */}
      {/*     ambient={0.5} */}
      {/*     position={[5, 6, -10]} */}
      {/*     bias={0.001} */}
      {/*   /> */}
      {/* </AccumulativeShadows> */}
    </group>
  );
}
