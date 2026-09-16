"use client";
import { useState } from "react";
import { services } from "@/lib/content";

export function Servicios() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="servicios" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="lg:w-56 mb-14 lg:mb-0 shrink-0">
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase leading-[0.9]">
              My
              <br />
              Expertise
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex-1 divide-y divide-white/7">
            {services.map((s, i) => (
              <div key={s.title}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-white/25 font-mono shrink-0">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-white/70 transition-colors duration-200 uppercase tracking-wider">
                      {s.title}
                    </span>
                  </div>
                  <span className="text-white/35 text-2xl leading-none ml-6 shrink-0 group-hover:text-white transition-colors duration-200">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="pb-6 pl-[3.25rem] text-sm text-white/45 leading-relaxed max-w-xl">
                    {s.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
