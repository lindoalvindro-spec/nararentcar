import React, { useRef } from 'react';
import { Key, UserCheck, Plane, HeartHandshake, Bus, Building2, Check, ArrowRight, Sparkles } from 'lucide-react';
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
      title: 'Harga Bersahabat & Fleksibel',
      desc: 'Penawaran tarif sewa bersaing di Pekanbaru tanpa biaya tersembunyi. Silakan konsultasi dan negosiasikan langsung via WhatsApp sesuai durasi atau rute pemakaian Anda.',
      badge: 'Nego via WhatsApp',
    },
    {
      num: '03',
      title: 'Driver Handal & Berpengalaman',
      desc: 'Pengemudi santun, rapi, dan tidak merokok saat bertugas. Menguasai jalur protokol Kota Pekanbaru, pusat instansi BUMN/Pemerintahan, hingga jalur lintas Riau (Siak, Dumai, Kampar).',
      badge: 'Sopir Santun & Hapal Rute',
    },
    {
      num: '04',
      title: 'Layanan Antar-Jemput Gratis',
      desc: 'Fasilitas penjemputan dan pengantaran unit tepat waktu di Bandara Internasional Sultan Syarif Kasim II (SSK II), hotel ternama, maupun stasiun di Pekanbaru.',
      badge: 'Bebas Ongkir Bandara SSK II',
    },
  ];

  const specializedServices = [
    {
      icon: Plane,
      title: 'Antar-Jemput Bandara SSK II',
      desc: 'Penjemputan tepat waktu dengan pemantauan jadwal landing pesawat di Bandara Sultan Syarif Kasim II Pekanbaru.',
      badge: 'Siaga Penerbangan',
    },
    {
      icon: Building2,
      title: 'Perjalanan Dinas Kantor & BUMN',
      desc: 'Dukungan transportasi resmi untuk tamu instansi pemerintah, BUMN, perbankan, dan perusahaan perkebunan/migas di Riau.',
      badge: 'Invoice & Kwitansi Resmi',
    },
    {
      icon: Bus,
      title: 'Wisata Lintas Riau (HiAce 12 Seat)',
      desc: 'Kapasitas rombongan untuk tour budaya Istana Siak Sri Indrapura, Candi Muara Takus Kampar, dan kuliner khas Melayu Riau.',
      badge: 'Kapasitas Rombongan',
    },
    {
      icon: HeartHandshake,
      title: 'Mobil VIP & Pernikahan (Alphard & Zenix)',
      desc: 'Armada eksekutif bernuansa mewah dengan opsi dekorasi khusus dan pengemudi berbusana formal untuk momen istimewa Anda.',
      badge: 'Layanan VIP Eksklusif',
    },
  ];

  return (
    <section ref={containerRef} id="layanan" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="service-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Standar Pelayanan Nara Rent Car Pekanbaru</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              4 Keunggulan Layanan Kami
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Diadaptasi untuk memenuhi ekspektasi tertinggi perjalanan dinas instansi, tamu korporat, dan keluarga yang membutuhkan kenyamanan paripurna di Pekanbaru.
          </p>
        </div>

        {/* 4 Pillars Grid (Inspired by juniorrentcarpekanbaru.com deep copy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="pillar-card rounded-2xl bg-slate-50 border border-slate-200/90 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-slate-300 group-hover:text-amber-500 transition-colors">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shadow-xs">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Services: Asymmetric Two-Column Comparison */}
        <div className="service-header mb-8">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
            Pilihan Skema Sewa Armada
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Tersedia skema all-in bebas repot dengan pengemudi handal, atau lepas kunci untuk privasi penuh keluarga Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Paket All-In 12 Jam (Dengan Supir) */}
          <div className="service-card-main rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border-2 border-red-700/60 p-7 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center shadow-md">
                  <UserCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-900/80 text-amber-300 border border-red-700">
                  Paling Banyak Dipilih Tamu Dinas
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-2">
                Paket All-In 12 Jam (Mobil + Supir + BBM + Parkir)
              </h4>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Pilihan bebas lelah untuk agenda bisnis, rapat instansi pemerintah, atau silaturahmi keluarga di Pekanbaru. Pengemudi kami siap melayani dengan santun dan profesional.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Mobil Bersih & Supir Handal</strong> berpengalaman dan berpakaian rapi.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Termasuk BBM & Parkir</strong> dalam kota Pekanbaru selama 12 jam pemakaian.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Penjemputan Tepat Waktu</strong> di Bandara SSK II atau hotel penginapan Anda.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Kwitansi Resmi & Invoice</strong> tersedia lengkap untuk kebutuhan klaim kantor.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">Konsultasi Paket All-In</span>
                <span className="text-sm font-bold text-amber-400">Nego Tarif via WhatsApp</span>
              </div>
              <a
                href={buildWhatsAppSupportUrl('Paket All-In 12 Jam dengan Supir Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold font-display text-xs sm:text-sm transition-all shadow-md"
              >
                <span>Tanya Paket All-In</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </div>

          {/* Card 2: Sewa Lepas Kunci */}
          <div className="service-card-main rounded-2xl bg-slate-50 border-2 border-slate-300 hover:border-amber-500 transition-colors p-7 sm:p-8 flex flex-col justify-between relative shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <Key className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-300">
                  Privasi Mandiri 24 Jam
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
                Sewa Mobil Lepas Kunci (Self Drive)
              </h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Kendali penuh agenda perjalanan di tangan Anda. Nikmati fleksibilitas rute dan keleluasaan waktu bersama keluarga dengan unit steril, wangi, dan bebas asap rokok.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Durasi 24 Jam Penuh</strong> per hari kalender sewa.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bebas Kilometer</strong> perjalanan jelajah dalam provinsi Riau.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Antar-Jemput Unit</strong> gratis ke Bandara SSK II atau lokasi rumah/hotel.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deposit Jaminan Transparan</strong> dikembalikan utuh 100% dalam 1x24 jam.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-500 block">Konsultasi Lepas Kunci</span>
                <span className="text-sm font-bold text-slate-900">Nego Tarif via WhatsApp</span>
              </div>
              <a
                href={buildWhatsAppSupportUrl('Sewa Lepas Kunci Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold font-display text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>Tanya Lepas Kunci</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </div>

        </div>

        {/* Specialized Secondary Services Grid */}
        <div className="service-header mb-6">
          <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
            Layanan Khusus & Rute Tambahan di Riau
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specializedServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="service-item-row p-5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
