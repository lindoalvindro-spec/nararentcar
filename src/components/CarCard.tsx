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
    <div className="car-card-item bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      <div>
        {/* Studio Stage Header with Ground Shadow & Badges */}
        <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100/90 to-slate-200/50 p-4 flex flex-col justify-between overflow-hidden">
          
          {/* Top Info Badges */}
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white text-slate-800 border border-slate-200 shadow-xs">
              {categoryNames[vehicle.category] || vehicle.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-white/95 px-2.5 py-0.5 rounded-md border border-emerald-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Unit Siap Jalan</span>
            </span>
          </div>

          {/* Clean Studio Cutout Image */}
          <div className="relative my-auto flex items-center justify-center py-2">
            <img
              src={vehicle.image}
              alt={`Foto studio mobil ${vehicle.name}`}
              loading="lazy"
              width={400}
              height={240}
              className="w-full max-h-32 sm:max-h-36 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
            {/* Ground shadow beneath car */}
            <div className="absolute -bottom-1 w-4/5 h-2.5 bg-slate-400/25 blur-xs rounded-full -z-10" />
          </div>

          {/* Bottom Metabar */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium z-10">
            <span>Tahun {vehicle.year}</span>
            <span>Mesin: {vehicle.engineCapacity}</span>
          </div>
        </div>

        {/* Vehicle Identity & Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-950 leading-snug line-clamp-1">
              {vehicle.name}
            </h3>
          </div>

          {/* Clean Unified Specs Row (No Nested Box Clutter) */}
          <div className="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
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

          {/* Slim Segmented Selector for Service Type */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Skema Sewa:
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">
                {selectedService === 'lepas-kunci' ? '24 Jam Penuh' : 'Bebas Lelah & Macet'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedService('lepas-kunci')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedService === 'lepas-kunci'
                    ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lepas Kunci
              </button>
              <button
                type="button"
                onClick={() => setSelectedService('dengan-supir')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedService === 'dengan-supir'
                    ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dengan Supir
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
