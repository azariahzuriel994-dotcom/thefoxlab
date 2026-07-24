"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  tag: string;
}

export default function ServiceCard({ title, description, tag }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      data-cursor-hover
      className="group facet relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br from-crimson/10 via-white/[0.04] to-gold/10 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-crimson/60 hover:shadow-[0_18px_44px_rgba(228,40,58,0.18)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "120% 0%", "0% 0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgba(228,40,58,0.26), transparent 34%), radial-gradient(circle at bottom left, rgba(212,175,122,0.24), transparent 38%)",
          backgroundSize: "180% 180%",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] tracking-[0.28em] text-gold/90">
          {tag}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 group-hover:border-crimson/60 group-hover:text-gold">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="relative mt-8">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
    </motion.div>
  );
}
