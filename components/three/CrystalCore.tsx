"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CrystalCore() {
  const outerRef = useRef<THREE.Mesh>(null);
  const midRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const edgesGroupRef = useRef<THREE.Group>(null);

  const outerEdges = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.4, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  const midEdges = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.6, 0);
    return new THREE.EdgesGeometry(geo);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.18;
      outerRef.current.rotation.x = Math.sin(t * 0.07) * 0.3;
    }
    if (midRef.current) {
      midRef.current.rotation.y = -t * 0.25;
      midRef.current.rotation.z = t * 0.12;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = t * 0.4;
      innerRef.current.rotation.x = t * 0.2;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.08;
      glowRef.current.scale.setScalar(scale);
    }
    if (edgesGroupRef.current) {
      edgesGroupRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group>
      {/* Outer icosahedron wireframe */}
      <lineSegments ref={outerRef as React.Ref<THREE.LineSegments>} geometry={outerEdges}>
        <lineBasicMaterial
          color="#818CF8"
          transparent
          opacity={0.5}
        />
      </lineSegments>

      {/* Mid octahedron wireframe */}
      <lineSegments ref={midRef as React.Ref<THREE.LineSegments>} geometry={midEdges}>
        <lineBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.7}
        />
      </lineSegments>

      {/* Inner solid dodecahedron */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshPhysicalMaterial
          color="#A855F7"
          emissive="#7C3AED"
          emissiveIntensity={1.2}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Pulsing glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Core light source */}
      <pointLight color="#A855F7" intensity={8} distance={12} decay={2} />
      <pointLight
        color="#22D3EE"
        intensity={4}
        distance={18}
        position={[6, 3, -4]}
        decay={2}
      />
      <pointLight
        color="#818CF8"
        intensity={3}
        distance={14}
        position={[-4, -3, 6]}
        decay={2}
      />
    </group>
  );
}
