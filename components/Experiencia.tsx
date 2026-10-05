"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fields = [
  {
    title: "Consumo masivo y distribución",
    description:
      "Plataformas comerciales y apps de ventas en campo para operaciones en más de 5 países de Latinoamérica.",
  },
  {
    title: "Industria y retail",
    description: "Control de inventarios, auditorías y automatización de procesos operativos.",
  },
  {
    title: "Banca y finanzas",
    description: "Integración de transacciones bancarias y validación en tiempo real.",
  },
  {
    title: "Recursos humanos",
    description: "Portales de nómina y herramientas de engagement para colaboradores.",
  },
  {
    title: "Educación y movilidad",
    description: "Gestión de becas y reclutamiento docente, y apps de transporte para pasajeros y conductores.",
  },
  {
    title: "Productos propios",
    description: "SaaS y plataformas que lanzo yo mismo, de la idea a producción.",
  },
];

export function Experiencia() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experiencia"
      className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0">
            <motion.h2
              className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Campos
              <br />
              de Trabajo
            </motion.h2>
          </div>

          <div ref={ref} className="flex-1">
            {/* Summary */}
            <motion.p
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-[65ch] mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Más de 6 años construyendo software de punta a punta: interfaces, bases de datos,
              apps móviles e integraciones. He trabajado en equipos remotos y en proyectos de
              alcance internacional, liderando entregas y acompañando a otros desarrolladores.
            </motion.p>

            {/* Fields */}
            <div className="border-t border-white/7">
              {fields.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-10 py-6 border-b border-white/7 group"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase group-hover:text-white/65 transition-colors duration-500 sm:w-1/2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed sm:w-1/2 sm:max-w-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
