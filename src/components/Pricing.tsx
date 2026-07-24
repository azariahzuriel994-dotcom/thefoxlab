import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PricingCard from "@/components/PricingCard";
import { PRICING } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Packages built around scope, not guesswork."
          description="Every project starts with a fixed quote. These tiers are a starting point — most engagements get scoped individually."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 0.1} className="h-full">
              <PricingCard {...tier} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
