"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease } from "@/lib/motion";
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

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
    "w-full border-b border-white/10 bg-transparent px-0 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200";

  const fieldAnim = (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay: 0.3 + i * 0.08, ease },
  });

  return (
    <section id="contacto" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0 overflow-hidden">
            <motion.h2
              className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Hablemos
              <br />
              Hoy
            </motion.h2>
            <motion.p
              className="mt-6 text-xs text-white/35 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Cuéntame de tu proyecto. Te respondo en menos de 24 horas.
            </motion.p>
            <motion.p
              className="mt-4 text-xs text-white/25"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {CONTACT.email}
            </motion.p>
          </div>

          {/* Form */}
          <div ref={ref} className="flex-1 max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div {...fieldAnim(0)}>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                    Nombre *
                  </label>
                  <input
                    required
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </motion.div>
                <motion.div {...fieldAnim(1)}>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                    Empresa
                  </label>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu negocio"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <motion.div {...fieldAnim(2)}>
                <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                  ¿Qué necesitas? *
                </label>
                <textarea
                  required
                  name="necesidad"
                  value={form.necesidad}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe tu proyecto brevemente..."
                  className={inputClass + " resize-none"}
                />
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div {...fieldAnim(3)}>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                    Presupuesto
                  </label>
                  <select
                    name="presupuesto"
                    value={form.presupuesto}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="" className="bg-[#080808]">
                      Selecciona un rango
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-[#080808]">
                        {b}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div {...fieldAnim(4)}>
                  <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                    WhatsApp o email
                  </label>
                  <input
                    name="contacto"
                    value={form.contacto}
                    onChange={handleChange}
                    placeholder="Tu número o correo"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <motion.div {...fieldAnim(5)}>
                <motion.button
                  type="submit"
                  className="border border-white/25 rounded-full px-10 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Enviar por WhatsApp ↗
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
