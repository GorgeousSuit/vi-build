'use client'

import { useState } from "react";

const Button = () => {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <a
      href="#"
      className="relative px-10 py-4 rounded shadow-lg text-white text-sm uppercase tracking-wider bg-[#FC6E51] transition-all duration-600 overflow-hidden after:content-[''] after:absolute after:w-0 after:h-0 after:top-[var(--mouse-y)] after:left-[var(--mouse-x)] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white/10 after:rounded-full hover:bg-[#e65b40] active:after:w-[300px] active:after:h-[300px]"
      style={{ "--mouse-x": mousePos.x, "--mouse-y": mousePos.y }}
      onMouseMove={handleMouseMove}
    >
      Button
    </a>
  );
};

export default Button;