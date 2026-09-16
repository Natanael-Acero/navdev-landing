import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="bg-[#080808] px-6 sm:px-10 lg:px-16 py-32 border-t border-white/7 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Big heading */}
        <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[9vw] text-white uppercase leading-[0.88] mb-12">
          Trabajemos
          <br />
          Juntos©
        </h2>

        {/* CTA button */}
        <a
          href={buildWhatsAppUrl("Hola, quiero platicar sobre mi proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/25 rounded-full px-10 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 mb-20"
        >
          Contactar ahora
        </a>

        {/* Arch / arch-top photo */}
        <div className="mx-auto w-60 sm:w-72 overflow-hidden rounded-t-full border border-white/7">
          <Image
            src="/navdev-profile.jpeg"
            alt="Natanael Acero — Software Engineer"
            width={400}
            height={500}
            className="w-full h-80 sm:h-96 object-cover object-top"
          />
        </div>

        {/* Bio line */}
        <p className="mt-10 text-xs text-white/35 tracking-widest uppercase max-w-md mx-auto leading-relaxed">
          Basado en México — creo herramientas digitales que hacen crecer negocios reales.
        </p>
      </div>
    </section>
  );
}
