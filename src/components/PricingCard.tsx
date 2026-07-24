"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  highlighted: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`facet relative flex h-full flex-col p-8 ${
        highlighted
          ? "glass-strong border border-crimson/40 shadow-[0_0_60px_-15px_rgba(228,40,58,0.35)]"
          : "glass"
      }`}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-crimson/15 px-3 py-1 font-mono text-[10px] tracking-wide text-crimson">
          MOST POPULAR
        </span>
      )}

      <h3 className="font-display text-xl font-medium">{name}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>

      <div className="mt-6">
        <span className="font-display text-4xl font-semibold">{price}</span>
        <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {period}
        </div>
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink/85">
            <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
            {f}
          </li>
        ))}
      </ul>

      <MagneticButton
        href="#contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-mono text-sm font-medium transition-transform hover:scale-[1.03] ${
          highlighted ? "bg-crimson text-ink" : "border border-white/15 text-ink"
        }`}
      >
        Get Started
      </MagneticButton>
    </motion.div>
  );
}
