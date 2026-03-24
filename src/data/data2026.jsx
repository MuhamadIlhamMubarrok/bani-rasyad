import { Trophy, Users, Calendar, Image as ImageIcon, Wallet, Star, Mic2, MessageSquare, Heart } from "lucide-react";

export const winners2026 = [
  {
    id: 1,
    nama_lomba: "Lomba Estafet",
    nama_team: "Kelompok 3",
    anggota_team: ["Umi Alit", "Ibu Athaya", "Athaya", "Fikri"], // Gunakan anggota_team
    poin: 90,
    icon: "Trophy",
  },
  {
    id: 2,
    nama_lomba: "Family 100",
    nama_team: "Kelompok 4",
    anggota_team: ["Hasif", "Nida", "Havy", "Eva"], // Konsisten gunakan anggota_team
    poin: 85,
    icon: "Crown",
  },
];

export const agendaLomba = [
  {
    id: 1,
    nama_lomba: "Siapakah Aku?",
    peserta: "Khusus Nenek",
    detail: "Tebak suara cucu-cucu tercinta. Nenek akan ditutup matanya dan mendengarkan suara acak.",
    icon: <Mic2 className="w-6 h-6" />,
    color: "bg-pink-100",
  },
  {
    id: 2,
    nama_lomba: "Estafet 4 Tahap",
    peserta: "Semua Anggota",
    detail: "Bola gelas, 3 lapis sarung, setrika baju, dan lipat baju tercepat!",
    icon: <Users className="w-6 h-6" />,
    color: "bg-orange-100",
  },
  {
    id: 3,
    nama_lomba: "Tong Whisper",
    peserta: "Grup (5 Orang)",
    detail: "Estafet kata melalui gerak mulut tanpa suara. Uji kekompakan penglihatan!",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: 4,
    nama_lomba: "Family 100",
    peserta: "Head to Head Team",
    detail: "Adu wawasan keluarga dengan 5 jawaban survei tertinggi.",
    icon: <Star className="w-6 h-6" />,
    color: "bg-yellow-100",
  },
];

export const imagesGallery = [
  {
    id: 1,
    url: "./bani-rasyad/gallery/babacakan1.jpeg", // Hapus ../../../public
    alt: "Momen 1",
    category: "Cimanuk",
  },
  {
    id: 2,
    url: "./bani-rasyad/gallery/babacakan2.jpeg",
    alt: "Momen 2",
    category: "Cimanuk",
  },
  {
    id: 3,
    url: "./bani-rasyad/gallery/babacakan3.jpeg",
    alt: "Momen 3",
    category: "Cimanuk",
  },
  {
    id: 4,
    url: "./bani-rasyad/gallery/babacakan4.jpeg",
    alt: "Momen 4",
    category: "Cimanuk",
  },
  {
    id: 6,
    url: "./bani-rasyad/gallery/cibatu1.jpeg",
    alt: "Momen 6",
    category: "Cibatu",
  },
];

export const programs2026 = [
  {
    title: "Iuran Kas Rutin",
    nominal: "Rp 25.000",
    periode: "Per Bulan",
    desc: "Dana ini dikumpulkan secara kolektif untuk mempersiapkan pertemuan keluarga Bani Rasyad berikutnya agar lebih meriah tanpa membebani di hari H.",
  },
];

export const family100Data = [
  {
    id: 1,
    ronde_game: 1,
    pertanyaan: "Top 5 Masakan Bi iyam ter enak ?",
    jawabans: [
      { nomer: 1, jawaban: "pindang", point: 50 },
      { nomer: 2, jawaban: "telor goreng", point: 40 },
      { nomer: 3, jawaban: "cumi", point: 30 },
      { nomer: 4, jawaban: "bubur sop", point: 20 },
      { nomer: 5, jawaban: "sayur asem", point: 10 },
    ],
  },
  {
    id: 2,
    ronde_game: 2,
    pertanyaan: "top 5 aktivitas di cimanuk ?",
    jawabans: [
      { nomer: 1, jawaban: "maen di sawah", point: 50 },
      { nomer: 2, jawaban: "beresin rumah", point: 40 },
      { nomer: 3, jawaban: "ngobrol", point: 30 },
      { nomer: 4, jawaban: "bacakan", point: 20 },
      { nomer: 5, jawaban: "ziarah", point: 10 },
    ],
  },
  {
    id: 3,
    ronde_game: 3,
    pertanyaan: "top 5 wisata yang pernah banira kunjungi",
    jawabans: [
      { nomer: 1, jawaban: "grand canyon carita", point: 50 },
      { nomer: 2, jawaban: "pantai batu hideung", point: 40 },
      { nomer: 3, jawaban: "tanjung lesung", point: 30 },
      { nomer: 4, jawaban: "pantai gorengan", point: 20 },
      { nomer: 5, jawaban: "pulau", point: 10 },
    ],
  },
];
