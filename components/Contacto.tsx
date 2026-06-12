"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/content";

const budgets = [
  "Menos de $5,000 MXN",
  "$5,000 – $15,000 MXN",
  "$15,000 – $40,000 MXN",
  "Más de $40,000 MXN",
  "No lo sé aún",
];

export function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    necesidad: "",
    presupuesto: "",
    contacto: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Hola, me llamo *${form.nombre}*` +
      (form.empresa ? ` de *${form.empresa}*` : "") +
      `.\n\n*¿Qué necesito?* ${form.necesidad}` +
      (form.presupuesto ? `\n*Presupuesto:* ${form.presupuesto}` : "") +
      (form.contacto ? `\n*Mi contacto:* ${form.contacto}` : "");
    window.open(buildWhatsAppUrl(msg), "_blank");
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#1a1a28] px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 transition-colors";

  return (
    <Section
      id="contacto"
      dark
      title="Cuéntame de tu proyecto"
      subtitle="Llena el formulario y te abro un chat de WhatsApp con tu información lista. Sin rodeos."
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">Nombre *</label>
              <input
                required
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">Empresa o proyecto</label>
              <input
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Nombre de tu negocio"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/50 mb-1.5 ml-1">¿Qué necesitas? *</label>
            <textarea
              required
              name="necesidad"
              value={form.necesidad}
              onChange={handleChange}
              rows={4}
              placeholder="Ej: Quiero una landing page para mi servicio de limpieza con formulario de contacto y WhatsApp..."
              className={inputClass + " resize-none"}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">Presupuesto aproximado</label>
              <select name="presupuesto" value={form.presupuesto} onChange={handleChange} className={inputClass}>
                <option value="">Selecciona un rango</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">WhatsApp o email</label>
              <input
                name="contacto"
                value={form.contacto}
                onChange={handleChange}
                placeholder="Tu número o correo"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-6 py-4 text-base font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-900/30"
          >
            <Send size={18} />
            Enviar por WhatsApp
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">
          También puedes escribirme directamente a{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-blue-400 hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
