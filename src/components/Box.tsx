import { type ReactElement, type ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  form:
    | [
        width?: number | undefined,
        height?: number | undefined,
        depth?: number | undefined,
        widthSegments?: number | undefined,
        heightSegments?: number | undefined,
        depthSegments?: number | undefined,
      ]
    | undefined;
  color: string;
}

export function Box(props: BoxProps): ReactElement {
  return (
    <mesh castShadow receiveShadow {...props}>
      <boxGeometry args={props.form} />
      <meshToonMaterial color={props.color}></meshToonMaterial>
      {props.children}
    </mesh>
  );
}
