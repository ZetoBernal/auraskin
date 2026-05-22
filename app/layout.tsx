import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Auraskin | Cuidado Inteligente de Tu Piel",
  description: "Recibe en tu puerta una fórmula de ingredientes dermatológicos de alta gama adaptada a las necesidades únicas de tu piel. También incluye opciones de cuidado capilar.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900 selection:bg-brand-teal/20 selection:text-brand-dark-teal">
        {children}
      </body>
    </html>
  );
}
