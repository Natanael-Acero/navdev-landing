"use client";
import { motion } from "framer-motion";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <motion.footer
      className="bg-[#080808] border-t border-white/7 px-6 sm:px-10 lg:px-16 py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <p className="text-xs text-white/30 tracking-widest uppercase max-w-xs leading-relaxed">
          Basado en México — software engineer & freelance developer
        </p>

        <div className="flex gap-10">
          {[
            { label: "WhatsApp ↗", href: buildWhatsAppUrl(defaultMessage), external: true },
            { label: "Email ↗", href: `mailto:${CONTACT.email}`, external: false },
          ].map(({ label, href, external }) => (
            <motion.a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-xs text-white/35 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {label}
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-white/15 tracking-wider">
          © {new Date().getFullYear()} {CONTACT.brand}
        </p>
      </div>
    </motion.footer>
  );
}
