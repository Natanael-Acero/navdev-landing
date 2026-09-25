"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { portfolio } from "@/lib/content";

function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function HoverPreview({ url, visible }: { url: string; visible: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [url]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none absolute w-72 sm:w-80 aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ zIndex: 50 }}
        >
          {!loaded && !error && (
            <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
              <div className="h-1 bg-white/[0.06] rounded-full w-2/3 animate-pulse" />
              <div className="h-1 bg-white/[0.06] rounded-full w-1/2 animate-pulse" style={{ animationDelay: "0.15s" }} />
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/10 text-xs font-mono uppercase tracking-widest">
                sin preview
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshotUrl(url)}
              alt=""
              onLoad={() => setLoaded(true)}
              onError={() => { setError(true); setLoaded(true); }}
              className={`w-full h-full object-cover object-top transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectRow({
  p,
  index,
  onHover,
  onLeave,
}: {
  p: (typeof portfolio)[number];
  index: number;
  onHover: (url: string) => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-6 sm:gap-10 py-6 sm:py-8 border-b border-white/7 hover:border-white/15 transition-colors duration-300 cursor-none"
        onMouseEnter={() => onHover(p.url)}
        onMouseLeave={onLeave}
        whileHover="hover"
      >
        {/* Index */}
        <span className="text-xs text-white/20 font-mono shrink-0 w-6 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <motion.h3
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-none flex-1 min-w-0"
          variants={{ hover: { x: 8 } }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {p.title}
        </motion.h3>

        {/* Tag — hidden on small screens */}
        <span className="hidden md:block text-xs text-white/25 tracking-[0.2em] uppercase shrink-0 max-w-[200px] text-right leading-snug">
          {p.tag}
        </span>

        {/* Year */}
        <span className="hidden sm:block text-xs text-white/20 font-mono shrink-0">
          {p.year}
        </span>

        {/* Arrow */}
        <motion.span
          className="text-lg text-white/20 group-hover:text-white shrink-0 transition-colors duration-300"
          variants={{ hover: { x: 4, y: -4 } }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          ↗
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export function Portafolio() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredUrl, setHoveredUrl] = useState<string | null>(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 200, damping: 28 });
  const springY = useSpring(rawY, { stiffness: 200, damping: 28 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      rawX.set(e.clientX - rect.left + 20);
      rawY.set(e.clientY - rect.top - 80);
    },
    [rawX, rawY]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="portafolio" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-end justify-between mb-14" ref={headingRef}>
          <motion.h2
            className="font-display text-[14vw] sm:text-[10vw] lg:text-[8vw] text-white uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Trabajo
            <br />
            Destacado
          </motion.h2>

          <motion.p
            className="hidden sm:block text-xs text-white/20 tracking-[0.25em] uppercase mb-2 ml-8 shrink-0"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {portfolio.length} proyectos
          </motion.p>
        </div>

        {/* List */}
        <div ref={containerRef} className="relative">
          {/* Top border */}
          <div className="border-t border-white/7" />

          {portfolio.map((p, i) => (
            <ProjectRow
              key={p.title}
              p={p}
              index={i}
              onHover={(url) => setHoveredUrl(url)}
              onLeave={() => setHoveredUrl(null)}
            />
          ))}

          {/* Floating preview — only on pointer devices */}
          <motion.div
            className="hidden md:block absolute top-0 left-0 pointer-events-none"
            style={{ x: springX, y: springY }}
          >
            <HoverPreview
              url={hoveredUrl ?? ""}
              visible={!!hoveredUrl}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
