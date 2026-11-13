import React, { useRef } from 'react';
import { ShieldCheck, RefreshCw, FileText, CheckCircle, ShieldAlert, Award, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const QualityAssurance: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.qa-header',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.qa-guarantee-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.qa-trust-strip',
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', delay: 0.3 }
      );
    },
    { scope: containerRef }
  );

  const guarantees = [
    {
      num: '01',
      icon: RefreshCw,
      title: 'Garansi Penggantian Unit Cepat',
      desc: 'Jika kendaraan mengalami kendala mesin di jalan yang tidak dapat diperbaiki segera, kami kirimkan unit pengganti setara tanpa biaya sepeserpun.',
      tag: 'Garansi Siaga',
    },
    {
      num: '02',
      icon: Wrench,
      title: 'Inspeksi 21 Titik & Servis Resmi',
      desc: 'Rutin diservis di bengkel resmi APM (Toyota/Honda/Mitsubishi). Tekanan ban, oli, minyak rem, dan aki dicek sebelum serah terima.',
      tag: 'Cek Fisik Lengkap',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'STNK Asli Aktif & Bebas Masalah ETLE',
      desc: 'Seluruh armada dilengkapi dokumen STNK asli yang masih berlaku, uji KIR berkala, dan bebas dari tunggakan tilang elektronik.',
      tag: 'Legalitas Terjamin',
    },
    {
      num: '04',
      icon: FileText,
      title: 'Transparansi Tarif & Refund 1x24 Jam',
      desc: 'Formulir serah terima mencatat kilometer awal, posisi BBM, dan kondisi bodi mobil. Deposit jaminan kembali utuh via transfer bank.',
      tag: 'Bebas Biaya Siluman',
    },
  ];

  return (
    <section ref={containerRef} id="mutu" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="qa-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standar Mutu & Kepastian Layanan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Komitmen Kualitas Tanpa Biaya Tersembunyi
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Bukan sekadar janji promosi. Setiap transaksi dan armada dilindungi jaminan operasional tertulis demi keamanan dan kenyamanan perjalanan Anda.
          </p>
        </div>

        {/* 4 Tangible Guarantees: 2x2 High-Contrast Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="qa-guarantee-card rounded-2xl bg-slate-800/80 border border-slate-700/80 p-7 hover:border-emerald-500/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-sm">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-xl font-extrabold text-slate-600 font-display">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Proof Banner */}
        <div className="qa-trust-strip rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-800/80 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Layanan Darurat 24 Jam (Emergency Roadside Assistance)
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Tim teknisi darurat dan derek rekanan kami siaga mendampingi Anda di wilayah Kota Pekanbaru dan seluruh jalur lintas Riau sekitarnya.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-lg border border-emerald-800/60">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Unit 100% Bebas Asap Rokok</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-lg border border-emerald-800/60">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>AC Dingin & Steril</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
