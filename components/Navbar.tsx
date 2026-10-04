"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";

export function Navbar() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/7 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.7)]"
          : "bg-[#080808]/80 backdrop-blur-sm"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 py-4 gap-4">
        {/* Reloj */}
        <span className="hidden sm:block text-xs text-white/30 font-mono tracking-wide uppercase select-none shrink-0 tabular-nums">
          {time || "––:––:––"}
        </span>

        <a
          href="#"
          className="text-sm font-black tracking-[0.22em] text-white uppercase hover:text-white/60 transition-colors duration-200 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          Natanael
        </a>

        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs font-bold tracking-[0.18em] uppercase border border-white/20 rounded-full px-4 sm:px-5 py-2 text-white/80 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shrink-0"
        >
          Contactar
        </a>
      </nav>
    </motion.header>
  );
}
