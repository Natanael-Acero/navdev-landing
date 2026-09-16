import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "Natanael Acero — Software Engineer Freelance",
  description:
    "Desarrollo landing pages, sistemas web, dashboards, MVPs y automatizaciones con IA para negocios que quieren crecer digitalmente.",
  keywords: ["desarrollo web", "landing page", "sistema web", "automatización", "MVP", "freelance", "México"],
  openGraph: {
    title: "Natanael Acero — Software Engineer Freelance",
    description: "Herramientas digitales a medida para negocios que quieren resultados reales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
