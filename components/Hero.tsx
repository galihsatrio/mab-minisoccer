"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
   return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
         {/* Background Image from Unsplash */}
         <div className="absolute inset-0 z-0">
            <motion.div
               initial={{ scale: 1.05 }}
               animate={{ scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="relative h-full w-full"
            >
               <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop"
                  alt="MAB Minisoccer Lapangan"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity lg:opacity-70"
                  priority
               />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

            {/* Animated Glow Blobs */}
            <motion.div
               animate={{
                  opacity: [0.1, 0.2, 0.1]
               }}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
               }}
               className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
            />
         </div>

         <div className="container relative z-10 mx-auto px-6">
            <div className="flex flex-col items-center text-center">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-primary uppercase backdrop-blur-md"
               >
                  Pengalaman Sepak Bola Terbaik
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-8 max-w-4xl font-heading text-6xl font-black tracking-tight text-white md:text-8xl lg:text-9xl leading-[0.9]"
               >
                  KUASAI <br />
                  <span className="text-primary italic">LAPANGAN</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-12 max-w-2xl text-lg text-zinc-400 md:text-2xl font-medium tracking-tight"
               >
                  Rumput sintetis premium <span className="text-white">FIFA Standard</span>, pencahayaan profesional, dan fasilitas terlengkap untuk performa maksimal.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col gap-6 sm:flex-row"
               >
                  <a
                     href="/schedule"
                     className="flex h-16 items-center justify-center rounded-full bg-primary px-12 text-xl font-black uppercase tracking-widest text-white transition-all hover:bg-accent"
                  >
                     Pesan Sekarang
                  </a>
                  <a
                     href="#about"
                     className="flex h-16 items-center justify-center rounded-full border border-white/10 bg-white/5 px-12 text-xl font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
                  >
                     Tentang Kami
                  </a>
               </motion.div>
            </div>
         </div>

         {/* Decorative Sidebar Info */}
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-12 hidden border-l-2 border-primary/50 pl-6 md:block"
         >
            <div className="text-sm font-black text-white tracking-[0.3em] uppercase">BUKA 24/7</div>
            <div className="text-xs font-bold text-zinc-500 uppercase mt-1">Ready Setiap Hari</div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 right-12 hidden border-r-2 border-primary/50 pr-6 text-right md:block"
         >
            <div className="text-sm font-black text-white tracking-[0.3em] uppercase leading-tight">RUMPUT FIFA</div>
            <div className="text-xs font-bold text-zinc-500 uppercase mt-1">Kualitas Premium</div>
         </motion.div>
      </section>
   );
}
