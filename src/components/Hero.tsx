import React, { useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Calendar, Sparkles, UserCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hero: React.FC = () => {
  const [location, setLocation] = useState('Bandara Internasional Sultan Syarif Kasim II (SSK II)');
  const [rentalDate, setRentalDate] = useState(new Date().toISOString().split('T')[0]);

  const heroRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance Timeline: Precision Automotive Entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-trust-tag', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
        .fromTo('.hero-main-title', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.2')
        .fromTo('.hero-subtitle', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.3')
        .fromTo(
          '.hero-car-stage-box',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-car-image',
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.45'
        )
        .fromTo('.hero-booking-bar', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
    },
    { scope: heroRef }
  );

  const handleSearchClick = () => {
    const armadaSection = document.getElementById('armada');
    if (armadaSection) {
      armadaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="relative text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-visible bg-slate-950 border-b border-slate-800/80"
      style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% 0%, #0f172a 0%, #090d16 55%, #020617 100%)'
      }}
    >
      {/* Subtle Technical Dot Grid Texture for Depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] -z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.8) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Atmospheric Showroom Spotlight Halos */}
      <div className="absolute top-8 left-10 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-12 right-12 w-[520px] h-[520px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-16 left-1/3 w-[360px] h-[360px] bg-amber-400/8 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-16">
          
          {/* Left Column: Bold Editorial Pitch */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="hero-trust-tag inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-[0_0_15px_rgba(245,158,11,0.15)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Rental Mobil Resmi Pekanbaru &bull; Siaga Antar Jemput Bandara SSK II</span>
            </div>

            <h1 className="hero-main-title font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
              Rental Mobil Terpercaya <br />
              di <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Pekanbaru & Riau.</span> <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">Prima, Wangi, Siap Melaju.</span>
            </h1>

            <p className="hero-subtitle text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Solusi mobilitas andalan instansi dinas, tamu BUMN, dan keluarga di Pekanbaru. Pilihan armada prima dengan perawatan bengkel resmi serta supir profesional yang santun.
            </p>

          </div>

          {/* Right Column: Studio Showcase Cutout with Illuminated Plinth */}
          <div ref={carWrapperRef} className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Studio Stage Light & Glassmorphism Box */}
              <div className="hero-car-stage-box rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/95 border border-amber-500/30 p-6 text-center backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(245,158,11,0.12)] relative overflow-hidden">
                
                {/* Stage Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Stage Header Badge */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-700/80 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Unit Rekomendasi Pekanbaru</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Siap Jalan</span>
                </div>

                {/* Studio Car with Clean Symmetrical Ground Shadow */}
                <div className="relative py-4 flex flex-col items-center justify-center overflow-visible">
                  <img
                    src="/images/cars/zenix.png"
                    alt="Toyota Innova Zenix Showcase Nara Rent Car"
                    fetchPriority="high"
                    width={600}
                    height={338}
                    className="hero-car-image w-full max-h-56 sm:max-h-60 object-contain drop-shadow-2xl mx-auto relative z-10 select-none"
                  />
                  
                  {/* Subtle Showroom Ambient Floor Glow */}
                  <div className="absolute -bottom-1 inset-x-0 w-3/4 h-8 bg-amber-400/20 blur-xl rounded-full mx-auto pointer-events-none -z-0" />
                  
                  {/* Natural Ground Contact Shadow under tires */}
                  <div className="w-[82%] h-4 bg-gradient-to-r from-transparent via-black/80 to-transparent blur-xs rounded-full mx-auto -mt-2.5 relative z-0 pointer-events-none" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-slate-700/80 text-left gap-2 sm:gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Armada VIP & Dinas</span>
                    <span className="font-display font-extrabold text-white text-sm sm:text-base">Toyota Innova Zenix 2.0 V</span>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Kondisi Kabin</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-500/50 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Steril & Wangi</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Floating Layered Booking Bar (100% All-In Driver Package) */}
        <div className="hero-booking-bar bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 text-white border border-slate-700/90 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(245,158,11,0.08)] -mb-8 sm:-mb-12 relative z-20">
          
          {/* Top Banner: Single High-Value Package Mode */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Paket All-In 12 Jam (Mobil + Supir Profesional + BBM)</span>
            </div>
            <span className="text-xs text-slate-400">
              *Tarif berlaku khusus rute dalam kota Pekanbaru, di luar biaya parkir &amp; tol
            </span>
          </div>

          {/* Form Bar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Lokasi Jemput Pekanbaru & Sekitarnya */}
            <div className="md:col-span-5 bg-slate-950/90 rounded-xl p-3 border border-slate-700/80">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Titik Penjemputan di Pekanbaru / Kampar</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="Bandara Internasional Sultan Syarif Kasim II (SSK II)" className="bg-slate-900 text-white">
                  Bandara SSK II Pekanbaru
                </option>
                <option value="Pandau Jaya / Siak Hulu (Area Kantor Nara)" className="bg-slate-900 text-white">
                  Pandau Jaya &amp; Sekitarnya (Kec. Siak Hulu / Kampar)
                </option>
                <option value="Pusat Kota / Area Hotel Jl. Jend. Sudirman" className="bg-slate-900 text-white">
                  Hotel Area Jl. Jend. Sudirman (Pangeran, Premiere, Aryaduta, dll.)
                </option>
                <option value="Area Komersial Jl. Riau / Mall Ciputra Seraya" className="bg-slate-900 text-white">
                  Kawasan Bisnis Jl. Riau / Mall Ciputra / Novotel
                </option>
                <option value="Antar ke Rumah / Kantor Dalam Kota Pekanbaru" className="bg-slate-900 text-white">
                  Alamat Rumah / Kantor Dalam Kota Pekanbaru
                </option>
                <option value="Drop-Off Perjalanan Luar Kota (Siak, Dumai, Duri, Kampar)" className="bg-slate-900 text-white">
                  Rute Perjalanan Lintas Riau (Siak, Dumai, Duri, Bangkinang)
                </option>
              </select>
            </div>

            {/* Tanggal Sewa */}
            <div className="md:col-span-4 bg-slate-950/90 rounded-xl p-3 border border-slate-700/80">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Tanggal Rencana Pemakaian</span>
              </label>
              <input
                type="date"
                value={rentalDate}
                onChange={(e) => setRentalDate(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
              />
            </div>

            {/* Tombol Cari */}
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={handleSearchClick}
                className="w-full h-full min-h-[58px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-display font-bold text-sm transition-all shadow-lg shadow-red-950/60 active:scale-98 cursor-pointer border border-red-500/40"
              >
                <span>Lihat Katalog &amp; Harga</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
