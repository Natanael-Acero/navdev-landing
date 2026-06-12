import { MessageCircle, Mail } from "lucide-react";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0f] px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-black gradient-text">{CONTACT.brand}</span>
          <p className="mt-1 text-xs text-white/40">Desarrollo de software freelance · México</p>
        </div>

        <div className="flex gap-4">
          <a
            href={buildWhatsAppUrl(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all"
          >
            <Mail size={16} />
            Email
          </a>
        </div>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} {CONTACT.brand}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
