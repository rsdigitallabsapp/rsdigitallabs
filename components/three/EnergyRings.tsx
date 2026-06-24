"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({
  radius,
  tube,
  color,
  speed,
  initialRotation,
  opacity = 0.7,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  initialRotation: [number, number, number];
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={initialRotation}>
      <torusGeometry args={[radius, tube, 8, 180]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

export function EnergyRings() {
  return (
    <group>
      <Ring
        radius={3.4}
        tube={0.018}
        color="#A855F7"
        speed={0.35}
        initialRotation={[0, 0, 0]}
        opacity={0.8}
      />
      <Ring
        radius={4.6}
        tube={0.012}
        color="#22D3EE"
        speed={-0.22}
        initialRotation={[Math.PI / 3, 0, 0]}
        opacity={0.6}
      />
      <Ring
        radius={5.8}
        tube={0.009}
        color="#60A5FA"
        speed={0.18}
        initialRotation={[Math.PI / 6, Math.PI / 4, 0]}
        opacity={0.45}
      />
      <Ring
        radius={7.0}
        tube={0.006}
        color="#818CF8"
        speed={-0.12}
        initialRotation={[Math.PI / 2, Math.PI / 6, 0]}
        opacity={0.3}
      />
    </group>
  );
}
