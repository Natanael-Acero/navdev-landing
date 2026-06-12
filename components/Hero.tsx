"use client";
import Image from "next/image";
import { MessageCircle, ArrowRight, MapPin, Zap } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const techs = ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind", "Python", "WhatsApp API"];

const stats = [
  { value: "15+", label: "proyectos entregados" },
  { value: "3+", label: "años de experiencia" },
  { value: "100%", label: "clientes satisfechos" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f] px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 grid-rows-auto gap-3">

          {/* ── Card 1: Main headline (large) ── */}
          <div className="col-span-2 lg:col-span-7 rounded-3xl border border-white/8 bg-[#15151f] p-8 lg:p-10 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-xs text-white/40 tracking-wide uppercase">Disponible para proyectos</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Convierto ideas de negocio en{" "}
                <span className="gradient-text">software que funciona</span>
              </h1>
              <p className="text-white/50 text-base lg:text-lg max-w-lg">
                Desarrollo a medida para negocios que quieren crecer, automatizar y vender más en línea.
              </p>
            </div>
          </div>

          {/* ── Card 2: Photo ── */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden relative min-h-[280px] lg:min-h-0 lg:row-span-2">
            <Image
              src="/navdev-profile.jpeg"
              alt="Natanael Acero"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
              <p className="text-white font-semibold text-sm">Natanael Acero</p>
              <p className="text-white/50 text-xs">Full-Stack Developer</p>
            </div>
          </div>

          {/* ── Card 3: Location + CTA primary ── */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 rounded-3xl border border-white/8 bg-[#15151f] p-6 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} className="text-violet-400 shrink-0" />
              <span>Aguascalientes, MX</span>
            </div>
            <a
              href={buildWhatsAppUrl("Hola, quiero solicitar una cotización para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl gradient-bg px-4 py-3 text-sm font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={15} />
              Solicitar cotización
            </a>
          </div>

          {/* ── Card 4: Stats row ── */}
          {stats.map((s) => (
            <div
              key={s.label}
              className="col-span-1 lg:col-span-2 rounded-3xl border border-white/8 bg-[#15151f] p-5 flex flex-col justify-center"
            >
              <span className="text-2xl lg:text-3xl font-black gradient-text">{s.value}</span>
              <span className="text-xs text-white/40 mt-1 leading-tight">{s.label}</span>
            </div>
          ))}

          {/* ── Card 5: Tech stack ── */}
          <div className="col-span-2 lg:col-span-5 rounded-3xl border border-white/8 bg-[#15151f] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={14} className="text-blue-400" />
              <span className="text-xs text-white/40 uppercase tracking-wide">Stack tecnológico</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-white/60 hover:border-violet-500/40 hover:text-white/90 transition-all cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Card 6: Secondary CTA ── */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 rounded-3xl border border-white/8 bg-[#15151f] p-6 flex flex-col justify-between">
            <p className="text-sm text-white/50 leading-snug">
              Mira lo que he construido para otros negocios
            </p>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors group"
            >
              Ver portafolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
