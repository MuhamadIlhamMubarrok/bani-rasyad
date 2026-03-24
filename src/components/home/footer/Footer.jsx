import logo1 from "../../../../public/general/logo1.webp";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Heart } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="relative pb-10 pt-20 overflow-hidden">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative max-w-7xl mx-auto rounded-[3rem] bg-utama overflow-hidden shadow-2xl shadow-primary-pink/20">
        {/* === GLASS OVERLAY === */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-warm/90 via-dark-warm/80 to-dark-warm/95 backdrop-blur-[2px]" />

        {/* === DECORATIVE PATTERN (Optional) === */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 C 50 100 80 0 100 100" stroke="white" fill="none" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="relative z-10 px-8 py-12 md:px-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: Branding */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
              <img src={logo1} alt="Bani Rasyad" className="h-16 w-auto brightness-0 invert" />
              <h3 className="font-heading text-4xl md:text-5xl text-white leading-[1.1]">
                Bani Rasyad <br />
                <span className="font-script text-accent-gold text-5xl md:text-6xl">Lebaran 2026</span>
              </h3>
              <p className="font-body text-white/70 text-sm max-w-md leading-relaxed">Menjalin silaturahmi, merangkai tawa, dan mengabadikan momen indah bersama seluruh keluarga besar di tahun 2026.</p>
            </motion.div>

            {/* MIDDLE: Info/Contact */}
            <motion.div variants={fadeUp} className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <h4 className="font-body font-bold text-accent-gold uppercase tracking-[0.2em] text-xs">Informasi Acara</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-white/80 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-pink transition-colors">
                      <MapPin size={18} className="text-primary-pink group-hover:text-white" />
                    </div>
                    <span className="text-sm font-body">Caringin, Masjid As-shalafie</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT: CTA/Social */}
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h4 className="font-body font-bold text-accent-gold uppercase tracking-[0.2em] text-xs">Our Sosial Media</h4>

                <div className="flex gap-4 pt-4">
                  {[Instagram, Heart].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary-pink hover:border-primary-pink transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.2em] font-body">
            <p>© 2026 Bani Rasyad Family. All Rights Reserved.</p>
            <p className="flex items-center gap-2">
              Developed with <Heart size={10} className="text-primary-pink fill-primary-pink" /> by Mas Ilham
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
