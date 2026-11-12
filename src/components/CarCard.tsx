import React, { useState } from 'react';
import { Users, Briefcase, Cog, Fuel, MessageCircle, Info } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { formatCurrencyIDR } from '../utils/formatters';
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
    'suv': 'SUV Premium',
    'luxury': 'Luxury VIP',
    'minibus': 'Minibus Wisata',
  };

  const whatsAppUrl = buildWhatsAppBookingUrl({
    vehicle,
    serviceType: selectedService,
  });

  return (
    <div className="car-card-item bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-md flex flex-col overflow-hidden">
      
      {/* Vehicle Image Banner */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`Mobil ${vehicle.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
        />

        {/* Category & Year Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 backdrop-blur-sm text-slate-800 border border-slate-200 shadow-xs">
            {categoryNames[vehicle.category] || vehicle.category}
          </span>
          <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-xs">
            Tahun {vehicle.year}
          </span>
        </div>
      </div>

      {/* Body Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Engine Spec */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 leading-snug">
            {vehicle.name}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Kapasitas Mesin: {vehicle.engineCapacity}</p>
        </div>

        {/* Specification Icons Grid */}
        <div className="grid grid-cols-4 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[11px] text-slate-700 font-semibold">{vehicle.seats} Kursi</span>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[11px] text-slate-700 font-semibold">{vehicle.luggage} Koper</span>
          </div>
          <div className="flex flex-col items-center">
            <Cog className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[11px] text-slate-700 font-semibold">{vehicle.transmission === 'Automatic' ? 'Matic' : 'Manual'}</span>
          </div>
          <div className="flex flex-col items-center">
            <Fuel className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[11px] text-slate-700 font-semibold">{vehicle.fuelType}</span>
          </div>
        </div>

        {/* Dual Price Comparison Matrix */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Pilihan Tarif Sewa Harian:
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">Klik untuk memilih</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            
            {/* Opsi Lepas Kunci */}
            <button
              type="button"
              onClick={() => setSelectedService('lepas-kunci')}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                selectedService === 'lepas-kunci'
                  ? 'bg-emerald-50/80 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase">Lepas Kunci</span>
                {selectedService === 'lepas-kunci' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                {formatCurrencyIDR(vehicle.priceWithoutDriver)}
              </div>
              <span className="text-[10px] text-slate-500">/ hari</span>
            </button>

            {/* Opsi Dengan Supir */}
            <button
              type="button"
              onClick={() => setSelectedService('dengan-supir')}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                selectedService === 'dengan-supir'
                  ? 'bg-emerald-50/80 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase">+ Supir</span>
                {selectedService === 'dengan-supir' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                {formatCurrencyIDR(vehicle.priceWithDriver)}
              </div>
              <span className="text-[10px] text-slate-500">/ hari</span>
            </button>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onSelectDetail(vehicle)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors text-center"
          >
            <Info className="w-3.5 h-3.5 text-slate-600" />
            <span>Kalkulator</span>
          </button>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-white" />
            <span>Pesan ({selectedService === 'lepas-kunci' ? 'Lepas Kunci' : 'Supir'})</span>
          </a>
        </div>

      </div>

    </div>
  );
};
