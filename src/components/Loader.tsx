"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        // Give the finished state a beat before it starts leaving.
        gsap.to(panelRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.25,
          onComplete: () => setHidden(true),
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 2.1,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(counter.value)),
    }).fromTo(
      wordmarkRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0
    );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
      aria-hidden="true"
    >
      <div ref={wordmarkRef} className="flex items-center gap-3 opacity-0">
        <span className="h-2 w-2 rounded-full bg-crimson animate-pulseGlow" />
        <span className="font-display text-2xl tracking-tight text-ink">
          the<span className="text-crimson">fox</span>labs
        </span>
      </div>

      <div className="mt-10 h-px w-40 overflow-hidden bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-crimson via-crimson-glow to-gold"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-4 font-mono text-xs tracking-[0.3em] text-muted">
        {String(percent).padStart(3, "0")}%
      </div>
    </div>
  );
}
