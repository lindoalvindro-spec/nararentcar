import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Lock, 
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const RentalRequirements: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.security-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    },
    { scope: containerRef }
  );

  const securityPoints = [
    {
      title: 'Tanpa Penahanan Fisik Asli',
      desc: 'KTP asli atau dokumen identitas berharga Anda tetap Anda pegang sendiri secara aman.',
    },
    {
      title: 'Kerahasiaan Agenda Perjalanan',
      desc: 'Rute kunjungan pejabat, instansi dinas, dan keluarga dijamin aman serta tidak dipublikasikan tanpa izin.',
    },
    {
      title: 'Arsip Terenkripsi',
      desc: 'Berkas verifikasi hanya digunakan semata-mata untuk pencatatan manifest layanan resmi.',
    },
  ];

  return (
    <section ref={containerRef} id="keamanan" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Jaminan Keamanan & Kerahasiaan Data Standalone Luxury Box */}
        <div className="security-card bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-7 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-md">
          
          {/* Top Amber Halo Spotlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Komitmen Privasi Pelanggan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Jaminan Keamanan &amp; Kerahasiaan Data
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              Kami menghargai penuh privasi setiap pelanggan. Nara Rent Car Pekanbaru menerapkan standar ketat dalam perlindungan dokumen dan data perjalanan Anda.
            </p>
          </div>

          {/* 3 Security Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-800/90 relative z-10">
            {securityPoints.map((point, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ketentuan Sewa Jangka Pendek & Panjang */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-amber-500/40 relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-3.5 text-center sm:text-left shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Rental Mobil jangka pendek harus dengan supir tidak bisa lepas kunci, sedangkan untuk Sewa Mobil jangka panjang kami bisa menyediakan mobil lepas kunci dengan Syarat dan Kondisi berlaku.
              </p>
              <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                Jika anda memiliki pertanyaan, jangan ragu untuk menghubungi kami!
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-3 relative z-10">
            <a
              href={buildWhatsAppSupportUrl('Konsultasi & Reservasi Mobil Pekanbaru')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-sm transition-all shadow-lg shadow-red-950/60 border border-red-500/40 cursor-pointer active:scale-98"
            >
              <span>Konsultasi &amp; Reservasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </a>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin siaga 24 jam melayani pertanyaan Anda</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
