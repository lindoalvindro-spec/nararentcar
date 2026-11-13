import React, { useRef } from 'react';
import { Key, UserCheck, Plane, HeartHandshake, Bus, Building2, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.service-header',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.service-card-main',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.service-item-row',
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.25 }
      );
    },
    { scope: containerRef }
  );

  const specializedServices = [
    {
      icon: Plane,
      title: 'Antar-Jemput Bandara (CGK & HLP)',
      desc: 'Penjemputan tepat waktu dengan pemantauan jadwal landing pesawat. Bebas antre taksi bandara.',
      badge: 'Jadwal Siaga',
    },
    {
      icon: Bus,
      title: 'Sewa Rombongan (HiAce Premio 12 Seat)',
      desc: 'Kapasitas hingga 12 penumpang dengan legroom lega, reclining seat, dan AC plafon menyeluruh.',
      badge: 'Kapasitas Besar',
    },
    {
      icon: HeartHandshake,
      title: 'Mobil VIP & Pernikahan (Alphard)',
      desc: 'Unit eksekutif dengan opsi dekorasi pita bunga dan supir berbusana resmi untuk tamu kehormatan.',
      badge: 'Layanan VIP',
    },
    {
      icon: Building2,
      title: 'Kontrak Korporat & Rental Bulanan',
      desc: 'Penagihan bertempo, faktur pajak PPh 23 resmi, serta SLA penggantian unit prioritas dalam 3 jam.',
      badge: 'Faktur Resmi',
    },
  ];

  return (
    <section ref={containerRef} id="layanan" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="service-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Standar Layanan Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Pilihan Skema Sewa Sesuai Kebutuhan
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Tersedia opsi sewa lepas kunci untuk privasi penuh keluarga, atau dengan supir profesional berpengalaman untuk perjalanan dinas bebas lelah.
          </p>
        </div>

        {/* Core Services: Asymmetric Two-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Sewa Lepas Kunci */}
          <div className="service-card-main rounded-2xl bg-slate-50 border-2 border-emerald-500/30 hover:border-emerald-500 transition-colors p-7 sm:p-8 flex flex-col justify-between relative shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <Key className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Privasi 100%
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
                Sewa Mobil Lepas Kunci
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Kendali penuh di tangan Anda. Nikmati fleksibilitas rute dan keleluasaan waktu bersama keluarga dengan unit bersih, wangi, dan bebas asap rokok.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Durasi 24 Jam Penuh</strong> per hari kalender sewa.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bebas Kilometer</strong> perjalanan jelajah dalam provinsi.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Antar-Jemput Unit</strong> ke rumah, kantor, stasiun, atau bandara.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deposit Jaminan Transparan</strong> dikembalikan utuh 100% dalam 1x24 jam.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Format Layanan</span>
                <span className="text-sm font-bold font-display text-slate-900">Sewa 24 Jam Penuh</span>
              </div>
              <a
                href="#armada"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
              >
                <span>Pilih Unit Lepas Kunci</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Sewa Dengan Supir */}
          <div className="service-card-main rounded-2xl bg-slate-900 text-white border border-slate-800 p-7 sm:p-8 flex flex-col justify-between relative shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shadow-sm">
                  <UserCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                  Bebas Lelah & Macet
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Sewa Mobil Dengan Supir
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Fokus pada urusan bisnis dan nikmati perjalanan Anda. Supir kami profesional, ramah, berpakaian rapi, dan menguasai jalan protokol maupun rute alternatif.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Tanpa Deposit Jaminan</strong> dan tanpa penahanan identitas pribadi.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Pilihan Durasi Fleksibel</strong> 12 jam kerja atau 14 jam dalam kota.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Bebas Ganjil-Genap</strong> dengan penguasaan rute jalan protokol kota.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Paket All-In Tersedia</strong> (mobil + supir + bbm + tol) via pesanan khusus.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Format Layanan</span>
                <span className="text-sm font-bold font-display text-white">12 / 14 Jam Fleksibel</span>
              </div>
              <a
                href={buildWhatsAppSupportUrl('Sewa Mobil Dengan Supir')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
              >
                <span>Tanya Tarif via WA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Specialized Services: 4 Horizontal Row Items */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Layanan Khusus & Tambahan
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="service-item-row flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide block mb-1">
                      {item.badge}
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 font-display mb-1.5">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
