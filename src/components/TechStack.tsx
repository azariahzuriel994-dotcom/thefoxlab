import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  const loop = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="border-y border-white/[0.06] py-14">
      <div className="mb-8 text-center">
        <span className="eyebrow">Built On</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-2xl font-medium text-muted/70 transition-colors hover:text-gold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
