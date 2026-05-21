"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";

function EyeModel() {
  const meshRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Mesh>(null);
  const irisRef = useRef<THREE.Mesh>(null);

  // Smooth mouse tracking rotation inside Canvas
  useFrame((state) => {
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetX,
        0.06
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -targetY,
        0.06
      );
    }

    if (lensRef.current) {
      lensRef.current.rotation.z += 0.003;
    }
  });

  return (
    <>
    <group ref={meshRef}>
      {/* Outer Eye Shell (Highly refractive translucent glass) */}
      <mesh ref={lensRef}>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          transmission={0.9}
          roughness={0.05}
          thickness={1.8}
          ior={1.45}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Stylized Upper Eye Curve (Eyelid) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 100, Math.PI]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Stylized Lower Eye Curve (Eyelid) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[2.2, 0.04, 16, 100, Math.PI]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Pupil center */}
      <mesh position={[0, 0, 0.25]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshBasicMaterial color="#070b19" />
      </mesh>

      {/* Inner light lens core */}
      <mesh position={[0, 0, -0.2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#00b4d8"
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner Iris ring - Kept vertical by not adding rotation, and kept inside group so it tracks with the eye */}
      <mesh ref={irisRef} position={[0, 0, 0.35]}>
        <torusGeometry args={[0.9, 0.12, 16, 100]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#06b6d4"
          emissiveIntensity={2.0}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  </>
  );
}

function RetinaParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  // Custom mathematical generator for particles distributed on a sphere radius
  const [positions] = useState(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.2 + Math.random() * 1.0; // Outer network shell radius
      
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function VisionThreeCanvas() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] relative flex items-center justify-center">
      <Suspense
        fallback={
          <div className="absolute text-brand-cyan font-mono text-xs tracking-[0.2em] animate-pulse uppercase">
            Loading Holographic Interface...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[8, 8, 4]} intensity={1.8} color="#ffffff" />
          <pointLight position={[-8, -8, -4]} intensity={1.0} color="#0ea5e9" />
          <pointLight position={[4, -4, 8]} intensity={2.0} color="#22d3ee" />
          <EyeModel />
          <RetinaParticles />
        </Canvas>
      </Suspense>
    </div>
  );
}
