import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Syne } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "MAB Minisoccer | Lapangan Futsal Premium",
  description: "Rasakan pengalaman mini soccer terbaik di MAB Minisoccer. Rumput premium, pencahayaan profesional, dan fasilitas terlengkap di Bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${outfit.variable} ${syne.variable} antialiased font-sans`}>
        <div className="bg-noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
