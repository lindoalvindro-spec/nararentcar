import React, { useState } from 'react';
import { Users, Briefcase, Cog, Fuel, MessageCircle, Info } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface CarCardProps {
  vehicle: Vehicle;
  onSelectDetail: (vehicle: Vehicle) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle, onSelectDetail }) => {
  const [selectedService, setSelectedService] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');

  const categoryNames: Record<string, string> = {
    'city-car': 'City Car',
    'mpv': 'Family MPV',
    'suv': 'SUV Tangguh',
    'luxury': 'Luxury VIP',
    'minibus': 'Minibus Wisata',
  };

  const whatsAppUrl = buildWhatsAppBookingUrl({
    vehicle,
    serviceType: selectedService,
  });

  return (
    <div className="car-card-item bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden group">
      
      {/* Studio Showcase Header */}
      <div>
        <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100/90 to-slate-200/60 p-4 flex flex-col justify-between overflow-hidden">
          
          {/* Top Info Badges */}
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white text-slate-800 border border-slate-200 shadow-xs">
              {categoryNames[vehicle.category] || vehicle.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-white/90 px-2 py-0.5 rounded border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Unit Siap</span>
            </span>
          </div>

          {/* Clean Studio Cutout Image */}
          <div className="relative py-2 my-auto">
            <img
              src={vehicle.image}
              alt={`Foto studio mobil ${vehicle.name}`}
              loading="lazy"
              width={400}
              height={250}
              className="w-full max-h-36 object-contain mx-auto transform group-hover:scale-104 transition-transform duration-300 drop-shadow-md"
            />
            {/* Ground shadow beneath car */}
            <div className="w-3/4 h-2 bg-slate-400/20 blur-xs rounded-full mx-auto -mt-1" />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span>Tahun {vehicle.year}</span>
            <span>Mesin: {vehicle.engineCapacity}</span>
          </div>
        </div>

        {/* Vehicle Identity */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-950 leading-snug">
              {vehicle.name}
            </h3>
          </div>

          {/* Essential Specs Grid */}
          <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-3.5 h-3.5 text-emerald-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.seats} Kursi</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-3.5 h-3.5 text-emerald-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.luggage} Koper</span>
            </div>
            <div className="flex flex-col items-center">
              <Cog className="w-3.5 h-3.5 text-emerald-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.transmission === 'Automatic' ? 'Matic' : 'Manual'}</span>
            </div>
            <div className="flex flex-col items-center">
              <Fuel className="w-3.5 h-3.5 text-emerald-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.fuelType}</span>
            </div>
          </div>

          {/* Service Option Selector (No Price) */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Pilihan Skema Sewa:
            </span>
            <div className="grid grid-cols-2 gap-2">
              
              {/* Opsi Lepas Kunci */}
              <button
                type="button"
                onClick={() => setSelectedService('lepas-kunci')}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedService === 'lepas-kunci'
                    ? 'bg-emerald-50/80 border-emerald-600 ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-slate-900 font-display">Lepas Kunci</span>
                  {selectedService === 'lepas-kunci' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span className="text-[10px] text-slate-500 block">Privasi Mandiri 24 Jam</span>
              </button>

              {/* Opsi Dengan Supir */}
              <button
                type="button"
                onClick={() => setSelectedService('dengan-supir')}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedService === 'dengan-supir'
                    ? 'bg-emerald-50/80 border-emerald-600 ring-1 ring-emerald-600 shadow-xs'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-slate-900 font-display">+ Supir</span>
                  {selectedService === 'dengan-supir' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span className="text-[10px] text-slate-500 block">Bebas Lelah & Macet</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onSelectDetail(vehicle)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors text-center cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-slate-600" />
          <span>Detail Mobil</span>
        </button>
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs shadow-xs transition-colors text-center cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white stroke-white" />
          <span>Tanya Tarif via WA</span>
        </a>
      </div>

    </div>
  );
};
