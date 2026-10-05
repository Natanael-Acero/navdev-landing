"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

export function CtaFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax suave: la foto se desplaza más despacio que la página
  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [36, -36]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] border-t border-white/7 lg:min-h-[100dvh] lg:flex lg:items-center"
    >
      {/* Foto: pantalla completa a la izquierda, disuelta hacia el fondo */}
      <motion.div
        className="cta-photo-mask relative h-[68svh] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[66%]"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease }}
      >
        <motion.div className="absolute -inset-y-10 inset-x-0" style={{ y: photoY }}>
          <Image
            src="/navdev-profile.jpeg"
            alt="Natanael Acero, ingeniero de software"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            onLoad={() => setPhotoLoaded(true)}
            className={`origin-[52%_38%] scale-[1.25] object-cover object-[52%_30%] grayscale contrast-[1.08] brightness-[0.8] transition-opacity duration-1000 lg:-translate-x-[15%] lg:scale-[1.55] ${
              photoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </motion.div>

      {/* Texto y botón */}
      <div className="relative z-10 -mt-24 px-6 pb-24 sm:px-10 lg:mt-0 lg:ml-auto lg:w-[52%] lg:px-16 lg:py-32">
        <motion.h2
          className="font-display text-[19vw] sm:text-[15vw] lg:text-[8.5vw] text-white uppercase leading-[0.86] tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          Trabajemos
          <br />
          Juntos©
        </motion.h2>

        <motion.p
          className="mt-8 max-w-sm text-sm text-white/55 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          Desde Aguascalientes, México — creo herramientas digitales que hacen crecer negocios
          reales.
        </motion.p>

        <motion.a
          href={buildWhatsAppUrl("Hola, quiero platicar sobre mi proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300 hover:bg-white/85"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          whileTap={{ scale: 0.97 }}
        >
          Contactar ahora
          <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  );
}
