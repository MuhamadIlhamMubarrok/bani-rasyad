import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ChevronDown, Sparkles } from "lucide-react";
import { agendaLomba } from "../../../data/data2026";

// Helper untuk icon dinamis
const DynamicIcon = ({ name, className }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.Star;
  return <IconComponent className={className} />;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Agenda() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="agenda" className="relative py-24 bg-utama overflow-hidden rounded-4xl">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Mengikuti Style Juara */}
        {/* === HEADER SECTION === */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-primary/10 border border-primary-01 text-primary-01 bg-white mb-4"
          >
            ✦ FUN & TOGETHERNESS
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="font-heading text-white text-4xl md:text-6xl font-black text-brand-dark">
            Agenda <span className="font-script text-accent-gold text-5xl md:text-7xl ml-2">Seru</span> 2026
          </motion.h2>
        </div>

        {/* Grid Agenda */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agendaLomba.map((lomba) => (
            <motion.div
              key={lomba.id}
              variants={item}
              className={`group relative overflow-hidden rounded-[2.5rem] transition-all duration-500 border-2 ${
                expandedId === lomba.id ? "border-primary-pink bg-white shadow-2xl" : "border-transparent bg-white/60 hover:bg-white shadow-sm"
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${expandedId === lomba.id ? "bg-primary-pink text-white" : "bg-primary-pink/10 text-primary-pink"}`}>
                    <DynamicIcon name={lomba.icon_name} className="w-8 h-8" />
                  </div>

                  {/* Badge Peserta */}
                  <span className="px-4 py-1.5 rounded-full bg-accent-gold/20 text-dark-warm font-bold text-[10px] uppercase tracking-widest border border-accent-gold/30">{lomba.peserta}</span>
                </div>

                <h3 className="font-heading text-3xl font-black text-dark-warm mb-3 uppercase tracking-tight">{lomba.nama_lomba}</h3>

                {/* Tombol Aturan Main */}
                <button onClick={() => toggleExpand(lomba.id)} className="flex items-center gap-2 text-primary-pink font-bold text-sm uppercase tracking-widest group/btn">
                  <Sparkles size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  {expandedId === lomba.id ? "Tutup Aturan" : "Lihat Aturan Main"}
                  <motion.div animate={{ rotate: expandedId === lomba.id ? 180 : 0 }}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Detail Aturan (Expandable) */}
                <AnimatePresence>
                  {expandedId === lomba.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 gap-4">
                        {lomba.steps ? (
                          <div className="grid grid-cols-2 gap-3">
                            {lomba.steps.map((step, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-primary-pink/5 border border-primary-pink/10">
                                <span className="w-6 h-6 rounded-lg bg-primary-pink text-white text-[10px] flex items-center justify-center font-bold">{idx + 1}</span>
                                <span className="text-xs font-bold text-dark-warm uppercase">{step}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm italic text-gray-400 font-body">{lomba.detail}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
