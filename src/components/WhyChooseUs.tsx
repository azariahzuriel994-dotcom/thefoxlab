import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-16 h-40 w-40 animate-floatSlow opacity-40"
      >
        <div className="h-full w-full rotate-45 border border-gold/30" />
        <div className="absolute inset-4 -rotate-12 border border-crimson/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why TheFoxLabs"
          title="What you actually get, working with us."
          description="Not a sales pitch — the operational details that end up mattering most once a project is underway."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, i) => (
            <RevealOnScroll key={item.title} delay={(i % 2) * 0.1}>
              <div className="facet glass h-full p-8">
                <div className="mb-5 h-1.5 w-1.5 rounded-full bg-gold" />
                <h3 className="font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
