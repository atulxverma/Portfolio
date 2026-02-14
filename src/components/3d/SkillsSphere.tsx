import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "SQL",
  "Prisma",
  "Docker",
  "Git",
  "Postman",
  "TypeScript",
];

function Sphere() {

  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={ref}>

      {skills.map((skill, i) => {

        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 3;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              0,
            ]}
          >
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial color="#a855f7" />
          </mesh>
        );

      })}

    </group>
  );
}

export function SkillsSphere() {
  return (
    <div className="h-[500px] w-full">

      <Canvas>

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Float speed={2}>
          <Sphere />
        </Float>

      </Canvas>

    </div>
  );
}
