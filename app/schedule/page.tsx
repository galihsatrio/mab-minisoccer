"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function SchedulePage() {
   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

   // Dummy booking data
   const timeSlots = [
      { time: "06:00", status: "booked" },
      { time: "07:00", status: "booked" },
      { time: "08:00", status: "available" },
      { time: "09:00", status: "available" },
      { time: "10:00", status: "available" },
      { time: "11:00", status: "available" },
      { time: "12:00", status: "available" },
      { time: "13:00", status: "booked" },
      { time: "14:00", status: "booked" },
      { time: "15:00", status: "available" },
      { time: "16:00", status: "available" },
      { time: "17:00", status: "available" },
      { time: "18:00", status: "booked" },
      { time: "19:00", status: "booked" },
      { time: "20:00", status: "booked" },
      { time: "21:00", status: "booked" },
      { time: "22:00", status: "available" },
      { time: "23:00", status: "available" },
      { time: "00:00", status: "available" },
      { time: "01:00", status: "available" },
   ];

   return (
      <div className="flex min-h-screen flex-col bg-black">
         <Navbar />

         <main className="flex-grow pt-32 pb-20">
            <div className="container mx-auto px-6">
               <div className="mb-12 text-center">
                  <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
                     JADWAL <span className="text-primary italic">BOOKING</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                     Pilih tanggal untuk melihat ketersediaan lapangan kami. Klik jam yang tersedia untuk langsung pesan via WhatsApp.
                  </p>
               </div>

               <div className="mx-auto max-w-4xl">
                  {/* Date Selector Placeholder */}
                  <div className="mb-10 flex flex-wrap justify-center gap-3">
                     {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
                        const date = new Date();
                        date.setDate(date.getDate() + offset);
                        const dateStr = date.toISOString().split("T")[0];
                        const isSelected = dateStr === selectedDate;

                        return (
                           <button
                              key={dateStr}
                              onClick={() => setSelectedDate(dateStr)}
                              className={`flex h-24 w-20 flex-col items-center justify-center rounded-2xl border-2 transition-all ${isSelected
                                    ? "border-primary bg-primary text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                    : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white"
                                 }`}
                           >
                              <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                                 {date.toLocaleDateString("id-ID", { weekday: "short" })}
                              </span>
                              <span className="text-2xl font-black">{date.getDate()}</span>
                           </button>
                        );
                     })}
                  </div>

                  {/* Legend */}
                  <div className="mb-8 flex justify-center gap-6">
                     <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">Tersedia</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-zinc-800 border border-zinc-700"></div>
                        <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Sudah di-Booking</span>
                     </div>
                  </div>

                  {/* Slots Grid */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
                     {timeSlots.map((slot, i) => {
                        const isBooked = slot.status === "booked";
                        return (
                           <a
                              key={i}
                              href={isBooked ? undefined : `https://api.whatsapp.com/send?phone=6281234567890&text=Halo Admin, saya ingin pesan jadwal pada tanggal ${selectedDate} jam ${slot.time}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`
                      relative flex h-20 items-center justify-center rounded-2xl border transition-all
                      ${isBooked
                                    ? "cursor-not-allowed border-zinc-800 bg-zinc-900/50 text-zinc-600 grayscale"
                                    : "border-zinc-800 bg-zinc-900 text-white hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"}
                    `}
                           >
                              <span className="text-xl font-black tracking-tighter">{slot.time}</span>
                              {isBooked && (
                                 <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Booked</span>
                                 </div>
                              )}
                           </a>
                        );
                     })}
                  </div>

                  <p className="mt-12 text-center text-sm text-zinc-600 italic">
                     * Jadwal diperbarui secara real-time. Untuk booking rutin atau turnamen, silakan hubungi admin secara langsung.
                  </p>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
}
