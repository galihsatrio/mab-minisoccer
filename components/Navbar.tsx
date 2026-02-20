"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={`fixed top-0 z-[60] w-full ${isScrolled
            ? "bg-black/90 backdrop-blur-xl py-4 shadow-lg border-b border-white/5"
            : "bg-transparent py-8"
            }`}
      >
         <div className="container mx-auto flex items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2">
               <span className="font-brand text-3xl font-black tracking-tighter text-white uppercase">
                  GO<span className="text-primary italic">SOCCER</span>
               </span>
            </Link>

            <div className="hidden items-center gap-10 md:flex">
               {[
                  { label: "Tentang", href: "/#about" },
                  { label: "Fasilitas", href: "/#facilities" },
                  { label: "Harga", href: "/#pricing" },
                  { label: "Jadwal", href: "/schedule" },
                  { label: "Galeri", href: "/#gallery" },
                  { label: "Lokasi", href: "/#location" },
               ].map((item) => (
                  <Link
                     key={item.label}
                     href={item.href}
                     className="text-xs font-black uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-primary"
                  >
                     {item.label}
                  </Link>
               ))}
               <Link
                  href="/schedule"
                  className="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-accent"
               >
                  Pesan Sekarang
               </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="flex flex-col gap-1.5 md:hidden">
               <div className="h-0.5 w-6 bg-white"></div>
               <div className="h-0.5 w-6 bg-white"></div>
               <div className="h-0.5 w-6 bg-white"></div>
            </button>
         </div>
      </nav>
   );
}
