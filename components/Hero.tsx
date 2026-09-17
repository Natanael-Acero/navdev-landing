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
    <section className="min-h-screen flex flex-col justify-between bg-[#080808] px-6 sm:px-10 lg:px-16 pt-24 pb-10 overflow-hidden">
      <div className="flex-1 flex flex-col justify-end pb-12">
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

        {/* Giant editorial name — each word slides up from below */}
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

      {/* Bottom metadata row */}
      <motion.div
        className="flex items-center justify-between pt-8 border-t border-white/7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase">
          Basado en México, Ags
        </span>
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase text-right">
          Software Engineer · Freelance
        </span>
      </motion.div>
    </section>
  );
}
