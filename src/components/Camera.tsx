import { useSpring, a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function Camera() {
  const { nodes, materials } = useGLTF("/level-react-draco.glb");
  const [spring, api] = useSpring(
    () => ({ "rotation-x": 0, config: { friction: 40 } }),
    [],
  );
  useEffect(() => {
    let timeout;
    const wander = () => {
      api.start({ "rotation-x": Math.random() });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <a.group position={[0, 0, 4]} rotation={[Math.PI / 2, 0, 0.47]} {...spring}>
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  );
}
