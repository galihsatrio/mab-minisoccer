"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BookingModalProps {
   isOpen: boolean;
   onClose: () => void;
   selectedDate: string;
   selectedTime: string;
}

export default function BookingModal({ isOpen, onClose, selectedDate, selectedTime }: BookingModalProps) {
   const [step, setStep] = useState(1);
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [paymentMethod, setPaymentMethod] = useState<"bank" | "qr" | null>(null);
   const [proofImage, setProofImage] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);

   if (!isOpen) return null;

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setProofImage(reader.result as string);
         };
         reader.readAsDataURL(file);
      }
   };

   const generateWhatsAppLink = () => {
      const message = `Halo Admin MAB Soccer, saya ingin konfirmasi booking:
      
Nama: ${name}
No. HP: ${phone}
Tanggal: ${selectedDate}
Jam: ${selectedTime}
Metode Bayar: ${paymentMethod === "bank" ? "Transfer Bank" : "QRIS / E-Wallet"}
      
Bukti transfer sudah saya lampirkan di website. Mohon dicek. Terima kasih!`;

      return `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(message)}`;
   };

   const nextStep = () => setStep(step + 1);
   const prevStep = () => setStep(step - 1);

   return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
         <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

         <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-primary/20 w-full">
               <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
               ></div>
            </div>

            <div className="p-8 sm:p-12">
               {step === 1 && (
                  <div className="space-y-8">
                     <div>
                        <h2 className="font-heading text-3xl font-black uppercase text-white tracking-tight leading-tight">ISI DATA <span className="text-primary italic">DIRI</span></h2>
                        <p className="mt-2 text-zinc-400">Silakan isi data untuk konfirmasi pesanan Anda.</p>
                     </div>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Nama Lengkap</label>
                           <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                              placeholder="Contoh: Budi Santoso"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Nomor WhatsApp</label>
                           <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                              placeholder="0812xxxx"
                           />
                        </div>
                     </div>
                     <button
                        onClick={nextStep}
                        disabled={!name || !phone}
                        className="w-full rounded-2xl bg-primary py-4 text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        Lanjutkan
                     </button>
                  </div>
               )}

               {step === 2 && (
                  <div className="space-y-8">
                     <div>
                        <h2 className="font-heading text-3xl font-black uppercase text-white tracking-tight leading-tight">PILIH <span className="text-primary italic">PEMBAYARAN</span></h2>
                        <p className="mt-2 text-zinc-400">Pilih metode pembayaran yang tersedia.</p>
                     </div>
                     <div className="grid gap-4">
                        <button
                           onClick={() => { setPaymentMethod("bank"); nextStep(); }}
                           className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/50 hover:bg-white/10 text-left"
                        >
                           <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-black text-white group-hover:bg-primary group-hover:text-white transition-colors">B</div>
                              <div>
                                 <div className="font-bold text-white uppercase tracking-tight">Transfer Bank</div>
                                 <div className="text-sm text-zinc-500">BCA, Mandiri, BRI</div>
                              </div>
                           </div>
                           <div className="h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-primary transition-colors"></div>
                        </button>
                        <button
                           onClick={() => { setPaymentMethod("qr"); nextStep(); }}
                           className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/50 hover:bg-white/10 text-left"
                        >
                           <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-black text-white group-hover:bg-primary group-hover:text-white transition-colors">Q</div>
                              <div>
                                 <div className="font-bold text-white uppercase tracking-tight">QRIS / E-Wallet</div>
                                 <div className="text-sm text-zinc-500">Gopay, OVO, Dana</div>
                              </div>
                           </div>
                           <div className="h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-primary transition-colors"></div>
                        </button>
                     </div>
                     <button onClick={prevStep} className="text-sm font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Kembali</button>
                  </div>
               )}

               {step === 3 && (
                  <div className="space-y-8">
                     <div>
                        <h2 className="font-heading text-3xl font-black uppercase text-white tracking-tight leading-tight">INFO <span className="text-primary italic">PEMBAYARAN</span></h2>
                        <p className="mt-2 text-zinc-400">Silakan lakukan pembayaran ke rekening di bawah ini.</p>
                     </div>

                     <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 text-center">
                        {paymentMethod === "bank" ? (
                           <div className="space-y-4">
                              <div>
                                 <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">Bank BCA</div>
                                 <div className="text-3xl font-black text-white tracking-tighter mt-1">1234567890</div>
                              </div>
                              <div>
                                 <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">Atas Nama</div>
                                 <div className="text-xl font-bold text-white mt-1">MAB Minisoccer Stadium</div>
                              </div>
                           </div>
                        ) : (
                           <div className="space-y-4 flex flex-col items-center">
                              <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-white p-2">
                                 <Image
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MABSoccerBooking"
                                    alt="QRIS Payment"
                                    fill
                                    className="object-contain"
                                 />
                              </div>
                              <div className="text-xs font-black uppercase tracking-[0.2em] text-primary leading-tight">Scan QRIS MAB Soccer</div>
                           </div>
                        )}
                     </div>

                     <div className="space-y-4 text-center">
                        <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Upload Bukti Transfer</div>
                        <input
                           type="file"
                           ref={fileInputRef}
                           onChange={handleImageUpload}
                           className="hidden"
                           accept="image/*"
                        />
                        {!proofImage ? (
                           <button
                              onClick={() => fileInputRef.current?.click()}
                              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/10 bg-white/5 py-8 text-zinc-400 transition-all hover:border-primary/50 hover:bg-white/10"
                           >
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                              </svg>
                              <span className="font-bold uppercase tracking-widest text-xs">Pilih Foto Bukti</span>
                           </button>
                        ) : (
                           <div className="group relative h-48 w-full overflow-hidden rounded-2xl border border-white/10">
                              <Image src={proofImage} alt="Proof" fill className="object-cover" />
                              <button
                                 onClick={() => setProofImage(null)}
                                 className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                 <span className="font-black text-white uppercase tracking-widest">Hapus & Ganti</span>
                              </button>
                           </div>
                        )}
                     </div>

                     <div className="flex flex-col items-center gap-4">
                        <button
                           onClick={nextStep}
                           disabled={!proofImage}
                           className="w-full rounded-2xl bg-primary py-4 text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           Konfirmasi Booking
                        </button>
                        <button onClick={prevStep} className="text-sm font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Kembali</button>
                     </div>
                  </div>
               )}

               {step === 4 && (
                  <div className="space-y-8 text-center">
                     <div className="flex flex-col items-center">
                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary animate-bounce">
                           <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                        <h2 className="font-heading text-4xl font-black uppercase text-white tracking-tight">SIAP <span className="text-primary italic">DIGUNAKAN!</span></h2>
                        <p className="mt-4 text-lg text-zinc-400">Data sudah siap. Klik tombol di bawah untuk kirim detail pesanan ke Admin via WhatsApp.</p>
                     </div>

                     <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                        <div className="grid grid-cols-2 gap-y-4">
                           <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Nama</div>
                           <div className="text-sm font-bold text-white text-right">{name}</div>
                           <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Jadwal</div>
                           <div className="text-sm font-bold text-white text-right">{selectedDate} - {selectedTime}</div>
                           <div className="text-xs font-black uppercase tracking-widest text-zinc-500">Metode</div>
                           <div className="text-sm font-bold text-white text-right uppercase tracking-tighter">{paymentMethod === "bank" ? "Transfer Bank" : "QRIS"}</div>
                        </div>
                     </div>

                     <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 text-lg font-black uppercase tracking-widest text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] shadow-lg"
                     >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Kirim via WhatsApp
                     </a>
                     <p className="text-xs text-zinc-600 font-medium">Klik tombol di atas untuk membuka WhatsApp.</p>
                  </div>
               )}
            </div>

            {/* Footer info for all steps except 4 */}
            {step < 4 && (
               <div className="bg-white/5 border-t border-white/10 p-6 flex items-center justify-between">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Jadwal Terpilih</span>
                     <span className="text-sm font-bold text-white">{selectedDate} — {selectedTime}</span>
                  </div>
                  <button onClick={onClose} className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Batal</button>
               </div>
            )}

         </div>
      </div>
   );
}
