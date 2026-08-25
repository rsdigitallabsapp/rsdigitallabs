"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function buildGrid(size: number, divisions: number) {
  const half = size / 2;
  const step = size / divisions;
  const positions: number[] = [];
  for (let i = 0; i <= divisions; i++) {
    const p = -half + i * step;
    positions.push(-half, 0, p, half, 0, p);
    positions.push(p, 0, -half, p, 0, half);
  }
  return new Float32Array(positions);
}

export function BlueprintGrid() {
  const ref = useRef<THREE.LineSegments>(null);
  const positions = useMemo(() => buildGrid(40, 26), []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.008;
    }
  });

  return (
    <lineSegments ref={ref} position={[0, -4.6, -3]} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#4C3A8A" transparent opacity={0.12} />
    </lineSegments>
  );
}
