"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
  {
    company: "SOCIUS",
    role: "Ingeniero de Software",
    period: "2025 — Presente",
    location: "Remoto",
  },
  {
    company: "Handcloud",
    role: "Desarrollador Full Stack",
    period: "2023 — 2025",
    location: "Remoto",
  },
  {
    company: "Vianney Textil Hogar",
    role: "Desarrollador Web",
    period: "2022 — 2023",
    location: "Aguascalientes, México",
  },
  {
    company: "Irys",
    role: "Desarrollador Frontend",
    period: "2022",
    location: "Remoto",
  },
  {
    company: "Universidad Tecnológica de Aguascalientes",
    role: "Desarrollador de Software · Estadía",
    period: "2020 — 2022",
    location: "Aguascalientes, México",
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
              className="font-display text-4xl text-white uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Experiencia
            </motion.h2>
          </div>

          {/* Experience list */}
          <div ref={ref} className="flex-1">
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
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase group-hover:text-white/70 transition-colors duration-300 break-words">
                      {item.company}
                    </h3>
                    <span className="text-xs text-white/25 tracking-widest uppercase shrink-0">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-xs text-white/20 mt-1">{item.location}</p>
                </div>
                <span className="text-xs text-white/25 font-mono mt-2 sm:mt-0 sm:ml-6 shrink-0">
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
