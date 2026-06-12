"use client";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0a0a0f] px-6 sm:px-10 lg:px-16 pt-32 pb-12 overflow-hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between text-xs text-white/30 uppercase tracking-widest">
        <span>Full-Stack Developer</span>
        <span>Aguascalientes · MX</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center py-12">

        {/* Headline */}
        <div className="relative">
          <h1 className="text-[clamp(2.8rem,9vw,8.5rem)] font-black leading-[0.92] tracking-tighter text-white">
            <span className="block">Software</span>
            <span className="block relative">
              {/* Photo bubble embedded in the second line */}
              <span className="gradient-text">que hace</span>
              <span className="inline-block align-middle mx-4 relative" style={{ verticalAlign: "middle" }}>
                <span className="block rounded-2xl overflow-hidden border border-white/10"
                  style={{ width: "clamp(56px, 8vw, 120px)", height: "clamp(56px, 8vw, 120px)", display: "inline-block" }}>
                  <Image
                    src="/navdev-profile.jpeg"
                    alt="Natanael Acero"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </span>
              </span>
              <span className="gradient-text">crecer</span>
            </span>
            <span className="block text-white/20">tu negocio.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <p className="text-white/40 text-base sm:text-lg max-w-sm leading-relaxed">
            Desarrollo webs, sistemas y automatizaciones a medida para negocios que quieren resultados reales.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={buildWhatsAppUrl("Hola, quiero solicitar una cotización para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={15} />
              Solicitar cotización
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white transition-colors group"
            >
              Ver proyectos
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 pt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-white/25 uppercase tracking-widest">
        <div className="flex gap-8">
          <span>15+ proyectos</span>
          <span>3+ años</span>
          <span>100% satisfacción</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Disponible ahora</span>
        </div>
      </div>

    </section>
  );
}
