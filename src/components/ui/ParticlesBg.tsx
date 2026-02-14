import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export function ParticlesBg() {

  const init = useCallback(async (engine: Engine) => {

    await loadSlim(engine);

  }, []);

  return (

    <Particles
      id="tsparticles"
      init={init}
      options={{

        fullScreen: false,

        background: {
          color: "transparent",
        },

        particles: {

          number: {
            value: 60,
          },

          color: {
            value: "#a855f7",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 0.4,
          },

        },

      }}
      className="absolute inset-0 z-0"

    />

  );

}
