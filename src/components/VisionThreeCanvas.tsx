"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function RealisticEye() {
  const eyeGroup = useRef<THREE.Group>(null);
  const pupilRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!eyeGroup.current) return;

    const tx = THREE.MathUtils.clamp(state.pointer.x * 0.25, -0.25, 0.25);
    const ty = THREE.MathUtils.clamp(state.pointer.y * 0.18, -0.18, 0.18);

    eyeGroup.current.rotation.y = THREE.MathUtils.lerp(
      eyeGroup.current.rotation.y,
      tx,
      0.05
    );

    eyeGroup.current.rotation.x = THREE.MathUtils.lerp(
      eyeGroup.current.rotation.x,
      -ty,
      0.05
    );

    // subtle living eye motion
    eyeGroup.current.rotation.x +=
      Math.sin(state.clock.elapsedTime * 0.8) * 0.0005;

    // pupil dilation
    if (pupilRef.current) {
      const s =
        0.95 +
        Math.sin(state.clock.elapsedTime * 2.0) * 0.03 +
        Math.abs(state.pointer.x * 0.05);

      pupilRef.current.scale.x = THREE.MathUtils.lerp(
        pupilRef.current.scale.x,
        s,
        0.08
      );

      pupilRef.current.scale.y = THREE.MathUtils.lerp(
        pupilRef.current.scale.y,
        s,
        0.08
      );
    }
  });

  const irisFibers = useMemo(() => {
    return Array.from({ length: 220 }).map((_, i) => {
      const angle = (i / 220) * Math.PI * 2;

      const radius = 0.35 + Math.random() * 0.4;

      return {
        angle,
        radius,
        length: 0.2 + Math.random() * 0.35,
        opacity: 0.15 + Math.random() * 0.4,
        color:
          Math.random() > 0.5
            ? "#7dd3fc"
            : Math.random() > 0.5
              ? "#38bdf8"
              : "#0f766e",
      };
    });
  }, []);

  const lashes = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => {
      const angle = (i / 70) * Math.PI;

      return {
        x: Math.cos(angle) * 2.0,
        y: Math.sin(angle) * 0.55 + 0.45,
        rot: angle - Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        len: 0.18 + Math.random() * 0.22,
        thick: 0.008 + Math.random() * 0.015,
      };
    });
  }, []);

  return (
    <group>

      {/* FACE SKIN */}
      <mesh scale={[4.8, 3.2, 1]}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          color="#c58f72"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* EYE SOCKET SHADOW */}
      <mesh position={[0, 0, -0.2]} scale={[2.5, 1.2, 0.4]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#8b5e4a"
          roughness={1}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* UPPER EYELID */}
      <mesh position={[0, 0.95, 0.3]} scale={[2.25, 0.95, 1]}>
        <sphereGeometry
          args={[1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]}
        />
        <meshStandardMaterial
          color="#bb8164"
          roughness={0.92}
          metalness={0}
        />
      </mesh>

      {/* LOWER EYELID */}
      <mesh
        position={[0, -0.95, 0.3]}
        rotation={[Math.PI, 0, 0]}
        scale={[2.1, 0.65, 1]}
      >
        <sphereGeometry
          args={[1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]}
        />
        <meshStandardMaterial
          color="#c08b70"
          roughness={0.95}
        />
      </mesh>

      {/* EYELASHES */}
      {lashes.map((lash, i) => (
        <mesh
          key={i}
          position={[lash.x, lash.y, 0.78]}
          rotation={[
            Math.random() * 0.25,
            Math.random() * 0.15,
            lash.rot,
          ]}
        >
          <cylinderGeometry args={[lash.thick, 0.001, lash.len, 8]} />
          <meshStandardMaterial color="#120c08" roughness={0.7} />
        </mesh>
      ))}

      {/* EYEBALL */}
      <group ref={eyeGroup}>

        {/* SCLERA */}
        <mesh>
          <sphereGeometry args={[1.35, 128, 128]} />
          <meshPhysicalMaterial
            color="#f1eee8"
            roughness={0.28}
            clearcoat={0.6}
            clearcoatRoughness={0.15}
          />
        </mesh>

        {/* SUBTLE BLOOD VESSEL TINT */}
        <mesh scale={[1.003, 1.003, 1.003]}>
          <sphereGeometry args={[1.35, 128, 128]} />
          <meshStandardMaterial
            color="#ffb3b3"
            transparent
            opacity={0.025}
          />
        </mesh>

        {/* IRIS DEPTH */}
        <mesh position={[0, 0, 1.03]} scale={[1, 1, 0.15]}>
          <sphereGeometry args={[0.72, 128, 128]} />
          <meshStandardMaterial
            color="#5f7c5b"
            roughness={0.35}
            metalness={0.05}
          />
        </mesh>

        {/* LIMBAL RING */}
        <mesh position={[0, 0, 1.02]}>
          <ringGeometry args={[0.69, 0.77, 128]} />
          <meshBasicMaterial
            color="#111111"
            transparent
            opacity={0.65}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* IRIS FIBERS */}
        {irisFibers.map((fiber, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(fiber.angle) * fiber.radius * 0.4,
              Math.sin(fiber.angle) * fiber.radius * 0.4,
              1.04,
            ]}
            rotation={[0, 0, fiber.angle]}
          >
            <planeGeometry args={[fiber.length, 0.012]} />
            <meshBasicMaterial
              color={fiber.color}
              transparent
              opacity={fiber.opacity}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}

        {/* INNER GOLDEN DETAILS */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i / 60) * Math.PI * 2;

          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 0.16,
                Math.sin(angle) * 0.16,
                1.045,
              ]}
              rotation={[0, 0, angle]}
            >
              <planeGeometry args={[0.16, 0.01]} />
              <meshBasicMaterial
                color="#eab308"
                transparent
                opacity={0.5}
              />
            </mesh>
          );
        })}

        {/* PUPIL */}
        <mesh ref={pupilRef} position={[0, 0, 0.97]}>
          <circleGeometry args={[0.19, 128]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* CORNEA */}
        <mesh position={[0, 0, 0.12]} scale={[1.02, 1.02, 1.15]}>
          <sphereGeometry args={[1.36, 128, 128]} />
          <MeshTransmissionMaterial
            transmission={1}
            thickness={0.55}
            roughness={0}
            chromaticAberration={0.015}
            anisotropy={0.1}
            distortion={0.02}
            distortionScale={0.08}
            temporalDistortion={0.02}
            ior={1.4}
            clearcoat={1}
          />
        </mesh>

        {/* REFLECTIONS */}
        <mesh position={[-0.28, 0.28, 1.34]}>
          <circleGeometry args={[0.09, 64]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.95}
          />
        </mesh>

        <mesh position={[0.18, -0.18, 1.34]}>
          <circleGeometry args={[0.045, 64]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.5}
          />
        </mesh>

      </group>

      {/* TEAR LINE */}
      <mesh
        position={[0, -0.72, 0.85]}
        rotation={[0.08, 0, 0]}
        scale={[1.15, 0.07, 0.12]}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          transmission={1}
          roughness={0}
          thickness={1}
          clearcoat={1}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

export default function VisionThreeCanvas() {
  return (
    <div className="w-full h-screen bg-black">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center text-white tracking-[0.3em] uppercase">
            Loading Eye...
          </div>
        }
      >
        <Canvas
          camera={{
            position: [0, 0, 4],
            fov: 28,
          }}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          {/* LIGHTING */}
          <ambientLight intensity={0.3} />

          <directionalLight
            position={[3, 4, 5]}
            intensity={2.8}
            color="#ffffff"
          />

          <directionalLight
            position={[-4, 2, 1]}
            intensity={0.8}
            color="#ffe7d1"
          />

          <spotLight
            position={[0, 6, 8]}
            angle={0.3}
            penumbra={1}
            intensity={2.5}
            color="#ffffff"
          />

          {/* HDRI */}
          <Environment preset="studio" />

          <Float
            speed={1}
            rotationIntensity={0.08}
            floatIntensity={0.08}
          >
            <RealisticEye />
          </Float>
        </Canvas>
      </Suspense>
    </div>
  );
}