"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/lib/content";

function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function ProjectCard({ p, index }: { p: (typeof portfolio)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid sm:grid-cols-[1fr_auto] border border-white/7 rounded-2xl overflow-hidden bg-[#0f0f0f] hover:border-white/18 transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Screenshot */}
      <div className="relative h-56 sm:h-72 overflow-hidden bg-[#141414]">
        <Image
          src={screenshotUrl(p.url)}
          alt={p.title}
          fill
          className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
      </div>

      {/* Info panel */}
      <div className="sm:w-64 lg:w-80 p-8 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-white/7">
        <div>
          <p className="text-white/25 text-xs tracking-widest uppercase mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-4xl sm:text-5xl text-white uppercase leading-none mb-4">
            {p.title}
          </h3>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-6">{p.tag}</p>
          <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/20 text-xs font-mono">{p.year}</span>
            <motion.span
              className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors duration-200"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ver proyecto ↗
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Portafolio() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="portafolio" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="overflow-hidden mb-16">
          <motion.h2
            className="font-display text-[14vw] sm:text-[10vw] lg:text-[8vw] text-white uppercase leading-[0.9]"
            initial={{ y: "100%" }}
            animate={headingInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Featured
            <br />
            Work
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {portfolio.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
