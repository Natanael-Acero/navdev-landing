import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/content";

export function Servicios() {
  return (
    <Section
      id="servicios"
      dark
      title="¿Qué puedo hacer por tu negocio?"
      subtitle="Desde una página de ventas hasta un sistema completo — construyo lo que tu negocio necesita."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} variant="service" />
        ))}
      </div>
    </Section>
  );
}
