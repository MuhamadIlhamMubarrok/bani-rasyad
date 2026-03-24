import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../../../../public/general/logo1.webp";
import { smoothScrollTo } from "../../../utils/smoothScroll";
// Import icon untuk tampilan mobile
import { Home, Trophy, Calendar, Image, Wallet, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    { label: "Home", id: "home", icon: <Home size={20} /> },
    { label: "Juara", id: "juara", icon: <Trophy size={20} /> },
    { label: "Agenda", id: "agenda", icon: <Calendar size={20} /> },
    { label: "Gallery", id: "gallery", icon: <Image size={20} /> },
    { label: "Program", id: "program", icon: <Wallet size={20} /> },
  ];

  const SCROLL_DURATION = 1500;
  const NAVBAR_OFFSET = 90;

  return (
    <>
      {/* === DESKTOP NAVBAR (Tetap di Atas) === */}
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="hidden md:block sticky top-4 z-50 bg-utama shadow-lg rounded-full max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16 pl-6">
          {/* Logo */}
          <motion.img src={logo1} alt="Logo" className="h-12 w-auto ml-1 cursor-pointer brightness-0 invert" whileHover={{ scale: 1.05 }} onClick={() => smoothScrollTo("home", SCROLL_DURATION, NAVBAR_OFFSET)} />

          {/* Menu Desktop */}
          <div className="flex items-center gap-8 font-body text-sm">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                onClick={() => smoothScrollTo(item.id, SCROLL_DURATION, NAVBAR_OFFSET)}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="cursor-pointer text-white hover:text-primary-pink transition hover:text-primary-01"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Desktop */}

          <motion.div className="hidden md:block" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 250 }}>
            <a href="/bani-rasyad/game" className="cursor-pointer bg-gradient-to-r from-primary-02 via-primary-01 to-primary-03 text-secondary rounded-full font-body text-sm px-4 py-2.5 shadow-sm hover:shadow-md transition">
              Family 100
            </a>
          </motion.div>
        </nav>
      </motion.header>

      {/* === MOBILE BOTTOM NAVBAR (Hanya Muncul di HP) === */}
      <motion.nav initial={{ y: 100 }} animate={{ y: 0 }} className="md:hidden fixed bottom-6 left-4 right-4 z-[99] bg-utama backdrop-blur-lg border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] rounded-[2.5rem] px-2 py-3">
        <div className="flex justify-around items-end relative">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => smoothScrollTo(item.id, SCROLL_DURATION, NAVBAR_OFFSET)} className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-all active:scale-90">
              <div className="p-1">{item.icon}</div>
              <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
            </button>
          ))}

          {/* Floating Game Button di Tengah/Samping */}
          <motion.a
            href="/bani-rasyad/game"
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center bg-primary-pink text-white w-14 h-14 rounded-2xl shadow-[0_10px_20px_rgba(254,129,212,0.4)] border-4 border-[#FFF5F7]"
          >
            <Gamepad2 size={24} />
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
}
