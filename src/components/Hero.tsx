import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-medium shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              <span>Armada Terbaru 2024 • Siap Pakai & Steril</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Sewa Mobil Mudah, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-teal-300 to-emerald-400">
                Nyaman & Terpercaya
              </span>{' '}
              untuk Setiap Momen
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Jelajahi kota dan luar kota tanpa rasa cemas. Tersedia pilihan <strong className="text-white">Lepas Kunci</strong> untuk kebebasan berkendara atau layanan <strong className="text-white">Dengan Supir Profesional</strong> untuk kenyamanan maksimal Anda.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Antar-Jemput Bandara</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Bantuan Darurat 24 Jam</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#armada"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-950 font-bold text-base transition-all shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-98"
              >
                <span>Pilih Armada Mobil</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a
                href={buildWhatsAppSupportUrl('Tanya Ketersediaan Mobil')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 transition-all hover:border-slate-600 active:scale-98"
              >
                <span>Konsultasi Cepat (WA)</span>
              </a>
            </div>

            {/* Customer Trust Proof */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80" alt="User" />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-slate-950 bg-slate-800 text-brand-400 font-bold text-xs">
                  +10k
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-400">Dipercaya 10.000+ pelanggan di Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container */}
              <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                
                {/* Floating Highlight Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-brand-500 text-slate-950 text-xs font-bold tracking-wide shadow-lg">
                  HOT DEAL
                </div>

                {/* Hero Car Image with Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-800/80 mb-5 border border-slate-700/60">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80"
                    alt="Toyota Innova Zenix"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      Family MPV Premium
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Toyota Innova Zenix 2024</h3>
                  </div>
                </div>

                {/* Feature highlight grid */}
                <div className="grid grid-cols-3 gap-3 mb-5 text-center">
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                    <Clock className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400">Respon CS</p>
                    <p className="text-xs font-bold text-white">&lt; 3 Menit</p>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                    <ShieldCheck className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400">Kondisi</p>
                    <p className="text-xs font-bold text-white">100% Prima</p>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                    <Award className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400">Garansi</p>
                    <p className="text-xs font-bold text-white">Ganti Unit</p>
                  </div>
                </div>

                {/* Pricing preview */}
                <div className="p-4 rounded-2xl bg-slate-850/80 border border-slate-750 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Tarif Mulai Dari</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-brand-400">Rp 350.000</span>
                      <span className="text-xs text-slate-400">/ hari</span>
                    </div>
                  </div>
                  <a
                    href="#armada"
                    className="px-4 py-2 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/30 text-xs font-bold transition-colors"
                  >
                    Lihat Semua
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
