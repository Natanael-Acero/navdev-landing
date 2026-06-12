import { MessageCircle, Calendar } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
          ¿Listo para llevar tu negocio{" "}
          <span className="gradient-text">al siguiente nivel?</span>
        </h2>
        <p className="text-lg text-white/60 mb-10">
          Agenda una llamada gratuita de 30 minutos o mándame un WhatsApp ahora mismo. Sin
          compromisos, sin presiones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buildWhatsAppUrl("Hola, quiero agendar una llamada para hablar de mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Calendar size={18} />
            Agendar llamada gratis
          </a>
          <a
            href={buildWhatsAppUrl("Hola, tengo un proyecto en mente y quiero platicar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white/80 hover:border-violet-500/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
