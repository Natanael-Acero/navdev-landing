import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { problems } from "@/lib/content";

export function Problema() {
  return (
    <Section
      id="problema"
      dark
      title="¿Te identificas con alguno de estos problemas?"
      subtitle="La mayoría de los negocios pierden tiempo y dinero por no tener las herramientas digitales correctas."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((p) => (
          <ServiceCard key={p.title} {...p} variant="problem" />
        ))}
      </div>
    </Section>
  );
}
