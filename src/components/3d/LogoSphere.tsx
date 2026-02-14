import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiBootstrap,
  SiCplusplus,
} from "react-icons/si";


// ============================
// ICON LIST
// ============================

const icons = [
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  FaDocker,
  FaGitAlt,
  FaGithub,
  SiPostman,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiBootstrap,
  SiCplusplus,

  // duplicate for density
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  FaDocker,
  FaGitAlt,
  FaGithub,
];



// ============================
// SPHERE COMPONENT
// ============================

function Sphere() {

  const ref = useRef<THREE.Group>(null);

  const radius = 4;

  const velocity = useRef({
    x: 0.003,
    y: 0.005,
  });

  const inertia = useRef({
    x: 0,
    y: 0,
  });

  const isHovered = useRef(false);



  // generate positions
  const positions = useMemo(() => {

    return icons.map((_, i) => {

      const phi =
        Math.acos(-1 + (2 * i) / icons.length);

      const theta =
        Math.sqrt(icons.length * Math.PI) * phi;

      return new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );

    });

  }, []);




  useFrame((state) => {

    if (!ref.current) return;

    // inertia physics
    inertia.current.x += state.mouse.y * 0.0008;
    inertia.current.y += state.mouse.x * 0.0008;

    inertia.current.x *= 0.95;
    inertia.current.y *= 0.95;

    const speed =
      isHovered.current ? 0.3 : 1;

    ref.current.rotation.x +=
      (velocity.current.x + inertia.current.x) * speed;

    ref.current.rotation.y +=
      (velocity.current.y + inertia.current.y) * speed;



    // fade based on depth
    ref.current.children.forEach((child: any) => {

      const worldPos = new THREE.Vector3();

      child.getWorldPosition(worldPos);

      const depth = worldPos.z;

      const opacity =
        (depth + radius) / (radius * 2);

      const finalOpacity =
        Math.max(0.15, Math.min(1, opacity));

      const scale =
        0.6 + finalOpacity * 0.7;


      const element =
        child.children[0]?.element;

      if (element) {

        element.style.opacity =
          finalOpacity.toString();

        element.style.transform =
          `scale(${scale})`;

        element.style.filter =
          `drop-shadow(0 0 ${10 + finalOpacity * 20}px #a855f7)`;

      }

    });

  });




  return (

    <group ref={ref}>

      {icons.map((Icon, i) => (

        <Html key={i} position={positions[i]} center>

          <div
            onMouseEnter={() =>
              isHovered.current = true
            }
            onMouseLeave={() =>
              isHovered.current = false
            }
            style={{
              opacity: 1,
              transition: "all 0.25s linear",
            }}
            className="
              text-purple-400
              text-4xl
              hover:text-purple-300
              hover:scale-125
              cursor-pointer
            "
          >
            <Icon />
          </div>

        </Html>

      ))}

    </group>

  );

}



// ============================
// MAIN EXPORT
// ============================

export function LogoSphere() {

  return (

    <div className="h-[600px] w-full">

      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>

        <ambientLight intensity={1.2} />

        <pointLight
          position={[10, 10, 10]}
          intensity={2}
          color="#a855f7"
        />

        <Sphere />

      </Canvas>

    </div>

  );

}
