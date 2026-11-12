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
    <section id="armada" className="pt-4 pb-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Katalog Armada Mobil Siap Pakai
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
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
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <CarFront className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Unit Tidak Ditemukan</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Tidak ada mobil yang cocok dengan kombinasi filter atau kata kunci pencarian Anda. Silakan reset filter untuk melihat semua armada.
          </p>
          <button
            type="button"
            onClick={onResetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lihat Semua Mobil</span>
          </button>
        </div>
      )}

    </section>
  );
};
