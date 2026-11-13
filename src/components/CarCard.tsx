import React, { useState } from 'react';
import { Users, Briefcase, Cog, Fuel, MessageCircle, Info, Check, Sparkles } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface CarCardProps {
  vehicle: Vehicle;
  onSelectDetail: (vehicle: Vehicle) => void;
  defaultPackage?: 'all-in-12jam' | 'lepas-kunci';
}

export const CarCard: React.FC<CarCardProps> = ({ 
  vehicle, 
  onSelectDetail,
  defaultPackage = 'all-in-12jam'
}) => {
  const [selectedService, setSelectedService] = useState<'lepas-kunci' | 'all-in-12jam'>(defaultPackage);

  // Sync state if defaultPackage changes from parent tab
  React.useEffect(() => {
    setSelectedService(defaultPackage);
  }, [defaultPackage]);

  const whatsAppUrl = buildWhatsAppBookingUrl({
    vehicle,
    serviceType: selectedService,
  });

  return (
    <div className="car-card-item bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative">
      
      <div>
        {/* Studio Stage Header with Corner Ribbon Badge */}
        <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100/95 via-slate-50 to-slate-200/60 p-4 flex flex-col justify-between overflow-hidden">
          
          {/* Top Video-Inspired Ribbon & Status Row */}
          <div className="flex items-center justify-between z-10">
            {/* Corner Ribbon "PILIHAN ARMADA" */}
            <div className="relative">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                <Sparkles className="w-3 h-3 text-emerald-200" />
                PILIHAN ARMADA
              </span>
            </div>

            {/* Availability Badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-800 bg-white/95 px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Unit Siap Jalan</span>
            </span>
          </div>

          {/* Clean Studio Cutout Image */}
          <div className="relative my-auto flex items-center justify-center py-2">
            <img
              src={vehicle.image}
              alt={`Foto armada ${vehicle.name} Nara Rent Car Pekanbaru`}
              loading="lazy"
              width={400}
              height={240}
              className="w-full max-h-32 sm:max-h-36 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
            {/* Ground shadow beneath car */}
            <div className="absolute -bottom-1 w-4/5 h-3 bg-slate-400/25 blur-xs rounded-full -z-10" />
          </div>

          {/* Bottom Metabar */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold z-10">
            <span>Tahun {vehicle.year}</span>
            <span>Mesin: {vehicle.engineCapacity}</span>
          </div>
        </div>

        {/* Vehicle Identity & Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-display text-lg font-extrabold text-slate-950 leading-snug line-clamp-1">
              {vehicle.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Unit terawat bengkel resmi &bull; Pekanbaru
            </p>
          </div>

          {/* Clean Unified Specs Row */}
          <div className="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-3.5 h-3.5 text-slate-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.seats} Kursi</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-3.5 h-3.5 text-slate-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.luggage} Koper</span>
            </div>
            <div className="flex flex-col items-center">
              <Cog className="w-3.5 h-3.5 text-slate-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.transmission === 'Automatic' ? 'Matic' : 'Manual'}</span>
            </div>
            <div className="flex flex-col items-center">
              <Fuel className="w-3.5 h-3.5 text-slate-700 mb-0.5" />
              <span className="text-[11px] text-slate-700 font-semibold">{vehicle.fuelType}</span>
            </div>
          </div>

          {/* Video-Style Package Highlight Pill & Toggle */}
          <div className="pt-1">
            <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedService('all-in-12jam')}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer text-center ${
                  selectedService === 'all-in-12jam'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All-In 12 Jam
              </button>
              <button
                type="button"
                onClick={() => setSelectedService('lepas-kunci')}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer text-center ${
                  selectedService === 'lepas-kunci'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lepas Kunci
              </button>
            </div>

            {/* Inclusions summary based on selection */}
            <div className="mt-2 px-2.5 py-1.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-center justify-between">
              <span className="font-semibold">
                {selectedService === 'all-in-12jam' ? 'Mobil + Driver + BBM + Parkir' : 'Privasi Mandiri 24 Jam Penuh'}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100/90 px-1.5 py-0.5 rounded">
                {selectedService === 'all-in-12jam' ? '12 Jam' : '24 Jam'}
              </span>
            </div>
          </div>

          {/* Pricing Guidance Box: "Tanya Tarif Terbaik (Nego via WA)" */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Penawaran Tarif
                </span>
                <span className="text-sm font-extrabold text-slate-900 font-display">
                  Tanya Tarif Terbaik
                </span>
              </div>
              <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                Nego via WA
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Buttons & Bottom Video Pillars */}
      <div>
        <div className="px-5 pb-3 grid grid-cols-2 gap-2">
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
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-display font-extrabold text-xs shadow-md shadow-red-900/30 transition-all text-center cursor-pointer border border-red-600/40"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-white" />
            <span>Booking Sekarang</span>
          </a>
        </div>

        {/* Video Bottom Feature Badges: "Terpercaya | Mobil Prima" */}
        <div className="px-5 py-2.5 bg-slate-100/80 border-t border-slate-200 flex items-center justify-around text-[11px] font-bold text-slate-700">
          <span className="inline-flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            Terpercaya
          </span>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            Mobil Prima
          </span>
        </div>
      </div>

    </div>
  );
};
