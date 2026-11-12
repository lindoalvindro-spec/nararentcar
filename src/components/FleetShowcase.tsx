import React from 'react';
import { CarCard } from './CarCard';
import { Vehicle } from '../types/rental';
import { CarFront, RotateCcw } from 'lucide-react';

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
  return (
    <section id="armada" className="pt-6 pb-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Katalog Armada Mobil Siap Jalan
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Semua unit dalam kondisi prima, wangi, ber-AC dingin, dan rutin diservis berkala di bengkel resmi. Pilih unit idaman Anda sekarang.
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
            <CarFront className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white">Unit Tidak Ditemukan</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Tidak ada mobil yang cocok dengan kombinasi filter atau kata kunci pencarian Anda. Silakan reset filter untuk melihat semua armada.
          </p>
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lihat Semua Mobil</span>
          </button>
        </div>
      )}

    </section>
  );
};
