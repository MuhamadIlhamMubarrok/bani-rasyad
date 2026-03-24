import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../utils/smoothScroll";
import logoBani from "../../../../public/general/logo1.webp";
import { Trophy, Sparkles, Calendar } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const SCROLL_DURATION = 1500;
  const NAVBAR_OFFSET = 80;

  return (
    <section className="relative overflow-hidden bg-[#FFF5F7] py-10 lg:py-0 lg:min-h-[90vh] flex items-center" id="home">
      {/* Dekorasi Background Bulat Soft */}
      <div className="absolute top-[-5%] right-[-5%] w-72 h-72 md:w-96 md:h-96 bg-secondary-pink/20 blur-[80px] md:blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 md:w-80 md:h-80 bg-accent-gold/30 blur-[80px] md:blur-[100px] rounded-full -z-10" />

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* RIGHT IMAGE (Sekarang Muncul di Atas saat Mobile) */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] group">
            {/* Main Logo Container with Glassmorphism */}
            <div className="relative z-10 p-8 sm:p-12 aspect-square rounded-[3rem] lg:rounded-[4rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(254,129,212,0.2)] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Hover Effect Light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.img src={logoBani} alt="Logo Bani Rasyad" className="w-full h-auto object-contain relative z-20" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            </div>

            {/* Decorative Floating Elements (Hanya muncul di layar agak besar) */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-6 -right-6 w-20 h-20 border border-primary-pink/20 rounded-full border-dashed hidden sm:block" />

            {/* Floating Badge - Top Team */}
            <motion.div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-primary-pink/10 z-30 flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100">
              <div className="p-2 sm:p-3 bg-accent-gold/20 rounded-xl text-primary-pink">
                <Trophy size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] font-bold opacity-50 uppercase tracking-tighter sm:tracking-normal">Top Team</p>
                <p className="font-heading font-bold text-dark-warm text-xs sm:text-base whitespace-nowrap">Kelompok 3 & 4</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* LEFT CONTENT (Muncul di Bawah Image saat Mobile) */}
        <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-pink/30 bg-white/50 text-primary-pink text-xs font-bold tracking-widest font-body shadow-sm">
              <Sparkles size={14} /> KUMPUL KELUARGA 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-dark-warm">
              Bani Rasyad <br />
              <span className="text-primary-pink font-script text-5xl sm:text-7xl lg:text-8xl block mt-2 normal-case">Merajut Kasih</span>
              <span className="text-[10px] sm:text-sm md:text-xl font-body font-light tracking-[0.2em] block mt-2 opacity-70 uppercase">Dalam Kehangatan Keluarga</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="font-body text-sm sm:text-lg text-dark-warm/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Selamat datang di portal resmi keluarga <strong>Bani Rasyad</strong>. Tempat di mana kenangan lama dirayakan dan tawa baru diciptakan melalui keseruan lomba dan kebersamaan.
          </motion.p>

          {/* CTA SECTION */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
            {/* Button Primary: Agenda Lomba - Dipertegas Warnanya */}
            <motion.a
              href="#agenda"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("agenda", SCROLL_DURATION, NAVBAR_OFFSET);
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: "0 15px 30px -5px rgba(254, 129, 212, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
      group relative overflow-hidden
      font-body font-bold text-base
      px-10 py-4 rounded-2xl
      /* Gradien dipertegas agar teks putih terlihat jelas */
      bg-gradient-to-r from-[#FF69B4] to-[#FE81D4] 
      text-white text-center 
      w-full sm:w-auto flex items-center justify-center gap-3
      shadow-lg shadow-primary-pink/20
      transition-all duration-300
    "
            >
              {/* Efek Shine tetap ada untuk kesan mewah */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <Calendar size={20} className="relative z-10" />
              <span className="relative z-10">Lihat Agenda Lomba</span>
            </motion.a>

            {/* Button Secondary: Daftar Pemenang - Border & Text lebih kontras */}
            <motion.a
              href="#winners"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("winners", SCROLL_DURATION, NAVBAR_OFFSET);
              }}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
      cursor-pointer
      bg-white text-[#B48A01] rounded-2xl font-body 
      /* Border dipertegas warnanya */
      border-2 border-[#D4AF37] font-bold 
      text-base px-10 py-4 shadow-sm 
      w-full sm:w-auto flex items-center justify-center gap-2
      transition-all duration-300
    "
            >
              <Trophy size={18} className="text-[#D4AF37]" />
              <span>Daftar Pemenang</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
