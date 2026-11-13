import React, { useRef } from 'react';
import { CarCard } from './CarCard';
import { Vehicle } from '../types/rental';
import { CarFront, RotateCcw } from 'lucide-react';
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
    { dependencies: [vehicles], scope: containerRef }
  );

  return (
    <section id="armada" className="pt-2 pb-16" ref={containerRef}>
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1.5">
            Armada Tahun 2022 - 2024
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            Katalog Mobil Siap Jalan
          </h2>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
          Semua unit terawat rutin di bengkel resmi APM, bersih steril, ber-AC dingin, dan siap diantar langsung ke lokasi Anda.
        </p>
      </div>

      {/* Grid or Empty State */}
      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectDetail={onSelectDetail}
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
            Tidak ada mobil yang cocok dengan kombinasi filter atau kata kunci pencarian Anda. Silakan reset filter untuk melihat semua armada.
          </p>
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lihat Semua Mobil</span>
          </button>
        </div>
      )}

    </section>
  );
};
