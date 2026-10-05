"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const chapters = [
  {
    title: "Cimientos full stack",
    period: "2020 — 2022",
    description:
      "Empecé construyendo productos web y móviles de punta a punta: una plataforma de transporte con apps para pasajeros y conductores, estudios socioeconómicos automatizados y una bolsa de trabajo para docentes. Después me especialicé en interfaces React reutilizables, con librería de componentes y pruebas.",
    tech: ["Angular", "Ionic", "Node.js", "MongoDB", "React", "Storybook"],
  },
  {
    title: "Sistemas que mueven operaciones",
    period: "2022 — 2023",
    description:
      "En la industria textil conecté software con procesos críticos: un servicio que lee archivos bancarios por SFTP y los guarda en Oracle para validar transacciones en tiempo real, una app para auditar inventarios y un flujo de trabajo con Git que ordenó al equipo.",
    tech: ["Angular", "Node.js", "Oracle", "Servicios Windows", "GitLab"],
  },
  {
    title: "Plataformas para LATAM",
    period: "2023 — Presente",
    description:
      "Lidero proyectos y acompaño a otros desarrolladores en la operación de una multinacional de alimentos en más de 5 países de Latinoamérica: cotizador regional, modernización de un sistema heredado a PWA con modo offline y migración de la app móvil que usan los vendedores en campo, con mejoras de procesos y de seguridad en ventas.",
    tech: [".NET", "Angular", "React", ".NET MAUI", "SQL Server", "Azure DevOps"],
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
              Mi
              <br />
              Trayectoria
            </motion.h2>
          </div>

          {/* Career chapters */}
          <div ref={ref} className="flex-1">
            <div className="border-t border-white/7">
              {chapters.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-8 py-9 border-b border-white/7 group"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase group-hover:text-white/65 transition-colors duration-500 text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-[65ch]">
                      {item.description}
                    </p>
                    <p className="mt-4 text-[11px] text-white/25 tracking-[0.18em] uppercase">
                      {item.tech.join(" · ")}
                    </p>
                  </div>
                  <span className="text-xs text-white/30 font-mono tabular-nums shrink-0 sm:pt-2">
                    {item.period}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-10 text-sm text-white/35 leading-relaxed max-w-[65ch]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Hoy combino las dos cosas: sigo construyendo para empresas y lanzo mis propios
              productos, como Rentaio y Champions Performance, de la idea a producción.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
