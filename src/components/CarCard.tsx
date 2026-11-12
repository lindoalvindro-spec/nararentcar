import React, { useState } from 'react';
import { Users, Briefcase, Cog, Fuel, MessageCircle, Info, Star } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { formatCurrencyIDR } from '../utils/formatters';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface CarCardProps {
  vehicle: Vehicle;
  onSelectDetail: (vehicle: Vehicle) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle, onSelectDetail }) => {
  const [selectedService, setSelectedService] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');

  const currentPrice = selectedService === 'lepas-kunci' ? vehicle.priceWithoutDriver : vehicle.priceWithDriver;

  const categoryNames: Record<string, string> = {
    'city-car': 'City Car',
    'mpv': 'Family MPV',
    'suv': 'SUV Premium',
    'luxury': 'Luxury VIP',
    'minibus': 'Minibus Wisata',
  };

  const whatsAppUrl = buildWhatsAppBookingUrl({
    vehicle,
    serviceType: selectedService,
  });

  return (
    <div className="group rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col overflow-hidden">
      
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-brand-300 border border-brand-500/30">
            {categoryNames[vehicle.category] || vehicle.category}
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-amber-400 border border-slate-700/80">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{vehicle.rating}</span>
            <span className="text-slate-400 font-normal">({vehicle.reviewCount})</span>
          </div>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs text-slate-300">Tahun {vehicle.year} • {vehicle.engineCapacity}</p>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Specs Badges */}
        <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-4 h-4 text-brand-400 mb-0.5" />
            <span className="text-[11px] text-slate-300 font-medium">{vehicle.seats} Kursi</span>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase className="w-4 h-4 text-brand-400 mb-0.5" />
            <span className="text-[11px] text-slate-300 font-medium">{vehicle.luggage} Koper</span>
          </div>
          <div className="flex flex-col items-center">
            <Cog className="w-4 h-4 text-brand-400 mb-0.5" />
            <span className="text-[11px] text-slate-300 font-medium">{vehicle.transmission === 'Automatic' ? 'Matic' : 'Manual'}</span>
          </div>
          <div className="flex flex-col items-center">
            <Fuel className="w-4 h-4 text-brand-400 mb-0.5" />
            <span className="text-[11px] text-slate-300 font-medium">{vehicle.fuelType}</span>
          </div>
        </div>

        {/* Service Type Switcher */}
        <div>
          <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => setSelectedService('lepas-kunci')}
              className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                selectedService === 'lepas-kunci'
                  ? 'bg-brand-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Lepas Kunci
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('dengan-supir')}
              className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                selectedService === 'dengan-supir'
                  ? 'bg-brand-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              + Supir
            </button>
          </div>
        </div>

        {/* Pricing display */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">
              Tarif ({selectedService === 'lepas-kunci' ? 'Lepas Kunci' : 'Plus Supir'})
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-white">
                {formatCurrencyIDR(currentPrice)}
              </span>
              <span className="text-xs text-slate-400">/ hari</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectDetail(vehicle)}
            className="p-2 rounded-xl text-slate-400 hover:text-brand-400 hover:bg-slate-800/80 transition-colors"
            title="Lihat Detail & Kalkulator"
            aria-label="Lihat Detail Unit"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelectDetail(vehicle)}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700/60 transition-colors text-center"
          >
            Detail & Hitung
          </button>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-md shadow-brand-500/20 transition-all active:scale-95 text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
            <span>Pesan (WA)</span>
          </a>
        </div>

      </div>

    </div>
  );
};
