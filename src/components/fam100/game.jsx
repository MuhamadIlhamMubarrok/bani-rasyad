import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send, Trophy, Eye } from "lucide-react"; // Tambah Eye icon
import { family100Data } from "../../data/data2026";

export default function Game() {
  const [currentRonde, setCurrentRonde] = useState(0);
  const [inputJawaban, setInputJawaban] = useState("");
  const [openedAnswers, setOpenedAnswers] = useState([]);
  const [totalSkor, setTotalSkor] = useState(0);

  const dataRonde = family100Data[currentRonde];

  const cekJawaban = (e) => {
    e.preventDefault();
    const findJawaban = dataRonde.jawabans.find((j) => j.jawaban.toLowerCase().trim() === inputJawaban.toLowerCase().trim());

    if (findJawaban) {
      if (openedAnswers.includes(findJawaban.nomer)) {
        alert("Jawaban ini sudah ditebak, Mas!");
      } else {
        alert("WIIHH JAWABAN KAMU BENAR! 🎉");
        setOpenedAnswers([...openedAnswers, findJawaban.nomer]);
        setTotalSkor(totalSkor + findJawaban.point);
      }
    } else {
      alert("YAHH SAYANG SEKALI BELUM ADA... ❌");
    }
    setInputJawaban("");
  };

  // --- FUNGSI SHOW ALL ---
  const showAllAnswers = () => {
    const allIds = dataRonde.jawabans.map((j) => j.nomer);
    setOpenedAnswers(allIds);
  };

  const nextRonde = () => {
    if (currentRonde < family100Data.length - 1) {
      setCurrentRonde(currentRonde + 1);
      setOpenedAnswers([]);
    }
  };

  const prevRonde = () => {
    if (currentRonde > 0) {
      setCurrentRonde(currentRonde - 1);
      setOpenedAnswers([]);
    }
  };

  return (
    <section className="py-24 bg-[#FFF5F7] min-h-screen" id="game">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Game */}
        <div className="text-center mb-12">
          <motion.h2 className="font-heading font-black text-5xl text-dark-warm mb-2">
            FAMILY <span className="text-primary-pink uppercase">100</span>
          </motion.h2>
          <div className="flex justify-center items-center gap-4">
            <div className="px-4 py-1 bg-accent-gold rounded-full text-xs font-bold uppercase tracking-widest text-dark-warm">Ronde {dataRonde.ronde_game}</div>
            <div className="flex items-center gap-2 text-primary-pink font-bold">
              <Trophy size={18} />
              <span>Total Skor: {totalSkor}</span>
            </div>
          </div>
        </div>

        {/* Board Pertanyaan */}
        <div className="bg-utama p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border-4 border-white">
          <div className="absolute inset-0 bg-dark-warm/80 backdrop-blur-sm" />

          <div className="relative z-10 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-center font-heading text-2xl md:text-3xl leading-relaxed">"{dataRonde.pertanyaan}"</h3>

              {/* BUTTON SHOW ALL */}
              <button onClick={showAllAnswers} className="bg-white/10 hover:bg-white/20 text-white/50 hover:text-white p-2 rounded-lg transition-all" title="Buka Semua Jawaban">
                <Eye size={20} />
              </button>
            </div>

            {/* List Jawaban */}
            <div className="grid grid-cols-1 gap-3">
              {dataRonde.jawabans.map((j) => (
                <div
                  key={j.nomer}
                  className={`h-14 rounded-xl border-2 flex items-center justify-between px-6 transition-all duration-500 ${openedAnswers.includes(j.nomer) ? "bg-white border-accent-gold scale-[1.02]" : "bg-black/20 border-white/10"}`}
                >
                  <span className={`font-bold ${openedAnswers.includes(j.nomer) ? "text-dark-warm" : "text-white/20"}`}>
                    {j.nomer}. {openedAnswers.includes(j.nomer) ? j.jawaban.toUpperCase() : "................................"}
                  </span>
                  {openedAnswers.includes(j.nomer) && <span className="bg-primary-pink text-white px-3 py-1 rounded-lg font-black text-sm">{j.point}</span>}
                </div>
              ))}
            </div>

            {/* Input Jawaban */}
            <form onSubmit={cekJawaban} className="flex gap-2 mt-8">
              <input
                type="text"
                value={inputJawaban}
                onChange={(e) => setInputJawaban(e.target.value)}
                placeholder="Ketik jawaban di sini..."
                className="flex-1 bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-pink transition-all"
              />
              <button type="submit" className="bg-primary-pink hover:bg-accent-gold text-white hover:text-dark-warm p-4 rounded-2xl transition-all shadow-lg">
                <Send size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Navigasi Ronde */}
        <div className="flex justify-between items-center mt-12">
          <button onClick={prevRonde} disabled={currentRonde === 0} className="flex items-center gap-2 text-dark-warm font-bold uppercase tracking-widest text-xs disabled:opacity-30 hover:text-primary-pink transition-colors">
            <ChevronLeft /> Prev Ronde
          </button>
          <button
            onClick={nextRonde}
            disabled={currentRonde === family100Data.length - 1}
            className="flex items-center gap-2 text-dark-warm font-bold uppercase tracking-widest text-xs disabled:opacity-30 hover:text-primary-pink transition-colors"
          >
            Next Ronde <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
