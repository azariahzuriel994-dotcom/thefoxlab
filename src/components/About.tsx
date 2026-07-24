"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import FloatingShapes from "@/components/FloatingShapes";

const SPECS = [
  { label: "Focus", value: "AI, Web & Software" },
  { label: "Team", value: "Senior engineers & designers" },
  { label: "Delivery", value: "Remote, worldwide" },
  { label: "Engagement", value: "Fixed-scope or retainer" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-28 lg:py-36">
      <FloatingShapes />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <span className="eyebrow mb-4 block">Who We Are</span>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              An engineering studio built for businesses that refuse to look
              average online.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              TheFoxLabs was founded on a simple idea: most agencies are
              either good at design or good at engineering, rarely both. We
              built our studio to close that gap — pairing senior developers
              with designers who understand product, so every build looks as
              sharp as it performs.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              We work with founders, operators, and teams who need software
              that actually ships — websites, AI systems, and products built
              to hold up under real usage, not just a demo.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass facet-lg relative overflow-hidden p-8 lg:p-10"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 opacity-80"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at top left, rgba(228,40,58,0.16), transparent 42%), radial-gradient(circle at bottom right, rgba(212,175,122,0.16), transparent 40%)",
                  backgroundSize: "160% 160%",
                }}
              />
              <div className="relative">
                <div className="mb-6 font-mono text-[11px] tracking-[0.25em] text-gold/70">
                  STUDIO SPEC
                </div>
                <div className="space-y-5">
                  {SPECS.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between border-b border-white/[0.06] pb-5 last:border-none last:pb-0"
                    >
                      <span className="font-mono text-xs tracking-wide text-muted">
                        {spec.label}
                      </span>
                      <span className="text-right font-display text-base font-medium">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
