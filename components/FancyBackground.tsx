"use client";
import { useEffect, useState } from "react";

export default function FancyBackground() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speedX: number, speedY: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      />
      
      {/* CSS particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-50 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}