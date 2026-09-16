export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#080808] px-6 sm:px-10 lg:px-16 pt-24 pb-10">
      <div className="flex-1 flex flex-col justify-end pb-12">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase">
            Disponible para proyectos
          </span>
        </div>

        {/* Giant editorial name */}
        <h1 className="font-display text-[22vw] sm:text-[18vw] lg:text-[16vw] leading-[0.88] tracking-tight text-white uppercase">
          Natanael
          <br />
          Acero
        </h1>
      </div>

      {/* Bottom metadata row */}
      <div className="flex items-center justify-between pt-8 border-t border-white/7">
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase">
          Basado en México, Ags
        </span>
        <span className="text-xs text-white/35 tracking-[0.2em] uppercase text-right">
          Software Engineer · Freelance
        </span>
      </div>
    </section>
  );
}
