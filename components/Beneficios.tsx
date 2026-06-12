import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { benefits } from "@/lib/content";

export function Beneficios() {
  return (
    <Section
      id="beneficios"
      title="Lo que ganas al digitalizar tu negocio"
      subtitle="No es solo tener una página bonita — es transformar la forma en que operas y consigues clientes."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <ServiceCard key={b.title} {...b} variant="benefit" />
        ))}
      </div>
    </Section>
  );
}
