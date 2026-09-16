"use client";
import { useState, useEffect } from "react";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";

export function Navbar() {
  const [time, setTime] = useState("");

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 py-4">
        <span className="text-xs text-white/35 font-mono tracking-widest uppercase select-none">
          Local / {time || "––:––:––"}
        </span>

        <a
          href="#"
          className="text-sm font-black tracking-[0.25em] text-white uppercase hover:text-white/70 transition-colors"
        >
          Natanael
        </a>

        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold tracking-widest uppercase border border-white/25 rounded-full px-5 py-2 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Contactar
        </a>
      </nav>
    </header>
  );
}
