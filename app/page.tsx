import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { Solucion } from "@/components/Solucion";
import { Servicios } from "@/components/Servicios";
import { Beneficios } from "@/components/Beneficios";
import { Proceso } from "@/components/Proceso";
import { Portafolio } from "@/components/Portafolio";
import { CtaFinal } from "@/components/CtaFinal";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Servicios />
        <Beneficios />
        <Proceso />
        <Portafolio />
        <CtaFinal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
