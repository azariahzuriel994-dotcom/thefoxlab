"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * An abstract, faceted "holographic fox" — not a literal mascot render,
 * but a low-poly geometric construct (icosahedron core + angular ear
 * fins + a slow HUD-style ring) that reads as a schematic / hologram
 * rather than a toy. This is the site's one deliberate signature piece;
 * everything else in the UI stays quiet around it.
 */
export default function HoloFox() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Base auto-rotation, gently perturbed by pointer position for parallax.
    target.current.x = state.pointer.y * 0.25;
    target.current.y = state.pointer.x * 0.35;

    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        target.current.x,
        0.04
      );
      group.current.rotation.y +=
        delta * 0.15 + (target.current.y - group.current.rotation.y) * 0.002;
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Core */}
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#E4283A"
          emissive="#E4283A"
          emissiveIntensity={0.55}
          transparent
          opacity={0.22}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>
      <mesh scale={1.01}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#EBD9B4" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Ear fins */}
      <mesh position={[-0.62, 0.95, -0.1]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.32, 0.95, 4]} />
        <meshStandardMaterial
          color="#7A0F1D"
          emissive="#E4283A"
          emissiveIntensity={0.35}
          transparent
          opacity={0.85}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0.62, 0.95, -0.1]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.32, 0.95, 4]} />
        <meshStandardMaterial
          color="#7A0F1D"
          emissive="#E4283A"
          emissiveIntensity={0.35}
          transparent
          opacity={0.85}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* HUD ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 8, 96]} />
        <meshBasicMaterial color="#D4AF7A" transparent opacity={0.5} />
      </mesh>

      <Sparkles count={140} scale={[5, 4, 4]} size={2.2} speed={0.25} color="#D4AF7A" />
      <Sparkles count={80} scale={[4, 3, 3]} size={1.4} speed={0.4} color="#FF4356" />

      <ambientLight intensity={0.5} color="#EBD9B4" />
      <pointLight position={[3, 2, 4]} intensity={2.2} color="#E4283A" />
      <pointLight position={[-3, -1, -3]} intensity={1.1} color="#D4AF7A" />
    </group>
  );
}
