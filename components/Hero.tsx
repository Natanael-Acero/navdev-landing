"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section className="h-[100dvh] flex flex-col bg-[#080808] overflow-hidden">
      {/* Flexible spacer at top — shrinks on mobile */}
      <div className="flex-1" style={{ minHeight: "4rem" }} />

      {/* Badge + name anchored to bottom */}
      <div className="px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8">
        <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2.5 mb-6 sm:mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase">
            Disponible para proyectos
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[23vw] sm:text-[18vw] lg:text-[16vw] leading-[0.88] tracking-tight text-white uppercase"
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

      {/* Footer row — always at very bottom */}
      <motion.div
        className="px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 py-4 sm:py-5 border-t border-white/7 shrink-0"
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
