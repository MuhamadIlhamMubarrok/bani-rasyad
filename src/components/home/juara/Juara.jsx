import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Star, Users, UserCircle2 } from "lucide-react"; // Tambah icon user
import { winners2026 } from "../../../data/data2026";

const DynamicIcon = ({ name, size = 24, className }) => {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return <LucideIcons.Medal size={size} className={className} />;
  return <IconComponent size={size} className={className} />;
};

export default function Juara() {
  return (
    <section className="py-24 bg-[#FFF5F7] overflow-hidden" id="juara">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="relative mb-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <motion.h4 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-primary-pink font-bold tracking-[0.3em] text-sm uppercase">
              The Hall of Fame
            </motion.h4>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="font-heading font-black text-5xl md:text-7xl text-dark-warm">
              Para <span className="text-primary-pink underline decoration-accent-gold/40 decoration-wavy">Juara.</span>
            </motion.h2>
          </div>
          <div className="hidden lg:block h-[2px] flex-1 mx-12 bg-gradient-to-r from-primary-pink/20 to-transparent" />
        </div>

        {/* Grid Juara */}
        <div className="grid grid-cols-1 gap-12">
          {winners2026.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row items-center"
            >
              {/* Angka Ranking Besar */}
              <span className="absolute -left-4 lg:-left-10 top-0 text-[10rem] lg:text-[15rem] font-black leading-none text-dark-warm/[0.03] pointer-events-none select-none italic">0{index + 1}</span>

              {/* Icon Section (Spotlight) */}
              <div className="relative z-10 mb-6 lg:mb-0 lg:mr-12">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-pink/10 to-accent-gold/10" />
                  <DynamicIcon name={winner.icon} size={48} className="text-primary-pink relative z-10" />
                </div>
                {/* Badge Poin */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 -right-2 bg-accent-gold text-white font-black px-4 py-2 rounded-xl shadow-lg flex items-center gap-1 text-sm border-2 border-white"
                >
                  <Star size={14} fill="currentColor" /> {winner.poin}
                </motion.div>
              </div>

              {/* Main Content Box */}
              <div className="flex-1 w-full bg-white/40 backdrop-blur-sm border-l-4 border-primary-pink p-8 lg:p-12 rounded-r-[3rem] group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Team Info */}
                  <div className="space-y-2 text-center lg:text-left flex-1">
                    <p className="text-primary-pink font-bold text-[10px] uppercase tracking-[0.2em]">{winner.nama_lomba}</p>
                    <h3 className="text-3xl lg:text-5xl font-black text-dark-warm group-hover:text-primary-pink transition-colors uppercase leading-tight font-heading">{winner.nama_team}</h3>
                  </div>

                  {/* Team Members Section - Diperbarui */}
                  <div className="flex flex-col items-center lg:items-end gap-4">
                    <div className="flex items-center gap-2 text-dark-warm/40 group-hover:text-primary-pink transition-colors">
                      <Users size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Squad Members</span>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                      {winner.anggota_team.map((nama, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-2xl shadow-sm group-hover:border-primary-pink/20 transition-all">
                          <div className="w-6 h-6 rounded-lg bg-primary-pink/10 flex items-center justify-center text-primary-pink">
                            <UserCircle2 size={14} />
                          </div>
                          <span className="text-xs font-bold text-dark-warm/70 group-hover:text-dark-warm transition-colors capitalize">{nama}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
