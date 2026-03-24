import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { imagesGallery } from "../../../data/data2026";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Ambil daftar kategori unik dari JSON
  const categories = useMemo(() => {
    const unique = ["Semua", ...new Set(imagesGallery.map((img) => img.category))];
    return unique;
  }, []);

  // Filter gambar berdasarkan kategori
  const filteredImages = useMemo(() => {
    const filtered = activeCategory === "Semua" ? imagesGallery : imagesGallery.filter((img) => img.category === activeCategory);

    // Duplikasi agar efek infinite scroll tetap jalan meski foto sedikit
    return [...filtered, ...filtered];
  }, [activeCategory]);

  return (
    <section id="gallery" className="relative py-24 bg-[#FFF5F7] overflow-hidden font-body">
      {/* DECORATIVE BLUR */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* === HEADER SECTION === */}
        <div className="relative mb-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <motion.h4 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-primary-pink font-bold tracking-[0.3em] text-sm uppercase">
              The Memory Lane
            </motion.h4>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="font-heading font-black text-5xl md:text-7xl text-dark-warm">
              Galeri <span className="text-primary-pink underline decoration-accent-gold/40 decoration-wavy">Momen.</span>
            </motion.h2>
          </div>
          <div className="hidden lg:block h-[2px] flex-1 mx-12 bg-gradient-to-r from-primary-pink/20 to-transparent" />
        </div>

        {/* === CATEGORY FILTER === */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
                activeCategory === cat ? "bg-primary-pink border-primary-pink text-white shadow-lg shadow-primary-pink/30 scale-110" : "bg-white border-primary-pink/10 text-dark-warm hover:border-primary-pink/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* === SLIDER CONTENT === */}
      <div className="relative space-y-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory} // Reset animasi saat kategori ganti
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* ROW 1 – Gerak ke KIRI */}
            <div className="relative flex overflow-hidden py-4">
              <motion.div
                className="flex gap-6 px-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {filteredImages.map((item, i) => (
                  <motion.div
                    key={`row1-${activeCategory}-${i}`}
                    whileHover={{ scale: 1.05, rotate: 1, zIndex: 20 }}
                    className="shrink-0 w-[280px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white cursor-pointer"
                  >
                    <img src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ROW 2 – Gerak ke KANAN */}
            <div className="relative flex overflow-hidden mt-4 py-4">
              <motion.div
                className="flex gap-6 px-3"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {filteredImages.map((item, i) => (
                  <motion.div
                    key={`row2-${activeCategory}-${i}`}
                    whileHover={{ scale: 1.05, rotate: -1, zIndex: 20 }}
                    className="shrink-0 w-[240px] md:w-[400px] aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white cursor-pointer"
                  >
                    <img src={item.url} alt={item.alt} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER TEXT */}
      <motion.div className="text-center mt-20 px-6">
        <p className="font-script text-4xl md:text-6xl text-primary-pink">Setiap kategori punya cerita uniknya...</p>
      </motion.div>
    </section>
  );
}
