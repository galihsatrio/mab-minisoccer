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
         className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? "bg-black/80 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
            }`}
      >
         <div className="container mx-auto flex items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2">
               <span className="text-2xl font-bold tracking-tighter text-white">
                  MAB<span className="text-primary">SOCCER</span>
               </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
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
                     className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
                  >
                     {item.label}
                  </Link>
               ))}
               <Link
                  href="#booking"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
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
