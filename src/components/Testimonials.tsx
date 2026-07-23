import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

// Note: these are placeholder quotes to demonstrate layout — swap in real
// client testimonials as projects wrap up rather than shipping these live.
export default function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Client Feedback"
          title="What it's like to work with us."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.1}>
              <div className="facet glass flex h-full flex-col justify-between p-8">
                <div>
                  <Quote className="mb-5 text-crimson/50" size={28} />
                  <p className="text-[15px] leading-relaxed text-ink/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep font-mono text-xs font-semibold">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="font-mono text-[11px] text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
