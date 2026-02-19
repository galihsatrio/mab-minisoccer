import Image from "next/image";

export default function Hero() {
   return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
         {/* Background Image from Unsplash */}
         <div className="absolute inset-0 z-0">
            <Image
               src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop"
               alt="MAB Minisoccer Lapangan"
               fill
               className="object-cover opacity-60 mix-blend-luminosity lg:opacity-70"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
         </div>

         <div className="container relative z-10 mx-auto px-6">
            <div className="flex flex-col items-center text-center">
               <div className="mb-6 inline-flex animate-fade-in items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase backdrop-blur-md">
                  Pengalaman Sepak Bola Terbaik
               </div>

               <h1 className="mb-8 max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
                  KUASAI <br />
                  <span className="text-primary italic">LAPANGAN</span>
               </h1>

               <p className="mb-10 max-w-2xl text-lg text-zinc-300 md:text-xl">
                  Rumput sintetis premium, pencahayaan profesional, dan fasilitas terbaik untuk pengalaman mini soccer yang tak terlupakan.
               </p>

               <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                     href="#booking"
                     className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 text-lg font-bold text-white transition-all hover:bg-accent"
                  >
                     <span className="relative z-10 transition-transform group-hover:scale-110">Pesan Lapangan</span>
                     <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
                  </a>
                  <a
                     href="#about"
                     className="flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                     Jelajahi Lebih
                  </a>
               </div>
            </div>
         </div>

         {/* Decorative Elements */}
         <div className="absolute bottom-10 left-10 hidden border-l-2 border-primary pl-4 md:block">
            <div className="text-sm font-bold text-white tracking-widest">BUKA 24/7</div>
            <div className="text-xs text-zinc-500 uppercase">Setiap hari</div>
         </div>

         <div className="absolute bottom-10 right-10 hidden border-r-2 border-primary pr-4 text-right md:block">
            <div className="text-sm font-bold text-white tracking-widest">RUMPUT PREMIUM</div>
            <div className="text-xs text-zinc-500 uppercase">Standar FIFA</div>
         </div>
      </section>
   );
}
