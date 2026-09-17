"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const marqueeItems = [
  "Next.js",
  "★",
  "React Native",
  "★",
  "Inteligencia Artificial",
  "★",
  "TypeScript",
  "★",
  "Spec-Driven Development",
  "★",
  "Node.js",
  "★",
  "Azure DevOps",
  "★",
  "Apps Móviles",
  "★",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#080808] pt-24 pb-0 overflow-hidden">
      <div className="flex-1 flex flex-col justify-end pb-12 px-6 sm:px-10 lg:px-16">
        {/* Status badge */}
        <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Giant editorial name */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[22vw] sm:text-[18vw] lg:text-[16vw] leading-[0.88] tracking-tight text-white uppercase"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Natanael
            <br />
            Acero
          </motion.h1>
        </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        className="border-t border-b border-white/7 py-3 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {repeated.map((item, i) => (
            <span
              key={i}
              className={`text-xs tracking-[0.2em] uppercase shrink-0 ${
                item === "★" ? "text-white/15" : "text-white/25"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom metadata row */}
      <motion.div
        className="px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 py-5 border-t border-white/7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase">
          Desde Aguascalientes, México
        </span>
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase">
          Ingeniero de Software · Freelance
        </span>
      </motion.div>
    </section>
  );
}
