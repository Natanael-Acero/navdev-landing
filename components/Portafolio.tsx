import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolio } from "@/lib/content";

export function Portafolio() {
  return (
    <Section
      id="portafolio"
      title="Proyectos que hablan por mí"
      subtitle="Cada proyecto es una solución real para un problema real de negocio."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
