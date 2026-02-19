import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
