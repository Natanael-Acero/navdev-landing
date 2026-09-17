"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: photo moves up as you scroll down
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-32 border-t border-white/7 text-center"
    >
      <div className="max-w-5xl mx-auto">
        {/* Big heading — words slide up */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="font-display text-[14vw] sm:text-[11vw] lg:text-[9vw] text-white uppercase leading-[0.88]"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Trabajemos
          </motion.div>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.div
            className="font-display text-[14vw] sm:text-[11vw] lg:text-[9vw] text-white uppercase leading-[0.88]"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Juntos©
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.a
          href={buildWhatsAppUrl("Hola, quiero platicar sobre mi proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/25 rounded-full px-10 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contactar ahora
        </motion.a>

        {/* Arch photo with parallax */}
        <motion.div
          className="mx-auto w-60 sm:w-72 overflow-hidden rounded-t-full border border-white/7"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ y: photoY }}
        >
          <Image
            src="/navdev-profile.jpeg"
            alt="Natanael Acero — Software Engineer"
            width={400}
            height={500}
            className="w-full h-80 sm:h-96 object-cover object-top"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          className="mt-10 text-xs text-white/35 tracking-widest uppercase max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Basado en México — creo herramientas digitales que hacen crecer negocios reales.
        </motion.p>
      </div>
    </motion.section>
  );
}
