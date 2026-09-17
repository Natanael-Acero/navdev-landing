"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stack = [
  { name: "React / Next.js", category: "Interfaz" },
  { name: "TypeScript", category: "Interfaz" },
  { name: "Angular", category: "Interfaz" },
  { name: "Tailwind CSS", category: "Interfaz" },
  { name: "Node.js / Express", category: "Servidor" },
  { name: "PostgreSQL", category: "Servidor" },
  { name: "MongoDB", category: "Servidor" },
  { name: "SQL Server", category: "Servidor" },
  { name: "React Native", category: "Móvil" },
  { name: "OpenAI / Anthropic", category: "IA" },
  { name: "LangChain", category: "IA" },
  { name: "Stripe", category: "Integraciones" },
  { name: "Vercel", category: "CI/CD" },
  { name: "Azure DevOps", category: "CI/CD" },
  { name: "Railway", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Git / GitHub", category: "Herramientas" },
  { name: "Docker", category: "Infraestructura" },
];

export function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stack"
      className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0">
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Mi
                <br />
                Stack
              </motion.h2>
            </div>
            <motion.p
              className="mt-6 text-xs text-white/25 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Las herramientas con las que construyo productos sólidos.
            </motion.p>
          </div>

          {/* Stack grid */}
          <div ref={ref} className="flex-1">
            <div className="flex flex-wrap gap-3">
              {stack.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="group flex items-center gap-3 border border-white/8 rounded-full px-5 py-2.5 hover:border-white/25 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-white/20 tracking-widest uppercase">
                    {item.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
