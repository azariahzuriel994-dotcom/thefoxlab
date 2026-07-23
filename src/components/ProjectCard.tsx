"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Mark = "grid" | "bars" | "ring" | "diamond" | "triangle" | "cube";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  mark: Mark;
}

function MarkVisual({ mark }: { mark: Mark }) {
  switch (mark) {
    case "grid":
      return (
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-sm bg-crimson/40"
              style={{ opacity: 0.3 + ((i * 7) % 5) * 0.12 }}
            />
          ))}
        </div>
      );
    case "bars":
      return (
        <div className="flex h-14 items-end gap-1.5">
          {[40, 75, 55, 88, 60].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-t-sm bg-gradient-to-t from-crimson-deep to-crimson"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      );
    case "ring":
      return <div className="h-16 w-16 rounded-full border-2 border-gold/50" />;
    case "diamond":
      return <div className="h-14 w-14 rotate-45 border-2 border-crimson/50" />;
    case "triangle":
      return (
        <div
          className="h-0 w-0 border-x-[28px] border-b-[48px] border-x-transparent border-b-gold/40"
        />
      );
    case "cube":
      return (
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rotate-12 border-2 border-crimson/40" />
          <div className="absolute inset-0 -rotate-12 border-2 border-gold/40" />
        </div>
      );
  }
}

export default function ProjectCard({ title, category, description, mark }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        data-cursor-hover
        className="facet glass group relative overflow-hidden p-7"
      >
        <div
          style={{ transform: "translateZ(50px)" }}
          className="mb-8 flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.04] to-transparent"
        >
          <MarkVisual mark={mark} />
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <span className="font-mono text-[10.5px] tracking-[0.15em] text-gold/70">
            {category.toUpperCase()}
          </span>
          <h3 className="mt-3 font-display text-lg font-medium">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-crimson/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-crimson/[0.06]" />
      </motion.div>
    </div>
  );
}
