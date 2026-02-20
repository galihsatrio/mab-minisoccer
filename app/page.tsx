"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* About Section */}
        <section id="about" className="overflow-hidden bg-white py-32 text-black">
          <div className="container mx-auto px-6">
            <motion.div
              {...staggerContainer}
              className="flex flex-col items-center gap-16 lg:flex-row"
            >
              <motion.div {...fadeIn} className="flex-1">
                <h2 className="mb-8 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl text-zinc-900 leading-tight">
                  TENTANG <span className="text-primary italic">KAMI</span>
                </h2>
                <p className="mb-6 text-xl leading-relaxed text-zinc-600 font-medium">
                  GO Minisoccer berdedikasi untuk memberikan pengalaman sepak bola terbaik bagi pemain dari semua level. Fasilitas kami dilengkapi rumput sintetis premium yang memenuhi standar internasional.
                </p>
                <p className="text-lg leading-relaxed text-zinc-500">
                  Baik untuk pertandingan seru bersama teman maupun sesi latihan profesional, lapangan kami dirancang untuk memenuhi kebutuhan Anda dengan lampu sorot bertenaga tinggi dan fasilitas terlengkap.
                </p>
                <div className="mt-10 flex gap-8">
                  <div>
                    <div className="text-4xl font-black text-primary">100+</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Pemain / Hari</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary">24/7</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Jam Operasional</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                {...fadeIn}
                className="relative h-[400px] flex-1 overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-2xl lg:h-[600px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop"
                  alt="MAB Minisoccer Pitch"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="bg-zinc-50 py-32 text-black">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
                <span className="text-primary italic">FASILITAS</span> KAMI
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />
            </motion.div>

            <motion.div
              {...staggerContainer}
              className="grid gap-8 md:grid-cols-4"
            >
              {[
                {
                  title: "Rumput Premium",
                  desc: "Rumput sintetis berkualitas FIFA untuk kontrol bola lebih baik.",
                  image: "https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?q=80&w=687&auto=format&fit=crop"
                },
                {
                  title: "Lampu Profesional",
                  desc: "Lampu sorot profesional untuk visibilitas sempurna malam hari.",
                  image: "https://images.unsplash.com/photo-1652190434729-0403b6047aba?q=80&w=1170&auto=format&fit=crop"
                },
                {
                  title: "Ruang Ganti",
                  desc: "Area ganti yang bersih dan luas dilengkapi fasilitas shower.",
                  image: "https://images.unsplash.com/photo-1754390754632-ee84c133a3f3?q=80&w=664&auto=format&fit=crop"
                },
                {
                  title: "Tribun Penonton",
                  desc: "Tribun nyaman untuk penonton menyaksikan pertandingan.",
                  image: "https://images.unsplash.com/photo-1574157668827-7f4a211f9b11?w=500&auto=format&fit=crop"
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-zinc-200/50 transition-all hover:-translate-y-3"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-black text-white">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-3 font-heading text-xl font-black uppercase tracking-tight">{f.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-zinc-900 py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
                <span className="text-primary italic text-shadow-glow">HARGA</span> SEWA
              </h2>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {[
                {
                  day: "WEEKDAY",
                  time: "Senin - Jumat (06:00 - 15:00)",
                  price: "350.000",
                  note: "/ Jam",
                  features: ["Rumput Premium FIFA", "Rompi Pertandingan", "Bola Berkualitas", "Lampu Sorot"],
                  popular: false,
                },
                {
                  day: "WEEKEND / NIGHT",
                  time: "Sabtu, Minggu & Jam Malam",
                  price: "500.000",
                  note: "/ Jam",
                  features: ["Rumput Premium FIFA", "Rompi Pertandingan", "Bola Berkualitas", "Lampu Sorot Full", "Air Mineral"],
                  popular: true,
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col rounded-[2.5rem] border p-10 backdrop-blur-md transition-all hover:scale-[1.02] ${p.popular
                    ? "border-primary bg-primary/5 shadow-[0_20px_50px_rgba(34,197,94,0.2)]"
                    : "border-white/10 bg-white/5"
                    }`}
                >
                  {p.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg">
                      PALING POPULER
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="mb-2 font-heading text-3xl font-black uppercase tracking-tight">{p.day}</h3>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{p.time}</p>
                  </div>
                  <div className="mb-10 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">RP</span>
                    <span className="text-7xl font-black tracking-tighter text-white">{p.price}</span>
                    <span className="font-bold text-zinc-500">{p.note}</span>
                  </div>
                  <ul className="mb-12 flex-grow space-y-5">
                    {p.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-zinc-300">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-bold tracking-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/schedule"
                    className={`inline-flex h-16 items-center justify-center rounded-2xl text-xl font-black uppercase tracking-widest transition-all ${p.popular ? "bg-primary text-white hover:bg-white hover:text-primary shadow-[0_10px_30px_rgba(34,197,94,0.3)]" : "bg-white/10 text-white hover:bg-white hover:text-black"
                      }`}
                  >
                    Pesan Sekarang
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="mt-16 text-center text-zinc-500 font-medium italic">
              * Harga di atas berlaku untuk sewa lapangan 1 jam. Hubungi admin untuk promo spesial.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-white py-32 text-black overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
                <span className="text-primary italic">GALERI</span> KAMI
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" style={{ gridAutoRows: '220px' }}>
              {[
                { src: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=749&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
                { src: "https://images.unsplash.com/photo-1571267434388-6a1df2649dce?q=80&w=687&auto=format&fit=crop", span: "" },
                { src: "https://images.unsplash.com/photo-1632380148925-ff9f845087f8?q=80&w=1332&auto=format&fit=crop", span: "" },
                { src: "https://images.unsplash.com/photo-1716561388086-cbc1e07f9f65?q=80&w=736&auto=format&fit=crop", span: "" },
                { src: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=735&auto=format&fit=crop", span: "" },
                { src: "https://images.unsplash.com/photo-1540470174401-f25e9eb17c1c?q=80&w=1167&auto=format&fit=crop", span: "md:col-span-2" },
                { src: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=976&auto=format&fit=crop", span: "" },
                { src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1338&auto=format&fit=crop", span: "" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-[2rem] bg-zinc-200 ${item.span}`}
                >
                  <Image
                    src={item.src}
                    alt={`Galeri lapangan ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="h-0.5 w-10 bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="bg-zinc-50 py-32 text-black">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
                <span className="text-primary italic">LOKASI</span> KAMI
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[3rem] bg-white shadow-2xl border border-zinc-100"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="h-[400px] w-full lg:h-[650px] lg:w-3/5 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.4526543!2d106.7891234!3d-6.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e1b3b3b3b3%3A0x1b1b1b1b1b1b1b1b!2sGO%20Minisoccer!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex flex-col justify-center p-10 lg:w-2/5 lg:p-20 bg-zinc-900 text-white">
                  <div className="mb-12">
                    <div className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary">ALAMAT TERORGANISIR</div>
                    <p className="text-2xl font-black leading-tight">
                      Jl. Raya Minisoccer No. 123,<br />
                      Jakarta Selatan, DKI Jakarta 12345
                    </p>
                  </div>

                  <div className="mb-12">
                    <div className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary">OPERASIONAL</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-bold text-zinc-400">Senin - Jumat</span>
                        <span className="font-black text-primary">06:00 - 00:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-zinc-400">Sabtu - Minggu</span>
                        <span className="font-black text-primary">06:00 - 02:00</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-16 items-center justify-center rounded-2xl bg-white px-10 text-center font-black text-black transition-colors hover:bg-primary hover:text-white"
                  >
                    DIREKSI KE LOKASI
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="booking" className="relative overflow-hidden bg-black py-40 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=749&auto=format&fit=crop"
              alt="Booking Background"
              fill
              className="object-cover opacity-30 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
          <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-10 font-heading text-5xl font-black uppercase tracking-tight md:text-8xl">
                SIAP <span className="text-primary italic text-shadow-glow">BERMAIN?</span>
              </h2>
              <p className="mx-auto mb-16 max-w-2xl text-xl text-zinc-400 font-bold tracking-tight">
                Amankan jadwal Anda sekarang dan rasakan pengalaman bermain di lapangan <span className="text-white">Standar Internasional</span>.
              </p>
              <div className="flex flex-col items-center gap-8">
                <a
                  href="/schedule"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-primary px-16 text-2xl font-black uppercase tracking-widest text-white transition-all hover:bg-accent hover:shadow-lg"
                >
                  Pesan Sekarang
                </a>
                <p className="text-sm font-black uppercase tracking-[0.4em] text-zinc-500">
                  MULAI DARI <span className="text-white">RP 350K</span> / JAM
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
