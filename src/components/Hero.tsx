import React, { useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  onSearchSubmit?: (serviceType: 'lepas-kunci' | 'dengan-supir', location: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [serviceType, setServiceType] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');
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
          '.hero-car-image',
          { opacity: 0, x: 90, scale: 0.94 },
          { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: 'power2.out' },
          '-=0.35'
        )
        .fromTo(
          '.hero-car-shadow',
          { opacity: 0, scaleX: 0.6 },
          { opacity: 1, scaleX: 1, duration: 0.65, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo('.hero-booking-bar', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');

      // ScrollTrigger Parallax on Car
      if (carWrapperRef.current && heroRef.current) {
        gsap.to('.hero-car-image', {
          x: -28,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
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
    <section ref={heroRef} id="hero" className="bg-slate-950 text-white border-b border-slate-800 pt-10 pb-14 lg:pt-16 lg:pb-20 overflow-hidden relative">
      {/* Subtle Background Lighting Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
          
          {/* Left Column: Bold Editorial Pitch */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="hero-trust-tag inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Rental Mobil Resmi Pekanbaru &bull; Siaga Antar Jemput SSK II</span>
            </div>

            <h1 className="hero-main-title font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
              Rental Mobil Terpercaya <br />
              di <span className="text-amber-400">Pekanbaru & Riau.</span> <br />
              <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold">Prima, Wangi, Siap Melaju.</span>
            </h1>

            <p className="hero-subtitle text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Solusi mobilitas andalan instansi dinas, tamu BUMN, dan keluarga di Pekanbaru. Pilihan armada tahun muda 2022-2024 dengan perawatan bengkel resmi, supir profesional yang santun, serta gratis antar jemput di Bandara Sultan Syarif Kasim II.
            </p>

            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 pt-1 text-xs text-slate-300 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Unit Tahun Muda (2022-2024)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Gratis Antar Jemput Bandara SSK II</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Driver Berpengalaman & Hapal Rute</span>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Showcase Cutout */}
          <div ref={carWrapperRef} className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Studio Stage Light & Ground Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl -z-10 shadow-2xl" />
              
              <div className="p-6 text-center">
                {/* Stage Header Badge */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-700/80 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Unit Rekomendasi Pekanbaru</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Siap Jalan</span>
                </div>

                <div className="relative py-4 overflow-visible">
                  <img
                    src="/images/cars/zenix.png"
                    alt="Toyota Innova Zenix Showcase Nara Rent Car"
                    fetchPriority="high"
                    width={600}
                    height={338}
                    className="hero-car-image w-full max-h-56 object-contain drop-shadow-2xl mx-auto transform hover:scale-102 transition-transform duration-300"
                  />
                  {/* Studio floor shadow that animates in sync */}
                  <div className="hero-car-shadow w-4/5 h-3 bg-black/60 blur-md rounded-full mx-auto -mt-2" />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-700/80 text-left">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Armada VIP & Dinas</span>
                    <span className="font-display font-extrabold text-white text-base">Toyota Innova Zenix 2.0 V</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Kondisi Kabin</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-600/50">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Steril & Wangi</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Horizontal Booking Bar */}
        <div className="hero-booking-bar bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-5 text-white border border-slate-700/80">
          
          {/* Top Toggle: Service Type Tabs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setServiceType('lepas-kunci')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                serviceType === 'lepas-kunci'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Lepas Kunci (Privasi 24 Jam)
            </button>
            <button
              type="button"
              onClick={() => setServiceType('dengan-supir')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                serviceType === 'dengan-supir'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Paket All-In 12 Jam (Dengan Supir + BBM)
            </button>
          </div>

          {/* Form Bar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Lokasi Jemput Pekanbaru */}
            <div className="md:col-span-5 bg-slate-800/90 rounded-xl p-3 border border-slate-700">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Titik Penjemputan / Serah Terima di Riau</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="Bandara Internasional Sultan Syarif Kasim II (SSK II)" className="bg-slate-900 text-white">
                  Bandara Sultan Syarif Kasim II (SSK II) Pekanbaru (Gratis Antar)
                </option>
                <option value="Pusat Kota / Area Hotel Jl. Jend. Sudirman" className="bg-slate-900 text-white">
                  Hotel Area Jl. Jend. Sudirman (Pangeran, Premiere, Aryaduta, dll.)
                </option>
                <option value="Area Komersial Jl. Riau / Mall Ciputra Seraya" className="bg-slate-900 text-white">
                  Kawasan Bisnis Jl. Riau / Mall Ciputra / Novotel
                </option>
                <option value="Antar ke Rumah / Kantor Dalam Kota Pekanbaru" className="bg-slate-900 text-white">
                  Antar Langsung ke Alamat Rumah / Kantor di Pekanbaru
                </option>
                <option value="Drop-Off Perjalanan Luar Kota (Siak, Dumai, Duri, Kampar)" className="bg-slate-900 text-white">
                  Drop Luar Kota Riau (Siak, Dumai, Duri, Bangkinang)
                </option>
              </select>
            </div>

            {/* Tanggal Sewa */}
            <div className="md:col-span-4 bg-slate-800/90 rounded-xl p-3 border border-slate-700">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Tanggal Rencana Sewa</span>
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
                className="w-full h-full min-h-[58px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-display font-bold text-sm transition-all shadow-lg shadow-red-950/50 active:scale-98 cursor-pointer border border-red-500/40"
              >
                <span>Lihat Katalog Armada</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
