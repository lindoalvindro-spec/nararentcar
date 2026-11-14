import React, { useRef } from 'react';
import { CarCard } from './CarCard';
import { Vehicle } from '../types/rental';
import { CarFront, RotateCcw, Sparkles, UserCheck } from 'lucide-react';
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
    <section id="armada" className="pt-4 pb-16" ref={containerRef}>
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pilihan Unit Armada Prima</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Katalog Armada Mobil Siap Jalan
          </h2>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
          Semua unit terawat rutin di bengkel resmi, kabin steril wangi ber-AC dingin, siap diantar langsung ke Bandara SSK II, hotel, atau alamat Anda di Pekanbaru.
        </p>
      </div>

      {/* Package Clarity Banner (Replaces Lepas Kunci Tabs) */}
      <div className="mb-8 p-3.5 sm:p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-amber-500/30 max-w-3xl mx-auto shadow-lg shadow-black/40 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-white font-display block">
              Paket All-In Khusus Dalam Kota 12 Jam
            </span>
            <span className="text-xs text-amber-400/90 font-medium">
              Termasuk: Mobil + Supir Berpengalaman + BBM &bull; Di luar: Parkir &amp; Tol
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-700 text-[11px] font-bold text-slate-300 flex-shrink-0">
          <span>100% Layanan Dengan Supir</span>
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
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-12 text-center max-w-lg mx-auto space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500 mx-auto">
            <CarFront className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">Unit Tidak Ditemukan</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Tidak ada mobil yang cocok dengan kombinasi filter atau kata kunci pencarian Anda. Silakan reset filter untuk melihat seluruh armada Nara Rent Car Pekanbaru.
          </p>
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer border border-red-500/40"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lihat Semua Mobil</span>
          </button>
        </div>
      )}

    </section>
  );
};
