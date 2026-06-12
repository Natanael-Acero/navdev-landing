"use client";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/content";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        <a href="#" className="text-xl font-black tracking-tight gradient-text">
          {CONTACT.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-xl gradient-bg px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={16} />
          Cotizar
        </a>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-[#0a0a0f] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-4 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} />
            Solicitar cotización
          </a>
        </div>
      )}
    </header>
  );
}
