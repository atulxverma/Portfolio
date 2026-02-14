import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {

  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {

    const count = 2000;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    }

    return positions;

  }, []);

  useFrame((state, delta) => {

    if (ref.current) {

      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;

    }

  });

  return (

    <Points ref={ref} positions={particles} stride={3}>

      <PointMaterial
        transparent
        color="#a855f7"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />

    </Points>

  );

}

export function ParticlesBg() {

  return (

    <div className="fixed inset-0 z-0 pointer-events-none">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <Particles />

      </Canvas>

    </div>

  );

}
