import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-6">
            Desarrollo de software freelance · MX
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            Software, webs y automatizaciones que{" "}
            <span className="gradient-text">hacen crecer tu negocio</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Ayudo a negocios, emprendedores y pymes a ahorrar tiempo y vender más con{" "}
            <strong className="text-white/80">herramientas digitales a medida</strong>: desde una
            landing page hasta un sistema completo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href={buildWhatsAppUrl("Hola, quiero solicitar una cotización para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-bg px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white/80 hover:border-violet-500/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Ver servicios
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/40">
            <span>✦ Entrega en tiempo y forma</span>
            <span>✦ Sin intermediarios</span>
            <span>✦ Soporte post-entrega</span>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-2xl scale-110" />
            {/* Gradient border */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-blue-500 to-violet-600 shadow-2xl shadow-blue-900/40">
              <div className="rounded-3xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 bg-[#15151f]">
                <Image
                  src="/navdev-profile.jpeg"
                  alt="Natanael Acero — NAVDEV"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#15151f]/90 backdrop-blur px-4 py-3 shadow-xl">
              <p className="text-xs text-white/50 leading-none mb-1">Desarrollador Full-Stack</p>
              <p className="text-sm font-semibold text-white leading-none">Natanael Acero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
