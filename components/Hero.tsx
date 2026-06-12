import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const stats = [
  { value: "8+", label: "años de experiencia" },
  { value: "15+", label: "proyectos exitosos" },
  { value: "100%", label: "clientes satisfechos" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f] px-6 sm:px-10 lg:px-16 pt-28 pb-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[140px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text ── */}
        <div>
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs text-white/40 tracking-wide">Disponible para proyectos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-5">
            Software y webs que{" "}
            <span className="gradient-text">hacen crecer tu negocio</span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
            Soy Software Engineer con 8 años de experiencia. Creo herramientas digitales a medida — desde landing pages hasta sistemas completos — para negocios que quieren resultados reales.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={buildWhatsAppUrl("Hola, quiero solicitar una cotización para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-900/20"
            >
              <MessageCircle size={16} />
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              Ver servicios
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 border-t border-white/6 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black gradient-text">{s.value}</p>
                <p className="text-xs text-white/35 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="hidden lg:flex justify-end">
          <div className="relative w-80 h-96">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-2xl scale-105" />
            {/* Gradient border */}
            <div className="relative h-full rounded-3xl p-px bg-gradient-to-br from-blue-500/50 to-violet-500/50">
              <div className="h-full rounded-3xl overflow-hidden bg-[#15151f]">
                <Image
                  src="/navdev-profile.jpeg"
                  alt="Natanael Acero — Software Engineer"
                  fill
                  className="object-cover object-top rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
