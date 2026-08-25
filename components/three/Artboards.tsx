"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENTS = ["#A855F7", "#22D3EE", "#818CF8", "#60A5FA"];
const FINAL_POSITION: [number, number, number] = [-2.6, -1.9, -6];

function useEdges(width: number, height: number) {
  return useMemo(
    () => new THREE.EdgesGeometry(new THREE.PlaneGeometry(width, height)),
    [width, height]
  );
}

function FinalFrame() {
  const groupRef = useRef<THREE.Group>(null);
  const width = 2.1;
  const height = 1.3;
  const edges = useEdges(width, height);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.set(
        FINAL_POSITION[0],
        FINAL_POSITION[1] + Math.sin(t * 0.4) * 0.15,
        FINAL_POSITION[2]
      );
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={FINAL_POSITION}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color="#0b0b18" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#A855F7" transparent opacity={0.6} />
      </lineSegments>
      {/* header bar */}
      <mesh position={[0, height / 2 - 0.1, 0.01]}>
        <planeGeometry args={[width - 0.2, 0.09]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

type SketchConfig = {
  radius: number;
  baseAngle: number;
  speed: number;
  baseY: number;
  size: [number, number];
  color: string;
  offset: number;
};

function SketchFrame({ radius, baseAngle, speed, baseY, size, color, offset }: SketchConfig) {
  const groupRef = useRef<THREE.Group>(null);
  const edges = useEdges(size[0], size[1]);
  const curvePoint = useMemo(() => new THREE.Vector3(), []);

  const connector = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(
      new Array(17).fill(0).map(() => new THREE.Vector3())
    );
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.15 });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    return line;
  }, [color]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const angle = baseAngle + t * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = baseY + Math.sin(t * 0.5 + offset) * 0.4;

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
      groupRef.current.lookAt(FINAL_POSITION[0], FINAL_POSITION[1] + y * 0.3, FINAL_POSITION[2]);
    }

    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...FINAL_POSITION),
      new THREE.Vector3(
        (x + FINAL_POSITION[0]) * 0.45,
        (y + FINAL_POSITION[1]) * 0.5 + 0.9,
        (z + FINAL_POSITION[2]) * 0.45
      ),
      new THREE.Vector3(x, y, z)
    );
    const posAttr = connector.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < 17; i++) {
      curve.getPoint(i / 16, curvePoint);
      posAttr.setXYZ(i, curvePoint.x, curvePoint.y, curvePoint.z);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh>
          <planeGeometry args={size} />
          <meshBasicMaterial color="#08081a" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={color} transparent opacity={0.4} />
        </lineSegments>
        <mesh position={[0, size[1] / 2 - 0.1, 0.01]}>
          <planeGeometry args={[size[0] - 0.22, 0.05]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
        <mesh position={[0, -0.02, 0.01]}>
          <planeGeometry args={[size[0] - 0.4, 0.045]} />
          <meshBasicMaterial color={color} transparent opacity={0.25} />
        </mesh>
      </group>
      <primitive object={connector} />
    </>
  );
}

const sketches: SketchConfig[] = [
  { radius: 5.2, baseAngle: 0, speed: 0.05, baseY: 1.6, size: [1.4, 0.9], color: ACCENTS[1], offset: 0 },
  { radius: 6.0, baseAngle: (Math.PI * 2) / 5, speed: 0.04, baseY: -1.4, size: [1.1, 0.75], color: ACCENTS[2], offset: 1.4 },
  { radius: 5.6, baseAngle: (Math.PI * 4) / 5, speed: -0.045, baseY: 0.6, size: [1.3, 0.85], color: ACCENTS[3], offset: 2.6 },
  { radius: 6.4, baseAngle: (Math.PI * 6) / 5, speed: 0.035, baseY: -0.4, size: [1.0, 0.7], color: ACCENTS[0], offset: 3.5 },
  { radius: 5.8, baseAngle: (Math.PI * 8) / 5, speed: -0.05, baseY: 1.1, size: [1.2, 0.8], color: ACCENTS[1], offset: 4.4 },
];

export function Artboards() {
  return (
    <group>
      <FinalFrame />
      {sketches.map((s, i) => (
        <SketchFrame key={i} {...s} />
      ))}
    </group>
  );
}
