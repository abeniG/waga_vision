"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";

function EyeModel() {
  const meshRef = useRef<THREE.Group>(null);
  const eyeballRef = useRef<THREE.Group>(null);
  const pupilRef = useRef<THREE.Mesh>(null);

  // Smooth cursor tracking for the entire eyeball
  useFrame((state) => {
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    if (eyeballRef.current) {
      eyeballRef.current.rotation.y = THREE.MathUtils.lerp(
        eyeballRef.current.rotation.y,
        targetX,
        0.06
      );
      eyeballRef.current.rotation.x = THREE.MathUtils.lerp(
        eyeballRef.current.rotation.x,
        -targetY,
        0.06
      );
    }

    // Pupil dilation effect based on mouse position
    if (pupilRef.current) {
      const distance = Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2);
      const targetScale = 1 - distance * 0.3;
      pupilRef.current.scale.x = THREE.MathUtils.lerp(pupilRef.current.scale.x, targetScale, 0.1);
      pupilRef.current.scale.y = THREE.MathUtils.lerp(pupilRef.current.scale.y, targetScale, 0.1);
    }
  });

  return (
    <>
      {/* OUTER EYE STRUCTURES */}

      {/* Sclera (White of the eye) - Outer shell */}
      <mesh scale={[1.2, 0.6, 1]}>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshPhysicalMaterial
          color="#f8f9fa"
          roughness={0.1}
          metalness={0.0}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Blood vessel network on sclera */}
      <mesh scale={[1.21, 0.61, 1.01]}>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshStandardMaterial
          color="#ff6b6b"
          transparent
          opacity={0.05}
          roughness={1}
        />
      </mesh>

      {/* Cornea - Transparent front layer */}
      <mesh scale={[1.15, 0.58, 1.05]} position={[0, 0, 0.1]}>
        <sphereGeometry args={[1.85, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          roughness={0.01}
          thickness={0.5}
          ior={1.376}
          clearcoat={1.0}
          clearcoatRoughness={0.0}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Upper Eyelid - More realistic shape */}
      <mesh position={[0, 0.3, 0.5]} rotation={[-0.2, 0, 0]} scale={[1.25, 0.6, 1.2]}>
        <torusGeometry args={[2.0, 0.3, 32, 100, Math.PI]} />
        <meshStandardMaterial
          color="#2c1810"
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Lower Eyelid */}
      <mesh position={[0, -0.3, 0.5]} rotation={[0.2, 0, Math.PI]} scale={[1.25, 0.45, 1.2]}>
        <torusGeometry args={[2.0, 0.25, 32, 100, Math.PI]} />
        <meshStandardMaterial
          color="#2c1810"
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Eyelid crease - Upper */}
      <mesh position={[0, 0.8, 0.4]} rotation={[-0.15, 0, 0]} scale={[1.22, 0.55, 1.1]}>
        <torusGeometry args={[1.95, 0.05, 16, 100, Math.PI]} />
        <meshStandardMaterial
          color="#1a0f0a"
          roughness={0.8}
        />
      </mesh>

      {/* Eyelashes - Upper */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI;
        const x = Math.cos(angle) * 2.0 * 1.2;
        const y = Math.sin(angle) * 0.6 + 0.4;
        return (
          <mesh key={`lash-upper-${i}`} position={[x, y, 0.4]} rotation={[0, 0, angle - Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.005, 0.3, 8]} />
            <meshStandardMaterial color="#1a0f0a" roughness={0.5} />
          </mesh>
        );
      })}

      {/* EYEBALL GROUP - Rotates with cursor */}
      <group ref={eyeballRef}>

        {/* Iris - Colored part */}
        <mesh position={[0, 0, 0.3]}>
          <circleGeometry args={[0.9, 64]} />
          <meshStandardMaterial
            color="#3b82f6"
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Iris detail ring */}
        <mesh position={[0, 0, 0.31]}>
          <torusGeometry args={[0.85, 0.15, 16, 100]} />
          <meshStandardMaterial
            color="#1e40af"
            roughness={0.1}
            metalness={0.2}
            emissive="#1e3a8a"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Iris texture - Radial lines */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i / 36) * Math.PI * 2;
          return (
            <mesh
              key={`iris-line-${i}`}
              position={[
                Math.cos(angle) * 0.45,
                Math.sin(angle) * 0.45,
                0.32
              ]}
              rotation={[0, 0, angle]}
            >
              <planeGeometry args={[0.4, 0.03]} />
              <meshStandardMaterial
                color="#60a5fa"
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
              />
            </mesh>
          );
        })}

        {/* Pupil - Black center */}
        <mesh ref={pupilRef} position={[0, 0, 0.35]}>
          <circleGeometry args={[0.35, 64]} />
          <meshStandardMaterial
            color="#000000"
            roughness={0.0}
            metalness={0.0}
          />
        </mesh>

        {/* Lens flare highlight */}
        <mesh position={[-0.3, 0.3, 0.38]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.4}
          />
        </mesh>

        <mesh position={[0.2, -0.2, 0.38]}>
          <circleGeometry args={[0.08, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
          />
        </mesh>

      </group>

      {/* Moisture/tear film at bottom */}
      <mesh position={[0, -0.9, 0.2]} rotation={[0.1, 0, 0]} scale={[1.1, 0.1, 0.8]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.01}
          metalness={0.0}
          clearcoat={1.0}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Ambient glow around eye */}
      <mesh position={[0, 0, -0.1]}>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function RetinaParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
      pointsRef.current.rotation.x += 0.0001;
    }
  });

  const [positions] = useState(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.0 + Math.random() * 1.5;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.03}
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
          <div className="absolute text-blue-400 font-mono text-xs tracking-[0.2em] animate-pulse uppercase">
            Loading Realistic Eye...
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[8, 8, 4]} intensity={2.0} color="#ffffff" />
          <directionalLight position={[-5, 5, -2]} intensity={0.8} color="#87ceeb" />
          <pointLight position={[-8, -8, -4]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[4, -4, 8]} intensity={1.5} color="#60a5fa" />
          <spotLight
            position={[5, 5, 10]}
            angle={0.5}
            penumbra={0.5}
            intensity={3}
            color="#ffffff"
            castShadow={false}
          />
          <EyeModel />
          <RetinaParticles />
        </Canvas>
      </Suspense>
    </div>
  );
}