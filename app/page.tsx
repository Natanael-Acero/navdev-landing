import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Lazy load all below-fold sections — reduces initial JS bundle
const Portafolio = dynamic(() =>
  import("@/components/Portafolio").then((m) => ({ default: m.Portafolio }))
);
const Sobre = dynamic(() =>
  import("@/components/Sobre").then((m) => ({ default: m.Sobre }))
);
const Experiencia = dynamic(() =>
  import("@/components/Experiencia").then((m) => ({ default: m.Experiencia }))
);
const Stack = dynamic(() =>
  import("@/components/Stack").then((m) => ({ default: m.Stack }))
);
const Servicios = dynamic(() =>
  import("@/components/Servicios").then((m) => ({ default: m.Servicios }))
);
const Proceso = dynamic(() =>
  import("@/components/Proceso").then((m) => ({ default: m.Proceso }))
);
const CtaFinal = dynamic(() =>
  import("@/components/CtaFinal").then((m) => ({ default: m.CtaFinal }))
);
const Contacto = dynamic(() =>
  import("@/components/Contacto").then((m) => ({ default: m.Contacto }))
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portafolio />
        <Sobre />
        <Experiencia />
        <Stack />
        <Servicios />
        <Proceso />
        <CtaFinal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
