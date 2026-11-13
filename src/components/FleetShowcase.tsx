import React, { useRef, useState } from 'react';
import { CarCard } from './CarCard';
import { Vehicle } from '../types/rental';
import { CarFront, RotateCcw, Sparkles, UserCheck, KeyRound } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FleetShowcaseProps {
  vehicles: Vehicle[];
  onSelectDetail: (vehicle: Vehicle) => void;
  onResetFilter: () => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  vehicles,
  onSelectDetail,
  onResetFilter,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePackage, setActivePackage] = useState<'all-in-12jam' | 'lepas-kunci'>('all-in-12jam');

  useGSAP(
    () => {
      if (vehicles.length > 0 && containerRef.current) {
        gsap.fromTo(
          '.car-card-item',
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.07,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    },
    { dependencies: [vehicles, activePackage], scope: containerRef }
  );

  return (
    <section id="armada" className="pt-4 pb-16" ref={containerRef}>
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Pilihan Unit Tahun 2022 - 2024</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            Katalog Armada Mobil Siap Jalan
          </h2>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
          Semua unit terawat rutin di bengkel resmi APM, kabin steril wangi ber-AC dingin, siap diantar langsung ke Bandara SSK II, hotel, atau alamat Anda di Pekanbaru.
        </p>
      </div>

      {/* Video-Inspired Interactive Package Tabs Switcher */}
      <div className="mb-8 p-1.5 sm:p-2 bg-slate-200/80 rounded-2xl border border-slate-300 max-w-2xl mx-auto shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => setActivePackage('all-in-12jam')}
            className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              activePackage === 'all-in-12jam'
                ? 'bg-red-800 text-white shadow-md border border-red-700'
                : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-950'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <div className="text-left">
              <span className="block leading-tight">Paket All-In 12 Jam</span>
              <span className={`text-[10px] block font-normal ${activePackage === 'all-in-12jam' ? 'text-amber-200' : 'text-slate-500'}`}>
                Mobil + Supir + BBM + Parkir
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActivePackage('lepas-kunci')}
            className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              activePackage === 'lepas-kunci'
                ? 'bg-slate-900 text-white shadow-md border border-slate-800'
                : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-950'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <div className="text-left">
              <span className="block leading-tight">Paket Lepas Kunci</span>
              <span className={`text-[10px] block font-normal ${activePackage === 'lepas-kunci' ? 'text-slate-300' : 'text-slate-500'}`}>
                Privasi Mandiri 24 Jam Penuh
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Grid or Empty State */}
      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectDetail={onSelectDetail}
              defaultPackage={activePackage}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <CarFront className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">Unit Tidak Ditemukan</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Tidak ada mobil yang cocok dengan kombinasi filter atau kata kunci pencarian Anda. Silakan reset filter untuk melihat seluruh armada Nara Rent Car Pekanbaru.
          </p>
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lihat Semua Mobil</span>
          </button>
        </div>
      )}

    </section>
  );
};
