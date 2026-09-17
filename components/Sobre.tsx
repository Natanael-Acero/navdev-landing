"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Sobre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lines = [
    "Ingeniero de software con más de 6 años",
    "construyendo productos web, móviles",
    "e inteligentes. Especializado en",
    "React, Next.js, IA aplicada y",
    "desarrollo guiado por especificación.",
  ];

  return (
    <section
      id="sobre"
      className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0">
            <motion.p
              className="text-xs text-white/25 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Más sobre mí
            </motion.p>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="overflow-hidden mb-12">
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[1.05]"
                    initial={{ y: "100%" }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.div
              className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-white/7"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div>
                <p className="font-display text-4xl text-white mb-1">6+</p>
                <p className="text-xs text-white/35 tracking-widest uppercase">Años de experiencia</p>
              </div>
              <div>
                <p className="font-display text-4xl text-white mb-1">10+</p>
                <p className="text-xs text-white/35 tracking-widest uppercase">Proyectos entregados</p>
              </div>
              <div>
                <p className="font-display text-4xl text-white mb-1">3</p>
                <p className="text-xs text-white/35 tracking-widest uppercase">Países con clientes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
