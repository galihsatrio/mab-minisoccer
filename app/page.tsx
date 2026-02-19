import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* About Section */}
        <section id="about" className="overflow-hidden bg-white py-32 text-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-8 text-4xl font-black uppercase tracking-tight md:text-5xl">
                  TENTANG <span className="text-primary">KAMI</span>
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-zinc-600">
                  MAB Minisoccer berdedikasi untuk memberikan pengalaman sepak bola terbaik bagi pemain dari semua level. Fasilitas kami dilengkapi rumput sintetis premium yang memenuhi standar internasional, menjamin permainan yang aman dan performa tinggi.
                </p>
                <p className="text-lg leading-relaxed text-zinc-600">
                  Baik untuk pertandingan seru bersama teman maupun sesi latihan profesional, lapangan kami dirancang untuk memenuhi kebutuhan Anda dengan lampu sorot bertenaga tinggi dan fasilitas terlengkap.
                </p>
              </div>
              <div className="relative h-[400px] flex-1 overflow-hidden rounded-2xl bg-zinc-100 shadow-2xl lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop"
                  alt="MAB Minisoccer Pitch"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="bg-zinc-50 py-32 text-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-16 text-4xl font-black uppercase tracking-tight md:text-5xl">
              <span className="text-primary">FASILITAS</span> KAMI
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Rumput Premium",
                  desc: "Rumput sintetis berkualitas FIFA untuk kontrol bola lebih baik dan keamanan pemain.",
                  image: "https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  title: "Lampu Profesional",
                  desc: "Lampu sorot profesional untuk visibilitas sempurna saat pertandingan malam.",
                  image: "https://images.unsplash.com/photo-1652190434729-0403b6047aba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  title: "Ruang Ganti",
                  desc: "Area ganti yang bersih dan luas dilengkapi fasilitas shower.",
                  image: "https://images.unsplash.com/photo-1754390754632-ee84c133a3f3?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  title: "Tribun Penonton",
                  desc: "Tribun nyaman untuk penonton menyaksikan pertandingan dengan pandangan terbaik.",
                  image: "https://images.unsplash.com/photo-1574157668827-7f4a211f9b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpYnVuZXxlbnwwfHwwfHx8MA%3D%3D"
                },
              ].map((f, i) => (
                <div key={i} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <span className="text-lg font-bold">{i + 1}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{f.title}</h3>
                    <p className="text-zinc-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-zinc-50 py-32 text-black">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
              <span className="text-primary">HARGA</span> SEWA
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
              {[
                {
                  day: "WEEKDAY",
                  time: "Senin - Jumat (06:00 - 15:00)",
                  price: "350.000",
                  note: "/ Jam",
                  features: ["Rumput Premium FIFA", "Rompi Pertandingan", "Bola Berkualitas", "Lampu Sorot (Opsional)"],
                  accent: "border-zinc-200",
                },
                {
                  day: "WEEKEND / NIGHT",
                  time: "Sabtu, Minggu & Jam Malam",
                  price: "500.000",
                  note: "/ Jam",
                  features: ["Rumput Premium FIFA", "Rompi Pertandingan", "Bola Berkualitas", "Lampu Sorot Full", "Air Mineral"],
                  accent: "border-primary",
                  popular: true,
                },
              ].map((p, i) => (
                <div key={i} className={`relative flex flex-col rounded-3xl border-2 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl md:p-12 ${p.accent}`}>
                  {p.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
                      PALING POPULER
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="mb-2 text-2xl font-black uppercase tracking-tight">{p.day}</h3>
                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{p.time}</p>
                  </div>
                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-500">RP</span>
                    <span className="text-6xl font-black tracking-tighter text-zinc-900">{p.price}</span>
                    <span className="font-bold text-zinc-500">{p.note}</span>
                  </div>
                  <ul className="mb-12 flex-grow space-y-4">
                    {p.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zinc-600">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281234567890"
                    className={`inline-flex h-16 items-center justify-center rounded-2xl text-lg font-black uppercase tracking-widest transition-all ${p.popular ? "bg-primary text-white hover:bg-zinc-900" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                      }`}
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-zinc-500">
              * Harga di atas berlaku untuk sewa lapangan 1 jam. Tanyakan promo sewa 2 jam atau lebih ke admin.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-white py-32 text-black">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
              <span className="text-primary">GALERI</span> LAPANGAN
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" style={{ gridAutoRows: '200px' }}>
              {[
                {
                  src: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=749&auto=format&fit=crop",
                  span: "md:col-span-2 md:row-span-2",
                },
                {
                  src: "https://images.unsplash.com/photo-1571267434388-6a1df2649dce?q=80&w=687&auto=format&fit=crop",
                  span: "",
                },
                {
                  src: "https://images.unsplash.com/photo-1632380148925-ff9f845087f8?q=80&w=1332&auto=format&fit=crop",
                  span: "",
                },
                {
                  src: "https://images.unsplash.com/photo-1716561388086-cbc1e07f9f65?q=80&w=736&auto=format&fit=crop",
                  span: "",
                },
                {
                  src: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=735&auto=format&fit=crop",
                  span: "",
                },
                {
                  src: "https://images.unsplash.com/photo-1540470174401-f25e9eb17c1c?q=80&w=1167&auto=format&fit=crop",
                  span: "md:col-span-2",
                },
                {
                  src: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=976&auto=format&fit=crop",
                  span: "",
                },
                {
                  src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1338&auto=format&fit=crop",
                  span: "",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-200 ${item.span}`}
                >
                  <Image
                    src={item.src}
                    alt={`Galeri lapangan ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="bg-zinc-50 py-32 text-black">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
              <span className="text-primary">LOKASI</span> KAMI
            </h2>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="flex flex-col lg:flex-row">
                {/* Map */}
                <div className="h-[400px] w-full lg:h-[600px] lg:w-3/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.4526543!2d106.7891234!3d-6.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e1b3b3b3b3%3A0x1b1b1b1b1b1b1b1b!2sMAB%20Minisoccer!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col justify-center p-8 lg:w-2/5 lg:p-16">
                  <div className="mb-10">
                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-primary">ALAMAT</h3>
                    <p className="text-xl font-bold leading-relaxed text-zinc-900">
                      Jl. Raya Minisoccer No. 123,<br />
                      Jakarta Selatan, DKI Jakarta 12345
                    </p>
                  </div>

                  <div className="mb-10">
                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-primary">JAM OPERASIONAL</h3>
                    <ul className="space-y-2 text-lg text-zinc-600">
                      <li className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span className="font-bold text-zinc-900">06:00 - 00:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sabtu - Minggu</span>
                        <span className="font-bold text-zinc-900">06:00 - 02:00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-10">
                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-primary">KONTAK</h3>
                    <p className="text-lg text-zinc-600">
                      +62 812 3456 7890<br />
                      info@mabsoccer.com
                    </p>
                  </div>

                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center rounded-2xl bg-black px-8 text-center font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-lg"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Booking CTA */}
        <section id="booking" className="relative overflow-hidden bg-black py-40 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Booking Background"
              fill
              className="object-cover opacity-40 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6 text-center">
            <h2 className="mb-8 text-4xl font-black uppercase tracking-tight md:text-7xl">
              SIAP <span className="text-primary italic">BERMAIN?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-300 md:text-xl">
              Amankan jadwal Anda sekarang dan rasakan pengalaman bermain sepak bola yang belum pernah ada sebelumnya.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=6281234567890"
                className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-12 text-xl font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-accent hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]"
              >
                Pesan via WhatsApp
              </a>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Mulai dari Rp 350.000 / jam
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
