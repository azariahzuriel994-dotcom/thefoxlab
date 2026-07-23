"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  /** normalized -1 to 1, relative to viewport center */
  nx: number;
  ny: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setPosition({ x: e.clientX, y: e.clientY, nx, ny });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
