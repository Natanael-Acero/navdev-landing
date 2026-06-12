import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NAVDEV — Software, webs y automatizaciones para tu negocio",
  description:
    "Desarrollo landing pages, sistemas web, dashboards, MVPs y automatizaciones con IA para negocios que quieren crecer digitalmente.",
  keywords: ["desarrollo web", "landing page", "sistema web", "automatización", "MVP", "freelance", "México"],
  openGraph: {
    title: "NAVDEV — Software, webs y automatizaciones para tu negocio",
    description: "Soluciones digitales a medida para digitalizar tu negocio, ahorrar tiempo y captar más clientes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
