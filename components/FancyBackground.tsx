"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function FancyBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // await loadFull(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {/* Smooth flowing gradient */}
      <div className="absolute w-full h-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:400%_400%]" />

      {/* Particles layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
                sync: false
              }
            },
            size: {
              value: { min: 2, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 1, // Syncs with gradient animation
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: false }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 }
            }
          }
        }}
        className="absolute w-full h-full"
      />
    </div>
  );
}
