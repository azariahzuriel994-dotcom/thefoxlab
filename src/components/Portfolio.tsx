import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="A look at the range we build across."
          description="Concept builds representing the kind of work we take on — real case studies get added here as client projects launch. Tilt to explore."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <RevealOnScroll key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
