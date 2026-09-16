import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/7 px-6 sm:px-10 lg:px-16 py-14">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <p className="text-xs text-white/30 tracking-widest uppercase max-w-xs leading-relaxed">
          Basado en México — software engineer & freelance developer
        </p>

        <div className="flex gap-10">
          <a
            href={buildWhatsAppUrl(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/35 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200"
          >
            WhatsApp ↗
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-xs text-white/35 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200"
          >
            Email ↗
          </a>
        </div>

        <p className="text-xs text-white/15 tracking-wider">
          © {new Date().getFullYear()} {CONTACT.brand}
        </p>
      </div>
    </footer>
  );
}
