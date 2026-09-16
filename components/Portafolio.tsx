import { portfolio } from "@/lib/content";

export function Portafolio() {
  return (
    <section id="portafolio" className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-28 border-t border-white/7">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-display text-[14vw] sm:text-[10vw] lg:text-[8vw] text-white uppercase leading-[0.9] mb-16">
          Featured
          <br />
          Work
        </h2>

        {/* Grid 2-col */}
        <div className="grid sm:grid-cols-2 gap-4">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="group border border-white/7 rounded-2xl overflow-hidden bg-[#0f0f0f] hover:border-white/18 transition-colors duration-400"
            >
              {/* Visual area */}
              <div className="h-52 sm:h-60 bg-[#141414] flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-[8rem] text-white/4 select-none group-hover:text-white/7 transition-colors duration-400 leading-none">
                  {p.title[0]}
                </span>
              </div>

              {/* Meta row */}
              <div className="px-6 py-5 flex items-center justify-between border-t border-white/7">
                <div>
                  <p className="text-white font-semibold text-base leading-tight">{p.title}</p>
                  <p className="text-white/35 text-xs tracking-widest uppercase mt-1">{p.tag}</p>
                </div>
                <span className="text-white/20 text-sm font-mono">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
