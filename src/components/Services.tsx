import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Nine disciplines. One accountable team."
          description="Bring us one problem or your whole roadmap — every service here is built to work together, not sold in isolation."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.title} delay={(i % 3) * 0.08}>
              <ServiceCard {...service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
