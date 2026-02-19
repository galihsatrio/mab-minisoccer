import Link from "next/link";

export default function Footer() {
   return (
      <footer className="border-t border-white/5 bg-black py-20 text-white">
         <div className="container mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
               <div className="flex flex-col gap-6">
                  <Link href="/" className="text-2xl font-bold tracking-tighter">
                     MAB<span className="text-primary">SOCCER</span>
                  </Link>
                  <p className="text-zinc-500">
                     Menyediakan fasilitas sepak bola terbaik untuk para pecinta olahraga. Lapangan profesional, lampu premium, dan komunitas terbaik.
                  </p>
               </div>

               <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Tautan Cepat</h4>
                  <ul className="flex flex-col gap-4 text-zinc-500">
                     {[
                        { label: "Tentang Kami", href: "#about" },
                        { label: "Fasilitas Kami", href: "#facilities" },
                        { label: "Harga", href: "#pricing" },
                        { label: "Galeri", href: "#gallery" },
                     ].map((item) => (
                        <li key={item.label}>
                           <Link href={item.href} className="transition-colors hover:text-primary">
                              {item.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Kontak</h4>
                  <ul className="flex flex-col gap-4 text-zinc-500">
                     <li>info@mabminisoccer.com</li>
                     <li>+62 812 3456 7890</li>
                     <li>Jl. Minisoccer No. 123, Bandung</li>
                  </ul>
               </div>

               <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Ikuti Kami</h4>
                  <div className="flex gap-4">
                     {["IG", "FB", "TW"].map((social) => (
                        <a
                           key={social}
                           href="#"
                           className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-primary hover:text-black"
                        >
                           {social}
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-20 border-t border-white/5 pt-10 text-center text-sm text-zinc-600">
               &copy; {new Date().getFullYear()} MAB Minisoccer. Hak cipta dilindungi.
            </div>
         </div>
      </footer>
   );
}
