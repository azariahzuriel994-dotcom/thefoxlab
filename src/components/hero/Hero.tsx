"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { CONTACT } from "@/lib/data";
import { useMousePosition } from "@/hooks/useMousePosition";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const { nx, ny } = useMousePosition();
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay tuned to pick up right as the loading screen finishes its exit.
    const tl = gsap.timeline({ delay: 2.9 });
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        line1Ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.25"
      )
      .fromTo(
        line2Ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28">
      {/* Ambient glow field behind everything — drifts gently with the cursor */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-crimson/10 blur-[120px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(${nx * 24}px, ${ny * 16}px)` }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(${nx * -20}px, ${ny * -14}px)` }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="order-2 lg:order-1">
          <span
            ref={eyebrowRef}
            className="eyebrow mb-6 inline-block opacity-0"
          >
            AI · WEB · SOFTWARE STUDIO
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span ref={line1Ref} className="block opacity-0">
              Building AI, Web
            </span>
            <span ref={line2Ref} className="block opacity-0 text-gradient-crimson">
              & Software Solutions
            </span>
          </h1>

          <p
            ref={subRef}
            className="mt-7 max-w-md text-lg leading-relaxed text-muted opacity-0"
          >
            TheFoxLabs designs and engineers premium digital products for
            modern businesses — from AI automation to full-stack SaaS.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col gap-3 opacity-0 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              data-cursor-hover
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-3.5 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm font-medium text-ink transition-colors hover:border-gold/40"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-8">
            <div>
              <div className="font-display text-2xl font-semibold text-gold">9+</div>
              <div className="font-mono text-[11px] tracking-wide text-muted">Service Lines</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-gold">24–72h</div>
              <div className="font-mono text-[11px] tracking-wide text-muted">First Response</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-gold">Global</div>
              <div className="font-mono text-[11px] tracking-wide text-muted">Remote Delivery</div>
            </div>
          </div>
        </div>

        <div className="relative order-1 h-[320px] sm:h-[460px] lg:order-2 lg:h-[620px]">
          <HeroScene />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-1.5 w-1 animate-pulseGlow rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
