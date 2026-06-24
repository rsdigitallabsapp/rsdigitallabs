"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const orbData = [
  { position: [6, 3, -5], color: "#A855F7", size: 0.25, speed: 0.6, offset: 0 },
  { position: [-5, -2, -3], color: "#22D3EE", size: 0.18, speed: 0.45, offset: 1.2 },
  { position: [3, -4, 2], color: "#60A5FA", size: 0.22, speed: 0.55, offset: 2.4 },
  { position: [-4, 4, -2], color: "#818CF8", size: 0.15, speed: 0.7, offset: 3.6 },
  { position: [7, -1, 3], color: "#A855F7", size: 0.12, speed: 0.4, offset: 0.8 },
  { position: [-7, 2, 1], color: "#22D3EE", size: 0.1, speed: 0.65, offset: 4.2 },
] as const;

function Orb({
  position,
  color,
  size,
  speed,
  offset,
}: {
  position: readonly [number, number, number];
  color: string;
  size: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.y = baseY + Math.sin(t) * 0.6;
    ref.current.position.x = position[0] + Math.cos(t * 0.7) * 0.3;
  });

  return (
    <mesh ref={ref} position={[...position]}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2.5}
        transparent
        opacity={0.9}
      />
      <pointLight color={color} intensity={2} distance={4} decay={2} />
    </mesh>
  );
}

export function FloatingOrbs() {
  return (
    <group>
      {orbData.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </group>
  );
}
