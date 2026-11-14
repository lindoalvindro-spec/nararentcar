import React from 'react';
import { Users, Briefcase, Cog, Fuel, MessageCircle, Check, Sparkles } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';
import { formatIDR } from '../utils/formatters';

interface CarCardProps {
  vehicle: Vehicle;
  onSelectDetail?: (vehicle: Vehicle) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ 
  vehicle, 
}) => {
  const whatsAppUrl = buildWhatsAppBookingUrl({
    vehicle,
  });

  return (
    <div className="car-card-item bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-amber-500/60 hover:shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative backdrop-blur-md">
      
      <div>
        {/* Studio Stage Header with Corner Ribbon Badge */}
        <div className="relative aspect-[16/10] bg-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
          
          {/* Studio Photography Full Stage */}
          <img
            src={vehicle.image}
            alt={`Foto armada ${vehicle.name} Nara Rent Car Pekanbaru`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Cinematic lighting vignette & top/bottom scrims for clear contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70 pointer-events-none" />

          {/* Top Video-Inspired Ribbon & Status Row */}
          <div className="flex items-center justify-between z-10">
            {/* Corner Ribbon "PILIHAN ARMADA" */}
            <div className="relative">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md font-display">
                <Sparkles className="w-3 h-3 text-slate-950 fill-slate-950" />
                PILIHAN ARMADA
              </span>
            </div>

            {/* Availability Badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-100 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-700/80 shadow-md backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Unit Siap Jalan</span>
            </span>
          </div>

          {/* Bottom Metabar */}
          <div className="flex items-center justify-between text-[11px] text-slate-300 font-semibold z-10 drop-shadow-md">
            <span className="bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs border border-slate-800/50">Tahun {vehicle.year}</span>
            <span className="bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs border border-slate-800/50">Mesin: {vehicle.engineCapacity}</span>
          </div>
        </div>

        {/* Vehicle Identity & Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-display text-lg font-extrabold text-white leading-snug line-clamp-1 group-hover:text-amber-400 transition-colors">
              {vehicle.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Unit terawat bengkel resmi &bull; Pekanbaru
            </p>
          </div>

          {/* Clean Unified Specs Row */}
          <div className="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-3.5 h-3.5 text-slate-400 mb-0.5" />
              <span className="text-[11px] text-slate-300 font-semibold">{vehicle.seats} Kursi</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-3.5 h-3.5 text-slate-400 mb-0.5" />
              <span className="text-[11px] text-slate-300 font-semibold">{vehicle.luggage} Koper</span>
            </div>
            <div className="flex flex-col items-center">
              <Cog className="w-3.5 h-3.5 text-slate-400 mb-0.5" />
              <span className="text-[11px] text-slate-300 font-semibold">{vehicle.transmission === 'Automatic' ? 'Matic' : 'Manual'}</span>
            </div>
            <div className="flex flex-col items-center">
              <Fuel className="w-3.5 h-3.5 text-slate-400 mb-0.5" />
              <span className="text-[11px] text-slate-300 font-semibold">{vehicle.fuelType}</span>
            </div>
          </div>

          {/* Pricing Box: Explicit All-In Rate per 12 Jam */}
          <div className="p-3.5 rounded-xl bg-slate-950/95 border border-slate-800 text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Khusus Dalam Kota 12 Jam
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                All-In
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-2xl sm:text-2xl font-black font-display text-red-500 tracking-tight">
                {formatIDR(vehicle.pricePer12Hours)}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ 12 Jam</span>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-800/90 flex flex-col gap-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                  Termasuk: Mobil + Supir + BBM
                </span>
              </div>
              <span className="text-[10px] text-slate-400 pl-4">
                Di luar: Parkir &amp; Tol
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Button & Bottom Video Pillars */}
      <div>
        <div className="px-5 pb-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-display font-extrabold text-xs sm:text-sm shadow-md shadow-red-950/50 transition-all text-center cursor-pointer border border-red-500/40 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-white" />
            <span>Booking Sekarang</span>
          </a>
        </div>

        {/* Video Bottom Feature Badges: "Terpercaya | Mobil Prima" */}
        <div className="px-5 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-around text-[11px] font-bold text-slate-300">
          <span className="inline-flex items-center gap-1 text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            Terpercaya
          </span>
          <span className="text-slate-700">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            Mobil Prima
          </span>
        </div>
      </div>

    </div>
  );
};
