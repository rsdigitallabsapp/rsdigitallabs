"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";
import { Artboards } from "./Artboards";
import { BlueprintGrid } from "./BlueprintGrid";

function CameraController({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();

  useFrame(() => {
    const target = mouseRef.current ?? { x: 0, y: 0 };
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, target.x * 2.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -target.y * 1.5, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  return (
    <>
      <fog attach="fog" args={["#020208", 14, 38]} />
      <CameraController mouseRef={mouseRef} />
      <BlueprintGrid />
      <ParticleField count={900} />
      <Artboards />
      <EffectComposer>
        <Bloom
          intensity={1.3}
          luminanceThreshold={0.12}
          luminanceSmoothing={0.7}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

export function HeroCanvas() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    // Defer the actual WebGL context/shader setup by a couple of paint frames,
    // so it doesn't compete with page hydration for the main thread on slow
    // mobile devices — text must be visible and interactive first, the scene
    // can catch up right after. Double-rAF (not requestIdleCallback, which
    // isn't supported in Safari and can stall indefinitely under load) keeps
    // this bounded and reliable everywhere.
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  if (!ready) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 58 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Scene mouseRef={mouseRef} />
    </Canvas>
  );
}
