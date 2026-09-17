"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { portfolio } from "@/lib/content";

function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function ProjectCard({ p, index }: { p: (typeof portfolio)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // onLoad doesn't fire for already-cached images — check complete on mount
  useEffect(() => {
    if (imgRef.current?.complete) {
      if (imgRef.current.naturalWidth > 0) setImgLoaded(true);
      else setImgError(true);
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3, 3]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col lg:flex-row border border-white/8 rounded-2xl overflow-hidden bg-[#0d0d0d] hover:border-white/20 transition-colors duration-500 cursor-none"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.008 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Screenshot */}
        <div className="relative lg:flex-1 h-60 sm:h-80 lg:h-auto lg:min-h-72 overflow-hidden bg-[#111]">
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 flex flex-col gap-3 p-6 justify-end">
              <div className="h-1.5 bg-white/[0.04] rounded-full w-2/3 animate-pulse" />
              <div className="h-1.5 bg-white/[0.04] rounded-full w-1/2 animate-pulse" style={{ animationDelay: "0.15s" }} />
              <div className="h-1.5 bg-white/[0.04] rounded-full w-3/4 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
          )}

          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[8vw] lg:text-5xl text-white/[0.06] uppercase tracking-tight">
                {p.title}
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              src={screenshotUrl(p.url)}
              alt={p.title}
              onLoad={() => setImgLoaded(true)}
              onError={() => { setImgError(true); setImgLoaded(true); }}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.06] ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0d0d0d]" />

          {/* Year badge */}
          <motion.div
            className="absolute top-4 left-4 text-xs text-white/30 font-mono border border-white/10 rounded-full px-3 py-1 bg-[#0d0d0d]/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
          >
            {p.year}
          </motion.div>
        </div>

        {/* Info panel */}
        <div className="lg:w-72 xl:w-80 p-8 flex flex-col justify-between shrink-0 border-t lg:border-t-0 lg:border-l border-white/7">
          <div>
            <motion.p
              className="text-white/20 text-xs tracking-[0.3em] uppercase mb-5 font-mono"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
            >
              {String(index + 1).padStart(2, "0")} / {String(portfolio.length).padStart(2, "0")}
            </motion.p>

            <motion.h3
              className="font-display text-5xl xl:text-6xl text-white uppercase leading-none mb-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {p.title}
            </motion.h3>

            <p className="text-white/30 text-xs tracking-widest uppercase mb-6">{p.tag}</p>
            <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, ti) => (
                <motion.span
                  key={t}
                  className="text-xs text-white/25 border border-white/8 rounded-full px-3 py-1 group-hover:border-white/18 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.5 + ti * 0.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-white/15 text-xs font-mono">{p.url.replace("https://", "").replace("www.", "")}</span>
              <motion.span
                className="flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-white/30 group-hover:text-white transition-colors duration-300"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Ver sitio <span className="text-base leading-none">↗</span>
              </motion.span>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function Portafolio() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="portafolio" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-end justify-between mb-16" ref={headingRef}>
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

        <div className="flex flex-col gap-6">
          {portfolio.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
