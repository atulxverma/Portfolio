import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export function ParticlesBg() {

  const [init, setInit] = useState(false);

  useEffect(() => {

    loadSlim(window.tsParticles);

    setInit(true);

  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        fullScreen: false,
        particles: {
          number: { value: 60 },
          color: { value: "#a855f7" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 0.4 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
