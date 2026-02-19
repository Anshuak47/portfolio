import { useState } from "react";
import Banner from "./Banner";
import Screen from "./Screen";
import { useState, useEffect } from "react";
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative hero flex flex-col min-h-screen items-center overflow-hidden px-5 sm:px-5">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, #0030f0, transparent 40%)`,
        }}
      />

      {/* Glowing Gradient */}
      <div className="absolute top-20 left-4 -z-40 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-link/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 -z-40 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-link/30 rounded-full blur-3xl animate-pulse"></div>
      <Banner />

      <Screen />
    </section>
  );
};

export default Hero;
