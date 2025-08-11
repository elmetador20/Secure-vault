"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function FancyBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); 
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      
      <div className="absolute w-full h-full animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:400%_400%]"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#fff" },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            size: { value: 3 },
          },
        }}
        className="absolute w-full h-full"
      />
    </div>
  );
}
