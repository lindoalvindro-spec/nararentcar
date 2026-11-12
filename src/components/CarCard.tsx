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
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex flex-col overflow-hidden">
      
      {/* Vehicle Image Banner */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`Mobil ${vehicle.name}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Category & Year Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-800 border border-slate-200 shadow-sm">
            {categoryNames[vehicle.category] || vehicle.category}
          </span>
          <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-sm">
            Tahun {vehicle.year}
          </span>
        </div>
      </div>

      {/* Body Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Engine Spec */}
        <div>
          <h3 className="text-lg font-bold text-slate-900">
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

        {/* Service Type Switcher */}
        <div>
          <span className="text-xs text-slate-500 font-medium block mb-1.5">Pilihan Opsi Sewa:</span>
          <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setSelectedService('lepas-kunci')}
              className={`flex-1 py-1.5 rounded-lg font-semibold transition-colors ${
                selectedService === 'lepas-kunci'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lepas Kunci
            </button>
            <button
              type="button"
              onClick={() => setSelectedService('dengan-supir')}
              className={`flex-1 py-1.5 rounded-lg font-semibold transition-colors ${
                selectedService === 'dengan-supir'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dengan Supir
            </button>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] text-slate-500 block">
              Tarif ({selectedService === 'lepas-kunci' ? 'Lepas Kunci' : 'Plus Supir'})
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-900">
                {formatCurrencyIDR(currentPrice)}
              </span>
              <span className="text-xs text-slate-500">/ hari</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectDetail(vehicle)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 p-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Kalkulator</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelectDetail(vehicle)}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors text-center"
          >
            Rincian Unit
          </button>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-white" />
            <span>Pesan (WA)</span>
          </a>
        </div>

      </div>

    </div>
  );
};
