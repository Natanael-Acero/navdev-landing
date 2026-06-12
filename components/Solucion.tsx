import { CheckCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const puntos = [
  "Analizo tu negocio y entiendo cómo funciona",
  "Construyo herramientas digitales adaptadas a tu realidad",
  "Sin tecnicismos ni procesos complicados",
  "Resultados medibles desde el primer mes",
];

export function Solucion() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400 mb-5">
            La solución
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Convierto tus ideas y procesos en{" "}
            <span className="gradient-text">herramientas simples, útiles y escalables</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Soy desarrollador full-stack especializado en crear soluciones digitales que{" "}
            <strong className="text-white/80">realmente funcionan para negocios reales</strong>. No
            vendo tecnología por tecnología — vendo resultados.
          </p>
          <ul className="space-y-3 mb-8">
            {puntos.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="text-blue-400 mt-0.5 shrink-0" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppUrl("Hola, me interesa saber cómo puedes ayudar a mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            Hablemos de tu proyecto
          </a>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-white/8 bg-[#15151f] p-8 space-y-5">
            {[
              { label: "Tiempo de respuesta", value: "< 24h" },
              { label: "Proyectos entregados", value: "15+" },
              { label: "Tecnologías dominadas", value: "10+" },
              { label: "Satisfacción del cliente", value: "100%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between border-b border-white/6 pb-5 last:border-0 last:pb-0">
                <span className="text-white/50 text-sm">{item.label}</span>
                <span className="text-xl font-bold gradient-text">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
