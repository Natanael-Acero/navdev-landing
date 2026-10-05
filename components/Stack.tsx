"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Interfaz",
    items: ["React / Next.js", "TypeScript", "Angular", "Tailwind CSS", "Storybook"],
  },
  {
    label: "Servidor",
    items: ["Node.js / Express", ".NET", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    label: "Móvil & IA",
    items: ["React Native", "Ionic", ".NET MAUI", "OpenAI / Anthropic", "LangChain"],
  },
  {
    label: "Infraestructura",
    items: ["Docker", "Git / GitHub / GitLab", "Stripe", "WordPress / WooCommerce"],
  },
  {
    label: "CI/CD",
    items: ["Vercel", "Azure DevOps", "Railway", "GitHub Actions"],
  },
  {
    label: "Calidad",
    items: ["Jest", "React Testing Library", "TDD"],
  },
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
            <motion.h2
              className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Mi
              <br />
              Stack
            </motion.h2>
            <motion.p
              className="mt-6 text-xs text-white/30 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Las herramientas con las que construyo productos sólidos.
            </motion.p>
          </div>

          {/* Grouped categories */}
          <div ref={ref} className="flex-1 space-y-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + ci * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-[10px] text-white/25 tracking-[0.3em] uppercase mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((name) => (
                    <span
                      key={name}
                      className="text-sm text-white/55 border border-white/10 rounded-full px-4 py-1.5 hover:border-white/25 hover:text-white/90 hover:bg-white/[0.02] transition-all duration-200 cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
