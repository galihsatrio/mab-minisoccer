import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GO Minisoccer | Lapangan Futsal Premium",
  description: "Rasakan pengalaman mini soccer terbaik di GO Minisoccer. Rumput premium, pencahayaan profesional, dan fasilitas terlengkap di Bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}>
        <div className="bg-noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
