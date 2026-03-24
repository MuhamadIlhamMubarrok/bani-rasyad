import { motion } from "framer-motion";
import { Wallet, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";
import { programs2026 } from "../../../data/data2026";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Program() {
  // Ambil data pertama karena program cuma ada 1
  const mainProgram = programs2026[0];

  return (
    <section id="program" className="relative py-24 bg-[#FFF5F7] overflow-hidden">
      {/* DECORATIVE BLUR */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER (Konsisten dengan Juara & Agenda) === */}
        <div className="relative mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <motion.h4 variants={fadeUp} initial="hidden" whileInView="visible" className="text-primary-pink font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase font-body">
              Sustainable Family Fund
            </motion.h4>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading font-black text-5xl md:text-7xl text-dark-warm">
              Program <span className="text-primary-pink underline decoration-accent-gold/40 decoration-wavy">2026.</span>
            </motion.h2>
          </div>
          <div className="hidden lg:block h-[2px] flex-1 mx-12 bg-gradient-to-r from-primary-pink/20 to-transparent" />
        </div>

        {/* === HERO PROGRAM CARD === */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative bg-white rounded-[3rem] shadow-2xl shadow-primary-pink/10 overflow-hidden border border-primary-pink/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* KIRI: Visual & Nominal (Gunakan bg-utama Mas) */}
            <div className="lg:col-span-5 p-10 md:p-14 bg-utama relative min-h-[300px] flex flex-col justify-center text-center lg:text-left">
              {/* Overlay agar teks tajam */}
              <div className="absolute inset-0 bg-dark-warm/85 backdrop-blur-[2px]" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-accent-gold flex items-center justify-center text-dark-warm shadow-xl shadow-accent-gold/20">
                  <Wallet size={32} />
                </div>
                <div>
                  <h3 className="text-white font-heading text-3xl font-bold uppercase tracking-tight">{mainProgram.title}</h3>
                  <div className="flex flex-col lg:flex-row items-center lg:items-end gap-2 mt-4">
                    <span className="text-accent-gold text-5xl font-black font-body leading-none">{mainProgram.nominal}</span>
                    <span className="text-white/60 text-sm font-body mb-1">/ {mainProgram.periode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* KANAN: Deskripsi & Langkah */}
            <div className="lg:col-span-7 p-10 md:p-14 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary-pink">
                  <Sparkles size={20} />
                  <span className="font-bold font-body text-xs uppercase tracking-widest italic">Tujuan Mulia</span>
                </div>
                <p className="font-body text-gray-500 text-sm leading-relaxed max-w-lg">{mainProgram.desc}</p>
              </div>

              {/* Call to Action Row */}
              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-pink/10 flex items-center justify-center">
                    <CalendarCheck className="text-primary-pink" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Waktu Pembayaran</p>
                    <p className="text-dark-warm font-bold text-sm">Setiap Awal Bulan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
