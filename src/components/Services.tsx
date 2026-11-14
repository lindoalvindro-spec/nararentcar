import React, { useRef } from 'react';
import { UserCheck, Check, ArrowRight, Sparkles } from 'lucide-react';
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
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out', delay: 0.2 }
      );
    },
    { scope: containerRef }
  );

  const pillars = [
    {
      num: '01',
      title: 'Mobil Terawat dan Prima',
      desc: 'Seluruh armada keluaran tahun muda (2022-2024) yang menjalani perawatan berkala di bengkel resmi APM. Kabin dijamin bersih wangi, bebas bau rokok, dan AC dingin maksimal.',
      badge: 'Standar Bengkel Resmi',
    },
    {
      num: '02',
      title: 'Harga Bersahabat & Transparan',
      desc: 'Tarif sewa All-In 12 Jam yang tertera sudah termasuk Mobil, Supir, dan BBM dalam kota. Informasi biaya jelas di awal tanpa pungutan tersembunyi.',
      badge: 'All-In Mobil + Supir + BBM',
    },
    {
      num: '03',
      title: 'Driver Handal & Santun',
      desc: 'Pengemudi santun, rapi, dan tidak merokok saat bertugas. Menguasai jalur protokol Kota Pekanbaru, pusat instansi BUMN/Pemerintahan, hingga jalur lintas Riau.',
      badge: 'Sopir Santun & Hapal Rute',
    },
    {
      num: '04',
      title: 'Siaga Penjemputan Tepat Waktu',
      desc: 'Fasilitas penjemputan dan pengantaran tepat waktu di Bandara Sultan Syarif Kasim II (SSK II), hotel ternama, atau area domisili Anda di Pekanbaru.',
      badge: 'Siaga Bandara SSK II',
    },
  ];

  return (
    <section ref={containerRef} id="layanan" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="service-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Standar Pelayanan Nara Rent Car Pekanbaru</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Keunggulan Layanan Kami
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Diadaptasi untuk memenuhi ekspektasi tertinggi perjalanan dinas instansi, tamu korporat, dan keluarga yang membutuhkan kenyamanan paripurna di Pekanbaru.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="pillar-card rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all group backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-slate-700 group-hover:text-amber-400 transition-colors">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 shadow-xs">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core All-In 12 Jam Featured Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="service-card-main rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border-2 border-red-700/60 p-7 sm:p-9 flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center shadow-md">
                  <UserCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-950 text-amber-300 border border-red-800">
                  Favorit Tamu Dinas &amp; BUMN
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                Paket All-In 12 Jam Dalam Kota
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Pilihan bebas repot untuk agenda bisnis, rapat instansi pemerintah, atau silaturahmi keluarga di Pekanbaru.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Mobil Bersih &amp; Supir Santun</strong> berpakaian rapi dan profesional.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Termasuk Mobil + Supir + BBM</strong> selama 12 jam pemakaian dalam kota.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Penjemputan Tepat Waktu</strong> di Bandara SSK II, hotel, atau alamat Anda.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Kwitansi &amp; Invoice Resmi</strong> untuk kebutuhan reimbursement kantor.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-amber-400">Tarif Pasti Sesuai Katalog Armada</span>
              <a
                href={buildWhatsAppSupportUrl('Paket All-In 12 Jam dengan Supir Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs sm:text-sm transition-all shadow-md shadow-red-950/50 cursor-pointer border border-red-500/40"
              >
                <span>Pesan Paket via WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
