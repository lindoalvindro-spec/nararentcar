import React, { useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Calendar, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  onSearchSubmit?: (serviceType: 'lepas-kunci' | 'dengan-supir', location: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [serviceType, setServiceType] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');
  const [location, setLocation] = useState('Jabodetabek (Area Bebas Ongkir)');
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

      // ScrollTrigger Parallax on Car: Subtle glide as user begins scrolling down
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
    <section ref={heroRef} id="hero" className="bg-white border-b border-slate-200/80 pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
          
          {/* Left Column: Bold Editorial Pitch */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="hero-trust-tag inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Standar Unit Terawat & Bebas Biaya Tak Terduga</span>
            </div>

            <h1 className="hero-main-title font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Sewa Mobil Tanpa Ribet. <br />
              <span className="text-emerald-700">Bersih, Siap Melaju</span> Setiap Waktu.
            </h1>

            <p className="hero-subtitle text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Pilihan armada tahun muda dengan perawatan berkala resmi. Tersedia paket lepas kunci untuk kebebasan agenda Anda, atau supir profesional untuk perjalanan dinas bebas lelah.
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Unit Tahun 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Garansi Penggantian Mobil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Bebas Bau Rokok</span>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Showcase Cutout */}
          <div ref={carWrapperRef} className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Studio Stage Light & Ground Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200/50 rounded-3xl -z-10" />
              
              <div className="p-6 text-center">
                <div className="relative py-4 overflow-visible">
                  <img
                    src="/images/cars/zenix.png"
                    alt="Toyota Innova Zenix Studio Showcase"
                    className="hero-car-image w-full max-h-56 object-contain drop-shadow-2xl mx-auto transform hover:scale-102 transition-transform duration-300"
                  />
                  {/* Studio floor shadow that animates in sync */}
                  <div className="hero-car-shadow w-4/5 h-3 bg-slate-400/25 blur-md rounded-full mx-auto -mt-2" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-left">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Armada Unggulan</span>
                    <span className="font-display font-extrabold text-slate-900 text-sm">Toyota Innova Zenix 2.0 V</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 block">Mulai Dari</span>
                    <span className="font-display font-extrabold text-emerald-700 text-sm">Rp 750.000 <span className="text-[10px] text-slate-500 font-normal">/hari</span></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Horizontal Booking Bar */}
        <div className="hero-booking-bar bg-slate-900 rounded-2xl shadow-xl p-4 sm:p-5 text-white">
          
          {/* Top Toggle: Service Type Tabs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setServiceType('lepas-kunci')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                serviceType === 'lepas-kunci'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Lepas Kunci (Self-Drive)
            </button>
            <button
              type="button"
              onClick={() => setServiceType('dengan-supir')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                serviceType === 'dengan-supir'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Dengan Supir (With Driver)
            </button>
          </div>

          {/* Form Bar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Lokasi Jemput */}
            <div className="md:col-span-5 bg-slate-800/90 rounded-xl p-3 border border-slate-700/80">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lokasi Serah Terima / Penjemputan</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="Jabodetabek (Area Bebas Ongkir)" className="bg-slate-900 text-white">Jabodetabek (Antar ke Rumah / Kantor)</option>
                <option value="Bandara Soekarno-Hatta (CGK) Terminal 1/2/3" className="bg-slate-900 text-white">Bandara Soekarno-Hatta (CGK) Terminal 1/2/3</option>
                <option value="Bandara Halim Perdanakusuma (HLP)" className="bg-slate-900 text-white">Bandara Halim Perdanakusuma (HLP)</option>
                <option value="Stasiun Gambir / Pasar Senen" className="bg-slate-900 text-white">Stasiun Gambir / Stasiun Senen</option>
                <option value="Perjalanan Luar Kota / Antar-Kota" className="bg-slate-900 text-white">Drop-Off Luar Kota (Bandung, Semarang, dll.)</option>
              </select>
            </div>

            {/* Tanggal Sewa */}
            <div className="md:col-span-4 bg-slate-800/90 rounded-xl p-3 border border-slate-700/80">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tanggal Mulai Sewa</span>
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
                className="w-full h-full min-h-[58px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>Cari Mobil</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
