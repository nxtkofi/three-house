import { type ReactElement, type ReactNode } from "react";
import { MeshProps } from "@react-three/fiber";

interface BoxProps extends MeshProps {
  children?: ReactNode;
  form?: [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number,
  ];
  color: string;
}
export function Box({
  children,
  form,
  color,
  ...props
}: BoxProps): ReactElement {
  return (
    <mesh {...props}>
      <boxGeometry args={form} />
      <meshToonMaterial color={color}></meshToonMaterial>
      {children}
    </mesh>
  );
}
