"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

interface ShapeConfig {
  className: string;
  depth: number; // parallax multiplier — higher moves further per scroll pixel
  floatClass: string;
}

const SHAPES: ShapeConfig[] = [
  {
    className: "left-[6%] top-[14%] h-14 w-14 border border-crimson/30 facet",
    depth: 40,
    floatClass: "animate-float",
  },
  {
    className:
      "right-[10%] top-[8%] h-10 w-10 rotate-45 border border-gold/30",
    depth: -60,
    floatClass: "animate-floatSlow",
  },
  {
    className: "right-[18%] bottom-[16%] h-20 w-20 rounded-full border border-crimson/20",
    depth: 55,
    floatClass: "animate-float",
  },
  {
    className: "left-[14%] bottom-[10%] h-8 w-8 border border-gold/30 facet",
    depth: -35,
    floatClass: "animate-floatSlow",
  },
];

export default function FloatingShapes() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      shapeRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: -SHAPES[i].depth },
          {
            y: SHAPES[i].depth,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          ref={(el) => {
            shapeRefs.current[i] = el;
          }}
          className={`absolute ${shape.className}`}
        >
          <div className={`h-full w-full ${shape.floatClass}`}>
            <div className="h-full w-full bg-gradient-to-br from-white/[0.03] to-transparent" />
          </div>
        </div>
      ))}
    </div>
  );
}
