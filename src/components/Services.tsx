import React from 'react';
import { Key, UserCheck, Plane, HeartHandshake, Bus, Building2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Key,
      title: 'Sewa Lepas Kunci',
      desc: 'Privasi penuh berkendara bersama keluarga dengan armada tahun muda yang terawat, wangi, dan bebas asap rokok.',
      badge: 'Paling Diminati',
    },
    {
      icon: UserCheck,
      title: 'Sewa Dengan Supir',
      desc: 'Perjalanan bebas lelah dan tepat waktu. Supir kami ramah, berlisensi resmi, dan menguasai rute jalan di kota maupun luar kota.',
      badge: 'Nyaman & Aman',
    },
    {
      icon: Plane,
      title: 'Antar-Jemput Bandara',
      desc: 'Layanan jemput dan antar di Bandara Soekarno-Hatta (CGK) dan Halim Perdanakusuma (HLP) dengan konfirmasi jadwal yang presisi.',
      badge: 'Jadwal Siaga',
    },
    {
      icon: HeartHandshake,
      title: 'Mobil Pernikahan / VIP',
      desc: 'Unit kendaraan mewah seperti Toyota Alphard dan Camry untuk kebutuhan acara sakral pernikahan atau tamu kehormatan.',
      badge: 'Unit Khusus',
    },
    {
      icon: Bus,
      title: 'Sewa Wisata & Rombongan',
      desc: 'Tersedia Toyota HiAce Premio berkapasitas hingga 12 penumpang untuk liburan rombongan kantor atau keluarga besar.',
      badge: 'Kapasitas Luas',
    },
    {
      icon: Building2,
      title: 'Rental Korporat & Bulanan',
      desc: 'Solusi operasional kendaraan instansi perusahaan dengan kelengkapan invoice resmi, faktur PPh 23, serta unit pengganti otomatis.',
      badge: 'Faktur Resmi',
    },
  ];

  return (
    <section id="layanan" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            Pilihan Layanan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Paket Sewa Mobil Sesuai Kebutuhan Perjalanan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kami menyediakan solusi armada fleksibel dengan jaminan kondisi unit selalu bersih dan prima.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200">
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
