import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


// Animated futuristic sphere
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // smooth floating rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.25;

    // subtle breathing scale animation
    const scale = 2.2 + Math.sin(time) * 0.08;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <Sphere ref={meshRef} args={[1, 128, 128]}>
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          emissive="#9333ea"
          emissiveIntensity={0.6}
        />
      </Sphere>
    </Float>
  );
}



// Floating rings (adds premium look)
function FloatingRing({ position }: { position: [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#9333ea"
        emissiveIntensity={1}
      />
    </mesh>
  );
}



export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>

        {/* Lighting */}
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#ffffff"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={2}
          color="#9333ea"
        />

        <pointLight
          position={[5, -5, 5]}
          intensity={1.5}
          color="#3b82f6"
        />


        {/* Environment lighting */}
        <Environment preset="city" />


        {/* Main animated sphere */}
        <AnimatedSphere />


        {/* Floating rings */}
        <FloatingRing position={[0, 0, -2]} />
        <FloatingRing position={[0, 0, 2]} />


        {/* Stars background */}
        <Stars
          radius={150}
          depth={60}
          count={8000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />


        {/* Mouse interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />

      </Canvas>

    </div>
  );
}
