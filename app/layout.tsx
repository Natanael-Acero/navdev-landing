import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Natanael Acero — Full Stack Software Engineer",
  description:
    "Ingeniero de software full stack con 6+ años de experiencia. Desarrollo sistemas web, apps móviles, MVPs y automatizaciones con IA para negocios, y disponible para roles remotos.",
  keywords: ["desarrollo web", "landing page", "sistema web", "automatización", "MVP", "freelance", "México"],
  openGraph: {
    title: "Natanael Acero — Full Stack Software Engineer",
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
      <head>
        <link rel="preconnect" href="https://api.microlink.io" />
        <link rel="dns-prefetch" href="https://api.microlink.io" />
      </head>
      <body className="font-sans antialiased md:cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
