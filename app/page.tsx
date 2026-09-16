import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portafolio } from "@/components/Portafolio";
import { Servicios } from "@/components/Servicios";
import { Proceso } from "@/components/Proceso";
import { CtaFinal } from "@/components/CtaFinal";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portafolio />
        <Servicios />
        <Proceso />
        <CtaFinal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
