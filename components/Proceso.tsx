import { steps } from "@/lib/content";

export function Proceso() {
  return (
    <section id="proceso" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0">
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]">
              My
              <br />
              Process
            </h2>
          </div>

          {/* Steps */}
          <div className="flex-1 divide-y divide-white/7">
            {steps.map((step) => (
              <div key={step.number} className="py-8 flex gap-8">
                <span className="text-xs text-white/20 font-mono mt-1 shrink-0 w-6">{step.number}</span>
                <div>
                  <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
