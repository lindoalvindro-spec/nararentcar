import React from 'react';
import { Key, UserCheck, Plane, HeartHandshake, Bus, Building2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Key,
      title: 'Sewa Lepas Kunci',
      desc: 'Privasi penuh berkendara bersama keluarga atau pasangan dengan armada tahun muda yang terawat dan steril.',
      badge: 'Paling Populer',
    },
    {
      icon: UserCheck,
      title: 'Sewa Dengan Supir',
      desc: 'Nikmati perjalanan tanpa lelah. Driver kami profesional, sopan, berlisensi, dan hafal jalur terbaik tanpa macet.',
      badge: 'Nyaman & Aman',
    },
    {
      icon: Plane,
      title: 'Antar-Jemput Bandara',
      desc: 'Layanan drop-off atau pick-up di Bandara Soekarno-Hatta & Halim Perdanakusuma tepat waktu 24 jam nonstop.',
      badge: 'Tepat Waktu',
    },
    {
      icon: HeartHandshake,
      title: 'Wedding Car & VIP',
      desc: 'Sewa mobil pengantin mewah (Alphard, Camry, Fortuner) lengkap dengan dekorasi pita bunga dan supir berbatik rapi.',
      badge: 'Eksklusif',
    },
    {
      icon: Bus,
      title: 'Wisata & Rombongan',
      desc: 'Unit minibus HiAce Premio dan Elf Long berkapasitas hingga 12-19 penumpang untuk liburan keluarga besar atau kantor.',
      badge: 'Kapasitas Besar',
    },
    {
      icon: Building2,
      title: 'Rental Korporat / Bulanan',
      desc: 'Paket sewa jangka panjang untuk operasional perusahaan dengan invoice resmi, PPh 23, serta mobil pengganti jika servis.',
      badge: 'Hemat Biaya',
    },
  ];

  return (
    <section id="layanan" className="py-16 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Layanan Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solusi Sewa Mobil untuk Setiap Kebutuhan Anda
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Apapun rencana perjalanan Anda, kami siap menyediakan solusi armada dan layanan terbaik dengan standar keselamatan tertinggi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-brand-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
