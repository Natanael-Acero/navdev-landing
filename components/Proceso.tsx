"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { steps } from "@/lib/content";

export function Proceso() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0 overflow-hidden">
            <motion.h2
              className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              My
              <br />
              Process
            </motion.h2>
          </div>

          {/* Steps */}
          <div ref={ref} className="flex-1 divide-y divide-white/7">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="py-8 flex gap-8"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-xs text-white/20 font-mono mt-1 shrink-0 w-6">{step.number}</span>
                <div>
                  <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
