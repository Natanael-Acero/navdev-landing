import { Section } from "@/components/ui/Section";
import { steps } from "@/lib/content";

export function Proceso() {
  return (
    <Section
      id="proceso"
      dark
      title="Así es como trabajo contigo"
      subtitle="Un proceso simple, transparente y sin sorpresas."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent z-10" />
            )}
            <div className="rounded-2xl border border-white/8 bg-[#15151f] p-6 card-glow transition-all duration-300 hover:border-violet-500/30 h-full">
              <span className="text-4xl font-black gradient-text block mb-4">{step.number}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
