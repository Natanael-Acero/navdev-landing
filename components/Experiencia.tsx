"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
  {
    company: "SOCIUS",
    role: "Ingeniero de Software",
    period: "2025 — Presente",
    location: "Remoto",
    description:
      "Operación LATAM de una multinacional de alimentos: migración de la app móvil de ventas en campo, optimización de procesos y seguridad en ventas.",
  },
  {
    company: "Handcloud",
    role: "Desarrollador Full Stack",
    period: "2023 — 2025",
    location: "Remoto",
    description:
      "Plataformas para la operación LATAM de una multinacional de alimentos (5+ países) y sistemas web internos, con liderazgo técnico y mentoría.",
  },
  {
    company: "Vianney Textil Hogar",
    role: "Desarrollador Full Stack",
    period: "2022 — 2023",
    location: "Aguascalientes, México",
    description:
      "Servicio de integración bancaria SFTP a Oracle, apps de auditoría de inventario y flujo de trabajo con Git y GitLab.",
  },
  {
    company: "Irys",
    role: "Desarrollador Frontend",
    period: "2022",
    location: "Remoto",
    description:
      "Librería de componentes React con Storybook y pruebas con Jest y React Testing Library.",
  },
  {
    company: "Universidad Tecnológica de Aguascalientes",
    role: "Desarrollador MEAN Stack",
    period: "2020 — 2022",
    location: "Aguascalientes, México",
    description:
      "Plataforma de transporte, estudios socioeconómicos automatizados y bolsa de trabajo docente.",
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
              Experiencia
            </motion.h2>
          </div>

          {/* Experience list */}
          <div ref={ref} className="flex-1 border-t border-white/7">
            {experience.map((item, i) => (
              <motion.div
                key={item.company}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-7 border-b border-white/7 group"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase group-hover:text-white/65 transition-colors duration-500 break-words">
                      {item.company}
                    </h3>
                    <span className="text-xs text-white/40 tracking-widest uppercase shrink-0">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-xs text-white/25 mt-1">{item.location}</p>
                  <p className="text-sm text-white/40 mt-3 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs text-white/30 font-mono mt-2 sm:mt-0 sm:ml-6 shrink-0">
                  {item.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
